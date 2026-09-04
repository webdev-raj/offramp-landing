"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function ExpertLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (typeof window !== "undefined") {
        // Set offramp_expert_session flag for expert dashboard
        localStorage.setItem(
          "offramp_expert_session",
          JSON.stringify({
            expert: "expert_001",
            email: formData.email || "meera@offramp.in",
            timestamp: Date.now(),
          })
        );
        window.dispatchEvent(new Event("offramp-auth-change"));
      }
    } catch (err) {
      console.warn("Could not save expert session:", err);
    }

    setTimeout(() => {
      router.push("/expert");
    }, 400);
  };

  const handleGoogleSignIn = () => {
    alert("Google Expert Sign-In integration ready for production OAuth.");
  };

  return (
    <div className="w-full max-w-[28rem] relative z-10">
      {/* ── Form Card ── */}
      <div className="bg-[#FFFDF5] border-t-4 border-black shadow-2xl p-6 sm:p-8 relative">
        {/* Tab Switcher at Top */}
        <div className="grid grid-cols-2 bg-[#FFF5DB] border border-[#EADFC7] rounded-xl mb-6 overflow-hidden">
          <button
            type="button"
            className="bg-[#1B2264] text-white font-montserrat-bold font-black text-xs sm:text-sm py-2.5 px-4 shadow-sm transition-all text-center"
          >
            Sign In
          </button>
          <Link
            href="/expert/signup"
            className="text-[#1E1E1E] hover:text-[#E0187A] font-montserrat-bold font-bold text-xs sm:text-sm py-2.5 px-4 transition-all text-center flex items-center justify-center"
          >
            Apply as Expert
          </Link>
        </div>

        {/* Heading & Subtext */}
        <div className="mb-6">
          <h2 className="font-montserrat-bold font-black text-2xl sm:text-3xl text-[#1E1E1E] tracking-tight">
            Welcome back
          </h2>
          <p className="text-xs sm:text-sm font-dmsans text-[#8B6830] font-medium mt-1.5 leading-snug">
            Sign in to your expert account to manage your dashboard.
          </p>
        </div>

        {/* Google Sign-in */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white hover:bg-gray-50 border-2 border-[#FFE8B0] text-[#1E1E1E] font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2.5 mb-5 cursor-pointer"
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
          <span className="font-jetbrains text-xs font-bold text-[#1E1E1E]">
            Sign in with Google
          </span>
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-5">
          <div className="border-t border-[#EADFC7] w-full" />
          <span className="bg-[#FFFDF5] px-3 text-[10px] font-mono text-[#8C827A] font-bold uppercase tracking-widest">
            OR
          </span>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">
              EXPERT EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
            />
          </div>

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
                placeholder="Your password"
                required
                className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-3 px-4 pr-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#1E1E1E] transition-colors p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Under-password row */}
          <div className="flex items-center justify-between pt-1 text-xs font-dmsans">
            <Link
              href="/expert/signup"
              className="text-[#1E1E1E] hover:text-[#E0187A] font-medium underline underline-offset-2 transition-colors"
            >
              Not an expert yet? Apply here &rarr;
            </Link>
            <button
              type="button"
              onClick={() => alert("Password reset instructions sent to your email.")}
              className="text-[#1B2264] hover:underline font-semibold"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FDE3A0] hover:bg-[#FCD34D] active:scale-[0.99] text-[#523A0B] font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider mt-6 font-montserrat-bold cursor-pointer disabled:opacity-75"
          >
            <span>{isLoading ? "AUTHENTICATING..." : "SIGN IN TO DASHBOARD"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Under-Card Link */}
      <div className="mt-4 text-center font-montserrat">
        <p className="text-xs text-[#3A2F1D] font-medium">
          Not yet an expert?{" "}
          <Link
            href="/expert/signup"
            className="font-extrabold text-[#1B2264] hover:underline inline-flex items-center gap-1"
          >
            Apply now &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
