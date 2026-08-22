import { Download } from "lucide-react";
import { profile } from "../data";
import { useActiveSection } from "../lib/useActiveSection";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Work", "work"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

const sectionIds = links.map(([, id]) => id);

export default function Navbar() {
  const active = useActiveSection(sectionIds);

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
                    ? "text-primary-600 dark:text-primary"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-[3px] left-1/2 h-[3px] w-[22px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary dark:to-secondary-400" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download="Resume.pdf"
            className="btn-primary hidden !px-4 !py-2.5 !text-[13px] sm:inline-flex"
          >
            <Download size={15} /> Download CV
          </a>

          <ThemeSwitcher />

          {/* <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition hover:border-primary-400/50 hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-primary"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button> */}

          <a
            href="#home"
            aria-label="Go to home"
            className="h-9 w-9 overflow-hidden rounded-full border border-slate-200 bg-white/60 lg:hidden dark:border-white/10"
          >
            <img
              src={`${import.meta.env.BASE_URL}profile1.webp`}
              alt="Rohit Verma"
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </div>

    </header>
  );
}
