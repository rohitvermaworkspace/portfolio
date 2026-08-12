import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Code2, FileText, PenTool, Rocket, Search, ShieldCheck } from "lucide-react";
import { process } from "../data";
import Reveal from "./Reveal";

const icons = {
  search: Search,
  file: FileText,
  pen: PenTool,
  code: Code2,
  shield: ShieldCheck,
  rocket: Rocket,
};

const AUTOPLAY_DELAY = 4000;
const PER_VIEW = 3;

export default function Process() {
  const total = process.length;
  const [offset, setOffset] = useState(0);

  const go = (i) => setOffset(((i % total) + total) % total);
  const prev = () => go(offset - 1);
  const next = () => go(offset + 1);

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [offset]);

  const ordered = [...process.slice(offset), ...process.slice(0, offset)].slice(0, PER_VIEW);

  return (
    <section id="process" className="relative py-10 lg:py-14">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">How I Work</p>
            <h2 className="section-heading mt-4">My Process</h2>
            <p className="section-sub">
              A clear, collaborative path from first conversation to production.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {ordered.map(([num, title, text, iconKey], i) => {
                const Icon = icons[iconKey];
                return (
                  <div
                    key={`${num}-${i}`}
                    className="card-surface group relative flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 dark:hover:border-cyan/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.15em] text-cyan-600 dark:text-cyan">
                        {num}
                      </span>
                      <div className="flex h-12 w-12 -mr-2 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700 transition-colors group-hover:border-cyan-400 dark:border-cyan/20 dark:bg-cyan/[0.06] dark:text-cyan">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">
                      {title}
                    </h3>

                    <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-500/40 to-transparent dark:from-cyan/30" />

                    <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                aria-label="Previous steps"
                className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan"
              >
                <ArrowLeft size={16} />
              </button>

              <div className="flex items-center gap-2.5">
                {process.map(([n], i) => {
                  const active = ordered.some(([on]) => on === n) && i === offset;
                  const inView = ordered.some(([on]) => on === n);
                  return (
                    <button
                      key={n}
                      onClick={() => go(i)}
                      aria-label={`Go to step ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active
                          ? "w-8 bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan dark:to-sky-400"
                          : inView
                            ? "w-2 bg-cyan-400/60 dark:bg-cyan/40"
                            : "w-2 bg-slate-300 hover:bg-cyan-400 dark:bg-white/15 dark:hover:bg-cyan/40"
                      }`}
                    />
                  );
                })}
              </div>

              <button
                onClick={next}
                aria-label="Next steps"
                className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
