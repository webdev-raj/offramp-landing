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
      className={`bg-white rounded-2xl p-5 sm:p-6 border-3 ${expert.borderClass} flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative`}
      style={{ borderColor: expert.accentColor }}
    >
      <div>
        {/* Top Header Row: Avatar + Name + Specialty + Credentials */}
        <div className="flex items-start gap-3.5 mb-4 cursor-pointer" onClick={handleViewProfile}>
          <div
            className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border-2 shadow-sm"
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
        <p className="font-dmsans text-xs sm:text-sm text-[#3A3A3A] leading-relaxed mb-4 min-h-[40px]">
          {expert.description}
        </p>

        {/* 2 Bullet Points */}
        <ul className="space-y-1.5 mb-5 border-t border-gray-100 pt-3">
          {expert.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs font-dmsans text-[#4A4A4A] leading-snug">
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
            <span>⚡</span>
            <PointsValue value={expert.points} suffix="PTS" />
          </div>
        </div>

        {/* View Profile Action Button */}
        <button
          onClick={handleViewProfile}
          className={`w-full ${expert.btnBg} text-white font-jetbrains font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer`}
          style={{ backgroundColor: expert.accentColor }}
        >
          <span>VIEW PROFILE</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
