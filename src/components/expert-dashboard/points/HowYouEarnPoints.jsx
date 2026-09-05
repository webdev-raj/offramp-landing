"use client";

import { Zap, CheckCircle2, MessageSquare, Eye } from "lucide-react";

const EARNING_RULES = [
  {
    points: "200",
    title: "Session completed",
    description: "Earned when you complete a paid session with a user",
    icon: CheckCircle2,
    badgeColor: "bg-[#1B7042]/10 text-[#1B7042]",
  },
  {
    points: "15",
    title: "Query answered",
    description: "Bonus for every query you respond to publicly",
    icon: MessageSquare,
    badgeColor: "bg-[#E0187A]/10 text-[#E0187A]",
  },
  {
    points: "+1",
    title: "Profile viewed",
    description: "Small bonus each time a user views your profile",
    icon: Eye,
    badgeColor: "bg-[#F5AE38]/10 text-[#7A5800]",
  },
];

export default function HowYouEarnPoints() {
  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#F5AE38] font-bold text-xs">◆</span>
        <h3 className="font-jetbrains font-extrabold text-xs tracking-[0.22em] uppercase text-[#1E2538]">
          HOW YOU EARN POINTS
        </h3>
      </div>

      {/* 3 Explainer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EARNING_RULES.map((rule) => {
          const Icon = rule.icon;
          return (
            <div
              key={rule.title}
              className="bg-white border-3 border-[#F5AE38] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-montserrat-bold font-black text-lg sm:text-xl text-[#000] flex items-center gap-1">
                    <Zap className="text-[#F5AE38]"/>{rule.points}<span className="font-jetbrains text-xs text-[#1E2538] tracking-wide font-thin">PTS</span>
                  </span>
                </div>
                <h4 className="font-rajdhani font-black text-xl text-[#1E2538] mb-1">
                  {rule.title}
                </h4>
                <p className="font-dmsans text-xs sm:text-sm text-[#7A7A8A] leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
