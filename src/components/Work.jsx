import { Code2, Component, PencilRuler, TabletSmartphone } from "lucide-react";
import { work } from "../data";
import Reveal from "./Reveal";

const icons = {
  penRuler: PencilRuler,
  code: Code2,
  mobile: TabletSmartphone,
  component: Component,
};

export default function Work() {
  return (
    <section id="work" className="relative py-10 lg:py-14">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">What I Do</p>

            <h2 className="section-heading mt-4">Work</h2>

            <p className="section-sub">
              My core areas of expertise — where strategy, design and
              engineering come together to ship great products.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {work.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[0_15px_45px_rgba(15,23,42,.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-primary-300 hover:shadow-[0_20px_50px_rgb(var(--primary)_/_0.15)] dark:border-white/10 dark:bg-white/[.025] dark:hover:border-primary/30">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[.06] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-200 bg-primary-50 text-primary-600 shadow-glow-soft transition duration-300 group-hover:scale-110 group-hover:border-primary-300 group-hover:text-primary-700 dark:border-primary/20 dark:bg-primary/[.05] dark:text-primary dark:group-hover:border-primary/40">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-base font-bold tracking-tight text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}