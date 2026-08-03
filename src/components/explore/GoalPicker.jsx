"use client";

import AnimatedCounter from "../AnimatedCounter";

const GOALS = [
  {
    id: "fitness",
    title: "Fitness or Gym",
    swapsCount: "3 SWAPS",
    bgClass: "bg-[#1A7A45] hover:bg-[#145E35] border-[#135A32]",
    btnClass: "bg-[#FFC93C] text-[#145E35]",
    icon: "💪",
  },
  {
    id: "weight",
    title: "Weight Management",
    swapsCount: "3 SWAPS",
    bgClass: "bg-[#D91E5C] hover:bg-[#B5144A] border-[#940E3B]",
    btnClass: "bg-white text-[#D91E5C]",
    icon: "⚖️",
  },
  {
    id: "budget",
    title: "Budget Friendly",
    swapsCount: "3 SWAPS",
    bgClass: "bg-[#F5AE38] hover:bg-[#D99423] border-[#B87A14]",
    btnClass: "bg-[#1B3589] text-white",
    icon: "💰",
  },
  {
    id: "blood-sugar",
    title: "Blood Sugar Control",
    swapsCount: "3 SWAPS",
    bgClass: "bg-[#7951A9] hover:bg-[#603B8D] border-[#4A2B70]",
    btnClass: "bg-[#FFC93C] text-[#603B8D]",
    icon: "🩺",
  },
];

export default function GoalPicker({ selectedGoal, onSelectGoal }) {
  return (
    <section className="relative bg-[#1B3589] text-white pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Background Watermark */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-4 -translate-y-1/2 text-[12rem] font-anton text-white/[0.05] select-none pointer-events-none leading-none z-0"
      >
        पोषण
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="mb-12">
          <div className="flex font-jetbrains items-center justify-start gap-2 text-[#FFC93C] text-xs font-extrabold tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFC93C]" />
            <span>YOUR GOAL · <AnimatedCounter value="848" /> RECIPES LOADED</span>
          </div>

          <h2 className="font-haetten text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
            Pick a goal, we'll <br className="hidden sm:inline" />
            <span className="text-[#FFC93C]">find the right swap.</span>
          </h2>
        </div>

        {/* 4 Goal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GOALS.map((goal) => {
            const isSelected = selectedGoal === goal.id;
            return (
              <div
                key={goal.id}
                onClick={() => onSelectGoal(isSelected ? null : goal.id)}
                className={`${goal.bgClass} scallop-card border-4 rounded-3xl p-6 flex flex-col justify-between min-h-[220px] shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${
                  isSelected ? "ring-4 ring-[#FFC93C] scale-[1.03]" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-jetbrains uppercase tracking-widest text-white/80 mb-4">
                    <span>GOAL CATEGORY</span>
                    <span className="bg-black/20 px-2 py-0.5 rounded text-white/90">
                      {goal.swapsCount}
                    </span>
                  </div>

                  <h3 className="font-montserrat-bold text-2xl sm:text-3xl text-white leading-tight mb-2">
                    {goal.title}
                  </h3>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/20 mt-4">
                  <button
                    className={`${goal.btnClass} font-jetbrains text-xs font-extrabold px-4 py-2 rounded-full shadow-md transition-all group-hover:scale-105 uppercase flex items-center gap-1.5`}
                  >
                    <span>{isSelected ? "FILTERED ✓" : "SHOW SWAPS →"}</span>
                  </button>
                  <span className="text-2xl">{goal.icon}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wavy bottom divider leading to sand background */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FDF6E8] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
