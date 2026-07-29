"use client";

import { ArrowRight, Check } from "lucide-react";

export default function CtaBanner({ onOpenSwapModal }) {
  const DIAMOND_COUNT = 34;
  return (
    <div className="bg-[#2A409A] relative">
    <section className="text-white py-24 lg:py-36 px-6 overflow-hidden">
      {/* Translucent Purple Watermark Circle on Bottom Right */}
      {/* <div className="absolute -bottom-36 -right-36 w-[450px] h-[450px] rounded-full bg-[#463C9B]/40 pointer-events-none" /> */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Double Concentric Ring Emblem with 6-pointed Golden Star */}
        <div className="w-24 h-24 rounded-full border-2 border-[#F7AC2B] p-1 flex items-center justify-center mx-auto mb-8 shadow-sm">
          <div className="w-full h-full rounded-full border border-[#F7AC2B]/60 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#F7AC2B] fill-current" viewBox="0 0 24 24">
              <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
            </svg>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-5">
          <span className="text-white block">Start with one dish</span>
          <span className="text-[#F7AC2B] block mt-1">you already love.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-9 font-normal">
          No diet overhaul, no upfront subscription. Enter a familiar dish and see its goal alignment in seconds.
        </p>

        {/* Action Button */}
        <div className="mb-9">
          <button
            onClick={onOpenSwapModal}
            className="bg-[#F7AC2B] hover:bg-[#e2991e] active:scale-95 text-[#231E1B] font-extrabold text-sm sm:text-base tracking-wider uppercase px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2.5"
          >
            <span>GET STARTED FREE</span>
            <ArrowRight className="w-4.5 h-4.5 text-[#231E1B] stroke-[2.5]" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/60 font-medium">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#34D399]/80 stroke-[2.5]" />
            <span>Free forever</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#34D399]/80 stroke-[2.5]" />
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#34D399]/80 stroke-[2.5]" />
            <span>Verified by real professionals</span>
          </div>
        </div>
      </div>

      {/* Bottom Alternating Diamond Pattern Strip */}
    </section>
       <div className="h-4 w-full flex items-center gap-1.5">
        {Array.from({ length: DIAMOND_COUNT }).map((_, i) => (
          <div key={i} className="h-full flex items-center justify-start gap-1.5">
            <div className="fill-rect h-full w-4 bg-[#F5AE38] rotate-45 -translate-y-1.5" />
            <div className="border-rect h-full w-4 bg-white/10 border-2 border-[#F5AE38] rotate-45 -translate-y-1.5" />
          </div>
        ))}
      </div>
    </div>
  );
}
