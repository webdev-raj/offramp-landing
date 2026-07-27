"use client";

import { Heart, ArrowRight } from "lucide-react";

const TEAM_MEMBERS = [
  { name: "Priya Sharma", role: "Dietitian & Co-founder", initials: "PS", bg: "bg-[#E0187A]" },
  { name: "Arjun Mehta", role: "AI Lead", initials: "AM", bg: "bg-[#2542A5]" },
  { name: "Kavya Iyer", role: "Food Scientist", initials: "KI", bg: "bg-[#1B7042]" },
  { name: "Rohan Desai", role: "Product Designer", initials: "RD", bg: "bg-[#C44319]" },
];

export default function Footer({ onOpenSwapModal }) {
  return (
    <footer className="bg-[#1B2264] text-white">
      {/* Meet the Team Section */}
      <div className="border-b border-white/10 pt-16 pb-12 px-6">
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
                <div className={`${member.bg} w-full aspect-square rounded-2xl flex items-center justify-center text-white font-anton text-4xl shadow-lg group-hover:scale-[1.03] group-hover:shadow-xl transition-all duration-300 mb-4 relative overflow-hidden`}>
                  <span>{member.initials}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <p className="font-bold text-white text-sm leading-tight">{member.name}</p>
                <p className="text-white/60 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Links Row */}
      <div className="pt-14 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E0187A] ring-4 ring-[#F5A623]/40 flex items-center justify-center text-white font-extrabold text-lg">
                D
              </div>
              <span className="font-anton text-3xl tracking-tight text-white">
                <span className="text-[#E0187A]">off</span>
                <span className="text-[#F5A623]">ramp</span>
              </span>
            </div>
            <p className="text-white/75 text-sm max-w-sm leading-relaxed mb-6 font-normal">
              Redefining healthy eating across India without compromising on regional tastes, memories, or cultural heritage.
            </p>
            <button
              onClick={onOpenSwapModal}
              className="bg-[#FFC93C] hover:bg-[#ffbd12] text-[#3D1400] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-all"
            >
              Start Free Swap Trial
            </button>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2">
            <p className="font-bold text-sm text-[#FFC93C] uppercase tracking-wider mb-4">Explore</p>
            <ul className="space-y-2.5 text-xs font-medium text-white/80">
              <li><a href="#explore" className="hover:text-[#FFC93C] transition-colors">Popular Swaps</a></li>
              <li><a href="#how-it-works" className="hover:text-[#FFC93C] transition-colors">AI Algorithm</a></li>
              <li><a href="#features" className="hover:text-[#FFC93C] transition-colors">Dietitian Panel</a></li>
              <li><a href="#pricing" className="hover:text-[#FFC93C] transition-colors">Enterprise Plans</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2">
            <p className="font-bold text-sm text-[#FFC93C] uppercase tracking-wider mb-4">Company</p>
            <ul className="space-y-2.5 text-xs font-medium text-white/80">
              <li><a href="#" className="hover:text-[#FFC93C] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FFC93C] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#FFC93C] transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-[#FFC93C] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="md:col-span-3">
            <p className="font-bold text-sm text-[#FFC93C] uppercase tracking-wider mb-4">Indian Flavors</p>
            <p className="text-white/70 text-xs leading-relaxed mb-4">
              Curated database covering North Indian, South Indian, Maharashtrian, Bengali, Gujarati & Coastal cuisines.
            </p>
            <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
              MADE WITH PASSION FOR INDIA
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} OffRamp India Technologies Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#E0187A] text-[#E0187A]" />
            <span>for healthy Indian kitchens.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

