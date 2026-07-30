"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const CORE_EXPERTS = [
  {
    id: "anshuman",
    name: "Anshuman",
    role: "CEO",
    roleColor: "text-[#DC2667]",
    initials: "AN",
    topBg: "bg-[#DC2667]",
    description: "Vision and strategy for India's food-tech future.",
  },
  {
    id: "sandesh",
    name: "Sandesh",
    role: "CTO",
    roleColor: "text-[#1D3188]",
    initials: "SA",
    topBg: "bg-[#F8B02B]",
    description: "Technology infrastructure and scalability.",
  },
  {
    id: "suresh",
    name: "Suresh",
    role: "CSO",
    roleColor: "text-[#1B7C4C]",
    initials: "SU",
    topBg: "bg-[#1B7C4C]",
    description: "Science behind sustainable food transitions.",
  },
];

const COLLABORATORS = [
  {
    id: "diet-vegan",
    name: "Diet Vegan Collab",
    topBg: "bg-[#DC2667]",
    subtextLine1: "name name",
    subtextLine2: "name",
  },
  {
    id: "gym-collab",
    name: "Gym Collab",
    topBg: "bg-[#F8B02B]",
    subtextLine1: "name",
    subtextLine2: "name",
  },
  {
    id: "doctor-collab",
    name: "Doctor Collab",
    topBg: "bg-[#1B7C4C]",
    subtextLine1: "name",
    subtextLine2: "name",
  },
];

export default function MeetTheTeam() {
  const [activeTab, setActiveTab] = useState("experts"); // "experts" | "collaborators"

  return (
    <section className="bg-[#1D328C] text-white py-20 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Side-by-Side Pill Toggle Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="flex items-center gap-2 text-[#F8B02B] text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase mb-3">
              <Star className="w-4 h-4 fill-[#F8B02B] text-[#F8B02B]" />
              <span>THE PEOPLE BEHIND OFFRAMP</span>
            </p>

            <h2 className="font-anton uppercase text-4xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight">
              Meet the team
            </h2>
          </div>

          {/* Side-by-Side Pill Toggle Controls matching screenshot */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("experts")}
              className={`px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all ${
                activeTab === "experts"
                  ? "bg-[#F8B02B] text-[#1D328C] shadow-lg scale-105"
                  : "bg-[#283C9B] text-white/70 hover:text-white hover:bg-[#2F44A8]"
              }`}
            >
              Core Experts
            </button>

            <button
              onClick={() => setActiveTab("collaborators")}
              className={`px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all ${
                activeTab === "collaborators"
                  ? "bg-[#F8B02B] text-[#1D328C] shadow-lg scale-105"
                  : "bg-[#283C9B] text-white/70 hover:text-white hover:bg-[#2F44A8]"
              }`}
            >
              Collaborators
            </button>
          </div>
        </div>

        {/* 3 Scalloped Stamp Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTab === "experts"
            ? CORE_EXPERTS.map((member) => (
                <div
                  key={member.id}
                  className="scallop-card bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  {/* Top Colored Header Block */}
                  <div className={`${member.topBg} h-56 sm:h-64 relative flex items-center justify-center p-6 transition-colors duration-300`}>
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-anton text-3xl sm:text-4xl text-white shadow-inner border border-white/30 group-hover:scale-105 transition-transform duration-300">
                      {member.initials}
                    </div>
                  </div>

                  {/* Bottom White Content Block */}
                  <div className="bg-white p-7 sm:p-8 flex flex-col justify-between min-h-[170px]">
                    {/* Name + Role Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#1E2538] leading-tight tracking-tight">
                        {member.name}
                      </h3>
                      <span className={`${member.roleColor} font-mono text-xs font-extrabold uppercase tracking-widest shrink-0 mt-1.5`}>
                        {member.role}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#655848] text-sm sm:text-base leading-relaxed font-normal">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))
            : COLLABORATORS.map((collab) => (
                <div
                  key={collab.id}
                  className="scallop-card bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  {/* Top Colored Header Block with Blank Translucent Circle */}
                  <div className={`${collab.topBg} h-56 sm:h-64 relative flex items-center justify-center p-6 transition-colors duration-300`}>
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 backdrop-blur-sm shadow-inner border border-white/30 group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Bottom White Content Block */}
                  <div className="bg-white p-7 sm:p-8 text-center flex flex-col justify-center min-h-[170px]">
                    <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#1E2538] leading-tight tracking-tight mb-2">
                      {collab.name}
                    </h3>
                    <p className="text-[#8B7563] text-sm font-medium">
                      {collab.subtextLine1}
                    </p>
                    <p className="text-[#8B7563] text-sm font-medium">
                      {collab.subtextLine2}
                    </p>
                  </div>
                </div>
              ))}
        </div>

      </div>
    </section>
  );
}
