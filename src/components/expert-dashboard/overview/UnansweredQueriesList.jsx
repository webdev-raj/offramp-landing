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

  const handleAnswer = (query) => {
    // ⚠️  PLACEHOLDER NAVIGATION — Chat/messaging feature not yet built.
    // The designer explicitly flagged (Figma comment, Anshuman → raj) that "ANSWER"
    // should route directly into a per-user chat conversation.
    // This route is scaffolded as /expert/chats/[queryId] but renders a "coming soon"
    // placeholder until a dedicated future prompt builds the real chat UI.
    router.push(`/expert/chats/${query.id}`);
  };

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
      <div className="bg-white rounded-2xl border border-[#E8DCC4]/70 shadow-sm divide-y divide-[#E8DCC4]/50 overflow-hidden">
        {queries.map((query) => (
          <div
            key={query.id}
            className="flex items-start gap-4 p-4 sm:p-5 hover:bg-[#FBF3E3]/30 transition-colors"
          >
            {/* Avatar */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#E8DCC4] shrink-0 border border-[#E8DCC4]">
              <Image
                src={query.avatarUrl}
                alt={query.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Text block */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-montserrat font-black text-sm text-[#1E2538]">
                  {query.name}
                </span>
                <span className="font-dmsans text-xs text-[#9A9AAA] shrink-0">
                  {query.timeAgo}
                </span>
              </div>
              <p className="font-dmsans text-sm text-[#4A4A5A] leading-relaxed line-clamp-2">
                {query.question}
              </p>
            </div>

            {/* ANSWER button */}
            <button
              type="button"
              id={`answer-${query.id}`}
              onClick={() => handleAnswer(query)}
              className="font-jetbrains font-extrabold text-[10px] sm:text-xs tracking-wider uppercase px-4 py-2 rounded-full border-2 border-[#E0187A] text-[#E0187A] hover:bg-[#E0187A] hover:text-white transition-all cursor-pointer shrink-0 active:scale-95"
            >
              ANSWER
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
