"use client";

import Image from "next/image";
import { ArrowRight, Zap, ShieldAlert, Calendar, RotateCcw, Sparkles } from "lucide-react";

export default function ToolsGrid({ onOpenSwapModal }) {
  return (
    <section className="py-16 lg:py-24 bg-[#FDF8EE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 text-[#1B2264] font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
            <Sparkles className="w-4 h-4 fill-[#1B2264] text-[#1B2264]" />
            <span>FOUR TOOLS · ONE KITCHEN</span>
          </div>

          <h2 className="font-anton uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            <span className="text-[#18181B] block">From kitchen counter</span>
            <span className="text-[#E0187A] block">to confident choice</span>
          </h2>
        </div>

        {/* 4 Feature Cards Stack */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* CARD 1: SWAP ENGINE (Warm Amber Yellow) */}
          <div className="scallop-card bg-[#EA9E2A] bg-diamond-gold p-6 sm:p-10 lg:p-12 relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-[340px] shadow-xl hover:shadow-2xl transition-all duration-300">
            
            {/* Top Right Icon Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner z-10">
              <Zap className="w-5 h-5 fill-white text-white" />
            </div>

            {/* Text Left Column */}
            <div className="flex-1 max-w-xl z-10">
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-white/80 mb-3">
                SWAP ENGINE
              </p>

              <h3 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Swap with confidence
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                Input-based recommendations with dietitian reasoning. See protein, fibre, and micronutrient impact before you cook — not after.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] hover:bg-white text-[#2B1B04] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
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

              {/* Overlapping User Avatar Badge on Bottom Right */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-4 w-20 h-20 rounded-full bg-[#2A2D34] border-3 border-white/60 shadow-xl flex items-center justify-center text-white font-anton text-2xl overflow-hidden group">
                <div className="w-12 h-12 rounded-full bg-[#E0533C] flex items-center justify-center font-bold text-white text-xl shadow-inner">
                  D
                </div>
                <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-[#5A6478] border-2 border-[#2A2D34] flex items-center justify-center text-[10px]">
                  🥗
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: CONFLICT CHECKER (Vivid Pink / Magenta) */}
          <div className="scallop-card bg-[#DE3968] p-6 sm:p-10 lg:p-12 relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 min-h-[340px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            
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
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-white/80 mb-3">
                CONFLICT CHECKER
              </p>

              <h3 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Catch hidden conflicts
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                Flags ingredient combinations that may affect health goals, allergies, or dietary restrictions before they become a problem.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] hover:bg-white text-[#2B1B04] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Get charts</span>
                <ArrowRight className="w-4 h-4 text-[#2B1B04] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 3: REAL PLANNER (Navy Blue) */}
          <div className="scallop-card bg-[#2F539B] p-6 sm:p-10 lg:p-12 relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-[340px] shadow-xl hover:shadow-2xl transition-all duration-300">
            
            {/* Top Right Icon Badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-inner z-10">
              <Calendar className="w-5 h-5 text-white" />
            </div>

            {/* Text Left Column */}
            <div className="flex-1 max-w-xl z-10">
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-white/80 mb-3">
                REAL PLANNER
              </p>

              <h3 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Plan meals for real life
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                Drag-and-drop weekly builder with automatic macro tracking and shopping list generation. Built for how Indians actually eat.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] hover:bg-white text-[#1B2264] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
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
          <div className="scallop-card bg-[#CB5638] p-6 sm:p-10 lg:p-12 relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 min-h-[340px] shadow-xl hover:shadow-2xl transition-all duration-300">
            
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
              <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-white/80 mb-3">
                IMPORT BACKUP
              </p>

              <h3 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Migrate & improve
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                Move from other platforms. OffRamp re-analyses your past meals, identifies pattern gaps, and surfaces habits that actually worked.
              </p>

              <button
                onClick={onOpenSwapModal}
                className="bg-[#FFF4D9] hover:bg-white text-[#3D1400] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all group"
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
