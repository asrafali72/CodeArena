const FeaturesSection = () => {
  const features = [
    {
      number: "01",
      title: "Smart Problem Library",
      description:
        "Solve carefully curated coding problems organized by difficulty, topic, patterns, and interview relevance.",
      tags: ["DSA", "Patterns", "Interview"],
      icon: "code",
      size: "large",
    },
    {
      number: "02",
      title: "Real-time 1v1 Battles",
      description:
        "Challenge developers, race against the clock, and compete for rating points in live coding battles.",
      tags: ["WebSockets", "Rating", "Live"],
      icon: "battle",
      size: "large",
    },
    {
      number: "03",
      title: "AI Code Review",
      description:
        "Get intelligent feedback on complexity, code quality, edge cases, and possible improvements.",
      tags: ["AI", "Analysis", "Feedback"],
      icon: "spark",
      size: "large",
    },
    {
      number: "04",
      title: "Competitive Contests",
      description:
        "Participate in timed contests and see where you stand against other developers.",
      tags: ["Contests", "Ranking"],
      icon: "trophy",
      size: "small",
    },
    {
      number: "05",
      title: "Performance Analytics",
      description:
        "Understand your solving speed, accuracy, topic mastery, and rating progression.",
      tags: ["Insights", "Progress"],
      icon: "chart",
      size: "small",
    },
    {
      number: "06",
      title: "Multiple Languages",
      description:
        "Practice in the programming language you are most comfortable with.",
      tags: ["C++", "Java", "Python", "JS"],
      icon: "terminal",
      size: "small",
    },
    {
      number: "07",
      title: "Instant Code Execution",
      description:
        "Run your solution against test cases and receive results without leaving the arena.",
      tags: ["Fast", "Test Cases"],
      icon: "bolt",
      size: "small",
    },
    {
      number: "08",
      title: "Global Leaderboard",
      description:
        "Climb the rankings, compare your rating, and compete with the CodeArena community.",
      tags: ["Ranking", "Community"],
      icon: "rank",
      size: "small",
    },
    {
      number: "09",
      title: "Developer Profiles",
      description:
        "Build a public coding profile that showcases your problem-solving journey and achievements.",
      tags: ["Profile", "Achievements"],
      icon: "user",
      size: "small",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090b] py-24 sm:py-28 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/[0.035] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-150px] h-[450px] w-[450px] rounded-full bg-violet-600/[0.035] blur-[130px]" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">

          <div>

            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">

              <span className="h-px w-6 bg-indigo-500/60" />

              Built for developers

            </div>


            <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

              Everything you need
              <span className="block text-zinc-500">
                to become better at coding.
              </span>

            </h2>

          </div>


          <p className="max-w-xl text-sm leading-7 text-zinc-500 lg:ml-auto">

            From your first solved problem to your hundredth battle,
            CodeArena gives you the tools to practice, compete, analyze,
            and improve.

          </p>

        </div>


        {/* =====================================================
            FEATURE GRID
        ====================================================== */}

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">


          {/* ===================================================
              LARGE FEATURES
          ==================================================== */}

          {features
            .filter((feature) => feature.size === "large")
            .map((feature) => (
              <LargeFeature
                key={feature.number}
                feature={feature}
              />
            ))}


          {/* ===================================================
              SMALL FEATURES
          ==================================================== */}

          {features
            .filter((feature) => feature.size === "small")
            .map((feature) => (
              <SmallFeature
                key={feature.number}
                feature={feature}
              />
            ))}

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row">

          <div className="flex items-center gap-3">

            <div className="flex -space-x-2">

              <Avatar letter="A" />
              <Avatar letter="R" />
              <Avatar letter="S" />
              <Avatar letter="K" />

            </div>


            <p className="text-xs text-zinc-600">

              Built for developers who want
              <span className="text-zinc-400">
                {" "}more than just solved counts.
              </span>

            </p>

          </div>


          <div className="flex items-center gap-2 text-[10px] text-zinc-600">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            Platform actively evolving

          </div>

        </div>

      </div>

    </section>
  );
};


/* =============================================================
   LARGE FEATURE
============================================================= */

const LargeFeature = ({ feature }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/20 hover:bg-[#0f0f13] sm:p-6 lg:col-span-2">

      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/[0.06] blur-3xl transition duration-500 group-hover:bg-indigo-500/[0.1]" />


      {/* Header */}
      <div className="relative flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-indigo-400 transition duration-300 group-hover:border-indigo-400/20 group-hover:bg-indigo-500/10">

          <FeatureIcon type={feature.icon} />

        </div>


        <span className="font-mono text-[9px] text-zinc-700">
          {feature.number}
        </span>

      </div>


      {/* Content */}
      <div className="relative mt-8 max-w-md">

        <h3 className="text-lg font-semibold tracking-tight text-white">
          {feature.title}
        </h3>

        <p className="mt-2 text-xs leading-6 text-zinc-600">
          {feature.description}
        </p>


        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">

          {feature.tags.map((tag) => (

            <span
              key={tag}
              className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-[8px] font-medium text-zinc-600"
            >
              {tag}
            </span>

          ))}

        </div>

      </div>


      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-indigo-500/70 to-violet-500/30 transition-all duration-500 group-hover:w-full" />

    </div>
  );
};


/* =============================================================
   SMALL FEATURE
============================================================= */

const SmallFeature = ({ feature }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.11] hover:bg-white/[0.025]">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-500 transition duration-300 group-hover:border-indigo-400/15 group-hover:bg-indigo-500/10 group-hover:text-indigo-400">

          <FeatureIcon type={feature.icon} />

        </div>


        <span className="font-mono text-[8px] text-zinc-800">
          {feature.number}
        </span>

      </div>


      <h3 className="mt-6 text-sm font-semibold text-zinc-200">
        {feature.title}
      </h3>


      <p className="mt-2 text-[10px] leading-5 text-zinc-600">
        {feature.description}
      </p>


      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">

        {feature.tags.map((tag) => (

          <span
            key={tag}
            className="rounded border border-white/[0.05] px-1.5 py-0.5 text-[7px] text-zinc-700"
          >
            {tag}
          </span>

        ))}

      </div>

    </div>
  );
};


/* =============================================================
   FEATURE ICON
============================================================= */

const FeatureIcon = ({ type }) => {

  const icons = {

    code: (
      <>
        <path d="M8 9l-4 3 4 3" />
        <path d="M16 9l4 3-4 3" />
        <path d="M14 5l-4 14" />
      </>
    ),

    battle: (
      <>
        <path d="M14.5 5.5l4 4" />
        <path d="M5.5 18.5l4-4" />
        <path d="M9.5 9.5l5 5" />
        <path d="M14.5 9.5l-5 5" />
        <path d="M18 3l3 3-3 3" />
        <path d="M6 15l-3 3 3 3" />
      </>
    ),

    spark: (
      <>
        <path d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3z" />
        <path d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17z" />
      </>
    ),

    trophy: (
      <>
        <path d="M8 4h8v6a4 4 0 01-8 0V4z" />
        <path d="M8 6H4v2a4 4 0 004 4" />
        <path d="M16 6h4v2a4 4 0 01-4 4" />
        <path d="M12 14v5" />
        <path d="M8 21h8" />
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

    terminal: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 10l3 2-3 2" />
        <path d="M13 15h4" />
      </>
    ),

    bolt: (
      <>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </>
    ),

    rank: (
      <>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M8 4h8v6a4 4 0 01-8 0V4z" />
        <path d="M8 6H4v2a4 4 0 004 4" />
        <path d="M16 6h4v2a4 4 0 01-4 4" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21a7 7 0 0114 0" />
      </>
    ),

  };


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
};


/* =============================================================
   AVATAR
============================================================= */

const Avatar = ({ letter }) => {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#09090b] bg-gradient-to-br from-zinc-700 to-zinc-800 text-[8px] font-semibold text-zinc-300">
      {letter}
    </div>
  );
};


export default FeaturesSection;