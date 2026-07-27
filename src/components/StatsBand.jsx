"use client";

const STATS = [
  { value: "24,800+", label: "Active users" },
  { value: "8,400+", label: "Regional Indian dishes" },
  { value: "12,600+", label: "Weekly food decisions" },
  { value: "3,200+", label: "Dietitian-reviewed swaps" },
];

export default function StatsBand() {
  return (
    <section className="relative bg-[#1B2264] text-white z-10">
      {/* Top Diamond Accent Border */}
      <div className="h-3 bg-diamond-gold border-b border-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 px-2 group">
              <p className="font-anton text-4xl sm:text-5xl lg:text-6xl text-[#FFC93C] tracking-tight group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </p>
              <p className="text-white/80 text-xs sm:text-sm font-medium mt-2 max-w-[200px] mx-auto leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Diamond Accent Border */}
      <div className="h-3 bg-diamond-gold border-t border-white/10" />
    </section>
  );
}
