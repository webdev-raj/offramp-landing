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
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden bg-[#1B3589] shrink-0 border-4 border-[#1A7A4A] shadow-md flex items-center justify-center">
            <svg width="47" height="47" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#f5a623" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#f5a623" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#f5a623" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#f5a623" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#f5a623" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#f5a623" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#f5a623" stroke-width="0.23882" />
            </svg>

          </div>

          {/* Text Info */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h2 className="font-montserrat-bold font-black text-2xl sm:text-3xl text-[#1E2538]">
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
            <p className="font-rajdhani font-black text-base sm:text-lg text-[#1E2538]">
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
