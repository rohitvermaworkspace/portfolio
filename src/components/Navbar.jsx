import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "../data";
import { useTheme } from "../lib/useTheme";
import { useActiveSection } from "../lib/useActiveSection";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

const sectionIds = links.map(([, id]) => id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/5 dark:bg-[#05070d]/75">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="gradient-text text-2xl font-extrabold tracking-tighter">RV</span>
          <span className="hidden text-sm font-semibold text-slate-800 dark:text-slate-100 sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, id]) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative py-1 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-[3px] left-1/2 h-[3px] w-[22px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan dark:to-sky-400" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            className="btn-primary hidden !px-4 !py-2.5 !text-[13px] sm:inline-flex"
          >
            <Download size={15} /> Download CV
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl dark:border-white/5 dark:bg-[#060a12]/95 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-5">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                  active === id
                    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href={profile.resume}
              className="btn-primary mt-3 !text-[13px]"
            >
              <Download size={15} /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
