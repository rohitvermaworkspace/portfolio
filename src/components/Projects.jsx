import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

const AUTOPLAY_DELAY = 5000;
const PER_VIEW = 3;

export default function Projects() {
  const total = projects.length;
  const [offset, setOffset] = useState(0);

  const go = (i) => setOffset(((i % total) + total) % total);
  const prev = () => go(offset - 1);
  const next = () => go(offset + 1);

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [offset]);

  const ordered = [...projects.slice(offset), ...projects.slice(0, offset)].slice(0, PER_VIEW);

  return (
    <section id="projects" className="relative py-10 lg:py-14">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="section-heading mt-4">Projects I'm proud of</h2>
              <p className="section-sub">
                A selection of products, platforms and interfaces I've helped
                design and build.
              </p>
            </div>
            <a href="#contact" className="btn-ghost hidden !text-[13px] sm:inline-flex">
              View All Projects <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 lg:mt-14">
            <div className="grid gap-6 lg:grid-cols-3">
              {ordered.map((project, i) => {
                return (
                  <div
                    key={project.title}
                    className="group border rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_-10px_rgba(11,120,255,0.15)] dark:border-white/[0.06] dark:hover:border-cyan/30"
                  >
                    <ProjectVisual gradient={project.gradient} title={project.title} />

                    <div className="mt-4 pt-4 border-t border-slate-200/80">
                      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-cyan-600 dark:text-cyan">
                        <span>{i + 1}</span>
                        <span className="h-px w-8 bg-cyan-500/40 dark:bg-cyan/40" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{project.category}</span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {project.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="chip">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition group/link hover:gap-3 dark:text-cyan"
                      >
                        View Project <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                aria-label="Previous projects"
                className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-cyan"
              >
                <ArrowLeft size={16} />
              </button>

              <div className="flex items-center gap-2.5">
                {projects.map((project, i) => {
                  const active = ordered.some((p) => p.title === project.title) && i === offset;
                  const inView = ordered.some((p) => p.title === project.title);
                  return (
                    <button
                      key={project.title}
                      onClick={() => go(i)}
                      aria-label={`Go to project ${i + 1}`}
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
                aria-label="Next projects"
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