import { Quote, Users, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container-page grid gap-5 pt-20 lg:grid-cols-[.9fr_1.1fr]">
      <div className="section-card p-6 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <span className="text-cyan-600 dark:text-cyan"><Quote size={16}/></span> What Clients Say
        </div>
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50/60 p-5 dark:border-white/10 dark:bg-white/[0.025]">
          <div className="flex gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 font-bold text-white">C</div>
            <div>
              <p className="text-xs leading-6 text-slate-700 dark:text-slate-300">“Rohit consistently delivers clean, scalable frontend solutions and communicates clearly with the team.”</p>
              <p className="mt-3 text-[10px] text-slate-500">— Engineering Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card p-6 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <span className="text-cyan-600 dark:text-cyan"><Users size={16}/></span> By The Numbers
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["10+", "Years Experience"],
            ["30+", "Projects Completed"],
            ["20+", "Happy Clients"],
            ["99%", "Satisfaction Rate"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 dark:border-white/10 dark:bg-white/[0.025]">
              <div className="text-2xl font-bold text-cyan-700 dark:text-cyan">{value}</div>
              <div className="mt-2 text-[10px] leading-4 text-slate-500">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-500">
          <CheckCircle2 size={14} className="text-cyan-600 dark:text-cyan"/> Focused on quality, maintainability and user experience.
        </div>
      </div>
    </section>
  );
}