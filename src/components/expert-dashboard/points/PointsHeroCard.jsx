"use client";

import { Zap } from "lucide-react";

export default function PointsHeroCard({ data, loading }) {
  if (loading) {
    return (
      <div className="bg-[#1B2264] border-2 border-[#F5AE38] rounded-3xl p-6 sm:p-8 shadow-xl animate-pulse mb-8">
        <div className="h-6 w-40 bg-white/20 rounded mb-4" />
        <div className="h-12 w-64 bg-white/20 rounded mb-6" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-white/10 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const total = data?.totalPoints?.toLocaleString() ?? "1,640";
  const sessions = data?.sessions ?? 312;
  const thisMonth = data?.pointsThisMonth ?? 640;
  const perSession = data?.perSessionRate ?? 200;
  const queryBonus = data?.queryBonusRate ?? 15;

  const subCards = [
    { label: "SESSIONS", value: sessions },
    { label: "THIS MONTH", value: `${thisMonth} pts` },
    { label: "PER SESSION", value: `${perSession} pts` },
    { label: "QUERY BONUS", value: `${queryBonus} pts` },
  ];

  return (
    <div className="bg-[#1B2264] border-2 border-[#F5AE38] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl mb-8 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#F5AE38]/10 blur-2xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        {/* Left: Total Points Display */}
        <div>
          <p className="font-jetbrains font-extrabold text-[10px] sm:text-xs tracking-[0.25em] text-white/60 uppercase mb-2">
            TOTAL POINTS EARNED
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[#F5AE38] text-3xl sm:text-5xl lg:text-6xl font-black">
              ⚡
            </span>
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#F5AE38] tracking-tight">
              {total} POINTS
            </h2>
          </div>
        </div>

        {/* Right: 4 Sub-stat boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2 gap-3">
          {subCards.map((card) => (
            <div
              key={card.label}
              className="bg-[#242C7D] border border-white/15 rounded-2xl p-4 flex flex-col justify-between hover:border-[#F5AE38]/40 transition-colors"
            >
              <p className="font-jetbrains text-[9px] sm:text-[10px] tracking-[0.2em] font-extrabold text-white/60 uppercase mb-1">
                {card.label}
              </p>
              <p className="font-montserrat font-black text-lg sm:text-xl text-white">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
