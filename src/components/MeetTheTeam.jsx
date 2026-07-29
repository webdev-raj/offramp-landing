"use client";

import { ArrowRight } from "lucide-react";

const TEAM_MEMBERS = [
  { name: "Priya Sharma", role: "Dietitian & Co-founder", initials: "PS", bg: "bg-[#E0187A]" },
  { name: "Arjun Mehta", role: "AI Lead", initials: "AM", bg: "bg-[#2542A5]" },
  { name: "Kavya Iyer", role: "Food Scientist", initials: "KI", bg: "bg-[#1B7042]" },
  { name: "Rohan Desai", role: "Product Designer", initials: "RD", bg: "bg-[#C44319]" },
];

export default function MeetTheTeam({ onOpenSwapModal }) {
  return (
    <section className="bg-[#1B2264] text-white border-b border-white/10 pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="text-[#FFC93C] text-xs font-extrabold tracking-[0.2em] uppercase mb-3">
              ★ THE PEOPLE BEHIND IT
            </p>
            <h2 className="font-anton uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
              Meet the <span className="text-[#E0187A]">team</span>
            </h2>
          </div>
          <button
            onClick={onOpenSwapModal}
            className="shrink-0 bg-[#FFC93C] hover:bg-[#ffbd12] text-[#3D1400] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <span>Join the Mission</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="group cursor-pointer">
              <div
                className={`${member.bg} w-full aspect-square rounded-2xl flex items-center justify-center text-white font-anton text-4xl shadow-lg group-hover:scale-[1.03] group-hover:shadow-xl transition-all duration-300 mb-4 relative overflow-hidden`}
              >
                <span>{member.initials}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors" />
              </div>
              <p className="font-bold text-white text-sm leading-tight">{member.name}</p>
              <p className="text-white/60 text-xs mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
