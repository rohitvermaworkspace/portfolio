import { ArrowRight, ExternalLink, Layers3 } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="container-page pt-20">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow"><Layers3 size={13} /> Selected Work</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-slate-50">Projects I'm proud of</h2>
        </div>
        <a href="#contact" className="hidden items-center gap-1 text-xs text-cyan-700 sm:flex dark:text-cyan">View All Projects <ArrowRight size={14} /></a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="section-card overflow-hidden transition hover:-translate-y-1 hover:border-cyan-300 dark:hover:border-cyan/25">
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-100 via-blue-100/70 to-cyan-100 p-5 dark:from-slate-900 dark:via-blue-950/70 dark:to-cyan/10">
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.05)_1px,transparent_1px)] [background-size:20px_20px] dark:opacity-30 dark:[background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]" />
              <div className="relative rounded-xl border border-slate-200 bg-white/80 p-4 shadow-2xl dark:border-white/10 dark:bg-black/20">
                <div className="mb-3 flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-400/70"/><i className="h-2 w-2 rounded-full bg-yellow-400/70"/><i className="h-2 w-2 rounded-full bg-green-400/70"/></div>
                <div className="space-y-2"><div className="h-2 w-3/4 rounded bg-cyan-500/50 dark:bg-cyan/40"/><div className="h-2 w-1/2 rounded bg-slate-300 dark:bg-white/10"/><div className="h-8 rounded bg-slate-200 dark:bg-white/5"/></div>
              </div>
              <span className="absolute right-4 top-4 rounded-full border border-cyan-300 bg-cyan-50 px-2 py-1 text-[9px] text-cyan-700 dark:border-cyan/20 dark:bg-cyan/10 dark:text-cyan">{project.type}</span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map(tag => <span key={tag} className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[9px] text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">{tag}</span>)}
              </div>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-xs text-cyan-700 dark:text-cyan">Explore project <ExternalLink size={13} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}