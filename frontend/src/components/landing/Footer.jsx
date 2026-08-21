import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#070709]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="relative overflow-hidden border-b border-white/[0.06] py-20 sm:py-24">

          {/* CTA glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.06] blur-[100px]" />


          <div className="relative mx-auto max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/15 bg-indigo-500/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-indigo-300">

              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

              Your next problem is waiting

            </div>


            <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

              Ready to enter
              <span className="block bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                the arena?
              </span>

            </h2>


            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">

              Start solving problems, challenge other developers,
              and turn every submission into progress.

            </p>


            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <NavLink
                to="/signup"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(99,102,241,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-[0_14px_50px_rgba(99,102,241,0.28)]"
              >
                Start Coding Free

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>

              </NavLink>


              <NavLink
                to="/login"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-zinc-400 transition hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white"
              >
                Sign In
              </NavLink>

            </div>

          </div>

        </div>


        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">


          {/* =================================================
              BRAND
          ================================================== */}

          <div className="max-w-sm">

            <NavLink
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/15 transition duration-300 group-hover:scale-105">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l3 3-3 3m5 0h3M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14"
                  />
                </svg>

              </div>


              <div>

                <div className="text-[17px] font-bold tracking-tight text-white">
                  Code<span className="text-indigo-400">Arena</span>
                </div>

                <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                  Practice • Compete • Improve
                </div>

              </div>

            </NavLink>


            <p className="mt-6 text-xs leading-6 text-zinc-600">

              A developer-focused platform for practicing DSA,
              competing in coding battles, and building stronger
              problem-solving skills.

            </p>


            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-400/10 bg-emerald-500/[0.035] px-3 py-2">

              <span className="relative flex h-1.5 w-1.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />

              </span>

              <span className="text-[9px] text-emerald-400">
                All systems operational
              </span>

            </div>

          </div>


          {/* =================================================
              PRODUCT
          ================================================== */}

          <FooterColumn title="Product">

            <FooterLink to="/problem" label="Problems" />

            <FooterLink to="/battles" label="1v1 Battles" />

            <FooterLink to="/contests" label="Contests" />

            <FooterLink to="/leaderboard" label="Leaderboard" />

            <FooterLink to="/analytics" label="Analytics" />

          </FooterColumn>


          {/* =================================================
              RESOURCES
          ================================================== */}

          <FooterColumn title="Resources">

            <FooterLink
              to="/problems"
              label="Problem Library"
            />

            <FooterLink
              to="/discussions"
              label="Discussions"
            />

            <FooterLink
              to="/interview"
              label="Interview Prep"
            />

            <FooterLink
              to="/docs"
              label="Documentation"
            />

            <FooterLink
              to="/help"
              label="Help Center"
            />

          </FooterColumn>


          {/* =================================================
              COMPANY
          ================================================== */}

          <FooterColumn title="CodeArena">

            <FooterLink
              to="/contact"
              label="About"
            />

            <FooterLink
              to="/contact"
              label="Contact"
            />

            <FooterLink
              to="/privacy"
              label="Privacy"
            />

            <FooterLink
              to="/terms"
              label="Terms"
            />


            {/* Social */}
            <div className="mt-5 flex items-center gap-2">

              <SocialButton label="GH">
                <GithubIcon />
              </SocialButton>

              <SocialButton label="LI">
                <LinkedinIcon />
              </SocialButton>

              <SocialButton label="X">
                <XIcon />
              </SocialButton>

            </div>

          </FooterColumn>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-zinc-700">
            © {new Date().getFullYear()} CodeArena. All rights reserved.
          </p>


          <div className="flex items-center gap-5">

            <span className="text-[10px] text-zinc-700">
              Built for developers
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-800" />

            <span className="flex items-center gap-1.5 text-[10px] text-zinc-700">

              Made with

              <span className="text-indigo-400">
                {" "}
                &lt;/&gt;
              </span>

            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};


/* =============================================================
   FOOTER COLUMN
============================================================= */

const FooterColumn = ({ title, children }) => {
  return (
    <div>

      <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {children}
      </div>

    </div>
  );
};


/* =============================================================
   FOOTER LINK
============================================================= */

const FooterLink = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className="group flex w-fit items-center gap-1 text-xs text-zinc-600 transition hover:text-zinc-200"
    >

      {label}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
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

    </NavLink>
  );
};


/* =============================================================
   SOCIAL BUTTON
============================================================= */

const SocialButton = ({ children }) => {
  return (
    <button
      type="button"
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-600 transition hover:border-white/[0.12] hover:bg-white/[0.05] hover:text-white"
    >
      {children}
    </button>
  );
};


/* =============================================================
   ICONS
============================================================= */

const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .7A11.3 11.3 0 0012 23c6.2 0 11.3-5 11.3-11.3S18.2.7 12 .7zm0 20.5c-.5 0-1-.1-1.4-.1v-4c0-1.3-.5-2.2-1.2-2.7.3-.1.7-.1 1.1-.1 1.8 0 2.8.8 3.4 1.7.5.8 1 1.8 2.3 1.8.8 0 1.3-.5 1.3-1.1 0-.6-.5-.9-1.1-.9-.7 0-1.2-.4-1.5-1.1-.3-.7-.7-1.2-1.3-1.6 2.2-.2 3.5-1.3 3.5-3.3 0-1-.4-1.8-1-2.5.2-.5.2-1.5-.1-2.5-.8.2-1.7.6-2.3 1.1-.8-.3-1.7-.5-2.6-.5s-1.8.2-2.6.5c-.6-.5-1.5-.9-2.3-1.1-.3 1-.3 2-.1 2.5-.6.7-1 1.5-1 2.5 0 2 1.3 3.1 3.5 3.3-.6.4-1 .9-1.3 1.6-.3.7-.8 1.1-1.5 1.1-.6 0-1.1.3-1.1.9 0 .6.5 1.1 1.3 1.1 1.3 0 1.8-1 2.3-1.8.3-.5.7-.9 1.1-1.2v4.2c-.5.1-1 .1-1.5.1z" />
    </svg>
  );
};


const LinkedinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M5.2 3.3a2.2 2.2 0 110 4.4 2.2 2.2 0 010-4.4zM3.3 9h3.8v11.7H3.3V9zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7v6.3h-3.8v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.5V9z" />
    </svg>
  );
};


const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.2-8.3L2.8 2h6.4l4.4 5.8L18.9 2zm-1.1 17.9h1.7L8.3 3.9H6.5l11.3 16z" />
    </svg>
  );
};


export default Footer;