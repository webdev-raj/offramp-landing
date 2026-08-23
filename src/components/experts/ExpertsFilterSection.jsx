"use client";

import { GOAL_FILTERS, REGION_FILTERS } from "./expertsData";

export default function ExpertsFilterSection({
  selectedGoal,
  setSelectedGoal,
  selectedRegion,
  setSelectedRegion,
}) {
  return (
    <section className="bg-[#FDF8EE] pt-8 pb-6 px-4 sm:px-6 lg:px-8 border-b border-[#E8DCC4]/60">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Row 1: GOAL Filter Bar (Navy Container) */}
        <div className="bg-[#1B3589] rounded-2xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 overflow-x-auto shadow-md">
          <div className="font-jetbrains text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#F5AE38] px-3 shrink-0 flex items-center gap-1.5">
            <span>GOAL</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {GOAL_FILTERS.map((goal) => {
              const isActive = selectedGoal === goal.id;
              return (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`text-xs font-jetbrains font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#D91E5C] text-white shadow-md scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white/90 border border-white/20"
                  }`}
                >
                  {goal.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: REGION Filter Bar (Sand Container) */}
        <div className="bg-[#FEE9B7] rounded-2xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 overflow-x-auto shadow-sm border border-[#E8D4A2]">
          <div className="font-jetbrains text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#7A5A18] px-3 shrink-0 flex items-center gap-1.5">
            <span>REGION</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {REGION_FILTERS.map((reg) => {
              const isActive = selectedRegion === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`text-xs font-jetbrains font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#D91E5C] text-white shadow-md scale-105"
                      : "bg-white/80 hover:bg-white text-[#4A3B18] border border-[#E0CF9B]"
                  }`}
                >
                  {reg.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
