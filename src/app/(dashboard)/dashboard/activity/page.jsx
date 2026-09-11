"use client";

import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";
import RecentActionsCard from "@/components/dashboard/activity/RecentActionsCard";
import { useSwapHistory } from "@/lib/hooks/useSwapHistory";

export default function ActivityPage() {
  const { data: swaps, loading, error } = useSwapHistory();

  return (
    <div>
      {/* Page Header */}
      <DashboardHeader eyebrow="PROFILE CONTROL CENTER" title="Activity" />

      {/* Recent Actions Activity Feed */}
      <RecentActionsCard activities={swaps} loading={loading} error={error} />
    </div>
  );
}
