"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight, Star } from "lucide-react";

export default function Hero({ onOpenSwapModal }) {
  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[700px] flex flex-col justify-between">
      {/* Two-panel split background */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Pink panel */}
        <div className="w-full h-1/2 md:h-full md:w-[65%] bg-[#E0187A] relative overflow-hidden shrink-0" />
        {/* Yellow panel with custom patternbg.png */}
        <div
          className="w-full h-1/2 md:h-full md:w-[35%] bg-[#F5A623] relative shrink-0"
          style={{
            backgroundImage: `url('/bgyellow.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "550px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row min-h-[640px] lg:min-h-[700px]">
        {/* Left Side Content */}
        <div className="w-full md:w-[95%] relative px-6 sm:px-10 lg:pl-6 lg:pr-12 pt-10 pb-12 md:py-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Subheader Badge */}
          <div className="flex items-center gap-2 text-[#FFD23F] text-xs font-extrabold tracking-widest uppercase mb-4 sm:mb-5">
            <Star className="w-3.5 h-3.5 fill-[#FFD23F] text-[#FFD23F]" />
            <span>SMART FOOD SWAPS · INDIA</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-anton uppercase leading-[0.92] text-4xl sm:text-6xl lg:text-[5.5rem] mb-4 sm:mb-5 tracking-tight">
            <span className="text-[#FFD23F]">LOVE THE </span>
            <span className="text-white">FOOD</span>
            <br />
            <span className="text-white">SWAP </span>
            <span className="text-[#FFD23F]">THE REST.</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-white/90 text-sm sm:text-base max-w-md mb-6 sm:mb-7 leading-relaxed font-normal">
            Helping people change what they eat without changing who they are —
            through AI-guided food transitions using familiar Indian flavors.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6 sm:mb-8 w-full">
            <button
              onClick={onOpenSwapModal}
              className="bg-[#FFC93C] hover:bg-[#ffbd12] text-[#3D1400] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-black/15 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto"
            >
              <span>START SWAP</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenSwapModal}
              className="border-2 border-white/80 hover:border-white text-white font-semibold text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              <span>See how it works</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Rating Footer */}
          <div className="flex items-center justify-center md:justify-start gap-3 text-white/95 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-1 text-[#FFD23F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFD23F] text-[#FFD23F]" />
              ))}
              <span className="font-bold text-white ml-1">4.8 / 5</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span>24,800+ active users</span>
          </div>

          {/* Subtle Devanagari background watermark */}
          <span
            aria-hidden="true"
            className="hidden lg:block absolute bottom-4 left-6 text-[11rem] font-anton text-white/[0.05] select-none leading-none pointer-events-none"
          >
            आहार
          </span>
        </div>

        {/* Mobile/Desktop Phone Mockup Area */}
        <div className="w-full md:w-[47%] relative flex items-center justify-center py-8 md:py-0">
          <div className="relative md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:-translate-x-1/2 z-20 w-[270px] sm:w-[300px] lg:w-[325px] hover:scale-[1.01] transition-transform duration-300">
            {/* Phone Frame */}
            <div className="rounded-[3rem] bg-[#1C1D21] p-3.5 ring-1 ring-black/40 shadow-2xl border border-white/10">
              <div className="rounded-[2.4rem] bg-[#FDF6E8] overflow-hidden border border-[#E8DCC4]">
                {/* Dynamic Island / Notch */}
                <div className="h-7 bg-[#FDF6E8] flex items-center justify-center pt-2">
                  <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2">
                    <div className="w-2 h-2 rounded-full bg-[#1A1A1A] ring-1 ring-white/10" />
                  </div>
                </div>

                {/* Phone App Screen Content */}
                <div className="px-4 pb-5 pt-1">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#3A3A3A] mb-0.5 text-center">
                    RECOMMENDED SWAP
                  </p>
                  <p className="text-[9px] text-[#7A7A7A] mb-3 text-center">
                    AI-guided Indian food transition
                  </p>

                  {/* Dish 1: Butter Chicken (Your Dish) */}
                  <div className="bg-[#C0392B] text-white rounded-xl p-3 mb-2.5 shadow-sm relative overflow-hidden flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-[8px] text-white/80 uppercase font-bold tracking-wider">
                        Your Dish
                      </p>
                      <p className="text-white font-extrabold text-sm leading-tight mt-0.5">
                        BUTTER CHICKEN.
                      </p>
                    </div>
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0">
                      <Image
                        src="/butter_chicken.png"
                        alt="Butter Chicken"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Dish 2: Tofu Makhani (Better Alternative) */}
                  <div className="bg-[#E0187A] text-white rounded-xl p-3 mb-3 shadow-md relative overflow-hidden flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-[8px] text-white/80 uppercase font-bold tracking-wider">
                        Better Alternative
                      </p>
                      <p className="text-white font-extrabold text-sm leading-tight mt-0.5">
                        TOFU MAKHANI.
                      </p>
                    </div>
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/30 shadow-md shrink-0">
                      <Image
                        src="/tofu_makhani.png"
                        alt="Tofu Makhani"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Swap Details Bullet Points */}
                  <ul className="space-y-1.5 mb-4 px-1">
                    <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
                      <span className="text-[#E0187A] font-bold">•</span>
                      <span>45% lower saturated fat &amp; zero cholesterol</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
                      <span className="text-[#E0187A] font-bold">•</span>
                      <span>Rich Makhani gravy flavor profile retained</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
                      <span className="text-[#E0187A] font-bold">•</span>
                      <span>Dietitian-verified protein absorption</span>
                    </li>
                  </ul>

                  {/* Phone Action CTA Button */}
                  <button
                    onClick={onOpenSwapModal}
                    className="w-full bg-[#E0187A] hover:bg-[#c41267] active:scale-98 text-white text-xs font-bold py-2.5 rounded-full shadow-md transition-all text-center uppercase tracking-wider"
                  >
                    SEE WHY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
