"use client";

import { WEEKDAY_LABELS } from "@/lib/api/mockData/dashboard.mock";

export default function WeeklyPlanTable({ weeklyPlan, loading, error }) {
  if (loading) {
    return (
      <div className="mb-10">
        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-3" />
        <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4] animate-pulse space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-10 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !weeklyPlan) return null;

  const getPillStyle = (count) => {
    switch (count) {
      case 1:
        return "bg-[#F5AE38] text-[#1E1E1E]";
      case 2:
        return "bg-[#E8951D] text-white";
      case 3:
        return "bg-[#CB5638] text-white";
      case 4:
      default:
        return "bg-[#B83E1E] text-white";
    }
  };

  return (
    <div className="mb-10">
      {/* Eyebrow & Subtitle */}
      <div className="mb-4">
        <div className="flex items-center gap-2 font-jetbrains text-xs mb-1">
          <span className="text-[#E0187A] font-bold">◀</span>
          <span className="font-bold tracking-[0.2em] uppercase text-[#B59963]">
            WEEKLY PLAN
          </span>
        </div>
        <p className="font-dmsans text-sm text-[#7A7A8A]">
          Your personalised meal-swap schedule.
        </p>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#E8DCC4]/70 overflow-hidden">
        <div className="divide-y divide-[#E8DCC4]/50">
          {weeklyPlan.map((row) => (
            <div
              key={row.week}
              className="p-4 sm:px-6 flex items-center justify-between gap-4 hover:bg-[#FBF3E3]/30 transition-colors"
            >
              {/* Left Label */}
              <div className="font-jetbrains font-bold text-xs sm:text-sm text-[#1E2538] w-20 shrink-0 uppercase tracking-wider">
                WEEK {row.week}
              </div>

              {/* Day Circles */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-start">
                {(row.swapDays || []).map((isSwap, dIdx) => {
                  const dayLabel = WEEKDAY_LABELS[dIdx] || "M";
                  return (
                    <div
                      key={dIdx}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-jetbrains font-bold text-xs transition-all ${
                        isSwap
                          ? "bg-[#1B2264] text-white shadow-sm"
                          : "border-2 border-[#E8DCC4] bg-white text-transparent"
                      }`}
                    >
                      {isSwap ? dayLabel : ""}
                    </div>
                  );
                })}
              </div>

              {/* Right Swap Count Pill */}
              <div className="shrink-0">
                <span
                  className={`font-jetbrains font-extrabold text-[10px] sm:text-xs tracking-wider uppercase px-3 py-1.5 rounded-md shadow-xs ${getPillStyle(
                    row.swapCount
                  )}`}
                >
                  {row.swapCount} {row.swapCount === 1 ? "SWAP" : "SWAPS"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend Footer */}
        <div className="bg-[#FFFDF5] p-4 px-6 border-t border-[#E8DCC4]/50 flex items-center gap-6 font-dmsans text-xs text-[#7A7A8A]">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#1B2264] inline-block" />
            <span>Swap day</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full border-2 border-[#E8DCC4] bg-white inline-block" />
            <span>Rest day</span>
          </div>
        </div>
      </div>
    </div>
  );
}
