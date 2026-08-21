const AISection = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090b] py-24 sm:py-28 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-200px] top-1/2 h-[400px] w-[400px] rounded-full bg-indigo-600/[0.04] blur-[120px]" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">

            <SparkIcon />

            AI-powered feedback

          </div>


          <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

            Don't just know that
            <span className="block text-zinc-500">
              your code works.
            </span>

          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">

            Understand why it works, where it can improve, and how an
            experienced developer would approach the same problem.

          </p>

        </div>


        {/* =====================================================
            AI WORKSPACE
        ====================================================== */}

        <div className="relative mt-14">


          {/* Glow */}
          <div className="pointer-events-none absolute -inset-10 rounded-[50px] bg-violet-500/[0.025] blur-3xl" />


          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d10] shadow-[0_30px_120px_rgba(0,0,0,0.4)]">


            {/* =================================================
                TOP BAR
            ================================================== */}

            <div className="flex flex-col gap-4 border-b border-white/[0.06] bg-[#111114] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">


              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">

                  <SparkIcon />

                </div>


                <div>

                  <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                    CodeArena AI
                  </div>

                  <div className="text-xs font-semibold text-white">
                    Code Review
                  </div>

                </div>

              </div>


              <div className="flex items-center gap-2">

                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[9px] text-zinc-500">
                  C++
                </div>

                <div className="rounded-lg border border-emerald-400/10 bg-emerald-500/[0.05] px-3 py-1.5 text-[9px] text-emerald-400">
                  Accepted
                </div>

              </div>

            </div>


            {/* =================================================
                WORKSPACE
            ================================================== */}

            <div className="grid lg:grid-cols-[1fr_0.95fr]">


              {/* =================================================
                  CODE SIDE
              ================================================== */}

              <div className="border-b border-white/[0.06] lg:border-b-0 lg:border-r">


                {/* Code Header */}
                <div className="flex items-center justify-between border-b border-white/[0.05] bg-[#0f0f12] px-5 py-3">

                  <div className="flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-indigo-400/70" />

                    <span className="text-[10px] font-medium text-zinc-500">
                      solution.cpp
                    </span>

                  </div>


                  <span className="text-[9px] text-zinc-700">
                    42 lines
                  </span>

                </div>


                {/* Code */}
                <div className="min-h-[470px] bg-[#0b0b0e] px-4 py-5 sm:px-6">

                  <div className="flex font-mono text-[9px] leading-[1.9rem] sm:text-[10px]">


                    {/* Line Numbers */}
                    <div className="w-7 shrink-0 select-none text-right text-zinc-800">

                      {Array.from({ length: 20 }, (_, index) => (
                        <div key={index}>
                          {index + 1}
                        </div>
                      ))}

                    </div>


                    {/* Code */}
                    <div className="ml-4 whitespace-nowrap">

                      <CodeLine>
                        <Blue>class</Blue>{" "}
                        <Yellow>Solution</Yellow>{" "}
                        {"{"}
                      </CodeLine>

                      <CodeLine>
                        <Blue>public</Blue>:
                      </CodeLine>

                      <CodeLine indent={1}>
                        <Blue>int</Blue>{" "}
                        <Indigo>maxSubArray</Indigo>
                        (vector&lt;<span className="text-blue-300">int</span>
                        &gt;&amp; nums) {"{"}
                      </CodeLine>

                      <CodeLine indent={2}>
                        <Blue>int</Blue> current = nums[0];
                      </CodeLine>

                      <CodeLine indent={2}>
                        <Blue>int</Blue> maximum = nums[0];
                      </CodeLine>

                      <CodeLine indent={2}>
                        <Blue>for</Blue> (<Blue>int</Blue> i = 1;
                      </CodeLine>

                      <CodeLine indent={3}>
                        i &lt; nums.size(); i++) {"{"}
                      </CodeLine>

                      <CodeLine indent={3}>
                        current = max(nums[i],
                      </CodeLine>

                      <CodeLine indent={4}>
                        current + nums[i]);
                      </CodeLine>

                      <CodeLine indent={3}>
                        maximum = max(maximum, current);
                      </CodeLine>

                      <CodeLine indent={2}>
                        {"}"}
                      </CodeLine>

                      <CodeLine indent={2}>
                        <Blue>return</Blue> maximum;
                      </CodeLine>

                      <CodeLine indent={1}>
                        {"}"}
                      </CodeLine>

                      <CodeLine>
                        {"};"}
                      </CodeLine>

                      <div className="mt-4 h-px w-full bg-white/[0.03]" />

                      <CodeLine>
                        <span className="text-zinc-700">
                          // AI detected a strong solution.
                        </span>
                      </CodeLine>

                      <CodeLine>
                        <span className="text-zinc-700">
                          // Let's analyze its efficiency.
                        </span>
                      </CodeLine>

                    </div>

                  </div>

                </div>


                {/* Code Footer */}
                <div className="flex items-center justify-between border-t border-white/[0.05] bg-[#101013] px-5 py-3">

                  <div className="flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-[9px] text-zinc-600">
                      All tests passed
                    </span>

                  </div>


                  <span className="text-[9px] text-zinc-600">
                    Runtime{" "}
                    <span className="text-zinc-400">
                      42 ms
                    </span>
                  </span>

                </div>

              </div>


              {/* =================================================
                  AI ANALYSIS SIDE
              ================================================== */}

              <div className="bg-[#101013]">


                {/* AI Header */}
                <div className="border-b border-white/[0.05] px-5 py-4 sm:px-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <div className="text-[9px] uppercase tracking-[0.18em] text-violet-400">
                        AI analysis
                      </div>

                      <h3 className="mt-1 text-sm font-semibold text-white">
                        Your solution looks strong.
                      </h3>

                    </div>


                    {/* Score */}
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-500/[0.04]">

                      <div className="text-xs font-bold text-emerald-400">
                        91
                      </div>

                      <div className="absolute -bottom-1 rounded bg-[#101013] px-1 text-[7px] uppercase text-zinc-600">
                        score
                      </div>

                    </div>

                  </div>

                </div>


                {/* Analysis */}
                <div className="space-y-5 p-5 sm:p-6">


                  {/* Complexity */}
                  <AnalysisCard
                    title="Complexity"
                    icon="chart"
                  >

                    <div className="grid grid-cols-2 gap-3">

                      <Metric
                        label="Time"
                        value="O(n)"
                        positive
                      />

                      <Metric
                        label="Space"
                        value="O(1)"
                        positive
                      />

                    </div>

                  </AnalysisCard>


                  {/* Strength */}
                  <AnalysisCard
                    title="What's good"
                    icon="check"
                  >

                    <div className="flex gap-3 rounded-xl border border-emerald-400/10 bg-emerald-500/[0.035] p-3">

                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/10">

                        <CheckIcon />

                      </div>

                      <p className="text-[10px] leading-5 text-zinc-500">

                        You correctly used Kadane's algorithm and avoided
                        unnecessary nested loops. Your solution achieves
                        optimal linear time complexity.

                      </p>

                    </div>

                  </AnalysisCard>


                  {/* Improvement */}
                  <AnalysisCard
                    title="Potential improvement"
                    icon="spark"
                  >

                    <div className="rounded-xl border border-yellow-400/10 bg-yellow-500/[0.025] p-3">

                      <div className="flex gap-3">

                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-yellow-500/10">

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v4m0 4h.01M10.3 3.5h3.4L21 16.8a2 2 0 01-1.73 3H4.73A2 2 0 013 16.8L10.3 3.5z"
                            />
                          </svg>

                        </div>

                        <p className="text-[10px] leading-5 text-zinc-500">

                          Consider using a more descriptive variable name
                          instead of <span className="font-mono text-yellow-400">maximum</span>
                          when working in a larger production codebase.

                        </p>

                      </div>

                    </div>

                  </AnalysisCard>


                  {/* AI Recommendation */}
                  <div className="relative overflow-hidden rounded-xl border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.06] to-indigo-500/[0.03] p-4">

                    <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />


                    <div className="relative">

                      <div className="flex items-center gap-2">

                        <SparkIcon />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-300">
                          AI recommendation
                        </span>

                      </div>


                      <p className="mt-2 text-[10px] leading-5 text-zinc-500">

                        You have strong array fundamentals. Your next
                        challenge should focus on dynamic programming
                        to improve your problem-solving depth.

                      </p>


                      <button className="mt-3 text-[9px] font-semibold text-violet-300 transition hover:text-violet-200">
                        View recommended problems →
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            AI BENEFITS
        ====================================================== */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <AIFeature
            number="01"
            title="Understand"
            description="Get a clear explanation of why your approach works."
          />

          <AIFeature
            number="02"
            title="Optimize"
            description="Identify inefficient approaches and discover better ones."
          />

          <AIFeature
            number="03"
            title="Learn"
            description="Turn every accepted submission into a learning opportunity."
          />

          <AIFeature
            number="04"
            title="Improve"
            description="Use AI insights to choose what you should practice next."
          />

        </div>


      </div>

    </section>
  );
};


/* =============================================================
   CODE LINE
============================================================= */

const CodeLine = ({ children, indent = 0 }) => {
  return (
    <div
      className="text-zinc-500"
      style={{
        paddingLeft: `${indent * 20}px`,
      }}
    >
      {children}
    </div>
  );
};


/* =============================================================
   SYNTAX COLORS
============================================================= */

const Blue = ({ children }) => (
  <span className="text-blue-400">
    {children}
  </span>
);

const Yellow = ({ children }) => (
  <span className="text-yellow-300">
    {children}
  </span>
);

const Indigo = ({ children }) => (
  <span className="text-indigo-300">
    {children}
  </span>
);


/* =============================================================
   ANALYSIS CARD
============================================================= */

const AnalysisCard = ({ title, icon, children }) => {
  return (
    <div>

      <div className="mb-2.5 flex items-center gap-2">

        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
          {title}
        </span>

      </div>

      {children}

    </div>
  );
};


/* =============================================================
   METRIC
============================================================= */

const Metric = ({ label, value, positive }) => {
  return (
    <div className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-3">

      <div className="text-[9px] text-zinc-600">
        {label}
      </div>

      <div
        className={`mt-1.5 text-sm font-semibold ${
          positive
            ? "text-emerald-400"
            : "text-zinc-300"
        }`}
      >
        {value}
      </div>

    </div>
  );
};


/* =============================================================
   AI FEATURE
============================================================= */

const AIFeature = ({ number, title, description }) => {
  return (
    <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition duration-300 hover:border-violet-400/15 hover:bg-violet-500/[0.025]">

      <div className="flex items-center justify-between">

        <span className="text-[9px] font-mono text-zinc-700">
          {number}
        </span>

        <span className="h-px w-10 bg-white/[0.06] transition group-hover:bg-violet-400/30" />

      </div>


      <h4 className="mt-6 text-sm font-semibold text-zinc-200">
        {title}
      </h4>


      <p className="mt-2 text-[10px] leading-5 text-zinc-600">
        {description}
      </p>

    </div>
  );
};


/* =============================================================
   ICONS
============================================================= */

const SparkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 text-violet-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17z"
      />
    </svg>
  );
};


const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 text-emerald-400"
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


export default AISection;