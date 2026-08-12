import { Search, FileText, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";
import { process } from "../data";

const icons = [Search, FileText, PenTool, Code2, ShieldCheck, Rocket];

export default function Process() {
  return (
    <section id="process" className="container-page pt-20">
      <div className="section-card p-6 sm:p-8">
        <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
          <span className="text-cyan-600 dark:text-cyan"><Rocket size={16}/></span> My Work Process
        </div>
        <div className="grid gap-7 md:grid-cols-6">
          {process.map(([num, title, text], i) => {
            const Icon = icons[i];
            return (
              <div key={num} className="relative text-center md:text-left">
                <div className="mb-4 flex items-center md:block">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300 bg-cyan-50 text-cyan-600 shadow-cyan dark:border-cyan/30 dark:bg-cyan/[0.05] dark:text-cyan dark:shadow-cyan">{<Icon size={19}/>}</div>
                  {i < process.length - 1 && <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent md:absolute md:left-[60%] md:top-6 md:block md:w-[80%] dark:from-cyan/60" />}
                </div>
                <div className="text-[10px] font-bold text-cyan-600 dark:text-cyan">{num}</div>
                <h3 className="mt-1 text-xs font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
                <p className="mt-2 text-[10px] leading-5 text-slate-500">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}