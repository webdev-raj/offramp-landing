"use client";

import { Search, ChevronRight } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const QUICK_TAGS = ["Butter Chicken", "Masala Dosa", "Biryani", "Vada Pav"];

export default function ExploreHero({
  searchQuery,
  setSearchQuery,
  onOpenSwapModal,
  onSelectQuickTag,
}) {
  return (
    <section className="relative bg-[#D91E5C] text-white min-h-[45rem] pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{
    backgroundImage: "url('/images/icons/flowerSvg.svg')",
    backgroundSize: "350px",
  }}>
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
        <div className="relative">
          <div className="bg-[#FFF5E0] rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:px-6 shadow-2xl flex items-center gap-3 transition-shadow focus-within:shadow-yellow-500/20">
             <svg width="30" height="30" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#DC346b" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#DC346b" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#DC346b" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#DC346b" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#DC346b" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#DC346b" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#DC346b" strokeWidth="0.23882" />
            </svg>
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
