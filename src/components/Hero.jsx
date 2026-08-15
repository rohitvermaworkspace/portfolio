import { useEffect, useState } from "react";
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
import SkillIcon from "../lib/skillIcons";

const roles = [
  "Frontend Developer",
  "UI Architect",
  "Design Systems Engineer",
  "Performance Optimization Specialist",
];

const orbitOuter = [
  { name: "Angular", angle: 0 },
  { name: "React", angle: 45 },
  { name: "JavaScript", angle: 90 },
  { name: "TypeScript", angle: 135 },
  { name: "Node.js", angle: 180 },
  { name: "HTML5", angle: 225 },
  { name: "CSS3", angle: 270 },
  { name: "Tailwind CSS", angle: 315 },
];

const TYPE_SPEED = 90;
const DELETE_SPEED = 50;
const PAUSE_DURATION = 2000;

export default function Hero() {
  const [reducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [text, setText] = useState(() => (reducedMotion ? roles[0] : ""));
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const current = roles[roleIndex];
    let timer;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), PAUSE_DURATION);
    } else if (deleting && text === "") {
      timer = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }, 300);
    } else {
      timer = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? DELETE_SPEED : TYPE_SPEED
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex, reducedMotion]);

  const firstName = profile.name.split(" ")[0];

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
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_3px_rgb(var(--primary)_/_0.45)]" />
            </span>
            {profile.role}
          </div>

          <h1 className="mt-6 max-w-[650px] text-[48px] font-extrabold leading-[.99] tracking-[-0.045em] text-slate-900 sm:text-[62px] lg:text-[66px] xl:text-[72px] dark:text-white">
            I build digital <span className="gradient-text">experiences</span> that matter.
          </h1>

          <p className="mt-6 text-[16px] font-semibold leading-6 text-slate-700 sm:text-[18px] dark:text-slate-200">
            I'm {firstName} —{" "}
            <span className="gradient-text font-bold">{text}</span>
            <span
              aria-hidden="true"
              className="animate-cursor ml-1 inline-block text-primary-600 dark:text-primary"
            >
              |
            </span>
          </p>

          <p className="mt-5 max-w-[560px] text-[13px] leading-6 text-slate-600 sm:text-sm dark:text-slate-400">
            A Senior Frontend Developer with 10+ years of experience building
            scalable, beautiful and high-performance web applications.
          </p>

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
          <div className="absolute left-1/2 top-[40%] h-[min(288px,70vw)] w-[min(288px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />

          {/* Large circle */}
          <div className="absolute left-1/2 top-[40%] h-[min(300px,72vw)] w-[min(300px,72vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-200 bg-[radial-gradient(circle_at_50%_35%,rgb(var(--primary)_/_0.25),rgba(255,255,255,0)_65%)] shadow-[0_0_80px_rgb(var(--primary)_/_0.10)] dark:border-primary/20 dark:bg-[radial-gradient(circle_at_50%_35%,rgb(var(--primary)_/_0.18),rgba(4,13,24,0)_65%)] dark:shadow-[0_0_80px_rgb(var(--primary)_/_0.08)]" />

          {/* Skills Orbit */}
          <div
            className="pointer-events-none absolute left-1/2 top-[40%] z-[1] aspect-square w-[var(--orbit)] -translate-x-1/2 -translate-y-1/2"
            style={{ "--orbit": "min(540px, 100%)" }}
          >
            <div className="relative h-full w-full">
              {/* Outer ring */}
              <div className="relative h-full w-full animate-orbit-slow">
                <div className="absolute inset-0 animate-ring-pulse rounded-full border border-primary/20 shadow-[0_0_45px_rgb(var(--primary)_/_0.10)] dark:border-primary/15" />

                <div className="absolute inset-[46px] animate-ring-pulse rounded-full border border-dashed border-primary/15 [animation-delay:2.5s] dark:border-primary/10 sm:inset-[42px]" />

                {orbitOuter.map((item) => {
                  const rad = (item.angle * Math.PI) / 180;
                  const r = 49.26;
                  return (
                    <div
                      key={item.name}
                      className="absolute"
                      style={{
                        left: `${50 + r * Math.cos(rad)}%`,
                        top: `${50 + r * Math.sin(rad)}%`,
                      }}
                    >
                      <div className="animate-orbit-counter-slow h-0 w-0">
                        <div className="flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary-200 bg-white/80 shadow-[0_0_14px_rgb(var(--primary)_/_0.2)] backdrop-blur-sm dark:border-primary/25 dark:bg-[#0a1524]/85 sm:h-11 sm:w-11">
                          <SkillIcon name={item.name} size={24} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Inner circle */}
          <div className="absolute top-0 bottom-0 left-1/2 z-10 h-[min(390px,92vw)] w-[min(270px,64vw)] -translate-x-1/2 sm:h-[430px] sm:w-[430px]">
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