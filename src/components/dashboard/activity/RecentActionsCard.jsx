"use client";

import DiamondDivider from "@/components/shared/DiamondDivider";

// ── Dietary Tag Styles ────────────────────────────────────────────────────────
function getDietTagStyle(tag = "PLANT-FORWARD") {
  switch (tag.toUpperCase()) {
    case "HIGH-PROTEIN":
      return {
        border: "border-[#D6C99A]",
        bg: "bg-[#FBF8EF]",
        text: "text-[#8A6D2B]",
      };
    case "LOW-GI":
      return {
        border: "border-[#C9D6E8]",
        bg: "bg-[#F0F4FA]",
        text: "text-[#2542A5]",
      };
    case "PLANT-FORWARD":
    default:
      return {
        border: "border-[#9ED5B5]",
        bg: "bg-[#F0FAF4]",
        text: "text-[#1B7042]",
      };
  }
}

// ── Loading Skeleton ──────────────────────────────────────────────────────────
function RecentActionsSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E8DCC4]/70 overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="px-6 sm:px-8 pt-7 pb-6 flex items-center justify-between border-b border-[#F0ECE1]">
        <div className="space-y-2">
          <div className="h-3 w-28 bg-gray-200 rounded" />
          <div className="h-7 w-44 bg-gray-200 rounded" />
        </div>
        <div className="h-5 w-16 bg-gray-200 rounded-full" />
      </div>

      {/* Rows Skeleton */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="px-6 sm:px-8 py-6 flex items-center justify-between border-b border-[#F0ECE1] last:border-0"
        >
          <div className="space-y-2.5 flex-1 max-w-md">
            <div className="h-5 w-48 bg-gray-200 rounded" />
            <div className="h-4 w-72 bg-gray-200 rounded" />
            <div className="flex gap-2 pt-1">
              <div className="h-6 w-14 bg-gray-200 rounded" />
              <div className="h-6 w-24 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-8 w-14 bg-gray-200 rounded shrink-0" />
        </div>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function RecentActionsCard({ activities, loading, error }) {
  if (loading) {
    return (
      <div>
        <RecentActionsSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-red-200 text-center">
        <p className="font-dmsans text-sm text-red-600">
          Failed to load recent activity stream. Please try again.
        </p>
      </div>
    );
  }

  if (!activities || activities.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-[#E8DCC4] text-center">
        <p className="font-jetbrains text-xs tracking-widest uppercase text-[#B59963] mb-2">
          No recent actions
        </p>
        <p className="font-dmsans text-sm text-[#7A7A8A]">
          Your recent meal swap activities and logs will appear here.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* ── Main Activity Stream Card ────────────────────────────────────── */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#E8DCC4] overflow-hidden">
        {/* Card Header */}
        <div className="px-6 sm:px-8 pt-7 pb-6 flex items-center justify-between border-b border-[#F0ECE1]">
          <div>
            <p className="font-jetbrains text-[10px] sm:text-xs tracking-[0.25em] font-extrabold text-[#B59963] uppercase mb-1">
              ACTIVITY STREAM
            </p>
            <h2 className="font-montserrat-bold font-black text-2xl sm:text-3xl text-[#1E2538] tracking-tight">
              Recent actions
            </h2>
          </div>

          {/* Cosmetic Live Indicator (CSS animation, not real-time socket) */}
          <div
            className="flex items-center gap-2 select-none"
            title="Live stream status indicator (decorative)"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B7042] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1B7042]" />
            </span>
            <span className="font-jetbrains font-bold text-xs tracking-widest text-[#1B7042] uppercase">
              LIVE
            </span>
          </div>
        </div>

        {/* Action Rows */}
        <div className="divide-y divide-[#F0ECE1]">
          {activities.map((item) => {
            const dietTag = item.dietTag || "PLANT-FORWARD";
            const dietStyle = getDietTagStyle(dietTag);

            return (
              <div
                key={item.id}
                className="px-6 sm:px-8 py-6 flex items-start sm:items-center justify-between gap-4 hover:bg-[#FDFBF7]/60 transition-colors"
              >
                {/* Action Details */}
                <div className="space-y-1.5 min-w-0 flex-1">
                  {/* Dish Name (Result / To-Dish) */}
                  <h3 className="font-rajdhani font-black text-lg sm:text-xl text-[#1E2538] leading-tight">
                    {item.toDish}
                  </h3>

                  {/* Meal replaced: fromDish → toDish */}
                  <p className="font-dmsans text-sm text-[#7A7A8A]">
                    Meal replaced:{" "}
                    <span className="text-[#5A5A68]">{item.fromDish}</span>{" "}
                    <span className="text-[#B59963] mx-1 font-bold">→</span>{" "}
                    <span className="text-[#5A5A68] font-medium">{item.toDish}</span>
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    {/* SWAP Tag */}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded border border-[#D1D9E6] text-[#1B3589] bg-[#F7F9FC] font-jetbrains font-bold text-[10px] sm:text-[11px] tracking-wider uppercase">
                      SWAP
                    </span>

                    {/* Nutritional / Dietary Tag */}
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded border ${dietStyle.border} ${dietStyle.bg} ${dietStyle.text} font-jetbrains font-bold text-[10px] sm:text-[11px] tracking-wider uppercase`}
                    >
                      {dietTag}
                    </span>
                  </div>
                </div>

                {/* Rating on the right */}
                <div className="text-right shrink-0 pl-2">
                  <span className="font-montserrat-bold font-black text-2xl sm:text-3xl text-[#E58A1F] tracking-tight">
                    {item.rating}/5
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Diamond Divider at the bottom ─────────────────────────────────── */}
      <DiamondDivider variant="triangles" count={44} className="pt-10 pb-6" />
    </div>
  );
}
