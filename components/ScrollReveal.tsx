"use client";

import { useCallback, useEffect, useState, type RefCallback } from "react";

export function useScrollReveal<T extends HTMLElement>(): RefCallback<T> {
  const [element, setElement] = useState<T | null>(null);
  const ref = useCallback<RefCallback<T>>((node) => setElement(node), []);

  useEffect(() => {
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("is-pending");
          element.classList.add("is-visible");
          observer.unobserve(element);
        } else if (!element.classList.contains("is-visible")) {
          element.classList.add("is-pending");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    const bounds = element.getBoundingClientRect();
    if (bounds.top > window.innerHeight || bounds.bottom < 0) {
      element.classList.add("is-pending");
    }

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return ref;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
