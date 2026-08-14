import { Briefcase } from "lucide-react";
import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-10 lg:py-14">
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
        <div className="relative mt-14 lg:mt-16">
          {/* Vertical line */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-10 md:space-y-12">
            {experience.map((item, i) => (
              <div key={item.role} className="relative pl-10 sm:pl-12">
                {/* Marker */}
                <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-primary/25 shadow-[0_0_14px_rgb(var(--primary)_/_0.35)]" />
                  <span className="absolute inset-[3px] rounded-full bg-primary shadow-[0_0_10px_rgb(var(--primary)_/_0.8)]" />
                </span>

                <Reveal delay={i * 80}>
                  <div>
                    {/* Role + Company */}
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl dark:text-white">
                      {item.role}{" "}
                      <span className="font-semibold text-primary-600 dark:text-primary">
                        @ {item.company}
                      </span>
                    </h3>

                    {/* Duration */}
                    <div className="mt-2 flex items-center gap-2 text-[13px] font-medium text-slate-600 dark:text-slate-400">
                      <Briefcase
                        size={14}
                        className="shrink-0 text-primary-600 dark:text-primary"
                      />
                      <span>{item.period}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 max-w-4xl text-[13px] leading-7 text-slate-600 sm:text-sm dark:text-slate-400">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex max-w-2xl items-start gap-3 text-[13px] leading-6 text-slate-700 sm:text-sm dark:text-slate-300"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600 shadow-[0_0_8px_rgb(var(--primary)_/_0.7)] dark:bg-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}