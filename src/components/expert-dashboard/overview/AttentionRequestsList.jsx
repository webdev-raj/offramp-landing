"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, MessageCircle, Video, CheckCircle, XCircle, Zap } from "lucide-react";

function ContactIcon({ method }) {
  if (method === "Video call") return <Video className="w-3.5 h-3.5" />;
  return <MessageCircle className="w-3.5 h-3.5" />;
}

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

  if (!requests || requests.length === 0) return null;

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
          href="/expert/requests"
          className="font-jetbrains font-extrabold text-[10px] tracking-widest uppercase text-[#2542A5] hover:text-[#E0187A] transition-colors flex items-center gap-1"
        >
          ALL REQUESTS →
        </Link>
      </div>

      {/* Request cards */}
      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="bg-white border-2 border-[#2542A5] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Top row: avatar + name/meta + urgency + points */}
            <div className="flex items-start justify-between gap-4 mb-3">
              {/* Left: avatar + name + meta */}
              <div className="flex items-start gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#E8DCC4] shrink-0 border-2 border-[#E8DCC4]">
                  <Image
                    src={req.avatarUrl}
                    alt={req.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <span className="font-montserrat font-black text-base text-[#1E2538]">
                      {req.name}
                    </span>
                    {req.isNew && (
                      <span className="font-jetbrains font-extrabold text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F5AE38] text-[#1E1E1E]">
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-[#7A7A8A]">
                    <span className="flex items-center gap-1 font-dmsans text-xs">
                      <MapPin className="w-3 h-3" />
                      {req.location}
                    </span>
                    <span className="flex items-center gap-1 font-dmsans text-xs">
                      <Clock className="w-3 h-3" />
                      {req.timeAgo}
                    </span>
                    <span className="flex items-center gap-1 font-dmsans text-xs">
                      <ContactIcon method={req.contactMethod} />
                      {req.contactMethod}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: urgency + points */}
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="font-jetbrains font-extrabold text-[10px] tracking-wider uppercase text-[#CB5638]">
                  ↑ {req.urgency}
                </span>
                <span className="font-jetbrains font-extrabold text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-[#F5AE38] text-[#1E1E1E] flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {req.points} PTS
                </span>
              </div>
            </div>

            {/* Subject line */}
            <p className="font-montserrat font-black text-sm sm:text-base text-[#2542A5] mb-2">
              {req.subject}
            </p>

            {/* Message text */}
            <p className="font-dmsans text-sm text-[#4A4A5A] leading-relaxed mb-4 line-clamp-3">
              {req.message}
            </p>

            {/* Footer: read link + action buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => alert(`Full request from ${req.name} — detail view coming soon`)}
                className="font-jetbrains font-extrabold text-[10px] tracking-widest uppercase text-[#2542A5] hover:text-[#E0187A] transition-colors flex items-center gap-1 cursor-pointer"
              >
                READ FULL REQUEST →
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  id={`reject-${req.id}`}
                  onClick={() => console.log(`Rejected request ${req.id}`)}
                  className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-xl border-2 border-[#CB5638] text-[#CB5638] hover:bg-[#CB5638] hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <XCircle className="w-4 h-4" />
                  REJECT
                </button>
                <button
                  type="button"
                  id={`accept-${req.id}`}
                  onClick={() => console.log(`Accepted request ${req.id}`)}
                  className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-xl bg-[#1B7042] text-white hover:bg-[#145733] transition-all cursor-pointer active:scale-95 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  ACCEPT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
