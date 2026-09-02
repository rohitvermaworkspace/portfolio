import { useEffect, useRef, useState } from "react";
import { ChevronUp, Code2, Download, Home, Briefcase, Mail, MoreHorizontal, User } from "lucide-react";
import { useActiveSection } from "../lib/useActiveSection";
import { profile } from "../data";

const primaryItems = [
  { label: "Home", id: "home", icon: Home },
  { label: "Skills", id: "skills", icon: Code2 },
  { label: "Work", id: "work", icon: Briefcase },
  { label: "Projects", id: "projects", icon: Briefcase },
];

const moreItems = [
  { label: "About", id: "about", icon: User },
  { label: "Experience", id: "experience", icon: Briefcase },
  { label: "Contact", id: "contact", icon: Mail },
];

const allIds = [...primaryItems.map((i) => i.id), ...moreItems.map((i) => i.id)];

export default function MobileBottomNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const active = useActiveSection(allIds);

  useEffect(() => {
    if (!moreOpen) return;

    const onClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    const onKey = (event) => {
      if (event.key === "Escape") setMoreOpen(false);
    };

    document.addEventListener("touchstart", onClickOutside, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("touchstart", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  const isMoreActive = moreItems.some((i) => active === i.id);

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/60 bg-white/80 backdrop-blur-xl safe-area-bottom md:hidden dark:border-white/5 dark:bg-[#05070d]/85"
    >
      {/* More dropdown — pops up above the bar */}
      {moreOpen && (
        <div
          ref={moreRef}
          className="absolute bottom-full left-0 right-0 border-t border-slate-200/60 bg-white/95 pb-2 pt-2 backdrop-blur-xl dark:border-white/5 dark:bg-[#060a12]/95"
        >
          <div className="flex flex-col gap-0.5 px-3 py-1">
            {moreItems.map(({ label, id, icon: Icon }) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMoreOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "bg-primary-500/10 text-primary-600 dark:text-primary"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </a>
              );
            })}
            <a
              href={profile.resume}
              download="Resume.pdf"
              onClick={() => setMoreOpen(false)}
              className="mt-1 flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-3 text-[13px] font-semibold text-slate-950 dark:from-primary dark:to-secondary-400"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      )}

      <ul className="flex h-[68px] items-stretch px-2">
        {primaryItems.map(({ label, id, icon: Icon }) => {
          const isActive = active === id;
          return (
            <li key={id} className="flex flex-1">
              <a
                href={`#${id}`}
                aria-label={label}
                className={`relative flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${
                  isActive
                    ? "text-primary-600 dark:text-primary"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className="transition-all duration-200"
                />
                <span
                  className={`text-[11px] leading-none transition-colors ${
                    isActive ? "font-semibold" : "font-medium"
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <span className="absolute top-0 h-[2px] w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary dark:to-secondary-400" />
                )}
              </a>
            </li>
          );
        })}

        {/* More button */}
        <li className="flex flex-1">
          <button
            onClick={() => setMoreOpen((v) => !v)}
            aria-expanded={moreOpen}
            aria-haspopup="true"
            aria-label="More navigation items"
            className={`relative flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${
              isMoreActive
                ? "text-primary-600 dark:text-primary"
                : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <div className="relative">
              {moreOpen ? (
                <ChevronUp
                  size={20}
                  strokeWidth={isMoreActive ? 2.2 : 1.8}
                  className="transition-all duration-200"
                />
              ) : (
                <MoreHorizontal
                  size={20}
                  strokeWidth={isMoreActive ? 2.2 : 1.8}
                  className="transition-all duration-200"
                />
              )}
            </div>
            <span
              className={`text-[11px] leading-none transition-colors ${
                isMoreActive ? "font-semibold" : "font-medium"
              }`}
            >
              More
            </span>
            {isMoreActive && (
              <span className="absolute top-0 h-[2px] w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary dark:to-secondary-400" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}
