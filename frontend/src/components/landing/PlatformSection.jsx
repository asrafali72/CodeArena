const PlatformSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090b] py-24 sm:py-28 lg:py-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">
            Everything in one arena
          </div>

          <h2 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            More than a problem
            <span className="text-zinc-500"> solving platform.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
            CodeArena brings practice, competition, feedback and
            performance tracking together in one developer-focused
            platform.
          </p>

        </div>


        {/* =====================================================
            PRODUCT PREVIEW
        ====================================================== */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0d0d10] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

          {/* Browser Header */}
          <div className="flex h-12 items-center justify-between border-b border-white/[0.06] bg-[#111114] px-4 sm:px-5">

            <div className="flex items-center gap-1.5">

              <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

            </div>

            <div className="hidden rounded-md border border-white/[0.05] bg-white/[0.02] px-4 py-1 text-[10px] text-zinc-600 sm:block">
              app.codearena.dev
            </div>

            <div className="h-5 w-16" />

          </div>


          {/* Product */}
          <div className="grid min-h-[560px] lg:grid-cols-[190px_1fr]">

            {/* =================================================
                SIDEBAR
            ================================================== */}

            <div className="hidden border-r border-white/[0.06] bg-[#0b0b0e] p-4 lg:block">

              <div className="mb-7 flex items-center gap-2 px-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l3 3-3 3m5 0h3M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                </div>

                <span className="text-xs font-bold text-white">
                  CodeArena
                </span>

              </div>


              <div className="space-y-1">

                <SidebarItem
                  active
                  icon="grid"
                  label="Overview"
                />

                <SidebarItem
                  icon="code"
                  label="Problems"
                />

                <SidebarItem
                  icon="swords"
                  label="1v1 Battles"
                />

                <SidebarItem
                  icon="trophy"
                  label="Contests"
                />

                <SidebarItem
                  icon="chart"
                  label="Analytics"
                />

              </div>


              <div className="my-6 h-px bg-white/[0.05]" />


              <div className="px-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
                Your progress
              </div>

              <div className="mt-4 space-y-4 px-2">

                <ProgressItem
                  label="Problems"
                  value="127"
                />

                <ProgressItem
                  label="Current streak"
                  value="12 days"
                />

                <ProgressItem
                  label="Rating"
                  value="1,542"
                />

              </div>

            </div>


            {/* =================================================
                MAIN DASHBOARD
            ================================================== */}

            <div className="p-5 sm:p-7 lg:p-8">

              {/* Header */}
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>

                  <div className="text-xs text-zinc-600">
                    Friday, August 21
                  </div>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Welcome back, developer.
                  </h3>

                </div>


                <div className="flex items-center gap-2">

                  <div className="flex items-center gap-2 rounded-lg border border-emerald-400/10 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-400">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    12 day streak

                  </div>

                </div>

              </div>


              {/* =================================================
                  TOP STAT CARDS
              ================================================== */}

              <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">

                <StatCard
                  label="Solved"
                  value="127"
                  detail="+12 this week"
                  icon="check"
                />

                <StatCard
                  label="Rating"
                  value="1,542"
                  detail="Top 18%"
                  icon="trophy"
                />

                <StatCard
                  label="Battles"
                  value="24"
                  detail="16 wins"
                  icon="swords"
                />

                <StatCard
                  label="Accuracy"
                  value="78%"
                  detail="+4.2%"
                  icon="target"
                />

              </div>


              {/* =================================================
                  MAIN GRID
              ================================================== */}

              <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">


                {/* ================================
                    DAILY CHALLENGE
                ================================= */}

                <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111114] p-5 sm:p-6">

                  <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-indigo-500/[0.07] blur-3xl" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
                          Recommended for you
                        </div>

                        <h4 className="mt-2 text-lg font-semibold text-white">
                          Today's challenge
                        </h4>
                      </div>

                      <div className="rounded-lg border border-yellow-400/10 bg-yellow-400/[0.05] px-2.5 py-1.5 text-[9px] font-semibold text-yellow-400">
                        MEDIUM
                      </div>

                    </div>


                    <div className="mt-6">

                      <div className="text-sm font-medium text-zinc-200">
                        Longest Consecutive Sequence
                      </div>

                      <p className="mt-2 max-w-xl text-xs leading-6 text-zinc-600">
                        Find the length of the longest consecutive elements
                        sequence in an unsorted array.
                      </p>

                    </div>


                    <div className="mt-6 flex flex-wrap items-center gap-2">

                      <span className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[9px] text-zinc-500">
                        Arrays
                      </span>

                      <span className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[9px] text-zinc-500">
                        Hash Table
                      </span>

                      <span className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[9px] text-zinc-500">
                        O(n)
                      </span>

                    </div>


                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.05] pt-5">

                      <div className="text-[10px] text-zinc-600">
                        Estimated time{" "}
                        <span className="text-zinc-400">
                          25 min
                        </span>
                      </div>

                      <button className="rounded-lg bg-indigo-500 px-3.5 py-2 text-[10px] font-semibold text-white transition hover:bg-indigo-400">
                        Solve Problem
                      </button>

                    </div>

                  </div>

                </div>


                {/* ================================
                    SKILL PROFILE
                ================================= */}

                <div className="rounded-2xl border border-white/[0.07] bg-[#111114] p-5 sm:p-6">

                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    Skill profile
                  </div>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    Your strengths
                  </h4>


                  <div className="mt-6 space-y-5">

                    <SkillBar
                      label="Arrays"
                      value="92%"
                      width="92%"
                    />

                    <SkillBar
                      label="Strings"
                      value="84%"
                      width="84%"
                    />

                    <SkillBar
                      label="Trees"
                      value="68%"
                      width="68%"
                    />

                    <SkillBar
                      label="Graphs"
                      value="51%"
                      width="51%"
                    />

                    <SkillBar
                      label="Dynamic Programming"
                      value="42%"
                      width="42%"
                    />

                  </div>


                  <div className="mt-7 rounded-xl border border-indigo-400/10 bg-indigo-500/[0.04] p-3">

                    <div className="text-[9px] uppercase tracking-[0.16em] text-indigo-400">
                      AI insight
                    </div>

                    <p className="mt-1.5 text-[10px] leading-5 text-zinc-500">
                      Your graph and DP performance has room to improve.
                      We recommend focusing on these topics next.
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  BOTTOM FEATURES
              ================================================== */}

              <div className="mt-5 grid gap-3 md:grid-cols-3">

                <MiniFeature
                  icon="swords"
                  title="1v1 Battles"
                  description="Challenge another developer and race to solve the problem first."
                />

                <MiniFeature
                  icon="spark"
                  title="AI Code Review"
                  description="Understand complexity, code quality and possible improvements."
                />

                <MiniFeature
                  icon="chart"
                  title="Performance"
                  description="Track your solving patterns and discover your weak topics."
                />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-16 max-w-2xl text-center">

          <p className="text-sm leading-7 text-zinc-600">
            One platform to practice alone,
            compete against others, and continuously
            understand how you're becoming a better developer.
          </p>

        </div>

      </div>

    </section>
  );
};


/* =============================================================
   SIDEBAR ITEM
============================================================= */

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[10px] transition ${
        active
          ? "bg-indigo-500/10 text-indigo-300"
          : "text-zinc-600"
      }`}
    >

      <SidebarIcon type={icon} />

      <span>{label}</span>

    </div>
  );
};


/* =============================================================
   SIDEBAR ICON
============================================================= */

const SidebarIcon = ({ type }) => {

  const icons = {

    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),

    code: (
      <>
        <path d="M8 9l-4 3 4 3" />
        <path d="M16 9l4 3-4 3" />
        <path d="M14 5l-4 14" />
      </>
    ),

    swords: (
      <>
        <path d="M14.5 5.5l4 4" />
        <path d="M5.5 18.5l4-4" />
        <path d="M9.5 9.5l5 5" />
        <path d="M14.5 9.5l-5 5" />
      </>
    ),

    trophy: (
      <>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M8 4h8v6a4 4 0 01-8 0V4z" />
        <path d="M8 6H4v2a4 4 0 004 4" />
        <path d="M16 6h4v2a4 4 0 01-4 4" />
      </>
    ),

    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-5" />
        <path d="M12 16V8" />
        <path d="M16 16v-9" />
      </>
    ),

  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      {icons[type]}
    </svg>
  );
};


/* =============================================================
   STAT CARD
============================================================= */

const StatCard = ({ label, value, detail, icon }) => {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4">

      <div className="flex items-center justify-between">

        <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
          {label}
        </span>

        <SidebarIcon type={icon === "check" ? "grid" : icon} />

      </div>

      <div className="mt-3 text-xl font-bold tracking-tight text-white">
        {value}
      </div>

      <div className="mt-1 text-[9px] text-emerald-400">
        {detail}
      </div>

    </div>
  );
};


/* =============================================================
   PROGRESS ITEM
============================================================= */

const ProgressItem = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between">

      <span className="text-[10px] text-zinc-600">
        {label}
      </span>

      <span className="text-[10px] font-medium text-zinc-400">
        {value}
      </span>

    </div>
  );
};


/* =============================================================
   SKILL BAR
============================================================= */

const SkillBar = ({ label, value, width }) => {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-[10px] text-zinc-500">
          {label}
        </span>

        <span className="text-[10px] font-medium text-zinc-300">
          {value}
        </span>

      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">

        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-400"
          style={{ width }}
        />

      </div>

    </div>
  );
};


/* =============================================================
   MINI FEATURE
============================================================= */

const MiniFeature = ({ icon, title, description }) => {
  return (
    <div className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition duration-300 hover:border-indigo-400/15 hover:bg-indigo-500/[0.025]">

      <div className="flex items-start gap-3">

        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025] text-indigo-400 transition group-hover:border-indigo-400/20 group-hover:bg-indigo-500/10">

          <SidebarIcon type={icon === "spark" ? "trophy" : icon} />

        </div>

        <div>

          <h5 className="text-xs font-semibold text-zinc-200">
            {title}
          </h5>

          <p className="mt-1.5 text-[10px] leading-5 text-zinc-600">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
};


export default PlatformSection;