"use client";

import { Search, ChevronRight } from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const QUICK_TAGS = ["Butter Chicken", "Masala Dosa", "Biryani", "Vada Pav"];

export default function ExploreHero({
  searchQuery,
  setSearchQuery,
  onOpenSwapModal,
  onSelectQuickTag,
}) {
  return (
    <section className="relative bg-[#D91E5C] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background motif texture simulation + Devanagari watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <span
        aria-hidden="true"
        className="absolute -bottom-10 left-6 text-[10rem] font-anton text-white/[0.07] select-none pointer-events-none leading-none z-0"
      >
        आहार
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Heading + Subtitle + Quick Tags */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Top Subheader Tag */}
            <div className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-jetbrains uppercase tracking-widest text-[#FFC93C] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FFC93C] animate-pulse" />
              <span><AnimatedCounter value="8,400+" /> INDIAN RECIPES</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-haetten text-6xl sm:text-7xl lg:text-[6.5rem] uppercase leading-[0.85] text-white mb-6">
              FIND YOUR <br />
              <span className="text-[#FFC93C]">PERFECT SWAP.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-dmsans text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8">
              Type a dish. Pick your goal. Get a verified Indian alternative — dietitian-checked, regionally accurate.
            </p>

            {/* Quick Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                    if (onSelectQuickTag) onSelectQuickTag(tag);
                  }}
                  className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-jetbrains text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>{tag}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Swap of the Week Featured Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              onClick={onOpenSwapModal}
              className="bg-[#1B3589] border-4 border-white/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full max-w-sm"
            >
              {/* Header Label */}
              <div className="flex items-center justify-between text-[10px] font-jetbrains uppercase tracking-widest text-white/60 mb-3 border-b border-white/15 pb-2">
                <span>SWAP OF THE WEEK</span>
                <span className="bg-[#FFC93C] text-[#1B3589] font-bold px-2 py-0.5 rounded">POPULAR</span>
              </div>

              {/* Dish Swap Header */}
              <p className="text-white/70 text-xs font-jetbrains uppercase tracking-wider mb-1">
                Butter Chicken →
              </p>
              <h3 className="font-montserrat-bold text-2xl sm:text-3xl text-white mb-3 group-hover:text-[#FFC93C] transition-colors">
                Jackfruit Makhani
              </h3>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-white/15 text-white text-[10px] font-jetbrains px-2.5 py-1 rounded-md uppercase font-bold">
                  EXPLORE
                </span>
                <span className="bg-[#1A7A45] text-white text-[10px] font-jetbrains px-2.5 py-1 rounded-md uppercase font-bold">
                  VEG
                </span>
                <span className="bg-white/15 text-white text-[10px] font-jetbrains px-2.5 py-1 rounded-md uppercase font-bold">
                  RECIPE
                </span>
              </div>

              {/* Score & Macros */}
              <div className="flex items-end justify-between pt-4 border-t border-white/15">
                <p className="text-white/80 text-xs font-jetbrains leading-snug">
                  27g pro · 11g carbs <br />
                  <span className="font-bold text-white">340 kcal</span>
                </p>
                <div className="text-right">
                  <span className="font-haetten text-5xl text-[#FFC93C] leading-none block">
                    <AnimatedCounter value="90%" />
                  </span>
                  <span className="text-[9px] font-jetbrains uppercase tracking-wider text-white/60">
                    MATCH SCORE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Overlapping Search Input Bar */}
        <div className="relative bg-black">
          <div className="bg-[#FFF5E0] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-[#F5AE38] flex items-center gap-3 transition-shadow focus-within:shadow-yellow-500/20">
            <Search className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91E5C] shrink-0 ml-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search a dish — Biryani, Dosa, Paneer Tikka, Vada Pav..."
              className="w-full bg-transparent font-dmsans text-base sm:text-xl text-[#1E2538] placeholder-[#1E2538]/50 focus:outline-none font-medium py-2"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="bg-[#D91E5C] text-white text-xs font-jetbrains px-3 py-1.5 rounded-full hover:bg-pink-700 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
