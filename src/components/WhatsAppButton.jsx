import { useState, useEffect } from "react";
import { profile } from "../data";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!profile.whatsapp) return null;

  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-50 flex items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] bottom-24 right-4 md:bottom-8 md:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {/* pulse ring */}
      <span className="absolute inset-0 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#25D366]/30" />

      {/* icon */}
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="relative z-10 h-5 w-5 md:h-6 md:w-6"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.25l6.112-1.97A15.91 15.91 0 0 0 16.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0Zm9.314 22.594c-.39 1.094-1.93 2.004-3.156 2.27-.838.18-1.932.322-5.618-1.204-4.716-1.95-7.744-6.73-7.978-7.044-.226-.314-1.874-2.496-1.874-4.762 0-2.264 1.19-3.374 1.612-3.844.39-.438.94-.55 1.25-.55.31 0 .62.003.89.016.286.012.668-.108 1.04.792.39.942 1.33 3.24 1.446 3.476.116.236.194.51.038.824-.156.314-.234.51-.468.786-.234.276-.492.618-.702.828-.234.236-.476.49-.204.962.274.472 1.214 2.004 2.606 3.246 1.79 1.598 3.302 2.094 3.77 2.328.47.234.744.196 1.018-.118.274-.314 1.168-1.36 1.482-1.83.314-.472.628-.394 1.058-.236.438.156 2.768 1.304 3.242 1.542.474.238.79.356.908.55.118.194.118 1.124-.272 2.218Z" />
      </svg>
    </a>
  );
}
