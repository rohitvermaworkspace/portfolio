import { useState } from "react";
import { Mail, MapPin, Phone, Send, Clock3, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

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
    <section id="contact" className="container-page py-20">
      <div className="section-card overflow-hidden p-6 sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">
              <Send size={13} /> Let's Build Something Great
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-bold text-slate-900 dark:text-slate-50">
              Have a project in mind?
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
              Let's discuss your product, frontend architecture or UI
              development needs.
            </p>

            <div className="mt-7 space-y-4 text-xs">
              <ContactInfo
                icon={<Mail size={15} />}
                label="Email"
                value="hello@rohitverma.dev"
              />
              <ContactInfo
                icon={<Phone size={15} />}
                label="Phone"
                value="+91 00000 00000"
              />
              <ContactInfo
                icon={<MapPin size={15} />}
                label="Location"
                value="India"
              />
              <ContactInfo
                icon={<Clock3 size={15} />}
                label="Availability"
                value="Open to new opportunities"
              />
            </div>
          </div>

          <form className="grid gap-3" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
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
              className="field min-h-36 resize-none"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              minLength={10}
              required
            />

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-cyan-300 bg-cyan-50 px-4 py-3 text-xs text-cyan-700 dark:border-cyan/20 dark:bg-cyan/5 dark:text-cyan">
                <CheckCircle2 size={15} />
                Thanks! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-xs text-red-500 dark:text-red-300">
                <AlertCircle size={15} />
                {error}
              </div>
            )}

            <button
              disabled={status === "submitting"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-5 py-3 text-sm font-semibold text-slate-950 shadow-cyan transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-cyan-600 dark:text-cyan">{icon}</span>
      <div>
        <div className="text-[10px] text-slate-500">{label}</div>
        <div className="mt-0.5 text-slate-800 dark:text-slate-300">{value}</div>
      </div>
    </div>
  );
}