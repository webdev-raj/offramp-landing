"use client";

import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AuthPage({ initialMode = "signup" }) {
  const [mode, setMode] = useState(initialMode); // "signup" or "signin"
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      mode === "signup"
        ? `Account created for ${formData.fullName || "User"}!`
        : `Signed in as ${formData.email || "User"}!`
    );
  };

  return (
    <div>
      {/* Header Navigation */}
      <Navbar onOpenSwapModal={() => { }} />

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen pt-19 flex items-center justify-center bg-[#D91E5C]">
        <div className="w-full h-full flex flex-col lg:flex-row relative">
          {/* ════════════════════ LEFT PANEL (PINK / MAGENTA) ════════════════════ */}
          <div className="lg:w-[52%] h-full bg-[#D91E5C] text-white p-8 sm:p-12 lg:py-24 flex flex-col justify-between relative overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border-[30px] border-white/10 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/10 pointer-events-none" />

            {/* Top Content */}
            <div className="relative z-10">
              <h1 className="font-montserrat-bold font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] uppercase">
                <span className="block text-white">LOVE THE FOOD.</span>
                <span className="block text-[#f5a623]">SWAP THE REST.</span>
              </h1>

              <p className="text-[#f3b7b7] text-sm sm:text-xl font-dmsans max-w-md mt-5 leading-relaxed">
                8,400+ Indian dishes. Smarter ingredients.
                <br className="hidden sm:inline" /> Same flavour — without the compromises.
              </p>
            </div>

            {/* Middle Section — 3 Stat Pills */}
            <div className="relative z-10 my-8 space-y-3.5">
              {/* Pill 1: Active Users */}
              <div className="p-1 bg-[#F5A623] max-w-xs">
                <div className="border-2 border-[#F7B84F] text-[#1E1E1E] px-4 py-2.5 flex items-center justify-between">
                  <span className="font-montserrat-bold font-black text-2xl sm:text-3xl tracking-tight">
                    24,800+
                  </span>
                  <span className="text-[10px] sm:text-xs font-jetbrains tracking-[0.2em] uppercase text-black/70">
                    ACTIVE USERS
                  </span>
                </div>
              </div>

              {/* Pill 2: Indian Dishes */}
              <div className="p-1 bg-[#FFF5E0] max-w-[18rem]">
                <div className="bg-[#FFF5E0] border-2 border-[#FFF5E0] text-[#E0187A] px-4 py-2.5 flex items-center justify-between">
                  <span className="font-montserrat-bold font-black text-2xl sm:text-3xl tracking-tight">
                    8,400+
                  </span>
                  <span className="text-[10px] sm:text-xs font-jetbrains tracking-[0.2em] uppercase text-[#E0187A]/75">
                    INDIAN DISHES
                  </span>
                </div>
              </div>

              {/* Pill 3: Swaps Completed */}
              <div className="p-1 bg-[#1B3489] max-w-[21rem]">
                <div className="bg-[#1B3489] border-2 border-[#5467a7] text-white px-5 py-3.5 flex items-center justify-between shadow-md max-w-sm">
                  <span className="font-montserrat-bold font-black text-2xl sm:text-3xl tracking-tight">
                    12,600+
                  </span>
                  <span className="text-[10px] sm:text-xs font-jetbrains tracking-[0.2em] uppercase text-white/70">
                    SWAPS COMPLETED
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Quote Box (Navy Blue) */}
            <div className="p-1 bg-[#1B3489] max-w-md z-10">
              <div className="relative text-white p-6 shadow-xl border border-white/10">
                <p className="italic font-dmsans text-xs sm:text-sm leading-loose text-white/90 font-normal">
                  &ldquo;OffRamp is the first tool that truly respects Indian food culture while helping me control my blood sugar.&rdquo;
                </p>
                <div className="flex items-center justify-between font-jetbrains mt-4 pt-3 border-t border-white/10">
                  <span className="text-xs font-bold text-[#F5A623]">
                    &mdash; Priya S., Chennai
                  </span>
                  <div className="flex gap-1 text-[#F5A623]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Diamond Strip */}
            <div className="absolute bottom-2 left-6 right-6 text-white/20 text-[10px] font-mono tracking-widest overflow-hidden whitespace-nowrap pointer-events-none">
              ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
            </div>
          </div>

          {/* ════════════════════ WAVY SEPARATOR SVG ════════════════════ */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[51.9%] -translate-x-[50%] z-20 h-full w-[50px] pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="100%"
              viewBox="0 0 40 757"
              preserveAspectRatio="none"
              fill="none"
            >
              <g clipPath="url(#clip0_614_1580)">
                <g clipPath="url(#clip1_614_1580)">
                  <path
                    d="M40 0C40 25.2253 0 25.2253 0 50.4507C0 75.676 40 75.676 40 100.901C40 126.127 0 126.127 0 151.352C0 176.577 40 176.577 40 201.803C40 227.028 0 227.028 0 252.253C0 277.479 40 277.479 40 302.704C40 327.929 0 327.929 0 353.155C0 378.38 40 378.38 40 403.605C40 428.831 0 428.831 0 454.056C0 479.281 40 479.281 40 504.507C40 529.732 0 529.732 0 554.957C0 580.183 40 580.183 40 605.408C40 630.633 0 630.633 0 655.859C0 681.084 40 681.084 40 706.309C40 731.535 0 731.535 0 756.76H40V0Z"
                    fill="#F1A323"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_614_1580">
                  <rect width="40" height="756.76" fill="white" />
                </clipPath>
                <clipPath id="clip1_614_1580">
                  <rect width="40" height="756.76" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* ════════════════════ RIGHT PANEL (GOLDEN YELLOW + FORM CARD) ════════════════════ */}
          <div className="lg:w-[48%] bg-[#F5A623] p-6 sm:p-10 lg:p-12 flex items-center justify-center relative">

            {/* Inner Cream Form Card */}
            <div className="bg-[#FFF5E0] border-t-4 border-[#D91E5C] shadow-2xl w-full max-w-[30rem] p-6 sm:p-8 relative z-10">

              {/* Header: Mode Tag + Mode Selector Tabs */}
              <div className="mb-6">
                <p className="text-[10px] font-jetbrains font-bold tracking-[0.2em] text-[#f5a623] uppercase mb-4">
                  OFFRAMP &middot; {mode === "signup" ? "NEW ACCOUNT" : "WELCOME BACK"}
                </p>

                {/* Tabs */}
                <div className="flex items-center gap-6 border-b border-[#EADFC7] pb-3">
                  <button
                    type="button"
                    onClick={() => setMode("signin")}
                    className={`text-base transition-colors font-montserrat-bold tracking-tight relative pb-1 ${mode === "signin"
                      ? "font-extrabold text-[#1E1E1E] after:content-[''] after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-0.5 after:bg-[#D91E5C]"
                      : "font-semibold text-[#f5a623] hover:text-[#1E1E1E]"
                      }`}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className={`text-base font-montserrat-bold tracking-tight transition-colors relative pb-1 ${mode === "signup"
                      ? "font-extrabold text-[#1E1E1E] after:content-[''] after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-0.5 after:bg-[#D91E5C]"
                      : "font-semibold text-[#f5a623] hover:text-[#1E1E1E]"
                      }`}
                  >
                    Create account
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h2 className="font-montserrat-bold font-black text-3xl sm:text-4xl text-[#1E1E1E] tracking-tight">
                  {mode === "signup" ? "Join OffRamp." : "Good to see you."}
                </h2>
                <p className="text-xs font-dmsans sm:text-sm text-[#8B6830] font-medium mt-1.5">
                  {mode === "signup"
                    ? "Free forever. No credit card needed."
                    : "Sign in to your swaps, planner, and history."}
                </p>
              </div>

              {/* Google Sign-in Button */}
              <button
                type="button"
                onClick={() => alert("Google Sign-In integration ready.")}
                className="w-full bg-[#ffff] hover:bg-gray-50 border-2 border-[#FFE8B0] text-[#1E1E1E] font-bold text-xs sm:text-sm py-3 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2.5 mb-5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="font-jetbrains">
                  {mode === "signup" ? "Sign up with Google" : "Continue with Google"}
                </span>
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-5">
                <div className="border-t border-[#EADFC7] w-full" />
                <span className="bg-[#FFFDF5] px-3 text-[10px] font-mono text-[#8C827A] font-bold uppercase tracking-widest">
                  OR
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name field (Create Account only) */}
                {mode === "signup" && (
                  <div>
                    <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      required
                      className="w-full bg-[#FFE8B0] text-[#1E1E1E] text-sm py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0187A]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
                    />
                  </div>
                )}

                {/* Email field */}
                <div>
                  <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0187A]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
                  />
                </div>

                {/* Password field */}
                <div>
                  <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder={mode === "signup" ? "Min. 6 characters" : "Your password"}
                      required
                      className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-3 px-4 pr-11 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0187A]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#1E1E1E] transition-colors p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Forgot Password link (Sign In mode) */}
                  {mode === "signin" && (
                    <div className="text-right mt-1.5">
                      <button
                        type="button"
                        onClick={() => alert("Password reset link sent.")}
                        className="text-xs font-dmsans text-[#E0187A] hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FDE3A0] hover:bg-[#FCD34D] text-[#523A0B] font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-md shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider mt-6 font-montserrat-bold"
                >
                  <span>
                    {mode === "signup" ? "NEXT: YOUR PREFERENCES" : "SIGN IN"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Legal Note / Switch Mode Links */}
              {mode === "signup" && (
                <p className="text-xs text-[#8C827A] text-center mt-6  font-montserrat">
                  By continuing you agree to our{" "}
                  <a href="#terms" className="underline hover:text-[#1E1E1E]">
                    Terms
                  </a>{" "}
                  &amp;{" "}
                  <a href="#privacy" className="underline hover:text-[#1E1E1E]">
                    Privacy Policy
                  </a>
                  .
                </p>
              )}
              <div className="mt-6 text-center space-y-2 font-montserrat">

                <p className="text-xs text-[#6B6560] font-medium mt-3">
                  {mode === "signup" ? (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setMode("signin")}
                        className="font-extrabold text-[#E0187A] hover:underline"
                      >
                        Sign in
                      </button>
                    </>
                  ) : (
                    <>
                      New to OffRamp?{" "}
                      <button
                        type="button"
                        onClick={() => setMode("signup")}
                        className="font-extrabold text-[#E0187A] hover:underline"
                      >
                        Create a free account
                      </button>
                    </>
                  )}
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
