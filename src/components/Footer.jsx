import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 dark:border-white/[0.06]">
      <div className="container-page flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="text-base font-bold text-slate-900 dark:text-white">
            {profile.name}
          </div>
          <div className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {profile.role}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-500 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-cyan"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-500 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-cyan"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-500 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-cyan"
          >
            <Mail size={16} />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 rounded-xl border border-slate-200 bg-white/60 p-2.5 text-slate-500 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:hover:text-cyan"
          >
            <ArrowUp size={16} />
          </a>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
