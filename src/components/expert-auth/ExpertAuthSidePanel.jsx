"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Zap } from "lucide-react";

const POINTS_INFO = [
  {
    points: "200",
    label: "Points per session completed",
  },
  {
    points: "15",
    label: "Bonus points per query answered",
  },
  {
    points: "10",
    label: "Profile visibility points monthly",
  },
];

export default function ExpertAuthSidePanel({
  eyebrow = "EXPERT PORTAL",
  titleWord1 = "SIGN IN",
  titleWord2 = "AS AN EXPERT.",
  subtext = "Access your expert dashboard to manage incoming requests, answer queries and track your impact.",
}) {
  return (
    <div className="lg:w-[50%] xl:w-[48%] bg-[#1B3589] text-white p-7 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden shrink-0 z-10">
      {/* Decorative dark blue ambient bubbles matching mockup */}
      <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#14296B]/80 pointer-events-none z-20" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[#14296B]/60 pointer-events-none" />
      <div className="absolute -bottom-20 -left-12 w-96 h-96 rounded-full bg-[#12235E]/80 pointer-events-none" />

      {/* ── Top section: Brand & Hero Copy ── */}
      <div className="relative z-10">
        {/* Logo + EXPERT Badge */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-8 h-8 rounded-lg bg-[#E0187A] flex items-center justify-center shadow-md shadow-[#E0187A]/30 shrink-0">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
          <Link href="/" className="font-montserrat-bold font-black text-2xl tracking-tight text-white flex items-center">
            <span>Off</span>
            <span className="text-[#F5AE38]">Ramp</span>
          </Link>
          <span className="font-jetbrains font-bold text-[9px] tracking-[0.2em] uppercase text-white/70 border border-white/25 px-2 py-0.5 rounded ml-2">
            EXPERT
          </span>
        </div>

        {/* Eyebrow */}
        <p className="font-jetbrains font-bold text-[10.5px] tracking-[0.24em] uppercase text-white/60 mb-2.5 flex items-center gap-1.5">
          <span className="text-[8px]">◀</span> {eyebrow}
        </p>

        {/* Two-tone Heading */}
        <h1 className="font-haetten text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase leading-[0.95] mb-4">
          <span className="text-[#F5AE38] block">{titleWord1}</span>
          <span className="text-white block">{titleWord2}</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/75 font-dmsans text-sm sm:text-base max-w-md leading-relaxed mb-8">
          {subtext}
        </p>

        {/* ── 3 Points Info Badges ── */}
        <div className="space-y-3 mb-8">
          {POINTS_INFO.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3.5">
              <div className="bg-[#F5AE38] text-[#1E1E1E] font-jetbrains font-extrabold text-xs px-2.5 py-1 rounded shadow-sm flex items-center gap-1 shrink-0">
                <Zap className="w-3.5 h-3.5 fill-[#1E1E1E] text-[#1E1E1E]" />
                <span>{item.points}</span>
              </div>
              <span className="font-dmsans text-xs sm:text-sm text-white/85 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Testimonial Quote Card ── */}
        <div className="bg-[#F5AE38] text-[#1E1E1E] p-5 sm:p-6 rounded-none shadow-xl border border-[#F5AE38]/40 max-w-md mb-8">
          <p className="font-dmsans italic text-xs sm:text-sm leading-relaxed text-[#1E1E1E]/90 mb-4 font-normal">
            &ldquo;OffRamp lets me reach patients who would never have found a dietitian otherwise. The points system makes every session feel valued.&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="relative w-9 h-9 rounded-sm overflow-hidden bg-[#1B2264] shrink-0 border border-black/10">
              <Image
                src="/images/experts/meera_iyer.jpg"
                alt="Dr. Meera Iyer"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="font-montserrat-bold font-black text-xs text-[#1E1E1E] leading-tight">
                Dr. Meera Iyer
              </p>
              <p className="font-jetbrains text-[10px] text-[#1E1E1E]/75 font-medium tracking-tight mt-0.5">
                RD &middot; Chennai &middot; 312 sessions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Decorative Pattern ── */}
      <div className="relative z-10 pt-4 select-none pointer-events-none">
        <div className="flex flex-col gap-1.5 opacity-60">
          <div className="flex items-center gap-2 text-[#F5AE38]/80 text-[8px] tracking-[0.3em]">
            <span>▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲</span>
          </div>
          <div className="flex items-center gap-2 text-[#F5AE38]/60 text-[8px] tracking-[0.3em] pl-3">
            <span>▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲</span>
          </div>
          <div className="flex items-center gap-2 text-[#F5AE38]/40 text-[8px] tracking-[0.3em] pl-6">
            <span>▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲</span>
          </div>
        </div>
      </div>
    </div>
  );
}
