import { Code2, FileText, Palette, Rocket, Search, ShieldCheck } from "lucide-react";
import { process } from "../data";
import Reveal from "./Reveal";

const icons = {
  search: Search,
  file: FileText,
  pen: Palette,
  code: Code2,
  shield: ShieldCheck,
  rocket: Rocket,
};

export default function Process() {
  return (
    <section id="process" className="relative py-10 lg:py-14">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">How I Work</p>
            <h2 className="mt-4 text-[26px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-[34px] md:text-[44px] lg:text-[52px] dark:text-white">
              My Process
            </h2>
            <p className="mt-3 max-w-xl text-[13px] leading-6 text-slate-600 sm:text-base md:mt-5 md:text-[15px] md:leading-7 dark:text-slate-400">
              A clear, collaborative path from first conversation to production.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 md:mt-14">
          <Reveal delay={100}>
            {/* Mobile: compact 3-column grid */}
            <ol className="grid grid-cols-3 gap-2.5 md:hidden" aria-label="Process steps">
              {process.map(([num, title, text, iconKey], i) => {
                const Icon = icons[iconKey];
                return (
                  <li key={num}>
                    <Reveal delay={i * 70}>
                      <div className="group flex h-[140px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/70 px-2 py-3 text-center backdrop-blur-sm transition-all duration-200 active:scale-[0.97] dark:border-white/[0.06] dark:bg-white/[0.02]">
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary-600/70 dark:text-primary/60">
                          {num}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-300/50 bg-primary-50 text-primary-600 transition-shadow duration-200 group-hover:shadow-glow-soft dark:border-primary/20 dark:bg-primary/[0.07] dark:text-primary dark:group-hover:shadow-glow-soft">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-[13px] font-semibold leading-tight text-slate-900 dark:text-white">
                          {title}
                        </h3>
                        <p className="sr-only">{text}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>

            {/* Desktop: existing layout */}
            <div className="relative hidden md:block">
              <div
                className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-primary-500/60 via-primary-400/25 to-transparent md:block"
                aria-hidden="true"
              />
              <ol className="relative grid gap-10 md:grid-cols-6 md:gap-4">
                {process.map(([num, title, text, iconKey], i) => {
                  const Icon = icons[iconKey];
                  return (
                    <li key={num}>
                      <Reveal delay={i * 90}>
                        <div className="flex flex-col items-center text-center md:items-start md:text-left">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-300 bg-primary-50 text-primary-600 shadow-glow-soft dark:border-primary/30 dark:bg-primary/[0.05] dark:text-primary dark:shadow-glow-soft">
                            <Icon size={19} />
                          </div>

                          <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-600 dark:text-primary">
                            {num}
                          </div>
                          <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                            {title}
                          </h3>
                          <p className="mt-2 text-[12px] leading-5 text-slate-600 dark:text-slate-400">
                            {text}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
