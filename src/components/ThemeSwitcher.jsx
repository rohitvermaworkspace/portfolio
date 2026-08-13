import { useEffect, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";
import { themes } from "../lib/themes";
import { useTheme } from "../lib/useTheme";

export default function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition hover:border-primary-400/50 hover:text-primary-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-primary"
      >
        <Palette size={16} />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Color themes"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-44 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0f1a]/95"
        >
          {themes.map((theme) => {
            const active = theme.id === colorTheme;
            return (
              <button
                key={theme.id}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setColorTheme(theme.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-primary/10 text-slate-900 dark:text-white"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                }`}
              >
                <span
                  className="h-4 w-4 shrink-0 rounded-full ring-2 ring-white dark:ring-white/20"
                  style={{ backgroundColor: theme.primary[500] }}
                />
                {theme.name}
                {active && (
                  <Check size={14} className="ml-auto text-primary-600 dark:text-primary" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
