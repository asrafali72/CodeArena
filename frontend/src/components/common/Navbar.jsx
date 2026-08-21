import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../authSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/85 backdrop-blur-xl">

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <NavLink
          to={isAuthenticated ? "/home" : "/"}
          className="group flex items-center gap-3"
        >

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20 transition duration-300 group-hover:scale-105">

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
                d="M8 9l3 3-3 3m5 0h3M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

          </div>


          <div className="hidden sm:block">

            <div className="text-[17px] font-bold tracking-tight text-white">
              Code<span className="text-indigo-400">Arena</span>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Practice • Compete • Improve
            </div>

          </div>

        </NavLink>


        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}

        <div className="flex items-center gap-2 sm:gap-3">


          {/* ===================================================
              PUBLIC USER
          ==================================================== */}

          {!isAuthenticated && (
            <>

            <NavLink
                to="/"
                className={({ isActive }) =>
                  `hidden rounded-lg px-3 py-2 text-sm font-medium transition sm:block ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-300'
                      : 'text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Contact Us */}

              <NavLink
                to="/contact"
                 className={({ isActive }) =>
                  `hidden rounded-lg px-3 py-2 text-sm font-medium transition sm:block ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-300'
                      : 'text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                  }`
                }
                  >
                Contact Us
              </NavLink>


              {/* Login */}

              <NavLink
                to="/login"
              className={({ isActive }) =>
                  `hidden rounded-lg px-3 py-2 text-sm font-medium transition sm:block ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-300'
                      : 'text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                  }`
                }            >
                Login
              </NavLink>


              {/* Sign Up */}

              <NavLink
                to="/signup"
                className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 hover:shadow-indigo-500/30"
              >
                Sign Up
              </NavLink>

            </>
          )}


          {/* ===================================================
              AUTHENTICATED NON-ADMIN USER
          ==================================================== */}

          {isAuthenticated && user?.role !== 'admin' && (
            <>

              {/* Home */}

              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `hidden rounded-lg px-3 py-2 text-sm font-medium transition sm:block ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-300'
                      : 'text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>


              {/* Contest */}

              <NavLink
                to="/contests"
                className={({ isActive }) =>
                  `hidden rounded-lg px-3 py-2 text-sm font-medium transition md:block ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-300'
                      : 'text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                  }`
                }
              >
                Contest
              </NavLink>


              {/* Progress */}

              <NavLink
                to="/progress"
                className={({ isActive }) =>
                  `hidden rounded-lg px-3 py-2 text-sm font-medium transition md:block ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-300'
                      : 'text-zinc-400 hover:bg-white/[0.03] hover:text-white'
                  }`
                }
              >
                Progress
              </NavLink>

            </>
          )}


          {/* ===================================================
              ADMIN
          ==================================================== */}

          {isAuthenticated && user?.role === 'admin' && (

            <NavLink
              to="/admin"
              className="hidden rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-sm font-medium text-zinc-400 transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300 sm:flex"
            >
              Admin
            </NavLink>

          )}


          {/* ===================================================
              LOGGED IN USER
          ==================================================== */}

          {isAuthenticated && user && (

            <div className="dropdown dropdown-end">

              {/* User Button */}

              <div
                tabIndex={0}
                role="button"
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-2.5 py-2 transition hover:border-white/[0.12] hover:bg-white/[0.05] sm:gap-3 sm:px-3"
              >

                {/* Avatar */}

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/30 to-violet-500/30 text-sm font-bold text-indigo-300 ring-1 ring-indigo-400/20">

                  {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}

                </div>


                {/* User Info */}

                <div className="hidden text-left sm:block">

                  <div className="max-w-[110px] truncate text-sm font-medium text-zinc-200">
                    {user?.firstName}
                  </div>

                  <div className="text-[10px] uppercase tracking-wider text-zinc-600">
                    {user?.role || 'User'}
                  </div>

                </div>


                {/* Arrow */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-4 w-4 text-zinc-600 sm:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </div>


              {/* =================================================
                  DROPDOWN
              ================================================== */}

              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-3 w-56 rounded-xl border border-white/[0.08] bg-[#111113] p-2 shadow-2xl shadow-black/40"
              >

                {/* User Information */}

                <li className="mb-1">

                  <div className="pointer-events-none flex flex-col items-start gap-0 px-3 py-2">

                    <span className="text-xs text-zinc-500">
                      Signed in as
                    </span>

                    <span className="max-w-full truncate text-sm font-medium text-zinc-200">
                      {user?.firstName}
                    </span>

                  </div>

                </li>


                <div className="my-1 h-px bg-white/[0.06]" />


                {/* Admin Dashboard */}

                {user?.role === 'admin' && (

                  <li>

                    <NavLink to="/admin">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 13h8V3H3v10zm10 8h8V11h-8v10zM3 21h8v-6H3v6zm10-18v6h8V3h-8z"
                        />
                      </svg>

                      <span>
                        Admin Dashboard
                      </span>

                    </NavLink>

                  </li>

                )}


                {/* Profile */}

                <li>

                  <button
                    type="button"
                    className="cursor-default text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-300"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="8" r="3" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 21a7 7 0 0114 0"
                      />
                    </svg>

                    Profile

                  </button>

                </li>


                {/* Divider */}

                <div className="my-1 h-px bg-white/[0.06]" />


                {/* Logout */}

                <li>

                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>

                    Logout

                  </button>

                </li>

              </ul>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;