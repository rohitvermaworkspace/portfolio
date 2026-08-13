import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-0 lg:py-14">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Career</p>

            <h2 className="section-heading mt-4">
              Experience
            </h2>

            <p className="section-sub">
              Over a decade building enterprise products and scalable frontend
              systems.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Central timeline */}
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-0">
            {experience.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={`relative flex flex-col md:min-h-[250px] md:flex-row ${
                    i % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Timeline Node */}
                  <div className="absolute left-[8px] top-8 z-20 hidden md:left-1/2 md:flex md:-translate-x-1/2">
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-primary/20 shadow-[0_0_20px_rgb(var(--primary)_/_0.25)]" />
                      <span className="relative h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgb(var(--primary)_/_0.7)]" />
                    </span>
                  </div>

                  {/* Branch Line */}
                  <div
                    className={`absolute top-[42px] hidden h-px w-[8%] bg-gradient-to-r from-primary/40 to-transparent md:block ${
                      i % 2 === 0
                        ? "left-[42%]"
                        : "right-[42%] rotate-180"
                    }`}
                  />

                  {/* Experience Card */}
                  <div
                    className={`relative w-full md:w-[43%] ${
                      i % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    <div className="group relative rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[0_15px_45px_rgba(15,23,42,.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_20px_50px_rgb(var(--primary)_/_0.10)] dark:border-white/10 dark:bg-white/[.025] dark:hover:border-primary/30">

                      {/* Card glow */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[.04] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                      <div className="relative">

                        {/* Period */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-700 dark:border-primary/20 dark:bg-primary/[.06] dark:text-primary">
                            {item.period}
                          </span>
                        </div>

                        {/* Role */}
                        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                          {item.role}
                        </h3>

                        {/* Company */}
                        <div className="mt-1 text-sm font-semibold text-primary-600 dark:text-primary">
                          {item.company}
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-[14px] leading-7 text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}