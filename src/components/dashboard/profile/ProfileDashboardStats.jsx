"use client";

import Link from "next/link";

export default function ProfileDashboardStats({ stats, loading, error }) {
  if (loading) {
    return (
      <div className="mb-10">
        <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white h-28 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !stats) return null;

  const statBoxes = [
    {
      label: "MEALS REPLACED",
      value: stats.mealsReplaced,
      borderColor: "border-[#E0187A]",
      textColor: "text-[#E0187A]",
    },
    {
      label: "CURRENT WEEK",
      value: stats.currentWeek,
      borderColor: "border-[#1B3589]",
      textColor: "text-[#1B3589]",
    },
    {
      label: "BASELINE / WEEK",
      value: stats.baselinePerWeek,
      borderColor: "border-[#1B7042]",
      textColor: "text-[#1B7042]",
    },
    {
      label: "TOTAL WEEKS",
      value: stats.totalWeeks,
      borderColor: "border-[#D94A26]",
      textColor: "text-[#D94A26]",
    },
  ];

  return (
    <div className="mb-10">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 mb-4 font-jetbrains text-xs">
        <span className="text-[#E0187A] font-bold">◀</span>
        <span className="font-bold tracking-[0.2em] uppercase text-[#E0187A]">
          DASHBOARD
        </span>
        <span className="text-[#7A7A8A] font-dmsans font-normal tracking-normal text-xs sm:text-sm">
          - Your plant-based transition progress.
        </span>
      </div>

      {/* 4 Colored Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {statBoxes.map((box, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl p-5 border-2 ${box.borderColor} shadow-sm flex flex-col justify-between h-32 hover:scale-[1.02] transition-transform`}
          >
            <p className="font-jetbrains text-[10px] sm:text-[11px] tracking-[0.18em] font-extrabold text-[#9A9AAA] uppercase">
              {box.label}
            </p>
            <p className={`font-montserrat font-black text-4xl sm:text-5xl ${box.textColor} tracking-tight`}>
              {box.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width UPDATE PREFERENCES button */}
      <Link
        href="/dashboard/preferences"
        className="w-full bg-[#1E1E1E] hover:bg-[#333333] text-white font-montserrat font-black text-xs sm:text-sm tracking-[0.2em] uppercase py-4 rounded-xl shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-[0.99]"
      >
        UPDATE PREFERENCES
      </Link>
    </div>
  );
}
