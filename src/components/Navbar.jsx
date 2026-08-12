import { useState } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { profile } from "../data";
import { useTheme } from "../lib/useTheme";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Process", "process"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#06101d]/80">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="text-2xl font-extrabold tracking-tighter text-cyan-600 dark:text-cyan">RV</span>
          <span className="hidden text-sm font-semibold text-slate-800 dark:text-slate-100 sm:block">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, id], index) => (
            <a key={id} href={`#${id}`} className={`text-xs transition hover:text-cyan-600 dark:hover:text-cyan ${index === 0 ? "text-cyan-600 dark:text-cyan" : "text-slate-600 dark:text-slate-300"}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a href="/Rohit-Verma-Resume.pdf" className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-cyan/50 dark:hover:text-cyan">
            <Download size={14} /> Download CV
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full border border-slate-300 p-2 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan">
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-white/10 dark:text-slate-300 lg:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-white/10 dark:bg-[#071525] lg:hidden">
          <div className="container-page flex flex-col gap-4">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-sm text-slate-700 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan">
                {label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <a href="/Rohit-Verma-Resume.pdf" className="flex w-fit items-center gap-2 rounded-full border border-cyan-300 px-4 py-2 text-xs text-cyan-700 dark:border-cyan/30 dark:text-cyan">
                <Download size={14} /> Download CV
              </a>
              <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full border border-slate-300 p-2 text-slate-700 dark:border-white/10 dark:text-slate-300">
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
