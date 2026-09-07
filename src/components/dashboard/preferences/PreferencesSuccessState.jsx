"use client";

import { useRouter } from "next/navigation";

export default function PreferencesSuccessState() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {/* Animated check circle */}
      <div className="relative mb-8">
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-[#1B7042]/20 animate-ping" />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1B7042] to-[#2A9060] flex items-center justify-center shadow-xl">
          <svg
            className="w-12 h-12 text-white"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 25l10 10 18-18" />
          </svg>
        </div>
      </div>

      {/* Eyebrow */}
      <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.3em] uppercase text-[#1B7042] mb-3">
        ✦ PREFERENCES SAVED
      </p>

      {/* Heading */}
      <h2 className="font-montserrat-bold font-black text-3xl sm:text-4xl text-[#1E2538] tracking-tight mb-4">
        You&apos;re all set!
      </h2>

      {/* Sub-text */}
      <p className="font-dmsans text-sm text-[#7A7A8A] max-w-sm leading-relaxed mb-3">
        Your dietary profile has been saved. We&apos;re now personalizing your food swap
        recommendations based on your preferences.
      </p>
      <p className="font-dmsans text-xs text-[#9A9AAA] max-w-xs leading-relaxed mb-10">
        Your transition journey starts now. Expect your first tailored swap suggestions
        to appear shortly on your dashboard.
      </p>

      {/* Cards row */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        {[
          { label: "Personalized Swaps", icon: "🔄", color: "#1B3589" },
          { label: "Diet-Safe Picks", icon: "🛡️", color: "#1B7042" },
          { label: "Budget Matched", icon: "💡", color: "#CB5638" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border border-[#E8DCC4]/60 bg-white shadow-sm min-w-[110px]"
          >
            <span className="text-2xl">{item.icon}</span>
            <span
              className="font-jetbrains font-extrabold text-[10px] tracking-wider uppercase"
              style={{ color: item.color }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="font-jetbrains font-extrabold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl bg-[#1B3589] text-white hover:bg-[#162B72] transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Go to Dashboard →
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/swaps")}
          className="font-jetbrains font-extrabold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl border-2 border-[#E8DCC4] text-[#4A4A5A] hover:border-[#1B3589]/40 hover:bg-[#F5F3FF] transition-all active:scale-95 cursor-pointer"
        >
          Browse Swaps
        </button>
      </div>
    </div>
  );
}
