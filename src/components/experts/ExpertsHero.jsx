"use client";

import Image from "next/image";
import { Zap, ChevronRight, X } from "lucide-react";
import PointsValue from "@/components/shared/PointsValue";

const QUICK_FILTERS = [
  { label: "Blood Sugar", goalId: "blood-sugar" },
  { label: "Weight Loss", goalId: "weight" },
  { label: "Fitness", goalId: "fitness" },
  { label: "Gut Health", goalId: "gut-health" },
];

export default function ExpertsHero({
  searchQuery,
  setSearchQuery,
  onSelectQuickFilter,
  onOpenProfile,
}) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-12 sm:pb-16 bg-[#DC346B]">
      {/* Two-panel split background (Desktop only) */}
      <div className="hidden md:flex absolute inset-0 flex-row pointer-events-none">
        {/* Pink panel */}
        <div className="w-[65%] bg-[#DC346B] relative overflow-hidden shrink-0" />
        {/* Yellow panel with custom pattern */}
        <div
          className="w-[35%] bg-[#F5AE38] relative shrink-0"
          style={{
            backgroundImage: `url('/images/patterns/bgyellow.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "550px",
          }}
        >
          {/* Subtle floral watermark in top right */}
          <div className="absolute top-4 right-4 w-32 h-32 opacity-25 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#B57400]">
              <path d="M50 0 C55 30 70 45 100 50 C70 55 55 70 50 100 C45 70 30 55 0 50 C30 45 45 30 50 0 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 md:mb-14">
          
          {/* Left Side Content (Pink Panel) */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Top Subheader Badge */}
            <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-jetbrains uppercase tracking-widest text-[#F5AE38] mb-5">
              <span>★</span>
              <span className="font-extrabold">VERIFIED NUTRITION EXPERTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-haetten uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight mb-5">
              <span className="text-white">FIND YOUR </span>
              <br />
              <span className="text-[#F5AE38]">FOOD EXPERT.</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/90 font-dmsans text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-7 font-normal">
              Dietitians, sports nutritionists, Ayurvedic coaches and gut health specialists — all fluent in Indian food.
            </p>

            {/* 4 Pill-shaped filter/category quick-links */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {QUICK_FILTERS.map((item) => (
                <button
                  key={item.goalId}
                  onClick={() => onSelectQuickFilter(item.goalId, item.label)}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-dmsans text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Content (Yellow Panel Area) */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-4">
            
            {/* "Your OffRamp Balance" card */}
            <div className="bg-[#1B2264] border-2 border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl text-white relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-jetbrains uppercase tracking-[0.2em] text-white/70 font-extrabold">
                  YOUR OFFRAMP BALANCE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F5AE38] animate-pulse" />
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#F5AE38] text-2xl font-bold">⚡</span>
                <div className="text-3xl sm:text-4xl font-haetten text-[#F5AE38] tracking-wider leading-none">
                  <PointsValue value="450" suffix="POINTS" />
                </div>
              </div>

              <p className="text-xs text-white/75 font-dmsans">
                Earn 10 pts per swap · spend on expert sessions
              </p>
            </div>

            {/* 2 Small Stacked Pending Request Preview Cards */}
            <div className="space-y-3">
              {/* Card 1: Meera */}
              <div
                onClick={() => onOpenProfile && onOpenProfile("meera-iyer")}
                className="bg-white rounded-xl p-3 sm:p-3.5 shadow-lg border border-[#E8DCC4] flex items-center justify-between gap-3 hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-[#2542A5]/30">
                    <Image
                      src="/images/experts/meera_iyer.jpg"
                      alt="Meera"
                      fill
                      sizes="44px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="truncate">
                    <p className="font-montserrat-bold text-sm text-[#1E1E1E] leading-snug truncate group-hover:text-[#2542A5] transition-colors">
                      Meera
                    </p>
                    <p className="text-[11px] font-dmsans text-[#666666] leading-tight truncate">
                      Diabetes & Blood Sugar
                    </p>
                  </div>
                </div>

                <div className="bg-[#F5AE38] text-[#1E1E1E] font-jetbrains font-extrabold text-xs px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-1 shadow-sm">
                  <span>⚡</span>
                  <PointsValue value={200} suffix="PTS" />
                </div>
              </div>

              {/* Card 2: Malhotra */}
              <div
                onClick={() => onOpenProfile && onOpenProfile("rohit-malhotra")}
                className="bg-white rounded-xl p-3 sm:p-3.5 shadow-lg border border-[#E8DCC4] flex items-center justify-between gap-3 hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-[#1B7042]/30">
                    <Image
                      src="/images/experts/rohit_malhotra.jpg"
                      alt="Malhotra"
                      fill
                      sizes="44px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="truncate">
                    <p className="font-montserrat-bold text-sm text-[#1E1E1E] leading-snug truncate group-hover:text-[#1B7042] transition-colors">
                      Malhotra
                    </p>
                    <p className="text-[11px] font-dmsans text-[#666666] leading-tight truncate">
                      Fitness & Muscle Gain
                    </p>
                  </div>
                </div>

                <div className="bg-[#F5AE38] text-[#1E1E1E] font-jetbrains font-extrabold text-xs px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-1 shadow-sm">
                  <span>⚡</span>
                  <PointsValue value={150} suffix="PTS" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full-width Search Bar Sitting on Boundary */}
        <div className="relative z-20 pt-2">
          <div className="bg-[#FFF5E0] rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:px-6 shadow-2xl flex items-center gap-3 border border-[#E8DCC4] transition-shadow focus-within:shadow-yellow-500/20">
            <svg width="26" height="26" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#DC346B" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#DC346B" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#DC346B" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#DC346B" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#DC346B" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#DC346B" />
            </svg>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, specialty or condition — e.g. diabetes, weight loss, gut health…"
              className="w-full bg-transparent font-dmsans text-sm sm:text-base lg:text-lg text-[#1E2538] placeholder-[#1E2538]/50 focus:outline-none font-medium py-1"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="bg-[#DC346B] text-white text-xs font-jetbrains px-3 py-1.5 rounded-full hover:bg-pink-700 transition-colors shrink-0 flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Decorative Wavy / Scalloped Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#1B3589] scallop-top-border translate-y-3 z-10" />
    </section>
  );
}
