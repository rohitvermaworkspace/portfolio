import { Code2, FileText, PenTool, Rocket, Search, ShieldCheck } from "lucide-react";
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

export default function Process() {
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

        <div className="mt-14">
          <Reveal delay={100}>
            <ol className="relative grid gap-10 md:grid-cols-6 md:gap-4">
              <div
                className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-cyan-500/60 via-cyan-400/25 to-transparent md:block"
                aria-hidden="true"
              />

              {process.map(([num, title, text, iconKey], i) => {
                const Icon = icons[iconKey];
                return (
                  <Reveal key={num} delay={i * 90}>
                    <li className="relative flex flex-col items-center text-center md:items-start md:text-left">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300 bg-cyan-50 text-cyan-600 shadow-cyan dark:border-cyan/30 dark:bg-cyan/[0.05] dark:text-cyan dark:shadow-cyan">
                        <Icon size={19} />
                      </div>

                      <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-600 dark:text-cyan">
                        {num}
                      </div>
                      <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-[12px] leading-5 text-slate-600 dark:text-slate-400">
                        {text}
                      </p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
