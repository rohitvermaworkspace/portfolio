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

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((item, i) => (
            <Reveal key={item.role} delay={i * 100}>
              <figure className="flex h-full flex-col">
                <Quote size={34} className="text-primary-500/70 dark:text-primary/60" fill="currentColor" strokeWidth={0} />
                <blockquote className="mt-5 flex-1 text-[15px] leading-8 text-slate-700 dark:text-slate-300">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-200/70 pt-6 dark:border-white/[0.06]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-xs font-bold text-white">
                    {item.initials}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.role}
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
