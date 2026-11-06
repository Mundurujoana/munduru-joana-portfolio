const message = "Hello, I visited your website and would like to get in touch.";
const href = `https://wa.me/256782611801?text=${encodeURIComponent(message)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="fixed bottom-24 right-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173f2b] sm:right-6"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.04 3C8.87 3 3.04 8.82 3.04 15.98c0 2.3.61 4.54 1.77 6.51L3 29l6.69-1.75a13.04 13.04 0 0 0 6.35 1.62h.01c7.16 0 12.99-5.82 13-12.98A12.91 12.91 0 0 0 25.24 6.7 12.9 12.9 0 0 0 16.04 3Zm0 23.65h-.01c-1.96 0-3.88-.53-5.55-1.53l-.4-.24-3.97 1.04 1.06-3.87-.26-.4a10.77 10.77 0 0 1-1.66-5.67c0-5.94 4.84-10.77 10.8-10.77 2.88 0 5.59 1.12 7.63 3.16a10.7 10.7 0 0 1 3.16 7.63c0 5.95-4.85 10.78-10.8 10.78Zm5.92-8.07c-.32-.16-1.9-.94-2.19-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.59-.96-.85-1.6-1.9-1.79-2.22-.19-.31-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.39-.26-.62-.52-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.67s1.16 3.1 1.32 3.31c.16.21 2.27 3.46 5.5 4.85.77.33 1.37.53 1.84.68.77.25 1.47.21 2.03.13.62-.1 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" />
      </svg>
    </a>
  );
}
