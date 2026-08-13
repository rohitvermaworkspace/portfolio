import {
  MapPin,
  Mail,
  UserRound,
  Clock3,
  Code2,
  Layers3,
  Database,
  Palette,
} from "lucide-react";
import { about, profile } from "../data";

export default function AboutSkills() {
  return (
    <section className="container-page grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
      {/* About Me */}
      <div id="about" className="section-card p-6 sm:p-7">
        <SectionTitle
          icon={<UserRound size={15} />}
          title="About Me"
        />

        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {about.map((paragraph) => (
            <Paragraph key={paragraph.text.slice(0, 24)} {...paragraph} />
          ))}
        </div>

        {/* Personal Information */}
        <div className="mt-7 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 dark:border-white/5 sm:grid-cols-2">
          <Info
            icon={<UserRound size={14} />}
            label="Name"
            value={profile.name}
          />

          <Info
            icon={<MapPin size={14} />}
            label="Location"
            value={profile.location}
          />

          <Info
            icon={<Mail size={14} />}
            label="Email"
            value="hello@rohitverma.dev"
          />

          <Info
            icon={<Clock3 size={14} />}
            label="Availability"
            value={profile.availability}
          />
        </div>
      </div>

      {/* Expertise */}
      <div id="skills" className="section-card p-6 sm:p-7">
        <SectionTitle
          icon={<Code2 size={15} />}
          title="Technical Expertise"
        />

        <p className="mt-3 max-w-xl text-xs leading-6 text-slate-600 dark:text-slate-400">
          Technologies and tools I use to design, develop and maintain
          scalable web applications.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <SkillGroup
            icon={<Code2 size={15} />}
            title="Frontend"
            skills={[
              "Angular",
              "React",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
            ]}
          />

          <SkillGroup
            icon={<Layers3 size={15} />}
            title="Architecture & State"
            skills={[
              "RxJS",
              "NgRx",
              "Reusable Components",
              "Micro Frontends",
              "REST APIs",
            ]}
          />

          <SkillGroup
            icon={<Palette size={15} />}
            title="UI & Design Systems"
            skills={[
              "Tailwind CSS",
              "IBM Carbon",
              "Bootstrap",
              "PrimeNG",
              "Responsive UI",
              "Accessibility",
            ]}
          />

          <SkillGroup
            icon={<Database size={15} />}
            title="Backend & Tools"
            skills={[
              "Node.js",
              "Express.js",
              "MongoDB",
              "Supabase",
              "Git",
              "Vite",
            ]}
          />
        </div>

        {/* Experience highlight */}
        <div className="mt-5 rounded-xl border border-cyan-200 bg-cyan-50/50 p-4 dark:border-cyan/10 dark:bg-cyan/[0.025]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600 dark:text-slate-400">
                Frontend Engineering
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                Building scalable interfaces & design systems
              </p>
            </div>

            <div className="text-right">
              <div className="text-xl font-bold text-cyan-700 dark:text-cyan">
                {profile.experience}
              </div>

              <div className="text-[9px] text-slate-600 dark:text-slate-400">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Paragraph({ text, strong }) {
  const parts = strong.length
    ? text.split(new RegExp(`(${strong.map(escapeRegex).join("|")})`))
    : [text];

  return (
    <p>
      {parts.map((part, i) =>
        strong.includes(part) ? (
          <span key={i} className="font-medium text-cyan-700 dark:text-cyan">
            {part}
          </span>
        ) : (
          <span key={i} className={part ? "text-slate-600 dark:text-slate-400" : ""}>
            {part}
          </span>
        )
      )}
    </p>
  );
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function SectionTitle({ icon, title }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
      <span className="text-cyan-600 dark:text-cyan">{icon}</span>
      {title}
    </h2>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-cyan-600/70 dark:text-cyan/70">{icon}</span>

      <div>
        <div className="text-[10px] text-slate-600 dark:text-slate-400">
          {label}
        </div>

        <div className="mt-1 text-xs text-slate-800 dark:text-slate-200">
          {value}
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ icon, title, skills }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/50 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-cyan/20 dark:hover:bg-cyan/[0.025]">
      <div className="flex items-center gap-2">
        <span className="text-cyan-600 dark:text-cyan">{icon}</span>

        <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-200">
          {title}
        </h3>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] text-slate-600 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.025] dark:text-slate-400 dark:hover:border-cyan/25 dark:hover:text-cyan"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}