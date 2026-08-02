"use client";

import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

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
    <section className="relative bg-[#F5AE38] py-20 lg:py-28 px-6 overflow-hidden border-t border-[#F5AE38]">
      <div className="max-w-7xl mx-auto max-h-fit relative z-10">

        {/* Section Header */}
        <div className="mb-10">
          <p className="flex items-center gap-2 text-white text-xs sm:text-sm font-jetbrains tracking-[0.25em] uppercase mb-3">
           <svg width="22" height="22" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#fff" />
                <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#fff" />
                <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#fff" />
                <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#fff" />
                <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#fff" />
                <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#fff" />
                <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#fff" strokeWidth="0.23882" />
              </svg>
            <span>PERSONALISED FILTERING</span>
          </p>

          <h2 className="font-haetten text-5xl sm:text-6xl lg:text-7xl leading-[1.1] whitespace-wrap">
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
                  <p className="text-white/75 text-[1.03rem] font-bold font-jetbrains tracking-[0.2em] uppercase mb-1">
                    {card.label}
                  </p>
                  {/* Title */}
                  <h3 className="font-montserrat-bold font-black text-white text-[2rem] sm:text-[4rem] leading-[1.0] tracking-tight whitespace-pre-line">
                    {card.title}
                  </h3>
                  {/* Count */}
                  <p className="text-white/80 text-xs sm:text-sm font-jetbrains mt-2.5 tracking-wide">
                    <AnimatedCounter value={card.count} />
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
                      <p className="text-white/80 text-[1.03rem] sm:text-xs font-bold tracking-[0.18em] uppercase font-jetbrains mb-1">
                        {card.label}
                      </p>
                      <h3 className="font-montserrat-bold font-extrabold text-white text-lg sm:text-4xl leading-tight tracking-tight">
                        {card.backTitle}
                      </h3>
                    </div>
                     <svg width="40" height="40" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#fff" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#fff" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#fff" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#fff" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#fff" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#fff" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#fff" strokeWidth="0.23882" />
            </svg>
                  </div>

                  {/* White Body */}
                  <div className="flex-1 flex flex-col justify-between px-5 py-4 sm:px-8 sm:py-6">
                    {/* Description */}
                    <p className="text-[#5A5A5A] text-xs sm:text-[1.2rem] leading-loose font-dmsans mb-4">
                      {card.backDescription}
                    </p>

                    {/* Stat Box */}
                    <div>
                      <div className="border-2 rounded-xl px-4 py-3 sm:px-6 sm:py-8 mb-4"
                        style={{ backgroundColor: `${card.bgColor}20`,borderColor:`${card.bgColor}` }}>
                        <p className="font-montserrat-bold font-extrabold text-white text-2xl sm:text-4xl leading-none tracking-tight mb-0.5"
                           style={{ color:`${card.bgColor}` }}>
                          {card.count}+
                        </p>
                        <p className="text-black text-sm sm:text-[1rem] font-dmsans">
                          Professionally reviewed swaps available
                        </p>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); onOpenSwapModal(); }}
                        className="w-60 border-2 font-bold text-xs sm:text-sm py-2.5 sm:py-3 rounded-full transition-all flex items-center justify-center gap-2 hover:opacity-80"
                        style={{ borderColor: card.bgColor, backgroundColor: card.bgColor }}
                      >
                        <span className="text-white font-dmsans">Explore library</span>
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
