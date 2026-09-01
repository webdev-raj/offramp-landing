"use client";

import Image from "next/image";
import {
  MapPin,
  Clock,
  MessageCircle,
  Video,
  CheckCircle,
  XCircle,
  Zap,
  Check,
  RotateCw,
  X,
} from "lucide-react";

function ContactIcon({ method }) {
  if (method === "Video call") return <Video className="w-3.5 h-3.5" />;
  return <MessageCircle className="w-3.5 h-3.5" />;
}

function StatusBadge({ status }) {
  switch (status) {
    case "accepted":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-xl bg-[#1B7042]/10 text-[#1B7042] border border-[#1B7042]/30">
          <Check className="w-3.5 h-3.5" />
          Accepted
        </span>
      );
    case "ongoing":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-xl bg-[#2542A5]/10 text-[#2542A5] border border-[#2542A5]/30">
          <RotateCw className="w-3.5 h-3.5" />
          Ongoing
        </span>
      );
    case "completed":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-xl bg-[#1B7042] text-white shadow-xs">
          <Check className="w-3.5 h-3.5" />
          Completed
        </span>
      );
    case "rejected":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-xl bg-[#CB5638]/10 text-[#CB5638] border border-[#CB5638]/30">
          <X className="w-3.5 h-3.5" />
          Rejected
        </span>
      );
    default:
      return null;
  }
}

export default function RequestCard({ req }) {
  if (!req) return null;

  const isNewStatus = !req.status || req.status === "new";

  return (
    <div className="bg-white border-2 border-[#2542A5] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Footer: read link + action buttons / status badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <button
          type="button"
          onClick={() =>
            alert(`Full request from ${req.name} — detail view coming soon`)
          }
          className="font-jetbrains font-extrabold text-[10px] tracking-widest uppercase text-[#2542A5] hover:text-[#E0187A] transition-colors flex items-center gap-1 cursor-pointer"
        >
          READ FULL REQUEST →
        </button>

        <div className="flex items-center gap-3">
          {isNewStatus ? (
            <>
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
            </>
          ) : (
            <StatusBadge status={req.status} />
          )}
        </div>
      </div>
    </div>
  );
}
