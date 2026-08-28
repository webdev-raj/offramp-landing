"use client";

import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";
import SwapHistoryList from "@/components/dashboard/swaps/SwapHistoryList";
import { useSwapHistory } from "@/lib/hooks/useSwapHistory";

export default function SwapsPage() {
  const { data: swaps, loading, error } = useSwapHistory();

  return (
    <div>
      {/* Page Header */}
      <DashboardHeader eyebrow="PROFILE CONTROL CENTER" title="My Swaps" />

      {/* Swap History Card */}
      <SwapHistoryList swaps={swaps} loading={loading} error={error} />
    </div>
  );
}
