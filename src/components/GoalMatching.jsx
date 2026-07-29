"use client";

import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";

const GOAL_OPTIONS = [
  {
    id: "fitness",
    label: "Fitness / Gym",
    icon: "🏋️‍♂️",
    headerBg: "bg-[#1B7042]",
    btnClass: "bg-[#1B7042] hover:bg-[#155A34] text-white",
    description:
      "High protein, recovery-focused recipe swaps tailored for muscle repair and athletic performance without sacrificing authentic Indian taste.",
    statValue: "16,000+",
    statLabel: "Dietitian-submitted gym recipes",
    actionText: "Explore Gym Swaps",
  },
  {
    id: "bloodsugar",
    label: "Blood sugar control",
    icon: "🩸",
    headerBg: "bg-[#2542A5]",
    btnClass: "bg-[#2542A5] hover:bg-[#1C3384] text-white",
    description:
      "Low-GI substitutions for rice, roti, and sweets designed by top endocrinologists to prevent post-meal glucose spikes.",
    statValue: "12,400+",
    statLabel: "Diabetic-friendly regional swaps",
    actionText: "Explore Low-GI Swaps",
  },
  {
    id: "weight",
    label: "Weight management",
    icon: "⚖️",
    headerBg: "bg-[#D81B60]",
    btnClass: "bg-[#D81B60] hover:bg-[#B2134E] text-white",
    description:
      "Calorie-dense ingredient swaps with high satiety index so you stay full longer while maintaining a healthy deficit.",
    statValue: "22,000+",
    statLabel: "Calorie-optimised daily plans",
    actionText: "Explore Satiety Swaps",
  },
  {
    id: "budget",
    label: "Budget-friendly",
    icon: "👛",
    headerBg: "bg-[#C44319]",
    btnClass: "bg-[#C44319] hover:bg-[#A63713] text-white",
    description:
      "Affordable local pulse, millet, and seasonal veggie alternatives that reduce monthly grocery bills while increasing nutrient density.",
    statValue: "38%",
    statLabel: "Average monthly grocery cost reduction",
    actionText: "Explore Budget Swaps",
  },
];

export default function GoalMatching({ onOpenSwapModal }) {
  const [activeGoal, setActiveGoal] = useState(GOAL_OPTIONS[0]);

  return (
    <section className="relative bg-[#F5A623] py-20 lg:py-28 px-6 overflow-hidden border-t border-[#E09010]">
      {/* Background Devanagari Watermark */}
      <span
        aria-hidden="true"
        className="absolute bottom-4 right-8 text-[14rem] sm:text-[18rem] lg:text-[24rem] font-anton text-[#3D1400]/[0.06] select-none pointer-events-none leading-none"
      >
        लक्ष्य
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Heading + Tab Selectors */}
          <div className="lg:col-span-6">
            <p className="flex items-center gap-2 text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3">
              <Star className="w-4 h-4 fill-white text-white" />
              <span>INDIVIDUAL GOAL MATCHING</span>
            </p>

            <h2 className="font-anton uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.96] tracking-tight mb-8">
              <span className="text-white block">Your goal,</span>
              <span className="text-[#3D1400] block">our recipe logic.</span>
            </h2>

            {/* Stacked Goal Buttons */}
            <div className="space-y-3 max-w-md">
              {GOAL_OPTIONS.map((goal) => {
                const isSelected = activeGoal.id === goal.id;
                return (
                  <button
                    key={goal.id}
                    onClick={() => setActiveGoal(goal)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-left text-sm sm:text-base flex items-center justify-between transition-all duration-200 shadow-sm ${
                      isSelected
                        ? "bg-[#1B7042] text-white ring-4 ring-[#1B7042]/30 scale-[1.02] shadow-md"
                        : "bg-[#EA9712] hover:bg-[#DE8B07] text-[#3D1400]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span>{goal.icon}</span>
                      <span>{goal.label}</span>
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "translate-x-1 text-white" : "text-[#3D1400]/70"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Goal Outcome Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#E09010] transform hover:scale-[1.01] transition-transform duration-300">

              {/* Header Bar */}
              <div className={`${activeGoal.headerBg} p-6 text-white flex items-center gap-3 transition-colors duration-300`}>
                <h3 className="font-anton text-2xl sm:text-3xl tracking-wide uppercase">
                  {activeGoal.label}
                </h3>
                <span className="text-2xl">{activeGoal.icon}</span>
              </div>

              {/* Body */}
              <div className="p-8 sm:p-10">
                <p className="text-[#3A3A3A] text-base sm:text-lg leading-relaxed font-medium mb-8">
                  {activeGoal.description}
                </p>

                {/* Highlight Metric */}
                <div className="bg-[#FDF8EE] border border-[#E8DCC4] rounded-2xl p-6 mb-8">
                  <p className="font-anton text-4xl sm:text-5xl text-[#1B7042] tracking-tight leading-none mb-1">
                    {activeGoal.statValue}
                  </p>
                  <p className="text-[#5A5A5A] text-xs sm:text-sm font-semibold">
                    {activeGoal.statLabel}
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={onOpenSwapModal}
                  className={`w-full ${activeGoal.btnClass} font-extrabold text-sm sm:text-base py-4 rounded-full flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wider`}
                >
                  <span>{activeGoal.actionText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
