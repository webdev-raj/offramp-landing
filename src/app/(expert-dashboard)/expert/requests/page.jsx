"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import RequestCard from "@/components/expert-dashboard/shared/RequestCard";
import DiamondDivider from "@/components/shared/DiamondDivider";
import { useExpertRequests } from "@/lib/hooks/useExpertRequests";

const TABS = [
  { id: "all", label: "ALL" },
  { id: "new", label: "NEW" },
  { id: "accepted", label: "ACCEPTED" },
  { id: "ongoing", label: "ONGOING" },
  { id: "completed", label: "COMPLETED" },
  { id: "rejected", label: "REJECTED" },
];

function RequestsContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const [activeTab, setActiveTab] = useState("new");
  const { data: requests, loading, error } = useExpertRequests();

  // Support ?filter= query parameter (e.g. from Overview page's "ALL REQUESTS →" link)
  useEffect(() => {
    if (filterParam && TABS.some((t) => t.id === filterParam.toLowerCase())) {
      setActiveTab(filterParam.toLowerCase());
    }
  }, [filterParam]);

  // Compute counts dynamically from mock data
  const counts = {
    all: requests?.length ?? 0,
    new: requests?.filter((r) => r.status === "new").length ?? 0,
    accepted: requests?.filter((r) => r.status === "accepted").length ?? 0,
    ongoing: requests?.filter((r) => r.status === "ongoing").length ?? 0,
    completed: requests?.filter((r) => r.status === "completed").length ?? 0,
    rejected: requests?.filter((r) => r.status === "rejected").length ?? 0,
  };

  // Filter requests based on active tab
  const filteredRequests = (requests || []).filter((req) => {
    if (activeTab === "all") return true;
    return req.status === activeTab;
  });

  return (
    <div>
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#E0187A] font-bold text-xs">◆</span>
          <p className="font-jetbrains text-[10px] sm:text-xs tracking-[0.25em] font-extrabold text-[#B59963] uppercase">
            REQUEST MANAGEMENT
          </p>
        </div>
        <h1 className="font-montserrat-bold font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none">
          <span className="text-[#1E2538]">All </span>
          <span className="text-[#2542A5]">Requests</span>
        </h1>
      </div>

      {/* ── Filter Tabs Row ─────────────────────────────────────────── */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const count = counts[tab.id] ?? 0;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-jetbrains font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-[#1B2264] text-white shadow-md shadow-[#1B2264]/20 scale-102"
                  : "bg-white text-[#7A7A8A] border border-[#E8DCC4] hover:border-[#1B2264]/40 hover:text-[#1E2538]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-jetbrains ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#F5ECD5] text-[#1E2538]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Content List / Loading / Error / Empty States ────────────── */}
      {loading ? (
        <div className="space-y-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border-2 border-[#E8DCC4] bg-white rounded-2xl p-6 animate-pulse space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-48 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="h-4 w-72 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-white rounded-2xl p-8 border border-red-200 text-center mb-8">
          <p className="font-dmsans text-sm text-red-600">
            Failed to load requests. Please refresh or try again.
          </p>
        </div>
      ) : filteredRequests.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 border border-[#E8DCC4] text-center mb-8">
          <p className="font-jetbrains text-xs tracking-widest uppercase text-[#B59963] mb-2">
            NO {activeTab.toUpperCase()} REQUESTS
          </p>
          <p className="font-dmsans text-sm text-[#7A7A8A]">
            There are currently no requests under the &quot;{activeTab}&quot; status.
          </p>
        </div>
      ) : (
        <div className="space-y-4 mb-8">
          {filteredRequests.map((req) => (
            <RequestCard key={req.id} req={req} />
          ))}
        </div>
      )}

      {/* ── Bottom Shared Divider ────────────────────────────────────── */}
      <DiamondDivider variant="triangles" count={44} className="pt-6 pb-12" />
    </div>
  );
}

export default function ExpertRequestsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] flex items-center justify-center font-jetbrains text-xs text-[#1B2264]">
          Loading requests...
        </div>
      }
    >
      <RequestsContent />
    </Suspense>
  );
}
