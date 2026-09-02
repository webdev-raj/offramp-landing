"use client";

import PointsHeroCard from "@/components/expert-dashboard/points/PointsHeroCard";
import HowYouEarnPoints from "@/components/expert-dashboard/points/HowYouEarnPoints";
import RecentActivityList from "@/components/expert-dashboard/points/RecentActivityList";
import DiamondDivider from "@/components/shared/DiamondDivider";
import { useExpertPoints } from "@/lib/hooks/useExpertPoints";

export default function ExpertPointsPage() {
  const { data, loading, error } = useExpertPoints();

  return (
    <div>
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#F5AE38] font-bold text-xs">◆</span>
          <p className="font-jetbrains text-[10px] sm:text-xs tracking-[0.25em] font-extrabold text-[#B59963] uppercase">
            POINTS &amp; EARNINGS
          </p>
        </div>
        <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-[#F5AE38]">
          Points
        </h1>
      </div>

      {/* ── Total Points Hero Card ──────────────────────────────────── */}
      <PointsHeroCard data={data} loading={loading} />

      {/* ── How You Earn Points (Explainer Row) ──────────────────────── */}
      <HowYouEarnPoints />

      {/* ── Recent Activity Feed ────────────────────────────────────── */}
      <RecentActivityList
        activities={data?.recentActivity}
        loading={loading}
        error={error}
      />

      {/* ── Bottom Decorative Diamond Divider ───────────────────────── */}
      <DiamondDivider
        variant="triangles"
        triangleColor="text-[#F5AE38]"
        count={44}
        className="pt-4 pb-12"
      />
    </div>
  );
}
