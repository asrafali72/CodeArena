import { NavLink } from "react-router";

const HeroSection = () => {
  return (
   <section className="relative isolate overflow-hidden bg-[#09090b]">

    {/* Background */}

    <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-[130px]" />

    <div className="pointer-events-none absolute right-[-220px] top-[15%] h-[450px] w-[450px] rounded-full bg-violet-600/[0.05] blur-[120px]" />

    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Hero */}

    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-14">

      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

        {/* Left Content */}

        <div className="max-w-2xl pt-2 lg:pt-8">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/[0.07] px-3.5 py-1.5 text-xs font-medium text-indigo-300 shadow-[0_0_30px_rgba(99,102,241,0.08)]">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </span>

              The arena for serious developers

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>

            </div>


            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-[68px]">

              Don't just solve

              <span className="block bg-gradient-to-r from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text pb-2 text-transparent">
                coding problems.
              </span>

              <span className="block">
                Master the arena.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Practice DSA, sharpen your problem-solving skills, compete
              head-to-head with developers, and understand exactly where
              you're improving.
            </p>


            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition duration-300 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white"
              >
                Sign in

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H3m0 0l4-4m-4 4l4 4m6-9h1a3 3 0 013 3v1m0 2v1a3 3 0 01-3 3h-1"
                  />
                </svg>
              </NavLink>

            </div>


            {/* Trust / mini stats */}
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-500">

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l4 4L19 6"
                  />
                </svg>

                Free to start
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>

                Instant code execution
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5V4H2v16h5m10 0v-5H7v5m10 0H7"
                  />
                </svg>

                Built for developers
              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT — CODE EDITOR VISUAL
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">

            {/* Outer glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-indigo-500/[0.06] blur-3xl" />


            {/* Floating top badge */}
            <div className="absolute -right-3 -top-5 z-20 hidden rounded-xl border border-emerald-400/15 bg-[#111113]/90 px-3.5 py-2.5 shadow-xl shadow-black/30 backdrop-blur-xl sm:block">

              <div className="flex items-center gap-2.5">

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-[10px] text-zinc-500">
                    Submission
                  </div>

                  <div className="text-xs font-semibold text-emerald-400">
                    Accepted
                  </div>
                </div>

              </div>

            </div>


            {/* Editor */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0d10] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

              {/* Window Header */}
              <div className="flex h-12 items-center justify-between border-b border-white/[0.06] bg-[#111114] px-4">

                <div className="flex items-center gap-1.5">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                </div>


                <div className="rounded-md border border-white/[0.06] bg-white/[0.025] px-3 py-1 text-[10px] text-zinc-500">
                  solution.cpp
                </div>


                <div className="text-[10px] text-zinc-600">
                  C++
                </div>

              </div>


              {/* Editor Body */}
              <div className="flex min-h-[390px]">

                {/* Line numbers */}
                <div className="w-11 shrink-0 border-r border-white/[0.04] bg-[#0b0b0e] py-5 text-right text-[11px] leading-[1.9rem] text-zinc-700">

                  {Array.from({ length: 14 }, (_, index) => (
                    <div key={index}>
                      {index + 1}
                    </div>
                  ))}

                </div>


                {/* Code */}
                <div className="overflow-hidden px-5 py-5 font-mono text-[11px] leading-[1.9rem] sm:text-xs">

                  <div>
                    <span className="text-violet-400">#include</span>{" "}
                    <span className="text-emerald-300">
                      &lt;bits/stdc++.h&gt;
                    </span>
                  </div>

                  <div className="mt-1">
                    <span className="text-violet-400">using</span>{" "}
                    <span className="text-blue-300">namespace</span>{" "}
                    <span className="text-zinc-300">std;</span>
                  </div>

                  <div className="mt-5">
                    <span className="text-blue-300">class</span>{" "}
                    <span className="text-yellow-300">Solution</span>
                    <span className="text-zinc-300"> {"{"}</span>
                  </div>

                  <div className="pl-5">
                    <span className="text-blue-300">public</span>
                    <span className="text-zinc-300">:</span>
                  </div>

                  <div className="pl-10">
                    <span className="text-blue-300">vector</span>
                    <span className="text-zinc-400">
                      &lt;int&gt;
                    </span>{" "}
                    <span className="text-yellow-300">twoSum</span>
                    <span className="text-zinc-300">
                      (vector&lt;int&gt;&amp; nums, int target) {"{"}
                    </span>
                  </div>

                  <div className="pl-15">
                    <span className="text-blue-300">unordered_map</span>
                    <span className="text-zinc-400">
                      &lt;int, int&gt;
                    </span>{" "}
                    <span className="text-zinc-300">seen;</span>
                  </div>

                  <div className="pl-15">
                    <span className="text-blue-300">for</span>{" "}
                    <span className="text-zinc-300">
                      (int i = 0; i &lt; nums.size(); i++) {"{"}
                    </span>
                  </div>

                  <div className="pl-20">
                    <span className="text-blue-300">int</span>{" "}
                    <span className="text-zinc-300">
                      need = target - nums[i];
                    </span>
                  </div>

                  <div className="pl-20">
                    <span className="text-blue-300">if</span>
                    <span className="text-zinc-300">
                      {" "}
                      (seen.count(need)) {"{"}
                    </span>
                  </div>

                  <div className="pl-25">
                    <span className="text-blue-300">return</span>{" "}
                    <span className="text-zinc-300">
                      {"{"}seen[need], i{"}"};
                    </span>
                  </div>

                  <div className="pl-20 text-zinc-300">
                    {"}"}
                  </div>

                  <div className="pl-20">
                    <span className="text-zinc-300">
                      seen[nums[i]] = i;
                    </span>
                  </div>

                  <div className="pl-15 text-zinc-300">
                    {"}"}
                  </div>

                  <div className="pl-15">
                    <span className="text-blue-300">return</span>{" "}
                    <span className="text-zinc-300">{"{}"};</span>
                  </div>

                  <div className="pl-10 text-zinc-300">
                    {"}"}
                  </div>

                  <div className="text-zinc-300">
                    {"};"}
                  </div>

                </div>

              </div>


              {/* Bottom Status Bar */}
              <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#101013] px-4 py-3">

                <div className="flex items-center gap-4">

                  <div className="flex items-center gap-2 text-[10px] text-zinc-500">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    All tests passed

                  </div>

                  <span className="hidden text-[10px] text-zinc-700 sm:block">
                    12 / 12
                  </span>

                </div>


                <div className="flex items-center gap-3 text-[10px] text-zinc-500">

                  <span>
                    Runtime{" "}
                    <span className="text-zinc-300">84 ms</span>
                  </span>

                  <span className="text-zinc-700">•</span>

                  <span>
                    Memory{" "}
                    <span className="text-zinc-300">42 MB</span>
                  </span>

                </div>

              </div>

            </div>


            {/* Floating bottom card */}
            <div className="absolute -bottom-7 -left-4 z-20 hidden rounded-xl border border-white/[0.08] bg-[#111113]/95 p-3.5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>

                  <div className="text-[10px] text-zinc-500">
                    Problem solved
                  </div>

                  <div className="text-xs font-semibold text-white">
                    Two Sum
                  </div>

                </div>

                <div className="ml-2 rounded-md bg-emerald-500/10 px-2 py-1 text-[9px] font-semibold text-emerald-400">
                  EASY
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            SCROLL INDICATOR
        ========================================================== */}

        <div className="mt-16 flex justify-center lg:mt-20">

          <div className="flex flex-col items-center gap-2 text-zinc-600">

            <span className="text-[9px] uppercase tracking-[0.3em]">
              Explore
            </span>

            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/[0.08] p-1.5">
              <div className="h-1.5 w-1 rounded-full bg-zinc-500 animate-bounce" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;