"use client";

import { Star } from "lucide-react";

const METRIC_CARDS = [
  {
    id: "accuracy",
    bgClass: "bg-[#1B7042] text-white border-[#155A34]",
    value: "91%",
    label: "Prediction accuracy",
  },
  {
    id: "confidence",
    bgClass: "bg-[#2542A5] text-white border-[#1C3384]",
    value: "4.8/5",
    label: "Confidence score",
  },
  {
    id: "professionals",
    bgClass: "bg-[#D81B60] text-white border-[#B2134E]",
    value: "620+",
    label: "Verified professionals",
  },
  {
    id: "spend",
    bgClass: "bg-[#C44319] text-white border-[#A13411]",
    value: "38%",
    label: "Grocery spend reduction",
  },
  {
    id: "reviewed",
    bgClass: "bg-[#D2932B] text-white border-[#B87600]",
    value: "3,200+",
    label: "Dietitian-reviewed swaps",
  },
  {
    id: "plans",
    bgClass: "bg-[#7E38B7] text-white border-[#632994]",
    value: "12k+",
    label: "Weekly active plans",
  },
];

export default function LiveMetrics() {
  return (
    <section className="relative bg-[#FDF6E8] py-20 lg:py-28 px-6 overflow-hidden">
      {/* Background Watermark */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-12 -translate-y-1/2 text-[14rem] sm:text-[18rem] lg:text-[22rem] font-anton text-[#F5A623]/[0.08] select-none pointer-events-none leading-none"
      >
        पोषण
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2 text-[#C44319] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3">
              <Star className="w-4 h-4 fill-[#C44319] text-[#C44319]" />
              <span>LIVE KITCHEN DATA</span>
            </p>

            <h2 className="font-anton uppercase text-4xl sm:text-5xl lg:text-6xl text-[#1E2538] leading-[0.98] tracking-tight">
              Trusted Kitchen metrics <br className="hidden sm:inline" />
              from real food decisions
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end gap-4">
            <p className="text-[#4A4A4A] text-base sm:text-lg font-medium leading-relaxed">
              Numbers grounded in professional input and user outcomes — not marketing estimates.
            </p>

            {/* 4 Decorative Floral Badges */}
            <div className="flex items-center gap-2 pt-2">
              <FloralBadge bg="bg-[#E0187A]" />
              <FloralBadge bg="bg-[#2542A5]" />
              <FloralBadge bg="bg-[#1B7042]" />
              <FloralBadge bg="bg-[#C44319]" />
            </div>
          </div>
        </div>

        {/* 6 Colored Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {METRIC_CARDS.map((card) => (
            <div
              key={card.id}
              className={`${card.bgClass} scallop-card rounded-2xl p-3 sm:p-4 border-2 flex flex-col justify-between min-h-[210px] sm:min-h-[230px] shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
            >
              <div className="border-2 border-white/40 flex flex-col justify-between h-full w-full p-3 sm:p-4">
                {/* Card Top Star */}
                <div>
                  <Star className="w-4 h-4 fill-white/80 text-white/80 mb-6 group-hover:scale-110 transition-transform" />
                  <p className="font-anton text-3xl sm:text-4xl lg:text-4xl text-white tracking-tight leading-none">
                    {card.value}
                  </p>
                  <p className="text-white/90 text-xs sm:text-sm font-semibold mt-2 leading-snug">
                    {card.label}
                  </p>
                </div>

                {/* Bottom Footer Label */}
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-white/50 pt-4 border-t border-white/20 mt-4">
                  OFFRAMP INDIA
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Decorative Floral Emblem Icon matching the design
function FloralBadge({ bg }) {
  return (
    <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center shadow-sm transform hover:scale-110 transition-transform`}>
      <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12ZM12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22ZM2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z" />
      </svg>
    </div>
  );
}
