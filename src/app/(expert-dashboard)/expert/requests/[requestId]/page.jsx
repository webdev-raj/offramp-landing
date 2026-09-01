"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  MessageCircle,
  Video,
  CheckCircle,
  XCircle,
  Zap,
  ArrowLeft,
  Activity,
  Heart,
  Utensils,
  ShieldAlert,
  Pill,
  Calendar,
  Check,
  RotateCw,
  X,
} from "lucide-react";
import DiamondDivider from "@/components/shared/DiamondDivider";
import { useExpertRequestDetail } from "@/lib/hooks/useExpertRequestDetail";

function ContactIcon({ method }) {
  if (method === "Video call") return <Video className="w-4 h-4" />;
  return <MessageCircle className="w-4 h-4" />;
}

function StatusBadge({ status }) {
  switch (status) {
    case "accepted":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-xl bg-[#1B7042]/10 text-[#1B7042] border border-[#1B7042]/30">
          <Check className="w-4 h-4" />
          Accepted Request
        </span>
      );
    case "ongoing":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-xl bg-[#2542A5]/10 text-[#2542A5] border border-[#2542A5]/30">
          <RotateCw className="w-4 h-4" />
          Ongoing Consultation
        </span>
      );
    case "completed":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-xl bg-[#1B7042] text-white shadow-xs">
          <Check className="w-4 h-4" />
          Completed Consultation
        </span>
      );
    case "rejected":
      return (
        <span className="flex items-center gap-1.5 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-4 py-2 rounded-xl bg-[#CB5638]/10 text-[#CB5638] border border-[#CB5638]/30">
          <X className="w-4 h-4" />
          Rejected Request
        </span>
      );
    default:
      return null;
  }
}

export default function RequestDetailPage({ params }) {
  const unwrappedParams = typeof params?.then === "function" ? use(params) : params;
  const { requestId } = unwrappedParams;
  const { data: req, loading, error } = useExpertRequestDetail(requestId);

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-6 w-48 bg-gray-200 rounded" />
        <div className="bg-white rounded-2xl border-2 border-[#E8DCC4] p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <div className="space-y-2 flex-1">
              <div className="h-6 w-48 bg-gray-200 rounded" />
              <div className="h-4 w-72 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-8 w-3/4 bg-gray-200 rounded" />
          <div className="h-24 bg-gray-100 rounded-xl" />
        </div>
      </div>
    );
  }

  if (error || !req) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-red-200 text-center">
        <h2 className="font-montserrat font-black text-2xl text-[#1E2538] mb-2">
          Request Not Found
        </h2>
        <p className="font-dmsans text-sm text-[#7A7A8A] mb-6">
          The requested consultation record does not exist or could not be loaded.
        </p>
        <Link
          href="/expert/requests"
          className="inline-flex items-center gap-2 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-xl bg-[#1B2264] text-white hover:bg-[#2542A5] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Requests
        </Link>
      </div>
    );
  }

  const isNewStatus = !req.status || req.status === "new";

  return (
    <div>
      {/* ── Breadcrumb & Back Link ───────────────────────────────────── */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/expert/requests"
          className="inline-flex items-center gap-2 font-jetbrains font-extrabold text-xs tracking-wider uppercase text-[#2542A5] hover:text-[#E0187A] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Requests
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[#E0187A] font-bold text-xs">◆</span>
          <span className="font-jetbrains font-extrabold text-[10px] tracking-[0.25em] text-[#B59963] uppercase">
            REQUEST ID: {req.id.toUpperCase()}
          </span>
        </div>
      </div>

      {/* ── Main Request Detail Card ─────────────────────────────────── */}
      <div className="bg-white border-2 border-[#2542A5] rounded-3xl p-6 sm:p-10 shadow-lg mb-8">
        {/* User Identity & Top Meta Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8DCC4]/60">
          <div className="flex items-start sm:items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#E8DCC4] shrink-0 border-2 border-[#2542A5] shadow-md">
              <Image
                src={req.avatarUrl}
                alt={req.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2.5 mb-1.5">
                <h1 className="font-montserrat font-black text-2xl sm:text-3xl text-[#1E2538]">
                  {req.name}
                </h1>
                {req.isNew && (
                  <span className="font-jetbrains font-extrabold text-[11px] tracking-wider uppercase px-3 py-0.5 rounded-full bg-[#F5AE38] text-[#1E1E1E]">
                    NEW REQUEST
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[#7A7A8A] font-dmsans text-xs sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2542A5]" />
                  {req.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2542A5]" />
                  Submitted {req.timeAgo}
                </span>
                <span className="flex items-center gap-1.5">
                  <ContactIcon method={req.contactMethod} />
                  Preferred: {req.contactMethod}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center md:flex-col md:items-end gap-3 shrink-0">
            <span className="font-jetbrains font-extrabold text-xs tracking-wider uppercase text-[#CB5638] bg-[#CB5638]/10 px-3 py-1 rounded-md">
              Urgency: {req.urgency}
            </span>
            <span className="font-jetbrains font-extrabold text-sm tracking-wider uppercase px-4 py-1.5 rounded-full bg-[#F5AE38] text-[#1E1E1E] flex items-center gap-1.5 shadow-sm">
              <Zap className="w-4 h-4" />
              {req.points} Points Award
            </span>
          </div>
        </div>

        {/* Subject & Complete Message Body */}
        <div className="py-6 border-b border-[#E8DCC4]/60">
          <p className="font-jetbrains text-[10px] tracking-[0.2em] font-extrabold text-[#9A9AAA] uppercase mb-1">
            CONSULTATION SUBJECT
          </p>
          <h2 className="font-montserrat font-black text-xl sm:text-2xl text-[#2542A5] mb-4">
            {req.subject}
          </h2>

          <div className="bg-[#FFFDF5] border border-[#E8DCC4] rounded-2xl p-5 sm:p-6">
            <p className="font-jetbrains text-[10px] tracking-[0.2em] font-extrabold text-[#B59963] uppercase mb-2">
              USER STATEMENT & NUTRITION GOAL
            </p>
            <p className="font-dmsans text-base sm:text-lg text-[#2E2E38] leading-relaxed">
              {req.fullMessage || req.message}
            </p>
          </div>
        </div>

        {/* Health Profile & Clinical Parameters */}
        {req.healthProfile && (
          <div className="py-6 border-b border-[#E8DCC4]/60">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4 text-[#E0187A]" />
              <h3 className="font-montserrat font-black text-lg text-[#1E2538]">
                Health & Lifestyle Profile
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#FBF3E3]/60 p-4 rounded-xl border border-[#E8DCC4]/60">
                <p className="font-jetbrains text-[10px] tracking-wider uppercase text-[#9A9AAA] font-bold mb-1">
                  Age & Gender
                </p>
                <p className="font-montserrat font-extrabold text-sm text-[#1E2538]">
                  {req.healthProfile.age} · {req.healthProfile.gender}
                </p>
              </div>

              <div className="bg-[#FBF3E3]/60 p-4 rounded-xl border border-[#E8DCC4]/60">
                <p className="font-jetbrains text-[10px] tracking-wider uppercase text-[#9A9AAA] font-bold mb-1">
                  Primary Condition
                </p>
                <p className="font-montserrat font-extrabold text-sm text-[#2542A5]">
                  {req.healthProfile.primaryCondition}
                </p>
              </div>

              <div className="bg-[#FBF3E3]/60 p-4 rounded-xl border border-[#E8DCC4]/60">
                <p className="font-jetbrains text-[10px] tracking-wider uppercase text-[#9A9AAA] font-bold mb-1">
                  Target Metric / HbA1c
                </p>
                <p className="font-montserrat font-extrabold text-sm text-[#1B7042]">
                  {req.healthProfile.targetHbA1c}
                </p>
              </div>

              <div className="bg-[#FBF3E3]/60 p-4 rounded-xl border border-[#E8DCC4]/60">
                <p className="font-jetbrains text-[10px] tracking-wider uppercase text-[#9A9AAA] font-bold mb-1">
                  Dietary Preference
                </p>
                <p className="font-dmsans font-bold text-sm text-[#1E2538]">
                  {req.healthProfile.dietaryPreference}
                </p>
              </div>

              <div className="bg-[#FBF3E3]/60 p-4 rounded-xl border border-[#E8DCC4]/60">
                <p className="font-jetbrains text-[10px] tracking-wider uppercase text-[#9A9AAA] font-bold mb-1">
                  Activity Level
                </p>
                <p className="font-dmsans font-bold text-sm text-[#1E2538]">
                  {req.healthProfile.activityLevel}
                </p>
              </div>

              <div className="bg-[#FBF3E3]/60 p-4 rounded-xl border border-[#E8DCC4]/60">
                <p className="font-jetbrains text-[10px] tracking-wider uppercase text-[#9A9AAA] font-bold mb-1">
                  Medications & Supplements
                </p>
                <p className="font-dmsans font-bold text-sm text-[#1E2538]">
                  {req.healthProfile.medications}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Decision Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-dmsans text-[#7A7A8A]">
            {isNewStatus
              ? "Accepting will open direct messaging and award points upon completion."
              : `Current consultation status: ${req.status.toUpperCase()}`}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {isNewStatus ? (
              <>
                <button
                  type="button"
                  onClick={() => alert(`Rejected request ${req.id}`)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 font-jetbrains font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-xl border-2 border-[#CB5638] text-[#CB5638] hover:bg-[#CB5638] hover:text-white transition-all cursor-pointer active:scale-95"
                >
                  <XCircle className="w-4 h-4" />
                  REJECT
                </button>
                <button
                  type="button"
                  onClick={() => alert(`Accepted request from ${req.name}!`)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 font-jetbrains font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 py-3 rounded-xl bg-[#1B7042] text-white hover:bg-[#145733] transition-all cursor-pointer active:scale-95 shadow-md shadow-[#1B7042]/20"
                >
                  <CheckCircle className="w-4 h-4" />
                  ACCEPT REQUEST
                </button>
              </>
            ) : (
              <StatusBadge status={req.status} />
            )}
          </div>
        </div>
      </div>

      {/* ── Shared Bottom Divider ────────────────────────────────────── */}
      <DiamondDivider variant="triangles" count={44} className="pt-4 pb-12" />
    </div>
  );
}
