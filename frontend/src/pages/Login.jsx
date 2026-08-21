import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router";
import { loginUser } from "../authSlice";
import { useEffect, useState } from "react";

const loginSchema = z.object({
  emailId: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <main className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#09090b] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/[0.055] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-150px] h-[400px] w-[400px] rounded-full bg-violet-600/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[30%] h-[350px] w-[350px] rounded-full bg-indigo-500/[0.025] blur-[110px]" />

      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">

        <div className="w-full max-w-[430px]">

          {/* =================================================
              BRAND / INTRO
          ================================================== */}

          <div className="mb-7 text-center">

            {/* <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-xl shadow-indigo-500/20">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l3 3-3 3m5 0h3M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

            </div> */}

            <h1 className="text-2xl font-bold tracking-[-0.025em] text-white">
              Welcome back
            </h1>

            <p className="mt-2 text-xs leading-5 text-zinc-600">
              Sign in to continue your CodeArena journey.
            </p>

          </div>


          {/* =================================================
              LOGIN CARD
          ================================================== */}

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e11]/95 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

            {/* Card glow */}

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[220px] w-[220px] rounded-full bg-indigo-500/[0.05] blur-[70px]" />

            <div className="relative p-6 sm:p-8">

              {/* Header */}

              <div className="mb-7">

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-sm font-semibold text-zinc-100">
                      Sign in
                    </h2>

                    <p className="mt-1 text-[10px] text-zinc-600">
                      Enter your account credentials below.
                    </p>

                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-500/[0.04] px-2.5 py-1.5">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-[8px] font-medium text-emerald-400">
                      Secure
                    </span>

                  </div>

                </div>

              </div>


              {/* Server Error */}

              {error && (
                <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-400/10 bg-red-500/[0.05] px-3.5 py-3">

                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v4m0 4h.01M10.3 3.7l-7.1 12.3A2 2 0 005 19h14a2 2 0 001.8-3L13.7 3.7a2 2 0 00-3.4 0z"
                      />
                    </svg>

                  </div>

                  <p className="text-[10px] leading-5 text-red-400">
                    {typeof error === "string"
                      ? error
                      : "Unable to sign in. Please check your credentials."}
                  </p>

                </div>
              )}


              {/* Form */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >

                {/* Email */}

                <div>

                  <label
                    htmlFor="emailId"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500"
                  >
                    Email address
                  </label>

                  <div className="relative">

                    <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-700">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 7l9 6 9-6"
                        />
                      </svg>

                    </div>

                    <input
                      id="emailId"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={`w-full rounded-xl border bg-[#111114] py-3 pl-10 pr-4 text-xs text-zinc-200 outline-none transition placeholder:text-zinc-700 ${
                        errors.emailId
                          ? "border-red-400/30 focus:border-red-400/50"
                          : "border-white/[0.07] focus:border-indigo-500/40 focus:bg-[#121216] focus:ring-1 focus:ring-indigo-500/10"
                      }`}
                      {...register("emailId")}
                    />

                  </div>

                  {errors.emailId && (
                    <p className="mt-1.5 text-[10px] text-red-400">
                      {errors.emailId.message}
                    </p>
                  )}

                </div>


                {/* Password */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="block text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500"
                    >
                      Password
                    </label>

                  </div>


                  <div className="relative">

                    <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-700">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <rect
                          x="4"
                          y="10"
                          width="16"
                          height="11"
                          rx="2"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 10V7a4 4 0 018 0v3"
                        />
                      </svg>

                    </div>


                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className={`w-full rounded-xl border bg-[#111114] py-3 pl-10 pr-11 text-xs text-zinc-200 outline-none transition placeholder:text-zinc-700 ${
                        errors.password
                          ? "border-red-400/30 focus:border-red-400/50"
                          : "border-white/[0.07] focus:border-indigo-500/40 focus:bg-[#121216] focus:ring-1 focus:ring-indigo-500/10"
                      }`}
                      {...register("password")}
                    />


                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-700 transition hover:text-zinc-400"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOffIcon />
                      ) : (
                        <EyeIcon />
                      )}
                    </button>

                  </div>


                  {errors.password && (
                    <p className="mt-1.5 text-[10px] text-red-400">
                      {errors.password.message}
                    </p>
                  )}

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-500 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-500 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >

                  {loading ? (
                    <>
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
                    </>
                  )}

                </button>

              </form>


              {/* Divider */}

              <div className="my-6 flex items-center gap-3">

                <div className="h-px flex-1 bg-white/[0.06]" />

                <span className="text-[8px] uppercase tracking-[0.15em] text-zinc-700">
                  New to CodeArena?
                </span>

                <div className="h-px flex-1 bg-white/[0.06]" />

              </div>


              {/* Signup */}

              <NavLink
                to="/signup"
                className="flex w-full items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-xs font-medium text-zinc-400 transition duration-300 hover:border-indigo-400/20 hover:bg-indigo-500/[0.04] hover:text-indigo-300"
              >
                Create an account
              </NavLink>

            </div>

          </div>


          {/* =================================================
              BOTTOM TRUST
          ================================================== */}

          <div className="mt-5 flex items-center justify-center gap-2 text-[9px] text-zinc-700">

            <LockIcon />

            <span>
              Your connection is secure
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-800" />

            <span>
              CodeArena
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}


/* =============================================================
   ICONS
============================================================= */

const EyeIcon = () => {
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
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />

      <circle
        cx="12"
        cy="12"
        r="3"
      />
    </svg>
  );
};


const EyeOffIcon = () => {
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
        d="M3 3l18 18"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.584 10.587a2 2 0 002.829 2.829"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.88 5.09A9.77 9.77 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.76 9.76 0 01-4.132 5.411"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.228 6.228A9.76 9.76 0 002.458 12c1.274 4.057 5.064 7 9.542 7 1.61 0 3.13-.387 4.472-1.072"
      />
    </svg>
  );
};


const LockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect
        x="4"
        y="10"
        width="16"
        height="11"
        rx="2"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10V7a4 4 0 018 0v3"
      />
    </svg>
  );
};


export default Login;