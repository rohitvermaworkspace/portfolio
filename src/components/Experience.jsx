import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-0 lg:py-14">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Career</p>
            <h2 className="section-heading mt-4">Experience</h2>
            <p className="section-sub">
              Over a decade building enterprise products and scalable frontend
              systems.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-transparent dark:from-cyan/50 dark:via-cyan/20 sm:left-[9px]" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="relative pl-10 sm:pl-14">
                  <span className="absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center sm:h-[19px] sm:w-[19px]">
                    <span className="absolute inset-0 rounded-full bg-cyan-500/25 dark:bg-cyan/20" />
                    <span className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan" />
                  </span>

                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                    {item.period}
                  </div>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan">
                    {item.company}
                  </div>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
