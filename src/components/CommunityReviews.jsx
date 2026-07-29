"use client";

import { Star } from "lucide-react";

const STATS = [
  { value: "24k", label: "Weekly active users" },
  { value: "620+", label: "Verified professionals" },
  { value: "91%", label: "Goal match rate" },
  { value: "4.8/5", label: "Satisfaction score" },
];

export default function CommunityReviews() {
  return (
    <section className="relative bg-[#FCF6E8] py-20 lg:py-28 px-6 overflow-hidden">
      {/* Devanagari Background Watermark */}
      <span
        aria-hidden="true"
        className="absolute top-56 right-6 text-[12rem] sm:text-[8rem] lg:text-[10rem] font-anton text-[#F5A623]/[0.15] select-none pointer-events-none leading-none z-10"
      >
        प्रदान
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <p className="flex items-center gap-2 text-[#E0187A] text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#E0187A] text-[#E0187A]" />
            <span>COMMUNITY ACTIVITY</span>
          </p>
          <h2 className="font-anton text-5xl sm:text-6xl lg:text-7xl leading-[0.94] tracking-tight">
            <span className="text-[#1E2538] block">People are testing</span>
            <span className="text-[#E0187A] block">familiar food</span>
          </h2>
        </div>

        {/* 2-Column Main Layout matching Image 1 exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: 2x2 Stats Grid + Arjun's Review Pair below */}
          <div className="space-y-8">
            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 min-h-65">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DCC4] shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-anton text-3xl sm:text-4xl text-[#1B2264] tracking-tight leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[#6A6A6A] text-xs sm:text-sm font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Arjun Mehta Review Pair (Bottom Left in Image 1) */}
            <div className="min-h-65 grid grid-cols-1 sm:grid-cols-12 rounded-2xl overflow-hidden shadow-sm border border-[#E8DCC4] hover:shadow-md transition-shadow">
              {/* White Quote Box */}
              <div className="sm:col-span-7 bg-white p-6 sm:p-7 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-[#E8DCC4]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E0187A] text-[#E0187A]" />
                  ))}
                </div>
                <p className="text-[#2D2D2D] text-sm sm:text-base leading-relaxed font-medium italic">
                  "The professional verification layer gives me real confidence. I know a qualified dietitian has reviewed these — not just an algorithm."
                </p>
              </div>

              {/* Pastel Profile Box */}
              <div className="sm:col-span-5 bg-[#FDE8B5] p-6 flex flex-col justify-between relative min-h-[220px]">
                {/* Top-Right Badge */}
                <div className="flex h-20 w-full justify-end">
                  <div className="w-16 h-full bg-[#E0187A] flex items-center justify-center shadow-sm p-1">
                    <div className="h-full w-full border-2 border-[#E984A6] flex items-center justify-center">
                      <Star className="w-6 h-6 fill-white text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative Faint Lines */}
                <div className="space-y-1.5 pt-8 mb-6">
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-3/4" />
                </div>

                {/* Profile Text */}
                <div>
                  <h4 className="font-extrabold text-[#1E2538] text-base sm:text-lg leading-tight">
                    Arjun Mehta
                  </h4>
                  <p className="text-[#6B5B3E] text-xs sm:text-sm font-medium mt-0.5">
                    Bangalore
                  </p>
                  <p className="text-[#8C754B] text-[11px] font-semibold uppercase tracking-wider mt-2">
                    Gym-focused · 5 months
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Ritika's Review Pair (Top) + Priya's Review Pair (Bottom) */}
          <div className="space-y-8">
            {/* Ritika Sharma Review Pair (Top Right in Image 1) */}
            <div className="min-h-65 grid grid-cols-1 sm:grid-cols-12 rounded-2xl overflow-hidden shadow-sm border border-[#E8DCC4] hover:shadow-md transition-shadow">
              {/* White Quote Box */}
              <div className="sm:col-span-7 bg-white p-6 sm:p-7 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-[#E8DCC4]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#1B2264] text-[#1B2264]" />
                  ))}
                </div>
                <p className="text-[#2D2D2D] text-sm sm:text-base leading-relaxed font-medium italic">
                  "First app that didn't make me feel like I had to give up Indian food to manage my sugar. The swap engine is genuinely useful — not just a calorie counter."
                </p>
              </div>

              {/* Pastel Profile Box */}
              <div className="sm:col-span-5 bg-[#FDE8B5] p-6 flex flex-col justify-between relative min-h-[220px]">
                {/* Top-Right Badge */}
                <div className="flex h-20 w-full justify-end">
                  <div className="w-16 h-full bg-[#314894] flex items-center justify-center shadow-sm p-1">
                    <div className="h-full w-full border-2 border-[#8390BE] flex items-center justify-center">
                      <Star className="w-6 h-6 fill-white text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative Faint Lines */}
                <div className="space-y-1.5 pt-8 mb-6">
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-3/4" />
                </div>

                {/* Profile Text */}
                <div>
                  <h4 className="font-extrabold text-[#1E2538] text-base sm:text-lg leading-tight">
                    Ritika Sharma
                  </h4>
                  <p className="text-[#6B5B3E] text-xs sm:text-sm font-medium mt-0.5">
                    Mumbai
                  </p>
                  <p className="text-[#8C754B] text-[11px] font-semibold uppercase tracking-wider mt-2">
                    Diabetic meal plan · 3 months
                  </p>
                </div>
              </div>
            </div>

            {/* Priya Nair Review Pair (Bottom Right in Image 1) */}
            <div className="min-h-65 grid grid-cols-1 sm:grid-cols-12 rounded-2xl overflow-hidden shadow-sm border border-[#E8DCC4] hover:shadow-md transition-shadow">
              {/* White Quote Box */}
              <div className="sm:col-span-7 bg-white p-6 sm:p-7 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-[#E8DCC4]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C44319] text-[#C44319]" />
                  ))}
                  <Star className="w-4 h-4 fill-none text-[#C44319]" />
                </div>
                <p className="text-[#2D2D2D] text-sm sm:text-base leading-relaxed font-medium italic">
                  "Cut my grocery bill by ₹2,400/month and actually eating better. The budget-friendly filter is brilliant — I didn't know I was wasting money on foods I didn't even need."
                </p>
              </div>

              {/* Pastel Profile Box */}
              <div className="sm:col-span-5 bg-[#FDE8B5] p-6 flex flex-col justify-between relative min-h-[220px]">
                {/* Top-Right Badge */}
                <div className="flex h-20 w-full justify-end">
                  <div className="w-16 h-full bg-[#C95530] flex items-center justify-center shadow-sm p-1">
                    <div className="h-full w-full border-2 border-[#E984A6] flex items-center justify-center">
                      <Star className="w-6 h-6 fill-white text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative Faint Lines */}
                <div className="space-y-1.5 pt-8 mb-6">
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-3/4" />
                </div>

                {/* Profile Text */}
                <div>
                  <h4 className="font-extrabold text-[#1E2538] text-base sm:text-lg leading-tight">
                    Priya Nair
                  </h4>
                  <p className="text-[#6B5B3E] text-xs sm:text-sm font-medium mt-0.5">
                    Chennai
                  </p>
                  <p className="text-[#8C754B] text-[11px] font-semibold uppercase tracking-wider mt-2">
                    Budget-conscious · 2 months
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
