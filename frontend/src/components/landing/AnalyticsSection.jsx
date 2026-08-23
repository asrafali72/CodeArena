import { useMemo, useState } from "react";

const AnalyticsSection = () => {
  const [activeRange, setActiveRange] = useState("30D");

  const chartData = useMemo(() => {
    if (activeRange === "7D") {
      return [1420, 1432, 1428, 1450, 1462, 1478, 1490];
    }

    if (activeRange === "90D") {
      return [
        1180,
        1210,
        1198,
        1250,
        1280,
        1265,
        1320,
        1360,
        1345,
        1410,
        1450,
        1490,
      ];
    }

    return [
      1290,
      1310,
      1302,
      1340,
      1368,
      1355,
      1390,
      1418,
      1402,
      1440,
      1468,
      1492,
    ];
  }, [activeRange]);

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#09090b] py-24 sm:py-28 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-200px] top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-600/[0.04] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">

          <div>

            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">

              <span className="h-px w-6 bg-indigo-500/60" />

              Know your progress

            </div>


            <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

              Your progress should
              <span className="block text-zinc-500">
                tell a story.
              </span>

            </h2>

          </div>


          <p className="max-w-xl text-sm leading-7 text-zinc-500 lg:ml-auto">

            CodeArena turns every problem you solve into useful data —
            helping you understand your strengths, identify weak areas,
            and decide what to practice next.

          </p>

        </div>


        {/* =====================================================
            DASHBOARD
        ====================================================== */}

        <div className="relative mt-14">

          <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-indigo-500/[0.025] blur-3xl" />


          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d10] shadow-[0_30px_120px_rgba(0,0,0,0.4)]">


            {/* =================================================
                DASHBOARD HEADER
            ================================================== */}

            <div className="flex flex-col gap-4 border-b border-white/[0.06] bg-[#111114] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

              <div>

                <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Developer analytics
                </div>

                <div className="mt-1 text-sm font-semibold text-white">
                  Performance overview
                </div>

              </div>


              {/* Range selector */}
              <div className="flex w-fit items-center rounded-lg border border-white/[0.06] bg-white/[0.02] p-1">

                {["7D", "30D", "90D"].map((range) => (

                  <button
                    key={range}
                    onClick={() => setActiveRange(range)}
                    className={`rounded-md px-3 py-1.5 text-[9px] font-medium transition ${
                      activeRange === range
                        ? "bg-indigo-500/15 text-indigo-300"
                        : "text-zinc-600 hover:text-zinc-400"
                    }`}
                  >
                    {range}
                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                STAT ROW
            ================================================== */}

            <div className="grid grid-cols-2 border-b border-white/[0.06] md:grid-cols-4">

              <OverviewStat
                label="Current rating"
                value="1,542"
                change="+124"
                positive
              />

              <OverviewStat
                label="Problems solved"
                value="127"
                change="+18 this month"
                positive
              />

              <OverviewStat
                label="Accuracy"
                value="78.4%"
                change="+4.2%"
                positive
              />

              <OverviewStat
                label="Current streak"
                value="12 days"
                change="Best: 27"
                positive
              />

            </div>


            {/* =================================================
                MAIN ANALYTICS
            ================================================== */}

            <div className="grid lg:grid-cols-[1.4fr_0.6fr]">


              {/* =================================================
                  RATING CHART
              ================================================== */}

              <div className="border-b border-white/[0.06] p-5 sm:p-6 lg:border-b-0 lg:border-r">

                <div className="flex items-start justify-between">

                  <div>

                    <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                      Rating progression
                    </div>

                    <div className="mt-2 flex items-end gap-3">

                      <span className="text-2xl font-bold text-white">
                        1,542
                      </span>

                      <span className="mb-1 rounded-md bg-emerald-500/[0.07] px-2 py-1 text-[9px] font-semibold text-emerald-400">
                        +8.7%
                      </span>

                    </div>

                  </div>


                  <div className="hidden items-center gap-2 text-[9px] text-zinc-700 sm:flex">

                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

                    Rating

                  </div>

                </div>


                {/* Chart */}
                <div className="relative mt-8 h-[270px]">

                  {/* Horizontal grid */}
                  <div className="absolute inset-0 flex flex-col justify-between">

                    {[0, 1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="h-px w-full bg-white/[0.035]"
                      />
                    ))}

                  </div>


                  {/* Y labels */}
                  <div className="absolute left-0 top-0 flex h-full flex-col justify-between pr-4 text-[8px] text-zinc-700">

                    <span>1600</span>
                    <span>1550</span>
                    <span>1500</span>
                    <span>1450</span>
                    <span>1400</span>

                  </div>


                  {/* SVG chart */}
                  <div className="absolute inset-y-0 left-9 right-0">

                    <svg
                      viewBox="0 0 700 250"
                      className="h-full w-full overflow-visible"
                      preserveAspectRatio="none"
                    >

                      {/* Area */}
                      <defs>

                        <linearGradient
                          id="ratingArea"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(99,102,241,0.22)"
                          />

                          <stop
                            offset="100%"
                            stopColor="rgba(99,102,241,0)"
                          />
                        </linearGradient>

                      </defs>


                      <path
                        d={buildAreaPath(chartData)}
                        fill="url(#ratingArea)"
                      />


                      {/* Line */}
                      <path
                        d={buildLinePath(chartData)}
                        fill="none"
                        stroke="rgb(129,140,248)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />


                      {/* Points */}
                      {buildPoints(chartData).map((point, index) => (

                        <circle
                          key={index}
                          cx={point.x}
                          cy={point.y}
                          r={index === chartData.length - 1 ? "5" : "3"}
                          fill="#111114"
                          stroke="rgb(129,140,248)"
                          strokeWidth="2"
                        />

                      ))}

                    </svg>

                  </div>


                  {/* X labels */}
                  <div className="absolute bottom-[-22px] left-9 right-0 flex justify-between text-[8px] text-zinc-700">

                    <span>Start</span>
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Now</span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  TOPICS
              ================================================== */}

              <div className="p-5 sm:p-6">

                <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                  Topic mastery
                </div>

                <h3 className="mt-2 text-sm font-semibold text-white">
                  Where you stand
                </h3>


                <div className="mt-7 space-y-5">

                  <TopicProgress
                    topic="Arrays"
                    score="92%"
                    percentage={92}
                    status="Strong"
                  />

                  <TopicProgress
                    topic="Strings"
                    score="84%"
                    percentage={84}
                    status="Strong"
                  />

                  <TopicProgress
                    topic="Linked Lists"
                    score="73%"
                    percentage={73}
                    status="Good"
                  />

                  <TopicProgress
                    topic="Trees"
                    score="61%"
                    percentage={61}
                    status="Growing"
                  />

                  <TopicProgress
                    topic="Graphs"
                    score="48%"
                    percentage={48}
                    status="Needs focus"
                  />

                  <TopicProgress
                    topic="Dynamic Programming"
                    score="39%"
                    percentage={39}
                    status="Needs focus"
                  />

                </div>


                {/* Recommendation */}
                <div className="mt-7 rounded-xl border border-yellow-400/10 bg-yellow-500/[0.025] p-4">

                  <div className="flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-500/10">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2m0 14v2M4.93 4.93l1.42 1.42m11.3 11.3l1.42 1.42M3 12h2m14 0h2M4.93 19.07l1.42-1.42m11.3-11.3l1.42-1.42"
                        />
                      </svg>

                    </div>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-yellow-400">
                      Focus area
                    </span>

                  </div>


                  <p className="mt-3 text-[10px] leading-5 text-zinc-500">

                    Your graph and DP accuracy is below your overall
                    average. Strengthening these topics could improve
                    your rating significantly.

                  </p>


                  <button className="mt-3 text-[9px] font-semibold text-yellow-400 transition hover:text-yellow-300">
                    Build a practice plan →
                  </button>

                </div>

              </div>

            </div>


            {/* =================================================
                DIFFICULTY DISTRIBUTION
            ================================================== */}

            <div className="border-t border-white/[0.06] p-5 sm:p-6">

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                    Problem distribution
                  </div>

                  <h3 className="mt-2 text-sm font-semibold text-white">
                    You're pushing beyond the basics.
                  </h3>

                </div>


                <div className="flex flex-wrap items-center gap-5">

                  <Difficulty
                    label="Easy"
                    count="61"
                    percentage="48%"
                    type="easy"
                  />

                  <Difficulty
                    label="Medium"
                    count="49"
                    percentage="39%"
                    type="medium"
                  />

                  <Difficulty
                    label="Hard"
                    count="17"
                    percentage="13%"
                    type="hard"
                  />

                </div>

              </div>


              {/* Distribution bar */}
              <div className="mt-6 flex h-2 overflow-hidden rounded-full bg-white/[0.04]">

                <div className="w-[48%] bg-emerald-400/70" />

                <div className="w-[39%] bg-yellow-400/70" />

                <div className="w-[13%] bg-red-400/70" />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            ANALYTICS FEATURES
        ====================================================== */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <AnalyticsFeature
            number="01"
            title="Track"
            description="See how your rating, accuracy and solving speed change over time."
          />

          <AnalyticsFeature
            number="02"
            title="Discover"
            description="Find the topics where you're strongest and where you're falling behind."
          />

          <AnalyticsFeature
            number="03"
            title="Adapt"
            description="Get recommendations based on your actual solving history."
          />

          <AnalyticsFeature
            number="04"
            title="Improve"
            description="Turn your weaknesses into measurable progress."
          />

        </div>

      </div>

    </section>
  );
};


/* =============================================================
   OVERVIEW STAT
============================================================= */

const OverviewStat = ({
  label,
  value,
  change,
  positive,
}) => {
  return (
    <div className="border-r border-white/[0.06] p-5 last:border-r-0 sm:p-6">

      <div className="text-[9px] uppercase tracking-[0.15em] text-zinc-700">
        {label}
      </div>

      <div className="mt-2 text-xl font-bold tracking-tight text-white">
        {value}
      </div>

      <div
        className={`mt-1 text-[9px] ${
          positive
            ? "text-emerald-400"
            : "text-zinc-600"
        }`}
      >
        {change}
      </div>

    </div>
  );
};


/* =============================================================
   TOPIC PROGRESS
============================================================= */

const TopicProgress = ({
  topic,
  score,
  percentage,
  status,
}) => {

  const isWeak = percentage < 50;

  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span className="text-[10px] text-zinc-400">
            {topic}
          </span>

          {isWeak && (
            <span className="rounded bg-yellow-500/[0.06] px-1.5 py-0.5 text-[7px] text-yellow-400">
              FOCUS
            </span>
          )}

        </div>

        <div className="flex items-center gap-2">

          <span className="text-[9px] text-zinc-700">
            {status}
          </span>

          <span className="text-[10px] font-medium text-zinc-300">
            {score}
          </span>

        </div>

      </div>


      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">

        <div
          className={`h-full rounded-full ${
            percentage >= 80
              ? "bg-indigo-400"
              : percentage >= 60
                ? "bg-indigo-400/70"
                : percentage >= 50
                  ? "bg-yellow-400/70"
                  : "bg-yellow-400/50"
          }`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
};


/* =============================================================
   DIFFICULTY
============================================================= */

const Difficulty = ({
  label,
  count,
  percentage,
  type,
}) => {

  const styles = {
    easy: "bg-emerald-400",
    medium: "bg-yellow-400",
    hard: "bg-red-400",
  };

  return (
    <div className="flex items-center gap-2">

      <span
        className={`h-1.5 w-1.5 rounded-full ${styles[type]}`}
      />

      <div>

        <div className="text-[9px] text-zinc-500">
          {label}
        </div>

        <div className="mt-0.5 text-xs font-semibold text-zinc-200">
          {count}
          <span className="ml-1 text-[8px] font-normal text-zinc-700">
            ({percentage})
          </span>
        </div>

      </div>

    </div>
  );
};


/* =============================================================
   ANALYTICS FEATURE
============================================================= */

const AnalyticsFeature = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 transition duration-300 hover:border-indigo-400/15 hover:bg-indigo-500/[0.025]">

      <div className="flex items-center justify-between">

        <span className="font-mono text-[9px] text-zinc-700">
          {number}
        </span>

        <span className="h-px w-10 bg-white/[0.06] transition group-hover:bg-indigo-400/30" />

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
   CHART HELPERS
============================================================= */

const getChartPoints = (data) => {

  const width = 700;
  const height = 250;

  const min = Math.min(...data) - 20;
  const max = Math.max(...data) + 20;

  return data.map((value, index) => {

    const x =
      (index / (data.length - 1)) *
      width;

    const y =
      height -
      ((value - min) / (max - min)) *
        height;

    return {
      x,
      y,
    };

  });
};


const buildLinePath = (data) => {

  const points = getChartPoints(data);

  return points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
    )
    .join(" ");
};


const buildAreaPath = (data) => {

  const points = getChartPoints(data);

  const first = points[0];
  const last = points[points.length - 1];

  const line = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
    )
    .join(" ");

  return `${line} L ${last.x} 250 L ${first.x} 250 Z`;
};


const buildPoints = (data) => {
  return getChartPoints(data);
};


export default AnalyticsSection;