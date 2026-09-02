"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function QueryRowSkeleton() {
  return (
    <div className="flex items-start gap-4 p-4 animate-pulse">
      <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-32 bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-100 rounded" />
        <div className="h-3 w-3/4 bg-gray-100 rounded" />
      </div>
      <div className="w-20 h-8 bg-gray-200 rounded-full shrink-0" />
    </div>
  );
}

export default function UnansweredQueriesList({ queries, loading, error }) {
  const router = useRouter();

  if (loading) {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="bg-white rounded-2xl border border-[#E8DCC4] divide-y divide-[#E8DCC4]/50 overflow-hidden">
          <QueryRowSkeleton />
          <QueryRowSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-8 p-6 bg-white rounded-2xl border border-red-200 text-sm text-red-600 font-dmsans">
        Failed to load queries. Please try again.
      </div>
    );
  }

  if (!queries || queries.length === 0) return null;

  // Filter to conversations that have unanswered queries
  const unanswered = queries.filter(
    (q) => (q.unreadCount && q.unreadCount > 0) || q.question
  );

  return (
    <div className="mb-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[#E0187A] font-bold text-xs">◆</span>
          <span className="font-jetbrains font-extrabold text-xs tracking-[0.22em] uppercase text-[#1E2538]">
            UNANSWERED QUERIES
          </span>
        </div>
        <Link
          href="/expert/queries"
          className="font-jetbrains font-extrabold text-[10px] tracking-widest uppercase text-[#2542A5] hover:text-[#E0187A] transition-colors flex items-center gap-1"
        >
          ALL QUERIES →
        </Link>
      </div>

      {/* Query rows */}
      <div className="divide-y divide-[#E8DCC4]/50 overflow-hidden">
        {unanswered.map((item) => {
          const userName = item.userName || item.name || "User";
          const time = item.lastMessageAt || item.timeAgo || "";
          const questionText =
            item.messages && item.messages.length > 0
              ? item.messages[item.messages.length - 1].text
              : item.question || "";

          return (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 mb-2 sm:p-5 hover:bg-[#FBF3E3]/30 shadow-sm  transition-colors rounded-xl bg-white border border-[#E8DCC4]/70"
            >
              {/* Avatar */}
              <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-[#E8DCC4] shrink-0 border border-[#E8DCC4]">
                <Image
                  src={item.avatarUrl}
                  alt={userName}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Text block */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-montserrat-bold font-black text-sm text-[#1E2538]">
                    {userName}
                  </span>
                  <span className="font-dmsans text-xs text-[#9A9AAA] shrink-0">
                    {time}
                  </span>
                </div>
                <p className="font-dmsans text-sm text-[#4A4A5A] leading-relaxed line-clamp-2">
                  {questionText}
                </p>
              </div>

              {/* ANSWER button — routes to the WhatsApp-style queries workspace */}
              <button
                type="button"
                id={`answer-${item.id}`}
                onClick={() => router.push("/expert/queries")}
                className="font-jetbrains font-extrabold text-[10px] sm:text-xs tracking-wider uppercase px-4 py-2 rounded-sm border-2 border-[#E0187A] text-[#E0187A] hover:bg-[#E0187A] hover:text-white transition-all cursor-pointer shrink-0 active:scale-95"
              >
                ANSWER
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
