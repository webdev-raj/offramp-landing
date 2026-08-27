"use client";

import Image from "next/image";
import { Star, MapPin, ArrowRight, Zap } from "lucide-react";
import PointsValue from "@/components/shared/PointsValue";

export default function ExpertCard({ expert, onOpenProfile, onOpenSwapModal }) {
  const handleViewProfile = () => {
    if (onOpenProfile) {
      onOpenProfile(expert);
    } else if (onOpenSwapModal) {
      onOpenSwapModal();
    }
  };

  return (
    <div
      className={`bg-white p-5 sm:p-6 border-3 ${expert.borderClass} flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative`}
      style={{ borderColor: expert.accentColor }}
    >
      <div>
        {/* Top Header Row: Avatar + Name + Specialty + Credentials */}
        <div className="flex items-start gap-3.5 mb-4 cursor-pointer" onClick={handleViewProfile}>
          <div
            className="relative w-14 h-14 overflow-hidden shrink-0 border-2 shadow-sm"
            style={{ borderColor: expert.accentColor }}
          >
            <Image
              src={expert.avatar}
              alt={expert.name}
              fill
              sizes="56px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-montserrat-bold text-lg sm:text-xl text-[#1E1E1E] leading-snug truncate group-hover:text-[#E0187A] transition-colors">
              {expert.name}
            </h3>
            <p
              className="font-jetbrains text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider mt-0.5"
              style={{ color: expert.accentColor }}
            >
              {expert.specialty}
            </p>
            <p className="font-dmsans text-xs text-[#7A7A7A] mt-0.5 truncate">
              {expert.credential}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="font-dmsans text-sm sm:text-lg text-[#3A3A3A] leading-relaxed mb-4 min-h-[40px]">
          {expert.description}
        </p>

        {/* 2 Bullet Points */}
        <ul className="space-y-1.5 mb-5 border-t border-gray-100 pt-3">
          {expert.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm font-dmsans text-[#4A4A4A] leading-snug">
              <span className="font-bold text-base leading-none" style={{ color: expert.accentColor }}>•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Rating + Location + Points Bar */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 mb-4">
          <div className="space-y-1">
            {/* Star rating */}
            <div className="flex items-center gap-1 text-[#F5A623]">
              <div className="flex items-center text-[#F5A623]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>
              <span className="font-jetbrains text-xs font-bold text-[#1E1E1E] ml-1">
                {expert.rating} · {expert.sessions} sessions
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-[11px] font-dmsans text-[#7A7A7A]">
              <MapPin className="w-3.5 h-3.5 text-[#A0A0A0]" />
              <span>{expert.location}</span>
            </div>
          </div>

          {/* Points Badge */}
          <div className="bg-[#F5AE38] text-[#1E1E1E] font-jetbrains font-extrabold text-xs sm:text-sm px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-1 shadow-sm">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.66503 9.33328C2.53888 9.33371 2.41519 9.29833 2.30834 9.23126C2.20148 9.1642 2.11586 9.06818 2.0614 8.95438C2.00694 8.84059 1.9859 8.71367 2.0007 8.58838C2.0155 8.4631 2.06555 8.34459 2.14503 8.24661L8.74503 1.44661C8.79454 1.38947 8.86201 1.35085 8.93636 1.3371C9.0107 1.32335 9.08752 1.33529 9.15419 1.37095C9.22086 1.40661 9.27342 1.46388 9.30326 1.53335C9.33309 1.60283 9.33842 1.68038 9.31837 1.75328L8.03837 5.76661C8.00062 5.86763 7.98795 5.97629 8.00143 6.08328C8.01491 6.19028 8.05414 6.2924 8.11576 6.3809C8.17738 6.46939 8.25955 6.54162 8.35522 6.59139C8.45089 6.64115 8.5572 6.66696 8.66503 6.66661H13.3317C13.4579 6.66618 13.5815 6.70156 13.6884 6.76863C13.7952 6.8357 13.8809 6.93171 13.9353 7.04551C13.9898 7.15931 14.0108 7.28622 13.996 7.41151C13.9812 7.53679 13.9312 7.65531 13.8517 7.75328L7.2517 14.5533C7.20219 14.6104 7.13473 14.649 7.06038 14.6628C6.98603 14.6765 6.90922 14.6646 6.84255 14.6289C6.77588 14.5933 6.72331 14.536 6.69348 14.4665C6.66364 14.3971 6.65832 14.3195 6.67837 14.2466L7.95837 10.2333C7.99611 10.1323 8.00879 10.0236 7.99531 9.91661C7.98183 9.80962 7.94259 9.70749 7.88097 9.619C7.81935 9.5305 7.73719 9.45827 7.64152 9.40851C7.54585 9.35874 7.43954 9.33293 7.3317 9.33328H2.66503Z" stroke="#000" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            <PointsValue value={expert.points} suffix="PTS" />
          </div>
        </div>

        {/* View Profile Action Button */}
        <button
          onClick={handleViewProfile}
          className={`w-full ${expert.btnBg} text-white font-jetbrains font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3 px-4 rounded-md shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer`}
          style={{ backgroundColor: expert.accentColor }}
        >
          <span>VIEW PROFILE</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
