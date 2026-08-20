"use client";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const STATS = [
  { value: "24,000+", label: "Active users" },
  { value: "8,400+", label: "Regional Indian dishes" },
  { value: "12,600+", label: "Weekly food decisions" },
  { value: "3,200+", label: "Dietitian-reviewed swaps" },
];

const TOP_CIRCLE_COUNT = 50;
const DIAMOND_COUNT = 34;

export default function StatsBand() {
  return (
    <section className="relative bg-[#314894] text-white z-10">
      {/* Top circle row */}
      <div className="h-5 w-full bg-[#314894] pl-2 flex items-center justify-start gap-2 ">
        {Array.from({ length: TOP_CIRCLE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-6 rounded-full bg-[#314894] shrink-0 -translate-y-1.5 "
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 px-2 group">
              <p className="font-montserrat-bold text-3xl sm:text-3xl lg:text-4xl text-[#FFC93C] tracking-tight group-hover:scale-105 transition-transform duration-200">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="text-white/50 text-xs sm:text-sm font-dmsans mt-2 max-w-[200px] mx-auto leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom diamond accent border */}
      <div className="h-4 w-full pl-1 flex items-center gap-1.5">
        {Array.from({ length: DIAMOND_COUNT }).map((_, i) => (
          <div key={i} className="h-full flex items-center justify-start gap-1.5">
            <div className="fill-rect h-full w-4 bg-[#F5AE38] rotate-45 -translate-y-1.5" />
            <div className="border-rect h-full w-4 bg-white/10 border-2 border-[#F5AE38] rotate-45 -translate-y-1.5" />
          </div>
        ))}
      </div>
    </section>
  );
}