"use client";

import { useState, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const GOAL_CATEGORIES = [
  {
    id: "weight-loss",
    label: "Weight Loss",
    emoji: "⚖️",
    bg: "bg-[#2542A5]/40",
    borderColor: "border-[#2542A5]",
    hoverBg: "hover:bg-[#2542A5]",
    count: "8,200+",
    desc: "Calorie-controlled Indian meals with high satiety. Roti alternatives, low-oil sabzis and high-protein dals.",
    price: "8,200++",
    highlight: "bg-[#2542A5]",
  },
  {
    id: "fitness-gym",
    label: "Fitness / Gym",
    emoji: "🏋️",
    bg: "bg-[#E0187A]/40",
    hoverBg: "hover:bg-[#E0187A]",
    borderColor: "border-[#E0187A]",
    count: "16,000+",
    desc: "High-protein, post-workout Indian food swaps. Paneer, dal, sprouts and egg-based meal options tailored for muscle gain.",
    price: "16,000++",
    highlight: "bg-[#E0187A]",
  },
  {
    id: "diabetic",
    label: "Diabetic",
    emoji: "🩺",
    bg: "bg-[#1B7042]/40",
    hoverBg: "hover:bg-[#1B7042]",
    borderColor: "border-[#1B7042]",
    count: "6,400+",
    desc: "Low GI Indian foods. Millets, brown rice, high-fibre vegetables and sugar-free Indian sweets.",
    price: "6,400++",
    highlight: "bg-[#1B7042]",
  },
  {
    id: "heart-health",
    label: "Heart Health",
    emoji: "❤️",
    bg: "bg-[#CB5638]/40",
    hoverBg: "hover:bg-[#CB5638]",
    borderColor: "border-[#CB5638]",
    count: "5,100+",
    desc: "Low-sodium, low-cholesterol Indian cooking. Olive oil alternatives, steamed snacks and omega-3 rich foods.",
    price: "5,100++",
    highlight: "bg-[#CB5638]",
  },
  {
    id: "vegan",
    label: "Vegan",
    emoji: "🌱",
    bg: "bg-[#7E38B7]/40",
    hoverBg: "hover:bg-[#7E38B7]",
    borderColor: "border-[#7E38B7]",
    count: "9,800+",
    desc: "100% plant-based Indian cuisine. Tofu, jackfruit, soy chaap, and dairy-free versions of classic Indian dishes.",
    price: "9,800++",
    highlight: "bg-[#7E38B7]",
  },
  {
    id: "keto",
    label: "Keto",
    emoji: "🥩",
    bg: "bg-[#C44319]/40",
    borderColor: "border-[#C44319]",
    hoverBg: "hover:bg-[#C44319]",
    count: "4,600+",
    desc: "Low-carb Indian meals. Cauliflower rice, almond flour rotis, paneer dishes and keto-friendly Indian curries.",
    price: "4,600++",
    highlight: "bg-[#C44319]",
  },
];

export default function RegionalDishes({ onOpenSwapModal }) {
  const [activeGoal, setActiveGoal] = useState("fitness-gym");
  const detailPanelRef = useRef(null);

  const active = GOAL_CATEGORIES.find((g) => g.id === activeGoal) || GOAL_CATEGORIES[1];

  const handleGoalClick = (goalId) => {
    setActiveGoal(goalId);

    // Only auto-scroll on mobile/tablet (below lg breakpoint = 1024px)
    // On desktop the detail panel is already visible side-by-side, so no scroll needed
    if (typeof window !== "undefined" && window.innerWidth < 1024 && detailPanelRef.current) {
      // Wait a tick so the detail panel content updates before measuring scroll position
      requestAnimationFrame(() => {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: detailPanelRef.current,
            offsetY: 220, // small gap from top of viewport
          },
          ease: "power2.inOut",
        });
      });
    }
  };

  return (
    <section className="relative bg-[#FDF8EE] py-16 lg:py-24 px-6 overflow-hidden">
      {/* Background Dots Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #F5A623 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C44319] text-xs font-extrabold tracking-[0.2em] uppercase mb-3">
              ★ GOAL-BASED FILTERS
            </p>
            <h2 className="font-haetten text-5xl sm:text-6xl lg:text-7xl text-[#1E2538] leading-[0.85]">
              Regional dishes that <br className="hidden sm:inline" />
              <span className="text-[#E0187A]">match your goals exactly</span>
            </h2>
          </div>
          <button
            onClick={onOpenSwapModal}
            className="shrink-0 bg-[#E0187A] hover:bg-[#c41267] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 self-start sm:self-auto"
          >
            <span>Browse All Dishes</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Grid: Categories + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left: Goal Category Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {GOAL_CATEGORIES.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleGoalClick(goal.id)}
                className={`${goal.bg} ${goal.hoverBg} border-3 ${goal.borderColor} group relative rounded-2xl p-5 text-left transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-1 ${
                  activeGoal === goal.id
                    ? "ring-4 ring-white/60 scale-[1.02] shadow-xl"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                {/* Active indicator */}
                {activeGoal === goal.id && (
                  <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-white shadow-md" />
                )}

                <div className="text-2xl mb-3">{goal.emoji}</div>

                <p className="font-extrabold text-[#1E2538] group-hover:text-white leading-tight mb-1 transition-colors duration-200">
                  {goal.label}
                </p>

                <p className="text-[#1E2538]/70 group-hover:text-white/90 text-xs font-medium transition-colors duration-200">
                  {goal.count} dishes
                </p>

                {/* Bottom stat bar */}
                <div className="mt-4 pt-3 border-t border-[#1E2538]/10 group-hover:border-white/20 transition-colors duration-200">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-[#1E2538]/50 group-hover:text-white/50 transition-colors duration-200">
                    OFFRAMP INDIA
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail Panel */}
          <div
            ref={detailPanelRef}
            className={`lg:col-span-5 ${active.highlight} rounded-2xl p-8 flex flex-col justify-between min-h-[340px] shadow-xl transition-all duration-300`}
          >
            {/* Category Label */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-white/80 text-xs font-extrabold uppercase tracking-widest">
                  {active.label}
                </p>
                <span className="text-2xl">{active.emoji}</span>
              </div>

              {/* Big Count */}
              <p className="font-anton text-6xl sm:text-7xl text-white leading-none tracking-tight mb-2">
                {active.price}
              </p>
              <p className="text-white/70 text-xs font-medium mb-6">
                verified regional dish options
              </p>

              {/* Description */}
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal border-t border-white/20 pt-5">
                {active.desc}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenSwapModal}
              className="mt-6 w-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all group"
            >
              <span>Explore {active.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}