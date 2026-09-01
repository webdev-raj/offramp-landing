"use client";

import WelcomeBanner from "@/components/expert-dashboard/overview/WelcomeBanner";
import StatCardsRow from "@/components/expert-dashboard/overview/StatCardsRow";
import AttentionRequestsList from "@/components/expert-dashboard/overview/AttentionRequestsList";
import UnansweredQueriesList from "@/components/expert-dashboard/overview/UnansweredQueriesList";
import DiamondDivider from "@/components/shared/DiamondDivider";

import { useExpertOverview } from "@/lib/hooks/useExpertOverview";
import { useExpertRequests } from "@/lib/hooks/useExpertRequests";
import { useExpertQueries } from "@/lib/hooks/useExpertQueries";

export default function ExpertOverviewPage() {
  const { data: expert, loading: overviewLoading, error: overviewError } = useExpertOverview();
  const { data: requests, loading: requestsLoading, error: requestsError } = useExpertRequests();
  const { data: queries, loading: queriesLoading, error: queriesError } = useExpertQueries();

  return (
    <div>
      {/* Pink welcome hero banner */}
      <WelcomeBanner expert={expert} loading={overviewLoading} />

      {/* 4 colored stat boxes */}
      <StatCardsRow expert={expert} loading={overviewLoading} />

      {/* Needs Your Attention — request cards with ACCEPT/REJECT stubs */}
      <AttentionRequestsList
        requests={requests}
        loading={requestsLoading}
        error={requestsError}
      />

      {/* Unanswered Queries — ANSWER routes to placeholder chat scaffold */}
      <UnansweredQueriesList
        queries={queries}
        loading={queriesLoading}
        error={queriesError}
      />

      {/* Decorative bottom divider (shared component) */}
      <DiamondDivider variant="triangles" count={44} className="pt-6 pb-12" />
    </div>
  );
}
