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
    <section className="bg-[#314894] text-white py-20 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Side-by-Side Pill Toggle Buttons */}
        <div className="flex font-jetbrains flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="flex items-center gap-2 text-[#F5AE38] text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase mb-3">
              <svg width="22" height="22" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#F5AE38" />
                <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#F5AE38" />
                <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#F5AE38" />
                <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#F5AE38" />
                <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#F5AE38" />
                <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#F5AE38" />
                <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#F5AE38" strokeWidth="0.23882" />
              </svg>
              <span>THE PEOPLE BEHIND OFFRAMP</span>
            </p>

            <h2 className="font-haetten text-4xl sm:text-6xl lg:text-7xl text-white leading-[0.95]">
              Meet the team
            </h2>
          </div>

          {/* Side-by-Side Pill Toggle Controls matching screenshot */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("experts")}
              className={`px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all ${activeTab === "experts"
                  ? "bg-[#F8B02B] text-[#314894] shadow-lg scale-105"
                  : "bg-[#283C9B] text-white/70 hover:text-white hover:bg-[#2F44A8]"
                }`}
            >
              Core Experts
            </button>

            <button
              onClick={() => setActiveTab("collaborators")}
              className={`px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all ${activeTab === "collaborators"
                  ? "bg-[#F8B02B] text-[#314894] shadow-lg scale-105"
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
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-montserrat-bold font-extrabold text-2xl sm:text-3xl text-[#1E2538] leading-tight tracking-tight">
                      {member.name}
                    </h3>
                    <span className={`${member.roleColor} font-jetbrains text-xs font-extrabold uppercase tracking-widest shrink-0 mt-1.5`}>
                      {member.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#655848] text-sm sm:text-base leading-relaxed font-dmsans">
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
                  <h3 className="font-montserrat-bold font-extrabold text-2xl sm:text-3xl text-[#1E2538] leading-tight tracking-tight mb-2">
                    {collab.name}
                  </h3>
                  <p className="text-[#8B7563] text-sm font-medium font-dmsans">
                    {collab.subtextLine1}
                  </p>
                  <p className="text-[#8B7563] text-sm font-medium font-dmsans">
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
