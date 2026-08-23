"use client";

import Image from "next/image";
import { CheckCircle2, XCircle, Clock } from "lucide-react";
import PointsValue from "@/components/shared/PointsValue";
import DiamondDivider from "@/components/shared/DiamondDivider";
import { MY_REQUESTS } from "./expertsData";

export default function MyRequestsSection() {
  return (
    <section className="bg-[#1B2264] text-white pt-16 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 text-[#F5AE38] font-jetbrains text-xs font-extrabold uppercase tracking-widest mb-3">
            <span>◆</span>
            <span>MY REQUESTS</span>
          </div>

          <h2 className="font-haetten uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
            <span className="text-white">Requests you&apos;ve </span>
            <br className="hidden sm:inline" />
            <span className="text-[#F5AE38]">sent to experts.</span>
          </h2>
        </div>

        {/* Requests List */}
        <div className="space-y-4 mb-6">
          {MY_REQUESTS.map((req) => (
            <div
              key={req.id}
              className={`bg-white text-[#1E1E1E] rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${req.borderAccent} border-y border-r border-[#E8DCC4]`}
            >
              {/* Left Side: Avatar + Expert Name + Status Badge + Message */}
              <div className="flex items-start gap-3.5 min-w-0 flex-1">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#E8DCC4]">
                  <Image
                    src={req.expertAvatar}
                    alt={req.expertName}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <h4 className="font-montserrat-bold text-base text-[#1E1E1E]">
                      {req.expertName}
                    </h4>

                    {/* Status Badge */}
                    <span
                      className={`inline-flex items-center gap-1 font-jetbrains text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${req.statusColor}`}
                    >
                      {req.status === "ACCEPTED" ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-[#1B7042]" />
                          <span>ACCEPTED</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3 text-[#CB5638]" />
                          <span>DECLINED</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="font-dmsans text-xs sm:text-sm text-[#4A4A4A] leading-relaxed mb-1 line-clamp-1">
                    {req.message}
                  </p>

                  <p className="font-dmsans text-[11px] text-[#7A7A7A] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#9A9A9A]" />
                    <span>{req.meta}</span>
                  </p>
                </div>
              </div>

              {/* Right Side: Points Cost */}
              <div className="sm:text-right shrink-0 self-end sm:self-center">
                <div className="font-montserrat-bold text-base sm:text-lg text-[#1E1E1E] flex items-center gap-1">
                  <span className="text-[#F5A623]">⚡</span>
                  <PointsValue value={req.points} suffix="pts" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Notification Box */}
        <div className="bg-white/10 border border-white/15 rounded-xl p-4 flex items-center gap-3 text-white/90 text-xs sm:text-sm font-dmsans mb-10">
          <CheckCircle2 className="w-5 h-5 text-[#48BB78] shrink-0" />
          <span>
            Your accepted expert will reach out via your preferred contact method within 24 hours to schedule your session.
          </span>
        </div>

        {/* Decorative Diamond Divider */}
        <DiamondDivider
          count={44}
          fillColor="bg-[#313C8C]"
          borderColor="border-[#313C8C]"
          className="pt-6 pb-2"
        />

      </div>
    </section>
  );
}
