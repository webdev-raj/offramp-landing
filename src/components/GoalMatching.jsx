"use client";

import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

const GOAL_CARDS = [
  {
    id: "fitness",
    label: "GOAL CATEGORY",
    title: "Fitness\nor Gym",
    count: "16,000+",
    svg: "/goalmatch/card_one.svg",
    bgColor: "#2E8B5A",
    backBgColor: "#235F3D",
    btnClass: "bg-[#FFC93C] text-[#14482A] hover:bg-yellow-300",
    btnText: "EXPLORE GYM SWAPS",
    illustrationClass: "w-[75%] h-[88%]",
    illustrationWrapperClass: "items-end justify-end pr-4",
    backTitle: "Fitness / Gym",
    backDescription: "High-protein, recovery-focused meals optimised for performance and muscle repair. Built for serious training.",
    description: "High-protein, recovery-focused recipe swaps designed for muscle repair without heavy post-meal fatigue.",
    highlights: [
      "30g+ plant & lean protein per meal",
      "Zero heavy post-workout slump",
      "Retains authentic tandoori spices",
    ],
  },
  {
    id: "weight",
    label: "GOAL CATEGORY",
    title: "Weight\nManagement",
    count: "12,000+",
    svg: "/goalmatch/card_two.svg",
    bgColor: "#4A56C4",
    backBgColor: "#2B3893",
    btnClass: "bg-[#FFC93C] text-[#1E2766] hover:bg-yellow-300",
    btnText: "EXPLORE WEIGHT SWAPS",
    illustrationClass: "w-[75%] h-[88%]",
    illustrationWrapperClass: "items-end justify-end pr-4",
    backTitle: "Weight Management",
    backDescription: "Calorie-aware selections that don't sacrifice satisfaction.",
    description: "Calorie-optimised daily meal transitions with maximum satiety so you eat full portions while losing weight.",
    highlights: [
      "Average 35% calorie reduction",
      "High dietary fiber & water volume",
      "No starvation or mini portion sizes",
    ],
  },
  {
    id: "budget",
    label: "GOAL CATEGORY",
    title: "Budget\nFriendly",
    count: "6,200+",
    svg: "/goalmatch/card_three.svg",
    bgColor: "#E53870",
    backBgColor: "#B51B46",
    btnClass: "bg-[#FFC93C] text-[#520B1F] hover:bg-yellow-300",
    btnText: "EXPLORE BUDGET SWAPS",
    illustrationClass: "w-[100%] h-[95%] sm:w-[105%] sm:h-[100%]",
    illustrationWrapperClass: "items-end justify-center pr-0",
    backTitle: "Budget Friendly",
    backDescription: "Maximum nutrition per rupee — no expensive superfoods.",
    description: "Affordable local pulse, millet, and seasonal veggie swaps that cut grocery spending while boosting nutrition.",
    highlights: [
      "Saves up to ₹2,400/month",
      "Uses readily available local ingredients",
      "Zero expensive imported health food",
    ],
  },
  {
    id: "bloodsugar",
    label: "GOAL CATEGORY",
    title: "Blood Sugar\nControl",
    count: "8,400+",
    svg: "/goalmatch/card_four.svg",
    bgColor: "#7A3DB8",
    backBgColor: "#5D2A90",
    btnClass: "bg-[#FFC93C] text-[#2D1254] hover:bg-yellow-300",
    btnText: "EXPLORE LOW-GI SWAPS",
    illustrationClass: "w-[75%] h-[88%]",
    illustrationWrapperClass: "items-end justify-end pr-4",
    backTitle: "Blood Sugar Control",
    backDescription: "Low GI, complex carb dishes to reduce glucose spikes.",
    description: "Low-GI substitutions for rice, roti, and sweets verified by endocrinologists to flatten glucose spikes.",
    highlights: [
      "Clinically tested low glycemic load",
      "Endocrinologist & dietitian verified",
      "Enjoy traditional dishes safely",
    ],
  },
];

export default function GoalMatching({ onOpenSwapModal }) {
  return (
    <section className="relative bg-[#F5A623] py-20 lg:py-28 px-6 overflow-hidden border-t border-[#E09010]">
      <div className="max-w-7xl mx-auto max-h-fit relative z-10">

        {/* Section Header */}
        <div className="mb-10">
          <p className="flex items-center gap-2 text-white text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>PERSONALISED FILTERING</span>
          </p>

          <h2 className="font-poppins font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight whitespace-wrap">
            <span className="text-white">Your goal, </span>
            <span className="text-[#DC245E]">our recipe logic.</span>
          </h2>
        </div>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GOAL_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative w-full rounded-xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "1 / 0.9" }}
              onClick={onOpenSwapModal}
            >

              {/* ── FRONT CARD ── */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-95"
                style={{ backgroundColor: card.bgColor }}
              >
                {/* Text overlay — TOP LEFT */}
                <div className="absolute top-0 left-0 z-10 pl-5 pt-8 sm:pl-8 sm:pt-14">
                  {/* GOAL CATEGORY label */}
                  <p className="text-white/75 text-[1.03rem] font-bold tracking-[0.2em] uppercase mb-1 font-mono">
                    {card.label}
                  </p>
                  {/* Title */}
                  <h3 className="font-poppins font-black text-white text-[2rem] sm:text-[4rem] leading-[1.0] tracking-tight whitespace-pre-line">
                    {card.title}
                  </h3>
                  {/* Count */}
                  <p className="text-white/80 text-xs sm:text-sm font-semibold mt-2.5 tracking-wide">
                    {card.count}
                  </p>
                </div>

                {/* SVG Illustration — fills lower portion */}
                <div className={`absolute inset-0 flex ${card.illustrationWrapperClass}`}>
                  <div className={`relative ${card.illustrationClass}`}>
                    <Image
                      src={card.svg}
                      alt={card.title.replace("\n", " ")}
                      fill
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* ── BACK CARD (revealed on hover) ── */}
              <div
                className={`absolute border-6 inset-0 rounded-2xl overflow-hidden bg-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-20 flex`}
                style={{ borderColor: card.bgColor }}
              >
                {/* Left Colored Accent Stripe
                <div
                  className="w-1.5 shrink-0"
                  style={{ backgroundColor: card.bgColor }}
                /> */}

                {/* Card Content */}
                <div className="flex-1 flex flex-col">
                  {/* Top Colored Header */}
                  <div
                    className="px-5 py-4 sm:px-7 sm:py-9 flex items-center justify-between gap-3"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    <div>
                      <p className="text-white/80 text-[1.03rem] sm:text-xs font-bold tracking-[0.18em] uppercase font-mono mb-1">
                        {card.label}
                      </p>
                      <h3 className="font-poppins font-extrabold text-white text-lg sm:text-4xl leading-tight tracking-tight">
                        {card.backTitle}
                      </h3>
                    </div>
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-white text-white shrink-0 mt-0.5" />
                  </div>

                  {/* White Body */}
                  <div className="flex-1 flex flex-col justify-between px-5 py-4 sm:px-8 sm:py-6">
                    {/* Description */}
                    <p className="text-[#5A5A5A] text-xs sm:text-[1.2rem] leading-loose font-normal mb-4">
                      {card.backDescription}
                    </p>

                    {/* Stat Box */}
                    <div>
                      <div className="border-2 rounded-xl px-4 py-3 sm:px-5 sm:py-4 mb-4"
                        style={{ backgroundColor: `${card.bgColor}20`,borderColor:`${card.bgColor}` }}>
                        <p className="font-poppins font-black text-white text-2xl sm:text-3xl leading-none tracking-tight mb-0.5"
                           style={{ color:`${card.bgColor}` }}>
                          {card.count}+
                        </p>
                        <p className="text-black text-[10px] sm:text-xs font-medium">
                          Professionally reviewed swaps available
                        </p>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenSwapModal(); }}
                        className="w-60 border-2 font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-full transition-all flex items-center justify-center gap-2 hover:opacity-80"
                        style={{ borderColor: card.bgColor, backgroundColor: card.bgColor }}
                      >
                        <span className="text-white">Explore library</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Explore Button */}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
