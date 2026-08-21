const BattleSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090b] py-24 sm:py-28 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-250px] top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-600/[0.055] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-250px] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.045] blur-[130px]" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.75fr]">

          <div>

            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">

              <span className="h-px w-6 bg-indigo-500/60" />

              Real-time competition

            </div>


            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

              Don't practice alone.

              <span className="block text-zinc-500">
                Enter the arena.
              </span>

            </h2>

          </div>


          <p className="max-w-xl text-sm leading-7 text-zinc-500 lg:ml-auto">

            Challenge another developer, solve the same problem under
            pressure, and prove your problem-solving skills in real time.

          </p>

        </div>


        {/* =====================================================
            BATTLE INTERFACE
        ====================================================== */}

        <div className="relative mt-14">


          {/* Outer glow */}
          <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-indigo-500/[0.035] blur-3xl" />


          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d10] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">


            {/* =================================================
                TOP BAR
            ================================================== */}

            <div className="flex flex-col gap-4 border-b border-white/[0.06] bg-[#111114] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">


              {/* Battle ID */}

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10">

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
                      d="M14.5 5.5l4 4M5.5 18.5l4-4M9.5 9.5l5 5M14.5 9.5l-5 5"
                    />
                  </svg>

                </div>


                <div>

                  <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                    Live battle
                  </div>

                  <div className="text-xs font-semibold text-zinc-200">
                    Arena #83921
                  </div>

                </div>

              </div>


              {/* Timer */}

              <div className="flex items-center gap-4">

                <div className="hidden text-[9px] uppercase tracking-[0.16em] text-zinc-700 sm:block">
                  Time remaining
                </div>


                <div className="flex items-center gap-2 rounded-lg border border-red-400/10 bg-red-500/[0.05] px-3 py-2">

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />

                  <span className="font-mono text-xs font-semibold text-red-400">
                    18:42
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                PROBLEM BAR
            ================================================== */}

            <div className="border-b border-white/[0.06] bg-[#0f0f12] px-5 py-4 sm:px-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <h3 className="text-sm font-semibold text-white">
                      Longest Substring Without Repeating Characters
                    </h3>

                    <span className="rounded-md border border-yellow-400/10 bg-yellow-400/[0.05] px-2 py-1 text-[8px] font-semibold text-yellow-400">
                      MEDIUM
                    </span>

                  </div>

                  <p className="mt-1 text-[10px] text-zinc-600">
                    Find the length of the longest substring without repeating characters.
                  </p>

                </div>


                <div className="flex flex-wrap items-center gap-2 text-[9px] text-zinc-600">

                  <span className="rounded-md border border-white/[0.05] px-2 py-1">
                    Strings
                  </span>

                  <span className="rounded-md border border-white/[0.05] px-2 py-1">
                    Hash Table
                  </span>

                  <span className="rounded-md border border-white/[0.05] px-2 py-1">
                    Sliding Window
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                PLAYERS
                IMPORTANT:
                Only the two PlayerPanels are grid children.
                VS is absolutely positioned.
            ================================================== */}

            <div className="relative grid lg:grid-cols-2">


              {/* =================================================
                  PLAYER 1
              ================================================== */}

              <PlayerPanel
                name="Ankit"
                rating="1,542"
                initials="A"
                status="Coding"
                progress="12 / 12"
                runtime="86 ms"
                accent="indigo"
                code={[
                  "class Solution {",
                  "public:",
                  "    int lengthOfLongestSubstring",
                  "        (string s) {",
                  "",
                  "        unordered_map<char, int> seen;",
                  "        int left = 0, best = 0;",
                  "",
                  "        for (int right = 0;",
                  "             right < s.size(); right++) {",
                  "",
                  "            if (seen.count(s[right]))",
                  "                left = max(left,",
                  "                    seen[s[right]] + 1);",
                  "",
                  "            seen[s[right]] = right;",
                  "            best = max(best, right-left+1);",
                  "        }",
                  "",
                  "        return best;",
                  "    }",
                  "};",
                ]}
              />


              {/* =================================================
                  PLAYER 2
              ================================================== */}

              <PlayerPanel
                name="Rahul"
                rating="1,498"
                initials="R"
                status="Running tests..."
                progress="10 / 12"
                runtime="112 ms"
                accent="violet"
                code={[
                  "class Solution {",
                  "public:",
                  "    int lengthOfLongestSubstring",
                  "        (string s) {",
                  "",
                  "        set<char> window;",
                  "        int left = 0;",
                  "        int answer = 0;",
                  "",
                  "        for (int right = 0;",
                  "             right < s.size(); right++) {",
                  "",
                  "            while (window.count(s[right]))",
                  "                window.erase(s[left++]);",
                  "",
                  "            window.insert(s[right]);",
                  "            answer = max(answer,",
                  "                right-left+1);",
                  "        }",
                  "",
                  "        return answer;",
                  "    }",
                  "};",
                ]}
              />


              {/* =================================================
                  VS DIVIDER

                  This is absolute so it DOES NOT become
                  a third grid item.
              ================================================== */}

              <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block">

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-[#151519] text-[9px] font-bold text-zinc-400 shadow-2xl shadow-black/60">

                  {/* Glow */}

                  <div className="absolute -inset-2 -z-10 rounded-full bg-indigo-500/[0.08] blur-md" />

                  VS

                </div>

              </div>

            </div>


            {/* =================================================
                BATTLE FOOTER
            ================================================== */}

            <div className="border-t border-white/[0.06] bg-[#101013] px-5 py-4 sm:px-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">


                {/* Left */}

                <div className="flex items-center gap-5">

                  <div className="flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-[10px] text-zinc-500">
                      You
                    </span>

                    <span className="text-[10px] font-medium text-emerald-400">
                      12/12
                    </span>

                  </div>


                  <div className="flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

                    <span className="text-[10px] text-zinc-500">
                      Opponent
                    </span>

                    <span className="text-[10px] font-medium text-yellow-400">
                      10/12
                    </span>

                  </div>

                </div>


                {/* Right */}

                <div className="flex items-center gap-3">

                  <span className="text-[9px] text-zinc-700">
                    Real-time sync
                  </span>

                  <div className="flex items-center gap-1.5 rounded-md border border-emerald-400/10 bg-emerald-500/[0.04] px-2 py-1">

                    <span className="h-1 w-1 rounded-full bg-emerald-400" />

                    <span className="text-[9px] text-emerald-400">
                      Connected
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              BATTLE FLOATING STATS
          ================================================== */}

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

            <BattleStat
              value="1v1"
              label="Real-time battles"
            />

            <BattleStat
              value="< 100ms"
              label="Live synchronization"
            />

            <BattleStat
              value="1,542"
              label="Current rating"
            />

            <BattleStat
              value="78%"
              label="Win rate"
            />

          </div>

        </div>


        {/* =====================================================
            BOTTOM CONTENT
        ====================================================== */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">


          {/* Left */}

          <div>

            <div className="mb-4 flex items-center gap-2">

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10">

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
                    d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z"
                  />
                </svg>

              </div>

              <span className="text-xs font-semibold text-indigo-400">
                Built for pressure
              </span>

            </div>


            <h3 className="text-2xl font-bold tracking-[-0.025em] text-white sm:text-3xl">

              Practice is different

              <span className="text-zinc-500">
                {" "}when someone is watching.
              </span>

            </h3>

          </div>


          {/* Right */}

          <div className="grid gap-3 sm:grid-cols-2">

            <BattleFeature
              title="Real-time"
              description="Both players work against the same clock and problem."
            />

            <BattleFeature
              title="Skill rating"
              description="Every battle contributes to your competitive rating."
            />

            <BattleFeature
              title="Instant results"
              description="The server evaluates submissions and determines the winner."
            />

            <BattleFeature
              title="Competitive"
              description="Climb the rankings and prove yourself against other developers."
            />

          </div>

        </div>

      </div>

    </section>
  );
};


/* =============================================================
   PLAYER PANEL
============================================================= */

const PlayerPanel = ({
  name,
  rating,
  initials,
  status,
  progress,
  runtime,
  accent,
  code,
}) => {

  const isIndigo = accent === "indigo";

  return (
    <div
      className={`relative overflow-hidden ${
        isIndigo
          ? "border-b border-white/[0.06] lg:border-b-0 lg:border-r"
          : ""
      } border-white/[0.06]`}
    >


      {/* =================================================
          PLAYER HEADER
      ================================================== */}

      <div className="flex items-center justify-between border-b border-white/[0.05] bg-[#101013] px-5 py-4">

        <div className="flex items-center gap-3">

          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${
              isIndigo
                ? "bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-400/15"
                : "bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/15"
            }`}
          >
            {initials}
          </div>


          <div>

            <div className="flex items-center gap-2">

              <span className="text-xs font-semibold text-white">
                {name}
              </span>

              <span className="text-[9px] text-zinc-700">
                ★ {rating}
              </span>

            </div>


            <div className="mt-1 flex items-center gap-1.5">

              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  status === "Coding"
                    ? "bg-indigo-400"
                    : "animate-pulse bg-yellow-400"
                }`}
              />

              <span className="text-[9px] text-zinc-600">
                {status}
              </span>

            </div>

          </div>

        </div>


        <div className="text-right">

          <div className="text-[9px] text-zinc-700">
            Tests
          </div>

          <div
            className={`mt-1 text-xs font-semibold ${
              progress === "12 / 12"
                ? "text-emerald-400"
                : "text-yellow-400"
            }`}
          >
            {progress}
          </div>

        </div>

      </div>


      {/* =================================================
          CODE EDITOR
      ================================================== */}

      <div className="min-h-[430px] bg-[#0b0b0e] p-4">

        <div className="flex h-full font-mono text-[9px] leading-[1.85rem] sm:text-[10px]">


          {/* Line numbers */}

          <div className="w-7 shrink-0 select-none text-right text-zinc-800">

            {code.map((_, index) => (
              <div key={index}>
                {index + 1}
              </div>
            ))}

          </div>


          {/* Code */}

          <div className="ml-4 overflow-hidden whitespace-nowrap text-zinc-500">

            {code.map((line, index) => {

              const highlighted = highlightCode(line);

              return (
                <div key={index}>
                  {highlighted}
                </div>
              );

            })}

          </div>

        </div>

      </div>


      {/* =================================================
          EDITOR FOOTER
      ================================================== */}

      <div className="flex items-center justify-between border-t border-white/[0.05] bg-[#101013] px-4 py-3">

        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="text-[9px] text-zinc-600">
            Tests running
          </span>

        </div>


        <div className="text-[9px] text-zinc-600">

          Runtime{" "}

          <span className="text-zinc-400">
            {runtime}
          </span>

        </div>

      </div>

    </div>
  );
};


/* =============================================================
   SIMPLE CODE HIGHLIGHTER
============================================================= */

const highlightCode = (line) => {

  const keywords = [
    "class",
    "public",
    "int",
    "string",
    "for",
    "if",
    "while",
    "return",
    "unordered_map",
    "set",
  ];


  const parts = line.split(
    /(\b(?:class|public|int|string|for|if|while|return|unordered_map|set)\b)/g
  );


  return parts.map((part, index) => {

    if (keywords.includes(part)) {

      return (
        <span
          key={index}
          className="text-blue-400"
        >
          {part}
        </span>
      );

    }


    if (part.includes("Solution")) {

      return (
        <span
          key={index}
          className="text-yellow-300"
        >
          {part}
        </span>
      );

    }


    if (
      part.includes("seen") ||
      part.includes("answer") ||
      part.includes("best")
    ) {

      return (
        <span
          key={index}
          className="text-indigo-300"
        >
          {part}
        </span>
      );

    }


    return (
      <span
        key={index}
        className="text-zinc-500"
      >
        {part}
      </span>
    );

  });

};


/* =============================================================
   BATTLE STAT
============================================================= */

const BattleStat = ({ value, label }) => {

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3 text-center">

      <div className="text-sm font-bold text-white">
        {value}
      </div>

      <div className="mt-1 text-[9px] text-zinc-600">
        {label}
      </div>

    </div>
  );

};


/* =============================================================
   BATTLE FEATURE
============================================================= */

const BattleFeature = ({ title, description }) => {

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 transition duration-300 hover:border-indigo-400/10 hover:bg-indigo-500/[0.02]">

      <h4 className="text-xs font-semibold text-zinc-200">
        {title}
      </h4>

      <p className="mt-1.5 text-[10px] leading-5 text-zinc-600">
        {description}
      </p>

    </div>
  );

};


export default BattleSection;