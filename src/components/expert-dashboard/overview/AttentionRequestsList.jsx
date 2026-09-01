"use client";

import Link from "next/link";
import RequestCard from "@/components/expert-dashboard/shared/RequestCard";

function RequestCardSkeleton() {
  return (
    <div className="border-2 border-[#E8DCC4] rounded-2xl p-5 animate-pulse space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
        <div className="space-y-1.5 flex-1">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-3 w-48 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="h-4 w-72 bg-gray-200 rounded" />
      <div className="h-3 w-full bg-gray-100 rounded" />
      <div className="h-3 w-5/6 bg-gray-100 rounded" />
    </div>
  );
}

export default function AttentionRequestsList({ requests, loading, error }) {
  if (loading) {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="space-y-4">
          <RequestCardSkeleton />
          <RequestCardSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-8 p-6 bg-white rounded-2xl border border-red-200 text-sm text-red-600 font-dmsans">
        Failed to load requests. Please try again.
      </div>
    );
  }

  // Filter to requests that need attention (new requests)
  const attentionRequests = (requests || []).filter(
    (req) => req.status === "new" || req.isNew
  );

  if (attentionRequests.length === 0) return null;

  return (
    <div className="mb-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[#E0187A] font-bold text-xs">◆</span>
          <span className="font-jetbrains font-extrabold text-xs tracking-[0.22em] uppercase text-[#1E2538]">
            NEEDS YOUR ATTENTION
          </span>
        </div>
        <Link
          href="/expert/requests?filter=new"
          className="font-jetbrains font-extrabold text-[10px] tracking-widest uppercase text-[#2542A5] hover:text-[#E0187A] transition-colors flex items-center gap-1"
        >
          ALL REQUESTS →
        </Link>
      </div>

      {/* Request cards list */}
      <div className="space-y-4">
        {attentionRequests.map((req) => (
          <RequestCard key={req.id} req={req} />
        ))}
      </div>
    </div>
  );
}
