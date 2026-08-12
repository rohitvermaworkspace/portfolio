import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-500 sm:flex-row">
        <a href="#home" className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
          <span className="text-xl font-extrabold text-cyan-600 dark:text-cyan">RV</span>{profile.name}
        </a>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan"><Github size={15}/></a>
          <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan"><Linkedin size={15}/></a>
          <a href="mailto:hello@rohitverma.dev" className="hover:text-cyan-600 dark:hover:text-cyan"><Mail size={15}/></a>
          <a href="#home" aria-label="Back to top" className="ml-2 rounded-full border border-cyan-300 p-2 text-cyan-600 hover:bg-cyan-50 dark:border-cyan/20 dark:text-cyan dark:hover:bg-cyan/10"><ArrowUp size={14}/></a>
        </div>
      </div>
    </footer>
  );
}