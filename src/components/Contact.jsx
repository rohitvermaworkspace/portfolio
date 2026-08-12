import { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "../data";
import Reveal from "./Reveal";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const socials = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    if (status !== "idle") {
      setStatus("idle");
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (
      payload.name.length < 2 ||
      payload.email.length < 5 ||
      payload.subject.length < 2 ||
      payload.message.length < 10
    ) {
      setStatus("error");
      setError("Please fill all fields correctly. Message should be at least 10 characters.");
      return;
    }

    const { supabase } = await import("../lib/supabase");

    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert([payload]);

    if (insertError) {
      console.error("Supabase contact form error:", insertError);
      setStatus("error");
      setError("Unable to send your message right now. Please try again.");
      return;
    }

    setForm(initialForm);
    setStatus("success");
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-heading mt-4">
                Have a project in mind?
              </h2>
              <p className="section-sub">
                Let's build something great together. I'm always open to
                discussing interesting products, frontend architecture, UI
                engineering and new opportunities.
              </p>

              <a href={`mailto:${profile.email}`} className="btn-primary mt-9">
                Let's Talk <ArrowRight size={16} />
              </a>

              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex items-center gap-2.5 text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan"
                    >
                      <Icon size={17} className="transition-transform group-hover:-translate-y-0.5" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="field"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  autoComplete="name"
                  required
                />
                <input
                  className="field"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  autoComplete="email"
                  required
                />
              </div>

              <input
                className="field"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />

              <textarea
                className="field min-h-[140px] resize-none"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                minLength={10}
                required
              />

              {status === "success" && (
                <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-5 py-3.5 text-sm text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={17} />
                  Thanks! Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2.5 rounded-2xl border border-red-500/25 bg-red-500/10 px-5 py-3.5 text-sm text-red-500 dark:text-red-400">
                  <AlertCircle size={17} />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
