import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Github,
  Linkedin,
  Mail,
  ThumbsUp,
  Code2,
  Sparkles,
} from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-28 h-1 w-1 rounded-full bg-primary shadow-[0_0_18px_5px_rgb(var(--primary)_/_0.7)]" />
        <div className="absolute right-[10%] top-32 h-1 w-1 rounded-full bg-primary shadow-[0_0_18px_5px_rgb(var(--primary)_/_0.6)]" />
        <div className="absolute left-[46%] top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl dark:bg-primary/[.025]" />
        <div className="absolute inset-x-0 top-0 h-[420px] opacity-40 [background-image:linear-gradient(rgba(15,23,42,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.04)_1px,transparent_1px)] [background-size:44px_44px] dark:opacity-30 dark:[background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]" />
      </div>

      <div className="container-page relative grid items-center gap-8 pb-12 lg:grid-cols-[1fr_1.02fr] lg:gap-3 lg:pb-16">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_3px_rgb(var(--primary)_/_0.45)]" />
            {profile.role}
          </div>

          <h1 className="mt-6 max-w-[650px] text-[48px] font-extrabold leading-[.99] tracking-[-.045em] sm:text-[62px] lg:text-[66px] xl:text-[72px]">
            I build digital <span className="gradient-text">experiences</span> that matter.
          </h1>

          <p className="mt-6 max-w-[560px] text-[13px] leading-6 text-slate-600 sm:text-sm dark:text-slate-400">I'm {profile.name}, a Senior Frontend Developer with 10+ years of experience building scalable, beautiful and high-performance web applications.</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary-400 px-5 py-3 text-[12px] font-bold text-slate-950 shadow-[0_0_30px_rgb(var(--primary)_/_0.2)] transition hover:-translate-y-0.5">
              View My Work <ArrowRight size={15} />
            </a>

            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-primary-300 bg-primary-50 px-5 py-3 text-[12px] font-semibold text-primary-700 transition hover:bg-primary-100 dark:border-primary/25 dark:bg-primary/[.035] dark:text-primary dark:hover:bg-primary/10">
              Let's Talk <Mail size={15} />
            </a>
          </div>

          <div className="mt-6 flex gap-2">
            {[
              [Github, "GitHub", profile.github],
              [Linkedin, "LinkedIn", profile.linkedin],
              [Mail, "Email", `mailto:${profile.email}`],
            ].map(([Icon, label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-primary-400 hover:text-primary-600 dark:border-white/10 dark:bg-white/[.025] dark:text-slate-400 dark:hover:border-primary/40 dark:hover:text-primary"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="relative mx-auto h-[480px] w-full max-w-[520px] sm:h-[500px]">
          {/* Glow */}
          <div className="absolute left-1/2 top-[40%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />

          {/* Large circle */}
          <div className="absolute left-1/2 top-[40%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-200 bg-[radial-gradient(circle_at_50%_35%,rgb(var(--primary)_/_0.25),rgba(255,255,255,0)_65%)] shadow-[0_0_80px_rgb(var(--primary)_/_0.10)] dark:border-primary/20 dark:bg-[radial-gradient(circle_at_50%_35%,rgb(var(--primary)_/_0.18),rgba(4,13,24,0)_65%)] dark:shadow-[0_0_80px_rgb(var(--primary)_/_0.08)]" />

          {/* Inner circle */}
          <div className="absolute top-0 bottom-0 left-1/2 z-10 h-[390px] w-[270px] -translate-x-1/2 sm:h-[430px] sm:w-[430px]">
            <div className="animate-float relative h-full w-full overflow-hidden">
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}profile1.webp`} type="image/webp" />
                <img src={`${import.meta.env.BASE_URL}profile1.png`} fetchpriority="high" alt={profile.name} className="absolute inset-0 h-full w-full object-cover object-top" />
              </picture>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
            </div>
          </div>

          {/* 10+ */}
          <StatCard className="right-[2%] top-5 sm:right-[4%]" value="10+" label="Years of Experience" icon={<Clock3 size={14} />} />

          {/* 30+ */}
          <StatCard className="right-[-1%] top-36 sm:right-[0%]" value="30+" label="Projects Completed" icon={<CheckCircle2 size={14} />} />

          {/* 99% */}
          <StatCard className="right-[2%] bottom-40 sm:right-[4%]" value="99%" label="Client Satisfaction" icon={<ThumbsUp size={14} />} />

          {/* Engineering Card */}
          <div className="absolute bottom-5 left-1/2 z-20 hidden w-52 -translate-x-1/2 rounded-xl border border-primary-200 bg-white/95 p-3 shadow-[0_0_35px_rgb(var(--primary)_/_0.15)] sm:block dark:border-primary/25 dark:bg-[#091c2f]/95 dark:shadow-[0_0_35px_rgb(var(--primary)_/_0.10)]">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary-100 p-2 text-primary-600 dark:bg-primary/10 dark:text-primary">
                <Code2 size={17} />
              </div>

              <div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400">Frontend Engineering</div>

                <div className="mt-1 text-[10px] leading-4 text-slate-700 dark:text-slate-200">Clean Code · Scalable UI · Pixel Perfect</div>
              </div>
            </div>
          </div>

          {/* Decorative sparkle */}
          <div className="absolute left-[12%] top-24 text-primary-500/70 dark:text-primary/50">
            <Sparkles size={12} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ className, value, label, icon }) {
  return (
    <div className={`absolute z-30 min-w-[128px] rounded-xl border border-primary-200 bg-white/90 p-3 shadow-[0_0_30px_rgb(var(--primary)_/_0.10)] backdrop-blur-md dark:border-primary/20 dark:bg-[#091c2f]/90 dark:shadow-[0_0_30px_rgb(var(--primary)_/_0.08)] ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {value}
          </div>
          <div className="mt-0.5 text-[9px] text-slate-500">
            {label}
          </div>
        </div>

        <div className="mt-1 text-primary-600 dark:text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
}