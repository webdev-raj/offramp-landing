"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import DiamondDivider from "@/components/shared/DiamondDivider";

// ── Helpers ───────────────────────────────────────────────────────────────────

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-colors ${
            i < rating
              ? "fill-[#F5AE38] text-[#F5AE38]"
              : "fill-transparent text-[#D9CDB8]"
          }`}
        />
      ))}
    </div>
  );
}

function getRatingPillStyle(rating) {
  if (rating >= 5) return { bg: "bg-[#1B7042]", text: "text-white" };
  if (rating === 4) return { bg: "bg-[#1B3589]", text: "text-white" };
  return { bg: "bg-[#CB5638]", text: "text-white" };
}

// ── Loading Skeleton ──────────────────────────────────────────────────────────

function SwapHistoryListSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E8DCC4]/70 overflow-hidden animate-pulse">
      {/* Card header */}
      <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-[#E8DCC4]/50">
        <div className="space-y-2">
          <div className="h-3 w-28 bg-gray-200 rounded" />
          <div className="h-7 w-32 bg-gray-200 rounded" />
        </div>
        <div className="h-7 w-20 bg-gray-200 rounded-full" />
      </div>
      {/* Rows */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center gap-4 px-6 py-5 border-b border-[#E8DCC4]/40 last:border-0">
          <div className="w-1 self-stretch rounded-full bg-gray-200 shrink-0" />
          <div className="w-12 h-12 bg-gray-200 rounded-xl shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-56 bg-gray-200 rounded" />
            <div className="h-3 w-32 bg-gray-200 rounded" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-7 w-20 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function SwapHistoryList({ swaps, loading, error }) {
  if (loading) {
    return (
      <div className="mb-10">
        <SwapHistoryListSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-10 bg-white rounded-2xl p-8 border border-red-200 text-center">
        <p className="font-dmsans text-sm text-red-600">
          Failed to load swap history. Please try again.
        </p>
      </div>
    );
  }

  if (!swaps || swaps.length === 0) {
    return (
      <div className="mb-10 bg-white rounded-2xl p-12 border border-[#E8DCC4] text-center">
        <p className="font-jetbrains text-xs tracking-widest uppercase text-[#B59963] mb-2">
          No swaps yet
        </p>
        <p className="font-dmsans text-sm text-[#7A7A8A]">
          Your completed meal swaps will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-white rounded-2xl shadow-sm border border-[#E8DCC4]/70 overflow-hidden">

        {/* ── Card Header ─────────────────────────────────────────────── */}
        <div className="px-6 pt-6 flex items-center justify-between border-b border-[#E8DCC4]/50">
          <div>
            <p className="font-jetbrains text-[10px] tracking-[0.25em] font-extrabold text-[#9A9AAA] uppercase mb-1">
              SWAP HISTORY
            </p>
            <h2 className="font-montserrat font-black text-2xl text-[#1E2538]">
              My Swaps
            </h2>
          </div>

          {/* Dynamic count badge */}
          <span className="font-jetbrains font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-full bg-[#E0187A] text-white shadow-sm shadow-[#E0187A]/30">
            {swaps.length} RECENT
          </span>
        </div>

        {/* ── Swap Rows ────────────────────────────────────────────────── */}
        <div className="divide-y divide-[#E8DCC4]/50">
          {swaps.map((swap) => {
            const timestamp = swap.daysAgo || swap.date || "";
            const pillStyle = getRatingPillStyle(swap.rating);

            return (
              <div
                key={swap.id}
                className="flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 hover:bg-[#FBF3E3]/40 transition-colors group"
              >
                {/* Colored vertical accent bar */}
                <div
                  className="w-1 self-stretch rounded-full shrink-0 min-h-[52px]"
                  style={{ backgroundColor: swap.accentColor }}
                />

                {/* Dish photo thumbnail */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-[#E8DCC4]/60 bg-[#F5ECD5]">
                  <Image
                    src={swap.imageUrl}
                    alt={swap.fromDish}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Text block */}
                <div className="flex-1 min-w-0">
                  {/* Dish name: from → to */}
                  <p className="font-dmsans text-sm sm:text-base leading-snug mb-1 truncate">
                    <span className="text-[#7A7A8A] font-medium">{swap.fromDish}</span>
                    <span className="mx-1.5 text-[#B59963]">→</span>
                    <span className="font-black text-[#1E2538] font-montserrat">{swap.toDish}</span>
                  </p>

                  {/* Timestamp + rating text */}
                  <p className="font-dmsans text-xs text-[#9A9AAA]">
                    {timestamp}
                    <span className="mx-1.5">·</span>
                    rating {swap.rating}/5
                  </p>
                </div>

                {/* Right side: stars + rated pill */}
                <div className="flex items-center gap-3 shrink-0">
                  <StarRating rating={swap.rating} />

                  <span
                    className={`font-jetbrains font-extrabold text-[10px] sm:text-xs tracking-wider uppercase px-3 py-1.5 rounded ${pillStyle.bg} ${pillStyle.text} shadow-xs`}
                  >
                    RATED● {swap.rating}/5
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Diamond Divider at bottom of card ───────────────────────── */}
      </div>
      <DiamondDivider variant="triangles" count={44} className="pt-12 pb-6" />
    </div>
  );
}
