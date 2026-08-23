"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Star, MapPin, Languages, Send, CheckCircle2 } from "lucide-react";
import PointsValue from "@/components/shared/PointsValue";

export default function ExpertProfileModal({
  isOpen,
  expert,
  onClose,
  onOpenSendRequest,
}) {
  const modalRef = useRef(null);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !expert) return null;

  const accentColor = expert.accentColor || "#1B7042";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="expert-profile-title"
    >
      <div
        ref={modalRef}
        className="bg-[#FFFDF8] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E8DCC4] relative my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
      >
        {/* ── 1. HEADER (Colored Background) ── */}
        <div
          className="p-6 sm:p-8 text-white relative shrink-0 transition-colors"
          style={{ backgroundColor: accentColor }}
        >
          {/* Subtle Decorative Background Flower/Star */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-15 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
              <circle cx="80" cy="20" r="60" fill="currentColor" />
            </svg>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            aria-label="Close profile modal"
          >
            <X size={20} />
          </button>

          {/* Expert Info Header Row */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
            {/* Avatar Photo */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-3 border-white shadow-md">
              <Image
                src={expert.avatar}
                alt={expert.name}
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>

            {/* Name & Credentials */}
            <div className="flex-1 min-w-0 pr-8 sm:pr-0">
              <p className="font-jetbrains text-xs font-bold uppercase tracking-[0.18em] text-white/85 mb-1">
                {expert.specialty}
              </p>
              <h2
                id="expert-profile-title"
                className="font-montserrat-bold text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold leading-tight mb-1"
              >
                {expert.name}
              </h2>
              <p className="font-dmsans text-sm sm:text-base text-white/90 font-medium mb-3">
                {expert.credential}
              </p>

              {/* Rating + Location + Languages Metabar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-dmsans text-white/90 pt-1">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-[#FFD23F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFD23F] text-[#FFD23F]" />
                    ))}
                  </div>
                  <span className="font-jetbrains font-bold ml-1 text-white">
                    {expert.rating} ({expert.sessions} sessions)
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-white/80">
                  <MapPin className="w-3.5 h-3.5 text-white/90" />
                  <span>{expert.location}</span>
                </div>

                {/* Languages */}
                {expert.languages && (
                  <div className="flex items-center gap-1 text-white/80">
                    <Languages className="w-3.5 h-3.5 text-white/90" />
                    <span>{expert.languages}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. SCROLLABLE BODY CONTENT ── */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Two-Column Grid: About & Qualifications | Can Help You With */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column (md:col-span-7) */}
            <div className="md:col-span-6 space-y-6">
              {/* About Section */}
              <div>
                <p
                  className="font-jetbrains text-xs font-extrabold uppercase tracking-[0.2em] mb-2.5 flex items-center gap-1.5"
                  style={{ color: accentColor }}
                >
                  <span>◆</span>
                  <span>ABOUT</span>
                </p>
                <p className="font-dmsans text-sm text-[#3A3A3A] leading-relaxed">
                  {expert.about || expert.description}
                </p>
              </div>

              {/* Qualifications Section */}
              <div>
                <p
                  className="font-jetbrains text-xs font-extrabold uppercase tracking-[0.2em] mb-2.5 flex items-center gap-1.5"
                  style={{ color: accentColor }}
                >
                  <span>◆</span>
                  <span>QUALIFICATIONS</span>
                </p>
                <ul className="space-y-2 font-dmsans text-xs sm:text-sm text-[#4A4A4A]">
                  {(expert.qualifications || [
                    expert.credential,
                    ...expert.bullets,
                  ]).map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-sm leading-none mt-0.5" style={{ color: accentColor }}>
                        •
                      </span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Can Help You With (md:col-span-6) */}
            <div className="md:col-span-6">
              <p
                className="font-jetbrains text-xs font-extrabold uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5"
                style={{ color: accentColor }}
              >
                <span>◆</span>
                <span>CAN HELP YOU WITH</span>
              </p>

              <div className="space-y-2.5">
                {(expert.helpTopics || [
                  ...expert.bullets,
                  "Customized regional meal sequencing",
                  "Macro & micronutrient optimization",
                  "Daily progress and swap tracking",
                ]).map((topic, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-3 sm:p-3.5 border-2 text-xs sm:text-sm font-dmsans font-medium text-[#232323] shadow-sm transition-all hover:bg-gray-50"
                    style={{ borderColor: accentColor }}
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── 3. TESTIMONIALS (What People Say) ── */}
          <div className="pt-2 border-t border-[#E8DCC4]/60">
            <p
              className="font-jetbrains text-xs font-extrabold uppercase tracking-[0.2em] mb-4 flex items-center gap-1.5"
              style={{ color: accentColor }}
            >
              <span>◆</span>
              <span>WHAT PEOPLE SAY</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(expert.testimonials || [
                {
                  stars: 5,
                  quote: `Working with ${expert.name} completely changed how I plan my weekly Indian meals.`,
                  author: "Rahul S.",
                  city: expert.location,
                },
                {
                  stars: 5,
                  quote: "Extremely practical and supportive. Kept all my favorite flavors intact.",
                  author: "Pooja M.",
                  city: "Mumbai",
                },
              ]).map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8DCC4] shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1 text-[#F5A623] mb-2">
                    {[...Array(t.stars || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>
                  <p className="font-dmsans text-xs sm:text-sm italic text-[#3A3A3A] leading-relaxed mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="font-jetbrains text-xs font-bold text-[#7A7A7A] mt-auto">
                    ― {t.author}, {t.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. STICKY FOOTER (Colored Bar) ── */}
        <div
          className="px-6 py-4 sm:px-8 sm:py-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 shadow-lg transition-colors"
          style={{ backgroundColor: accentColor }}
        >
          {/* Left: Points Cost & Balance */}
          <div className="text-center sm:text-left">
            <p className="font-jetbrains text-[10px] sm:text-[11px] uppercase tracking-wider text-white/80 font-bold">
              CONNECT WITH {expert.lastName || expert.name.split(" ").slice(-1)[0].toUpperCase()}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-base sm:text-xl font-montserrat-bold text-white leading-tight">
              <span className="text-[#FFD23F]">⚡</span>
              <PointsValue value={expert.points} suffix="points per session" />
            </div>
            <p className="font-dmsans text-xs text-white/75 mt-0.5">
              You currently have <PointsValue value={450} suffix="pts" />
            </p>
          </div>

          {/* Right: SEND REQUEST Action Button */}
          <button
            onClick={() => onOpenSendRequest(expert)}
            className="w-full sm:w-auto bg-[#FFFDF8] hover:bg-white text-[#1B7042] font-jetbrains font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            style={{ color: accentColor }}
          >
            <Send className="w-4 h-4" />
            <span>SEND REQUEST</span>
          </button>
        </div>
      </div>
    </div>
  );
}
