"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const DIAMOND_COUNT = 44;
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full text-white font-poppins">
      {/* 1. TOP NEWSLETTER SUBSCRIPTION BANNER (PINK BACKGROUND) */}
      <div className="bg-[#E0187A] py-10 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Text Block */}
          <div>
            <p className="text-[11px] font-mono tracking-[0.22em] text-white/80 uppercase mb-1.5 font-bold">
              WEEKLY KITCHEN NOTES
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Safer swaps, expert explainers, and product updates.
            </h3>
          </div>

          {/* Right Input Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <div className="relative w-full sm:w-80">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-white/20 border border-white/30 rounded-full px-6 py-3.5 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#F5A623] hover:bg-[#e09214] active:scale-95 text-[#231E1B] font-extrabold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-full shadow-md transition-all shrink-0"
            >
              {subscribed ? "SUBSCRIBED!" : "SUBSCRIBE"}
            </button>
          </form>
        </div>
      </div>

      {/* 2. MAIN FOOTER BODY (DARK CHOCOLATE BROWN BACKGROUND) */}
      <div className="bg-[#231E1B] pt-16 pb-10 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* 4-Column Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 pb-16">

            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 pr-0 md:pr-8">
              {/* OffRamp Logo with 4-petal emblem */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#E0187A] flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12ZM12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22ZM2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z" />
                  </svg>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  OffRamp
                </span>
              </div>

              {/* Subtext */}
              <p className="text-white/70 text-sm leading-relaxed">
                Smart food swaps for Indian meals.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Expert-verified, diet-agnostic.
              </p>

              {/* 4 Colored Floral Emblems Row */}
              <div className="flex items-center gap-2 pt-1">
                <FloralEmblem bg="bg-[#E0187A]" />
                <FloralEmblem bg="bg-[#F5A623]" />
                <FloralEmblem bg="bg-[#1E7E51]" />
                <FloralEmblem bg="bg-[#2542A5]" />
              </div>
            </div>

            {/* Column 2: PRODUCT */}
            <div className="md:col-span-2">
              <h4 className="font-extrabold text-xs tracking-[0.2em] text-[#F5A623] uppercase mb-5">
                PRODUCT
              </h4>
              <ul className="space-y-3 text-sm font-medium text-white/70">
                <li><a href="#explore" className="hover:text-white transition-colors">Explore Swaps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Challenges</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div className="md:col-span-2">
              <h4 className="font-extrabold text-xs tracking-[0.2em] text-[#F5A623] uppercase mb-5">
                COMPANY
              </h4>
              <ul className="space-y-3 text-sm font-medium text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Institutions</a></li>
              </ul>
            </div>

            {/* Column 4: TRUST */}
            <div className="md:col-span-3">
              <h4 className="font-extrabold text-xs tracking-[0.2em] text-[#F5A623] uppercase mb-5">
                TRUST
              </h4>
              <ul className="space-y-3 text-sm font-medium text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
              </ul>
            </div>

          </div>

          {/* Faint Horizontal Diamond Divider Strip */}
          <div className="py-9 flex items-center justify-center overflow-hidden select-none pointer-events-none">
            {/* <div className="flex items-center gap-3 text-xs tracking-widest text-[#F5A623]">
              {[...Array(32)].map((_, i) => (
                <span key={i}>◆</span>
              ))}
            </div> */}
            <div className="h-3 w-full pl-1 flex items-center gap-1.5">
              {Array.from({ length: DIAMOND_COUNT }).map((_, i) => (
                <div key={i} className="h-full flex items-center justify-start gap-1.5">
                  <div className="fill-rect h-full w-3 bg-[#40372D] rotate-45 -translate-y-1.5" />
                  <div className="border-rect h-full w-3 bg-black/10 border-2 border-[#40372D] rotate-45 -translate-y-1.5" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-mono">
            <p className="uppercase tracking-widest text-[11px]">
              © {new Date().getFullYear()} OFFRAMP · EXPERT-VERIFIED · DIET-AGNOSTIC
            </p>

            <div className="flex items-center gap-6 font-sans text-xs text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

// 4-petal floral emblem badge component
function FloralEmblem({ bg }) {
  return (
    <div className={`w-7 h-7 ${bg} rounded-lg flex items-center justify-center shadow-sm`}>
      <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12ZM12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22ZM2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z" />
      </svg>
    </div>
  );
}
