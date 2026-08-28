"use client";

import Image from "next/image";
import { ArrowRight, User } from "lucide-react";

export default function ProfileCard({ profile, loading, error }) {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8DCC4]/60 animate-pulse mb-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl shrink-0" />
            <div className="space-y-2">
              <div className="h-6 w-40 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-5 w-20 bg-gray-200 rounded-full" />
            </div>
          </div>
          <div className="w-32 h-10 bg-gray-200 rounded-xl" />
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-200 text-red-600 mb-6">
        Failed to load profile details. Please try again.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8DCC4]/60 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Side: Avatar + Details */}
        <div className="flex items-start sm:items-center gap-5">
          {/* Avatar container */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#1B2264] shrink-0 border-2 border-[#E8DCC4] shadow-md flex items-center justify-center">
            {profile.avatarUrl ? (
              <Image
                src={profile.avatarUrl}
                alt={profile.name || "User Avatar"}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <User className="w-10 h-10 text-white/70" />
            )}
          </div>

          {/* Text Info */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-[#1E2538]">
                {profile.name}
              </h2>
              {profile.badge && (
                <span className="font-jetbrains font-bold text-[10px] sm:text-xs tracking-wider uppercase px-3 py-1 rounded-full border border-[#1B7042]/40 bg-[#1B7042]/10 text-[#1B7042]">
                  {profile.badge}
                </span>
              )}
            </div>

            <p className="font-dmsans text-sm text-[#7A7A8A] mb-3">
              {profile.email}
            </p>

            {profile.dietTag && (
              <span className="inline-block font-jetbrains font-bold text-[10px] sm:text-xs tracking-widest uppercase px-3 py-1 rounded-md border border-[#1B3589]/30 text-[#1B3589] bg-[#1B3589]/5">
                {profile.dietTag}
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Location & Edit Button */}
        <div className="flex flex-col items-start md:items-end justify-between self-stretch md:self-auto gap-4">
          <div className="text-left md:text-right">
            <p className="font-jetbrains text-[10px] tracking-[0.2em] font-extrabold text-[#9A9AAA] uppercase mb-0.5">
              LOCATION
            </p>
            <p className="font-montserrat font-black text-base sm:text-lg text-[#1E2538]">
              {profile.location || "East India"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => alert("Edit profile modal / route coming soon!")}
            className="w-full md:w-auto font-jetbrains font-extrabold text-xs tracking-wider uppercase py-2.5 px-5 rounded-xl border-2 border-[#E0187A] text-[#E0187A] hover:bg-[#E0187A] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
          >
            <span>EDIT PROFILE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
