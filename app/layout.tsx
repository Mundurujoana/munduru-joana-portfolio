import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import WhatsAppButton from "@/components/WhatsAppButton";
import TawkChat from "@/components/TawkChat";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: `${profile.name} – ${profile.role}`,
  description: profile.bio,
  openGraph: { title: `${profile.name} – ${profile.role}`, description: profile.bio, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} overflow-x-hidden bg-[#fffefa] font-sans text-[#24251f] antialiased`}>
        {children}
        <WhatsAppButton />
        <TawkChat />
      </body>
    </html>
  );
}
