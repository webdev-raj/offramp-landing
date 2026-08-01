"use client";

import Image from "next/image";
import { ArrowRight, Zap, ShieldAlert, Calendar, RotateCcw, Sparkles } from "lucide-react";

export default function ToolsGrid({ onOpenSwapModal }) {
  return (
    <section className="py-8 px-6 lg:py-20 bg-[#FEE9B7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-[#314894] font-jetbrains font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            <svg width="22" height="22" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#314894" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#314894" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#314894" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#314894" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#314894" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#314894" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#314894" stroke-width="0.23882" />
            </svg>
            <span>FOUR TOOLS · ONE KITCHEN</span>
          </div>

          <h2 className="font-haetten text-6xl sm:text-7xl lg:text-8xl leading-[0.8]">
            <span className="text-[#18181B] block">From kitchen counter</span>
            <span className="text-[#E0187A] block">to confident choice</span>
          </h2>
        </div>

        {/* 4 Feature Cards Stack */}
        <div className="space-y-10 sm:space-y-12">

          {/* CARD 1: SWAP ENGINE (Warm Amber Yellow) */}
          <div className="scallop-card-top-bottom  bg-[#D2932B] p-6 sm:p-10 lg:p-12 relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-[340px] shadow-xl hover:shadow-2xl transition-all duration-300">

            {/* Top Right Icon Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner z-10">
              <Zap className="w-5 h-5 fill-white text-white" />
            </div>

            {/* Text Left Column */}
            <div className="flex-1 max-w-xl z-10">
              <p className="text-[0.8rem] font-jetbrains tracking-[0.2em] uppercase text-white/80 mb-3">
                SWAP ENGINE
              </p>

              <h3 className="font-montserrat-bold text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Swap with confidence
              </h3>

              <p className="text-white/90 font-dmsans text-sm sm:text-lg leading-relaxed mb-8 max-w-md font-normal">
                Input-based recommendations with dietitian reasoning. See protein, fibre, and micronutrient impact before you cook — not after.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] hover:bg-white font-dmsans tracking-wider text-[#D2932B] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Try a swap</span>
                <ArrowRight className="w-4 h-4 text-[#2B1B04] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual Right Column (Thali Dish Plate + Avatar Badge) */}
            <div className="relative shrink-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 flex items-center justify-center z-10">
              <div className="relative w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/thali_swap_meal.png"
                  alt="Indian Thali Meal Swap"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CARD 2: CONFLICT CHECKER (Vivid Pink / Magenta) */}
          <div className="scallop-card-top-bottom  bg-[#DE3968] p-6 sm:p-10 lg:p-12 relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 min-h-[340px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">

            {/* Devanagari Background Watermark Text */}
            <span
              aria-hidden="true"
              className="absolute -bottom-8 -right-6 text-[11rem] sm:text-[14rem] font-anton text-white/[0.09] select-none pointer-events-none leading-none z-0"
            >
              विकल्प
            </span>

            {/* Top Right Icon Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner z-10">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>

            {/* Visual Left Column (Dal Curry Bowl) */}
            <div className="relative shrink-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 flex items-center justify-center z-10">
              <div className="relative w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/dal_curry_bowl.png"
                  alt="Conflict Checker Dal Bowl"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Right Column */}
            <div className="flex-1 max-w-xl z-10 text-left md:pl-4">
              <p className="text-[0.8rem] font-jetbrains font-extrabold tracking-[0.2em] uppercase text-white/80 mb-3">
                CONFLICT CHECKER
              </p>

              <h3 className="font-montserrat-bold text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Catch potential conflicts
              </h3>

              <p className="text-white/90 font-dmsans text-sm sm:text-lg leading-relaxed mb-8 max-w-md font-normal">
                Flags ingredient combinations that may affect health goals, allergies, or dietary restrictions before they become a problem.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] hover:bg-white text-[#DE3968] font-dmsans tracking-wider text-[#2B1B04] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Get charts</span>
                <ArrowRight className="w-4 h-4 text-[#2B1B04] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 3: REAL PLANNER (Navy Blue) */}
          <div className="scallop-card-top-bottom  bg-[#2F539B] p-6 sm:p-10 lg:p-12 relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-[340px] shadow-xl hover:shadow-2xl transition-all duration-300">

            {/* Top Right Icon Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner z-10">
              <Calendar className="w-5 h-5 text-white" />
            </div>

            {/* Text Left Column */}
            <div className="flex-1 max-w-xl z-10">
              <p className="text-[0.8rem] font-jetbrains font-extrabold tracking-[0.2em] uppercase text-white/80 mb-3">
                REAL PLANNER
              </p>

              <h3 className="font-montserrat-bold text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Plan meals for real life
              </h3>

              <p className="text-white/90 font-dmsans text-sm sm:text-lg leading-relaxed mb-8 max-w-md font-normal">
                Drag-and-drop weekly builder with automatic macro tracking and shopping list generation. Built for how Indians actually eat.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] hover:bg-white font-dmsans tracking-wider text-[#1B2264] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Build a plan</span>
                <ArrowRight className="w-4 h-4 text-[#1B2264] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual Right Column (Dosa Sambar Plate) */}
            <div className="relative shrink-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 flex items-center justify-center z-10">
              <div className="relative w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/dosa_sambar_plate.png"
                  alt="South Indian Dosa Meal Plan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CARD 4: IMPORT BACKUP (Terracotta Rust Red) */}
          <div className="scallop-card-top-bottom  bg-[#CB5638] p-6 sm:p-10 lg:p-12 relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 min-h-[340px] shadow-xl hover:shadow-2xl transition-all duration-300">

            {/* Top Right Icon Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner z-10">
              <RotateCcw className="w-5 h-5 text-white" />
            </div>

            {/* Visual Left Column (Chole Bhature Plate) */}
            <div className="relative shrink-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 flex items-center justify-center z-10">
              <div className="relative w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/chole_bhature_plate.png"
                  alt="Chole Bhature Import Backup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Right Column */}
            <div className="flex-1 max-w-xl z-10 md:pl-4">
              <p className="text-[0.8rem] font-jetbrains font-extrabold tracking-[0.2em] uppercase text-white/80 mb-3">
                IMPORT BACKUP
              </p>

              <h3 className="font-montserrat-bold text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Migrate & improve
              </h3>

              <p className="text-white/90 font-dmsans text-sm sm:text-lg leading-relaxed mb-8 max-w-md font-normal">
                Move from other platforms. OffRamp re-analyses your past meals, identifies pattern gaps, and surfaces habits that actually worked.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] text-[#C95530] font-dmsans tracking-wider hover:bg-white text-[#3D1400] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Review plans</span>
                <ArrowRight className="w-4 h-4 text-[#3D1400] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
