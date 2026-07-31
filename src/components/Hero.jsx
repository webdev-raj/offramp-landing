"use client";

import Image from "next/image";
import { ArrowRight, ChevronRight, Star } from "lucide-react";

export default function Hero({ onOpenSwapModal }) {
  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[700px] flex flex-col justify-between">
      {/* Two-panel split background */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Pink panel */}
        <div className="w-full h-1/2 md:h-full md:w-[65%] bg-[#DC346B] relative overflow-hidden shrink-0" />
        {/* Yellow panel with custom patternbg.png */}
        <div
          className="w-full h-1/2 md:h-full md:w-[35%] bg-[#F5AE38] relative shrink-0"
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
          <div className="flex items-center gap-2 text-[#F5AE38] text-xs font-extrabold tracking-widest uppercase mb-4 sm:mb-5">
            <svg width="17" height="17" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#F5AE38" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#F5AE38" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#F5AE38" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#F5AE38" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#F5AE38" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#F5AE38" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#F5AE38" stroke-width="0.23882" />
            </svg>

            <span>SMART FOOD SWAPS · INDIA</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-anton uppercase leading-[0.92] text-4xl sm:text-6xl lg:text-[5.5rem] mb-4 sm:mb-5 tracking-tight">
            <span className="text-[#F5AE38]">LOVE THE </span>
            <span className="text-white">FOOD</span>
            <br />
            <span className="text-white">SWAP </span>
            <span className="text-[#F5AE38]">THE REST.</span>
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
              className="bg-[#F5AE38] hover:bg-[#ffbd12] text-[#3D1400] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-black/15 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto"
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
            <div className="flex items-center gap-1 text-[#F5AE38]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5AE38] text-[#F5AE38]" />
              ))}
              <span className="font-bold text-[#F5AE38] ml-1">4.8 / 5</span>
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
