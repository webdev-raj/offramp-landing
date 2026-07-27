"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight, Star } from "lucide-react";

export default function Hero({ onOpenSwapModal }) {
  return (
    <section className="relative overflow-hidden bg-[#E0187A]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[640px] lg:min-h-[700px]">
        {/* Left Side: Pink Panel */}
        <div className="relative bg-[#E0187A] px-6 sm:px-10 lg:pl-16 lg:pr-12 pt-12 pb-28 md:pb-24 flex flex-col justify-center z-10">
          {/* Subheader Badge */}
          <div className="flex items-center gap-2 text-[#FFD23F] text-xs font-extrabold tracking-widest uppercase mb-6">
            <Star className="w-3.5 h-3.5 fill-[#FFD23F] text-[#FFD23F]" />
            <span>SMART FOOD SWAPS · INDIA</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-anton uppercase leading-[0.92] text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight drop-shadow-sm">
            <span className="text-[#FFD23F]">LOVE THE </span>
            <span className="text-white">FOOD</span>
            <br />
            <span className="text-white">SWAP </span>
            <span className="text-[#FFD23F]">THE REST.</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-white/90 text-base sm:text-lg max-w-lg mb-8 leading-relaxed font-normal">
            Helping people change what they eat without changing who they are —
            through AI-guided food transitions using familiar Indian flavors.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenSwapModal}
              className="bg-[#FFC93C] hover:bg-[#ffbd12] text-[#3D1400] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-black/15 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>START SWAP</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenSwapModal}
              className="border-2 border-white/80 hover:border-white text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full flex items-center gap-1.5 hover:bg-white/10 transition-colors"
            >
              <span>See how it works</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Rating Footer */}
          <div className="flex items-center gap-3 text-white/95 text-sm font-medium">
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
            className="hidden lg:block absolute bottom-2 left-6 text-[12rem] font-anton text-white/[0.06] select-none leading-none pointer-events-none"
          >
            आहार
          </span>
        </div>

        {/* Right Side: Yellow Panel with Red Diamond Texture */}
        <div className="relative bg-[#F5A623] bg-diamond-red min-h-[350px] md:min-h-full">
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Phone Mockup centered on seam */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 py-8">
        <div className="w-[280px] sm:w-[310px] lg:w-[330px] pointer-events-auto transform hover:rotate-1 hover:scale-[1.01] transition-transform duration-300 shadow-2xl rounded-[3rem]">
          {/* Phone Frame */}
          <div className="rounded-[2.8rem] bg-[#111111] p-3 ring-4 ring-black/20 shadow-2xl">
            <div className="rounded-[2.2rem] bg-[#FDF6E8] overflow-hidden border border-[#E8DCC4]">
              {/* Dynamic Island / Notch */}
              <div className="h-7 bg-[#FDF6E8] flex items-center justify-center pt-2">
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A] ring-1 ring-white/10" />
                </div>
              </div>

              {/* Phone App Screen Content */}
              <div className="px-4 pb-5 pt-1">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#3A3A3A] mb-0.5 text-center">
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
                    <span>45% lower saturated fat & zero cholesterol</span>
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
    </section>
  );
}
