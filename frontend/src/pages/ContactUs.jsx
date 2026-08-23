import { useState } from "react";
import { NavLink } from "react-router";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      {/* Hero */}

      {/* <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/[0.05] blur-[120px]" />

        <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[300px] w-[300px] rounded-full bg-violet-600/[0.035] blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-500/60" />
              Get in touch
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl lg:text-[56px]">
              Let's build better
              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                coding experiences.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-[15px]">
              Have a question, suggestion, feedback, or want to talk about
              CodeArena? We'd love to hear from you.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <InfoBadge
                icon={<MailIcon />}
                text="Direct email support"
              />

              <InfoBadge
                icon={<MessageIcon />}
                text="Product feedback"
              />

              <InfoBadge
                icon={<UsersIcon />}
                text="Talk to the team"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Main Content */}

      <section className="relative py-16 sm:py-16 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Contact Form */}

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d10]">
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-indigo-500/[0.045] blur-[70px]" />

              <div className="relative p-5 sm:p-7 lg:p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                      <MailIcon />
                    </div>

                    <div>
                      <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                        Send a message
                      </div>

                      <h2 className="mt-1 text-lg font-semibold text-white">
                        Contact our team
                      </h2>
                    </div>
                  </div>

                  <p className="mt-3 max-w-lg text-xs leading-5 text-zinc-600">
                    Tell us what you need help with and we'll get back to you
                    as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="Your name"
                      name="name"
                      type="text"
                      placeholder="Ankit Singh"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <InputField
                      label="Email address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <InputField
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your question, feedback or issue..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none rounded-xl border border-white/[0.07] bg-[#101013] px-4 py-3 text-xs leading-6 text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-indigo-500/40 focus:bg-[#111115] focus:ring-1 focus:ring-indigo-500/10"
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[9px] leading-4 text-zinc-700">
                      We respect your privacy and won't share your information.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-indigo-500/30"
                    >
                      {submitted ? "Message Sent" : "Send Message"}

                      {submitted ? <CheckIcon /> : <ArrowIcon />}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Team */}

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d10] p-5 sm:p-7">
                <div className="mb-6">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
                    The team
                  </div>

                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                    Meet the people behind CodeArena.
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-zinc-600">
                    We're building CodeArena to make coding practice more
                    competitive, measurable, and engaging.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <TeamMember
                    name="Ankit Singh Lodhi"
                    role="Developer"
                    email="ankitsinghlodhi01@gmail.com"
                    initials="AS"
                    accent="indigo"
                  />

                  <TeamMember
                    name="Asaraf Ali"
                    role="Developer"
                    email="asarafali066@gmail.com"
                    initials="AA"
                    accent="violet"
                  />
                </div>
              </div>

              {/* Email Card */}

              <div className="relative overflow-hidden rounded-2xl border border-indigo-400/10 bg-gradient-to-br from-indigo-500/[0.07] to-violet-500/[0.035] p-5 sm:p-7">
                <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-indigo-500/[0.07] blur-3xl" />

                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MessageIcon />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-white">
                    Prefer email?
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-zinc-600">
                    Reach the CodeArena team directly using either of the
                    emails below.
                  </p>

                  <div className="mt-4 space-y-2">
                    <EmailLink email="ankitsinghlodhi01@gmail.com" />
                    <EmailLink email="asarafali066@gmail.com" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Help Cards */}

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <HelpCard
              number="01"
              title="Found a bug?"
              description="Tell us what went wrong and help us improve CodeArena."
            />

            <HelpCard
              number="02"
              title="Have an idea?"
              description="Share feature ideas that can make the platform better."
            />

            <HelpCard
              number="03"
              title="Want to collaborate?"
              description="Reach out to the team and let's explore what we can build."
            />
          </div>
        </div>
      </section>

      {/* Bottom */}

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="text-[10px] text-zinc-700 transition hover:text-zinc-400"
          >
            ← Back to CodeArena
          </NavLink>

          <span className="text-[10px] text-zinc-700">
            Practice • Compete • Improve
          </span>
        </div>
      </div>
    </main>
  );
};

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-white/[0.07] bg-[#101013] px-4 py-3 text-xs text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-indigo-500/40 focus:bg-[#111115] focus:ring-1 focus:ring-indigo-500/10"
      />
    </div>
  );
};

const TeamMember = ({
  name,
  role,
  email,
  initials,
  accent,
}) => {
  const isIndigo = accent === "indigo";

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5 transition duration-300 hover:border-white/[0.1] hover:bg-white/[0.025]">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
          isIndigo
            ? "bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-400/15"
            : "bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/15"
        }`}
      >
        {initials}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-zinc-200">
          {name}
        </h3>

        <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-zinc-700">
          {role}
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-1 block truncate text-[10px] text-zinc-600 transition hover:text-indigo-400"
        >
          {email}
        </a>
      </div>

      <a
        href={`mailto:${email}`}
        aria-label={`Email ${name}`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-600 transition hover:border-indigo-400/20 hover:bg-indigo-500/10 hover:text-indigo-400"
      >
        <MailIcon />
      </a>
    </div>
  );
};

const EmailLink = ({ email }) => {
  return (
    <a
      href={`mailto:${email}`}
      className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#101013] px-3 py-2.5 transition hover:border-indigo-400/15 hover:bg-indigo-500/[0.03]"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/[0.07] text-indigo-400">
        <MailIcon />
      </div>

      <span className="min-w-0 flex-1 truncate text-[10px] text-zinc-500 transition group-hover:text-zinc-300">
        {email}
      </span>

      <ArrowIcon />
    </a>
  );
};

const InfoBadge = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
      <span className="text-indigo-400">{icon}</span>

      <span className="text-[9px] text-zinc-600">{text}</span>
    </div>
  );
};

const HelpCard = ({ number, title, description }) => {
  return (
    <div className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition duration-300 hover:border-indigo-400/15 hover:bg-indigo-500/[0.02]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] text-zinc-700">
          {number}
        </span>

        <span className="h-px w-8 bg-white/[0.06] transition group-hover:bg-indigo-400/30" />
      </div>

      <h3 className="mt-4 text-xs font-semibold text-zinc-300">
        {title}
      </h3>

      <p className="mt-1.5 text-[10px] leading-5 text-zinc-600">
        {description}
      </p>
    </div>
  );
};

const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7l9 6 9-6"
      />
    </svg>
  );
};

const MessageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.5a8.4 8.4 0 01-8.7 8.5 8.8 8.8 0 01-4-.9L3 21l1.7-4.6a8.4 8.4 0 01-.9-3.9A8.4 8.4 0 0121 11.5z"
      />
    </svg>
  );
};

const UsersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
      />
      <circle cx="9" cy="7" r="4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
      />
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 shrink-0 text-zinc-700 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-indigo-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-5-5l5 5-5 5"
      />
    </svg>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12l4 4L19 7"
      />
    </svg>
  );
};

export default ContactUs;