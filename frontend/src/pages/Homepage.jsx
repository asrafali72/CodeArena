import { useEffect, useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router'; 
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../utils/axiosClient';
import { logoutUser } from '../authSlice';

function Homepage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [problems, setProblems] = useState([]);
  const [solvedProblems, setSolvedProblems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isCreatingBattle, setIsCreatingBattle] = useState(false);
  
  // Modal states
  const [showBattleModal, setShowBattleModal] = useState(false);
  const [selectedProblemIndex, setSelectedProblemIndex] = useState('');

  const [filters, setFilters] = useState({
    difficulty: 'all',
    tag: 'all',
    status: 'all',
    search: '',
  });

  const handleCreateBattle = async () => {
    if (problems.length === 0) {
      return alert("Wait for problems to load!");
    }

    let problemToBattle;

    // 1. If an index is selected, grab that exact problem from the array
    if (selectedProblemIndex !== '') {
      problemToBattle = problems[Number(selectedProblemIndex)];
    } else {
      // 2. Otherwise, pick a random one
      problemToBattle = problems[Math.floor(Math.random() * problems.length)];
    }
    
    setIsCreatingBattle(true);
    try {
      const { data } = await axiosClient.post('/battle/challenge', {
        problemId: problemToBattle._id
      });
      
      setShowBattleModal(false); // Close the modal
      
      // Redirect to the new battle room
      navigate(`/battle/${data.roomId}/${problemToBattle._id}`);
    } catch (error) {
      console.error("Failed to create battle:", error);
      alert("Could not start battle. Please try again.");
    } finally {
      setIsCreatingBattle(false);
    }
  };

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setLoading(true);

        const { data } = await axiosClient.get(
          '/problem/getAllProblem'
        );

        setProblems(data);
      } catch (error) {
        console.error('Error fetching problems:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchSolvedProblems = async () => {
      try {
        const { data } = await axiosClient.get(
          '/problem/problemSolvedByUser'
        );

        setSolvedProblems(data);
      } catch (error) {
        console.error('Error fetching solved problems:', error);
      }
    };

    fetchProblems();

    if (user) {
      fetchSolvedProblems();
    } else {
      setSolvedProblems([]);
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    setSolvedProblems([]);
  };

  const isProblemSolved = (problemId) => {
    return solvedProblems.some(
      (problem) => problem._id === problemId
    );
  };

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const difficultyMatch =
        filters.difficulty === 'all' ||
        problem.difficulty === filters.difficulty;

      const tagMatch =
        filters.tag === 'all' ||
        problem.tags === filters.tag;

      const solved = isProblemSolved(problem._id);

      const statusMatch =
        filters.status === 'all' ||
        (filters.status === 'solved' && solved) ||
        (filters.status === 'unsolved' && !solved);

      const searchMatch =
        filters.search.trim() === '' ||
        problem.title
          ?.toLowerCase()
          .includes(filters.search.toLowerCase());

      return (
        difficultyMatch &&
        tagMatch &&
        statusMatch &&
        searchMatch
      );
    });
  }, [problems, solvedProblems, filters]);

  const solvedCount = solvedProblems.length;
  const totalCount = problems.length;
  const remainingCount = Math.max(totalCount - solvedCount, 0);

  const progress =
    totalCount > 0
      ? Math.round((solvedCount / totalCount) * 100)
      : 0;

  const clearFilters = () => {
    setFilters({
      difficulty: 'all',
      tag: 'all',
      status: 'all',
      search: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">

      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">

        {/* =====================================================
            1v1 CHALLENGE BUTTON (TOP LEFT)
        ===================================================== */}
        {user && (
          <div className="mb-6 flex justify-start">
            <button
              onClick={() => setShowBattleModal(true)}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative flex items-center gap-2">
                ⚔️ Start 1v1 Challenge
              </span>
            </button>
          </div>
        )}

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative mb-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101014]">

          <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-violet-600/[0.07] blur-3xl" />

          <div className="relative p-6 sm:p-8 lg:p-10">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] px-3 py-1.5 text-xs font-medium text-indigo-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
                  Coding Practice Arena
                </div>

                <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
                  Solve carefully designed programming problems,
                  track your progress, and push yourself to the next
                  level.
                </p>

              </div>

              <div className="w-full max-w-xs lg:w-72">

                <div className="mb-3 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                      Overall Progress
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      {progress}%
                    </p>
                  </div>

                  <span className="text-xs text-zinc-600">
                    {solvedCount}/{totalCount} solved
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-3 text-xs text-zinc-600">
                  {remainingCount} problems remaining
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            FILTER SECTION
        ===================================================== */}

        <section className="mb-6 rounded-2xl border border-white/[0.07] bg-[#101014] p-4 sm:p-5">

          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-sm font-semibold text-zinc-200">
                Problem Library
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Browse and filter coding challenges
              </p>
            </div>

            {(filters.search ||
              filters.difficulty !== 'all' ||
              filters.tag !== 'all' ||
              filters.status !== 'all') && (
              <button
                onClick={clearFilters}
                className="self-start text-xs font-medium text-indigo-400 transition hover:text-indigo-300 sm:self-auto"
              >
                Clear filters
              </button>
            )}

          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

            {/* Search */}
            <div className="relative lg:col-span-1">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search problems..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    search: e.target.value,
                  })
                }
                className="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] pl-10 pr-4 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-indigo-500/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-indigo-500/20"
              />

            </div>

            {/* Status */}
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  status: e.target.value,
                })
              }
              className="h-11 w-full cursor-pointer rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 text-sm text-zinc-400 outline-none transition focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20"
            >
              <option value="all">All Problems</option>
              <option value="solved">Solved</option>
              <option value="unsolved">Unsolved</option>
            </select>


            {/* Difficulty */}
            <select
              value={filters.difficulty}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  difficulty: e.target.value,
                })
              }
              className="h-11 w-full cursor-pointer rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 text-sm text-zinc-400 outline-none transition focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20"
            >
              <option value="all">All Difficulties</option>
              <option value="basic">Basic</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="advanced">Advanced</option>
            </select>

            {/* Tag */}
            <select
              value={filters.tag}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  tag: e.target.value,
                })
              }
              className="h-11 w-full cursor-pointer rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 text-sm text-zinc-400 outline-none transition focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20"
            >
              <option value="all">All Topics</option>
              <option value="array">Array</option>
              <option value="linkedList">Linked List</option>
              <option value="graph">Graph</option>
              <option value="dp">Dynamic Programming</option>
            </select>

          </div>

        </section>

        {/* =====================================================
            RESULT HEADER
        ===================================================== */}

        <div className="mb-3 flex items-center justify-between px-1">

          <div className="flex items-center gap-2">

            <span className="text-sm font-semibold text-zinc-300">
              Problems
            </span>

            <span className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] font-medium text-zinc-500">
              {filteredProblems.length}
            </span>

          </div>

          <span className="hidden text-xs text-zinc-700 sm:block">
            Select a problem to start coding
          </span>

        </div>

        {/* =====================================================
            PROBLEM LIST
        ===================================================== */}

        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101014]">

          {/* Desktop Header */}
          <div className="hidden grid-cols-[minmax(0,1fr)_120px_140px_100px] items-center border-b border-white/[0.06] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-700 md:grid">

            <span>Problem</span>
            <span>Difficulty</span>
            <span>Topic</span>
            <span className="text-right">Status</span>

          </div>


          {loading ? (
            <LoadingState />
          ) : filteredProblems.length === 0 ? (
            <EmptyState clearFilters={clearFilters} />
          ) : (
            <div>
              {filteredProblems.map((problem, index) => {

                const solved = isProblemSolved(problem._id);

                return (
                  <NavLink
                    key={problem._id}
                    to={`/problem/${problem._id}`}
                    className="group relative block border-b border-white/[0.045] px-4 py-4 transition duration-200 last:border-b-0 hover:bg-white/[0.025] sm:px-5"
                  >

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-center scale-y-0 bg-gradient-to-b from-indigo-500 to-violet-500 transition-transform duration-200 group-hover:scale-y-100" />


                    <div className="grid items-center gap-4 md:grid-cols-[minmax(0,1fr)_120px_140px_100px]">

                      {/* Problem */}
                      <div className="flex min-w-0 items-center gap-3">

                        <span className="hidden w-7 shrink-0 text-xs tabular-nums text-zinc-700 sm:block">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="min-w-0">

                          <div className="flex items-center gap-2">

                            {solved && (
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}

                            <h3 className="truncate text-sm font-medium text-zinc-300 transition group-hover:text-white sm:text-[15px]">
                              {problem.title}
                            </h3>

                          </div>

                          <p className="mt-1 truncate text-xs text-zinc-700">
                            Challenge your problem-solving skills
                          </p>

                        </div>

                      </div>

                      {/* Difficulty */}
                      <div>
                        <span
                          className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] font-semibold capitalize ${getDifficultyBadgeColor(
                            problem.difficulty
                          )}`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>


                      {/* Topic */}
                      <div className="hidden md:block">
                        <span className="inline-flex items-center rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[11px] font-medium capitalize text-zinc-500 transition group-hover:border-white/[0.1] group-hover:text-zinc-400">
                          {formatTag(problem.tags)}
                        </span>
                      </div>


                      {/* Status */}
                      <div className="text-left md:text-right">

                        {solved ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                            Solved
                          </span>
                        ) : (
                          <span className="text-xs font-medium text-zinc-700 transition group-hover:text-zinc-500">
                            Unsolved
                          </span>
                        )}

                      </div>

                    </div>


                    {/* Mobile metadata */}
                    <div className="mt-3 flex items-center gap-2 pl-0 md:hidden">

                      <span className="inline-flex items-center rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 text-[10px] font-medium capitalize text-zinc-500">
                        {formatTag(problem.tags)}
                      </span>

                      <span className="text-[10px] text-zinc-800">
                        •
                      </span>

                      <span className="text-[10px] text-zinc-700">
                        {solved ? 'Completed' : 'Not attempted'}
                      </span>

                    </div>

                  </NavLink>
                );
              })}
            </div>
          )}

        </div>

      </main>

      {/* =====================================================
          BATTLE SELECTION MODAL
      ===================================================== */}
      {showBattleModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/[0.1] bg-[#101014] p-6 shadow-2xl">
            
            <h2 className="mb-2 text-xl font-bold text-white">
              Create 1v1 Arena
            </h2>
            <p className="mb-6 text-sm text-zinc-400">
              Select a coding challenge for your match. Your opponent will have to solve this exact problem.
            </p>
            
            <select
                value={selectedProblemIndex}
                onChange={(e) => setSelectedProblemIndex(e.target.value)}
                className="mb-8 h-12 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm text-zinc-200 outline-none transition focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20"
            >
                <option value="">🎲 Random Problem (Surprise me!)</option>
                {problems.map((p, index) => (
                    <option key={p._id} value={index}>
                        {p.title} - {p.difficulty}
                    </option>
                ))}
            </select>

            <div className="flex justify-end gap-3">
              <button 
                  onClick={() => setShowBattleModal(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
              >
                  Cancel
              </button>
              <button 
                  onClick={handleCreateBattle}
                  disabled={isCreatingBattle}
                  className="inline-flex min-w-[120px] items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-50"
              >
                  {isCreatingBattle ? 'Creating...' : 'Create Match'}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}


/* =============================================================
   STAT CARD
============================================================= */

function StatCard({
  icon,
  label,
  value,
  iconClass,
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-[#101014] p-4 transition duration-300 hover:border-white/[0.11] hover:bg-[#121216]">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
          >
            {icon}
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-600">
              {label}
            </p>

            <p className="mt-0.5 text-xl font-bold tracking-tight text-zinc-200">
              {value}
            </p>
          </div>

        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-zinc-800 transition group-hover:translate-x-0.5 group-hover:text-zinc-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 5l7 7-7 7"
          />
        </svg>

      </div>

    </div>
  );
}


/* =============================================================
   LOADING STATE
============================================================= */

function LoadingState() {
  return (
    <div className="divide-y divide-white/[0.04]">

      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="flex items-center gap-4 px-5 py-5"
        >

          <div className="h-4 w-5 animate-pulse rounded bg-white/[0.05]" />

          <div className="flex-1">
            <div className="h-4 w-1/3 animate-pulse rounded bg-white/[0.05]" />
            <div className="mt-2 h-3 w-1/5 animate-pulse rounded bg-white/[0.035]" />
          </div>

          <div className="hidden h-6 w-16 animate-pulse rounded-md bg-white/[0.05] sm:block" />

          <div className="hidden h-6 w-20 animate-pulse rounded-md bg-white/[0.05] md:block" />

        </div>
      ))}

    </div>
  );
}


/* =============================================================
   EMPTY STATE
============================================================= */

function EmptyState({ clearFilters }) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] text-zinc-600">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
          />
        </svg>

      </div>

      <h3 className="text-sm font-semibold text-zinc-300">
        No problems found
      </h3>

      <p className="mt-2 max-w-sm text-xs leading-5 text-zinc-600">
        Try changing your search or filters to find
        another challenge.
      </p>

      <button
        onClick={clearFilters}
        className="mt-5 rounded-lg border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300"
      >
        Clear all filters
      </button>

    </div>
  );
}


/* =============================================================
   DIFFICULTY COLORS
============================================================= */

const getDifficultyBadgeColor = (difficulty) => {

  switch (difficulty?.toLowerCase()) {

    case 'basic':
      return 'border-zinc-700/60 bg-zinc-500/10 text-zinc-400';

    case 'easy':
      return 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400';

    case 'medium':
      return 'border-sky-500/20 bg-sky-500/10 text-sky-400';

    case 'hard':
      return 'border-orange-500/20 bg-orange-500/10 text-orange-400';

    case 'advanced':
      return 'border-red-500/20 bg-red-500/10 text-red-400';

    default:
      return 'border-zinc-700/60 bg-zinc-500/10 text-zinc-400';
  }

};


/* =============================================================
   TAG FORMATTER
============================================================= */

const formatTag = (tag) => {

  if (!tag) return 'Unknown';

  switch (tag) {

    case 'linkedList':
      return 'Linked List';

    case 'dp':
      return 'Dynamic Programming';

    case 'array':
      return 'Array';

    case 'graph':
      return 'Graph';

    default:
      return tag;
  }

};


export default Homepage;