import { Quote } from "lucide-react";
import { testimonials } from "../data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-10 lg:py-14">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-heading mt-4">What clients say</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 100} className="h-full">
              <figure className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary-300/70 hover:shadow-[0_20px_50px_rgb(var(--primary)_/_0.12)] dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-primary/25">
                <Quote
                  size={40}
                  className="text-primary-500/40 dark:text-primary/30"
                  fill="currentColor"
                  strokeWidth={0}
                />

                <blockquote className="mt-6 flex-1 text-[15px] leading-8 text-slate-600 dark:text-slate-300">
                  {item.quote}
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-slate-200/70 pt-6 dark:border-white/[0.06]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-xs font-bold text-white">
                    {item.initials}
                  </span>

                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </div>
                    <div className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                      {item.role}
                      {item.company ? ` · ${item.company}` : ""}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}