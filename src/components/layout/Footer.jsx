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
            <p className="text-[11px] font-jetbrains tracking-[0.52em] text-white/60 uppercase mb-1.5 font-bold">
              WEEKLY KITCHEN NOTES
            </p>
            <h3 className="font-jetbrains text-xl sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug">
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
              className="w-full font-jetbrains sm:w-auto bg-[#F5A623] hover:bg-[#e09214] active:scale-95 text-[#231E1B] font-extrabold text-xs sm:text-sm tracking-[0.22em] uppercase px-8 py-3.5 rounded-full shadow-md transition-all shrink-0"
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
              {/* OffRamp Logo with 4-petal emblem
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#E0187A] flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12ZM12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22ZM2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z" />
                  </svg>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  OffRamp
                </span>
              </div> */}
              <a href="#" className="flex items-center justify-center gap-2 group w-fit mb-5">
                <div >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 16 20" fill="none" className="inline-flex">
                    <path d="M0 0H5.38461C10.9075 0 15.3846 4.47715 15.3846 10C15.3846 15.5228 10.9075 20 5.38461 20H0V0Z" fill="#D91E5C" />
                    <rect y="7.69232" width="1.53846" height="4.10256" fill="#FDECDB" />
                    <rect x="3.53906" y="7.69232" width="6.15385" height="4.10256" fill="#FDECDB" />
                    <path d="M13.8457 9.74359L7.69186 13.2965L7.69186 6.19066L13.8457 9.74359Z" fill="#FDECDB" />
                  </svg>
                </div>
                <div className="font-rajdhani font-black text-4xl leading-none pt-1.5 tracking-tight text-[#1E1E1E]">
                  <span className="text-[#1b3589]">De</span>
                  <span className="text-[#D91e5c]">Tour</span>
                </div>
              </a>

              {/* Subtext */}
              <p className="text-white/70 text-sm leading-relaxed font-dmsans">
                Smart food swaps for Indian meals.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-dmsans">
                Expert-verified, diet-agnostic.
              </p>

              {/* 4 Colored Floral Emblems Row */}
              <div className="flex items-center gap-2 pt-1">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_41_1125)">
                    <path d="M19.8846 0H2.11538C0.94709 0 0 0.94709 0 2.11538V19.8846C0 21.0529 0.94709 22 2.11538 22H19.8846C21.0529 22 22 21.0529 22 19.8846V2.11538C22 0.94709 21.0529 0 19.8846 0Z" fill="#D91E5C" />
                    <path d="M11 10.1539C12.5188 10.1539 13.75 8.07029 13.75 5.50004C13.75 2.92979 12.5188 0.846191 11 0.846191C9.48122 0.846191 8.25 2.92979 8.25 5.50004C8.25 8.07029 9.48122 10.1539 11 10.1539Z" fill="#FFF5E0" />
                    <path d="M11 21.1539C12.5188 21.1539 13.75 19.0703 13.75 16.5C13.75 13.9298 12.5188 11.8462 11 11.8462C9.48122 11.8462 8.25 13.9298 8.25 16.5C8.25 19.0703 9.48122 21.1539 11 21.1539Z" fill="#FFF5E0" />
                    <path d="M5.49955 13.75C8.0698 13.75 10.1534 12.5188 10.1534 11C10.1534 9.48122 8.0698 8.25 5.49955 8.25C2.9293 8.25 0.845703 9.48122 0.845703 11C0.845703 12.5188 2.9293 13.75 5.49955 13.75Z" fill="#FFF5E0" />
                    <path d="M16.4995 13.75C19.0698 13.75 21.1534 12.5188 21.1534 11C21.1534 9.48122 19.0698 8.25 16.4995 8.25C13.9293 8.25 11.8457 9.48122 11.8457 11C11.8457 12.5188 13.9293 13.75 16.4995 13.75Z" fill="#FFF5E0" />
                    <path d="M10.9991 14.8078C13.102 14.8078 14.8068 13.103 14.8068 11.0001C14.8068 8.89714 13.102 7.19238 10.9991 7.19238C8.89617 7.19238 7.19141 8.89714 7.19141 11.0001C7.19141 13.103 8.89617 14.8078 10.9991 14.8078Z" fill="#D91E5C" />
                    <path d="M11.0008 13.3267C12.2859 13.3267 13.3277 12.2849 13.3277 10.9998C13.3277 9.71465 12.2859 8.67285 11.0008 8.67285C9.71563 8.67285 8.67383 9.71465 8.67383 10.9998C8.67383 12.2849 9.71563 13.3267 11.0008 13.3267Z" fill="#FFF5E0" />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_1125">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_41_1133)">
                    <path d="M19.8846 0H2.11538C0.94709 0 0 0.94709 0 2.11538V19.8846C0 21.0529 0.94709 22 2.11538 22H19.8846C21.0529 22 22 21.0529 22 19.8846V2.11538C22 0.94709 21.0529 0 19.8846 0Z" fill="#F5A623" />
                    <path d="M11 10.1539C12.5188 10.1539 13.75 8.07029 13.75 5.50004C13.75 2.92979 12.5188 0.846191 11 0.846191C9.48122 0.846191 8.25 2.92979 8.25 5.50004C8.25 8.07029 9.48122 10.1539 11 10.1539Z" fill="#FFF5E0" />
                    <path d="M11 21.1539C12.5188 21.1539 13.75 19.0703 13.75 16.5C13.75 13.9298 12.5188 11.8462 11 11.8462C9.48122 11.8462 8.25 13.9298 8.25 16.5C8.25 19.0703 9.48122 21.1539 11 21.1539Z" fill="#FFF5E0" />
                    <path d="M5.49955 13.75C8.0698 13.75 10.1534 12.5188 10.1534 11C10.1534 9.48122 8.0698 8.25 5.49955 8.25C2.9293 8.25 0.845703 9.48122 0.845703 11C0.845703 12.5188 2.9293 13.75 5.49955 13.75Z" fill="#FFF5E0" />
                    <path d="M16.4995 13.75C19.0698 13.75 21.1534 12.5188 21.1534 11C21.1534 9.48122 19.0698 8.25 16.4995 8.25C13.9293 8.25 11.8457 9.48122 11.8457 11C11.8457 12.5188 13.9293 13.75 16.4995 13.75Z" fill="#FFF5E0" />
                    <path d="M10.9991 14.8078C13.102 14.8078 14.8068 13.103 14.8068 11.0001C14.8068 8.89714 13.102 7.19238 10.9991 7.19238C8.89617 7.19238 7.19141 8.89714 7.19141 11.0001C7.19141 13.103 8.89617 14.8078 10.9991 14.8078Z" fill="#F5A623" />
                    <path d="M11.0008 13.3267C12.2859 13.3267 13.3277 12.2849 13.3277 10.9998C13.3277 9.71465 12.2859 8.67285 11.0008 8.67285C9.71563 8.67285 8.67383 9.71465 8.67383 10.9998C8.67383 12.2849 9.71563 13.3267 11.0008 13.3267Z" fill="#FFF5E0" />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_1133">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_41_1141)">
                    <path d="M19.8846 0H2.11538C0.94709 0 0 0.94709 0 2.11538V19.8846C0 21.0529 0.94709 22 2.11538 22H19.8846C21.0529 22 22 21.0529 22 19.8846V2.11538C22 0.94709 21.0529 0 19.8846 0Z" fill="#1A7A45" />
                    <path d="M11 10.1539C12.5188 10.1539 13.75 8.07029 13.75 5.50004C13.75 2.92979 12.5188 0.846191 11 0.846191C9.48122 0.846191 8.25 2.92979 8.25 5.50004C8.25 8.07029 9.48122 10.1539 11 10.1539Z" fill="#FFF5E0" />
                    <path d="M11 21.1539C12.5188 21.1539 13.75 19.0703 13.75 16.5C13.75 13.9298 12.5188 11.8462 11 11.8462C9.48122 11.8462 8.25 13.9298 8.25 16.5C8.25 19.0703 9.48122 21.1539 11 21.1539Z" fill="#FFF5E0" />
                    <path d="M5.49955 13.75C8.0698 13.75 10.1534 12.5188 10.1534 11C10.1534 9.48122 8.0698 8.25 5.49955 8.25C2.9293 8.25 0.845703 9.48122 0.845703 11C0.845703 12.5188 2.9293 13.75 5.49955 13.75Z" fill="#FFF5E0" />
                    <path d="M16.4995 13.75C19.0698 13.75 21.1534 12.5188 21.1534 11C21.1534 9.48122 19.0698 8.25 16.4995 8.25C13.9293 8.25 11.8457 9.48122 11.8457 11C11.8457 12.5188 13.9293 13.75 16.4995 13.75Z" fill="#FFF5E0" />
                    <path d="M10.9991 14.8078C13.102 14.8078 14.8068 13.103 14.8068 11.0001C14.8068 8.89714 13.102 7.19238 10.9991 7.19238C8.89617 7.19238 7.19141 8.89714 7.19141 11.0001C7.19141 13.103 8.89617 14.8078 10.9991 14.8078Z" fill="#1A7A45" />
                    <path d="M11.0008 13.3267C12.2859 13.3267 13.3277 12.2849 13.3277 10.9998C13.3277 9.71465 12.2859 8.67285 11.0008 8.67285C9.71563 8.67285 8.67383 9.71465 8.67383 10.9998C8.67383 12.2849 9.71563 13.3267 11.0008 13.3267Z" fill="#FFF5E0" />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_1141">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_41_1149)">
                    <path d="M19.8846 0H2.11538C0.94709 0 0 0.94709 0 2.11538V19.8846C0 21.0529 0.94709 22 2.11538 22H19.8846C21.0529 22 22 21.0529 22 19.8846V2.11538C22 0.94709 21.0529 0 19.8846 0Z" fill="#1B3589" />
                    <path d="M11 10.1539C12.5188 10.1539 13.75 8.07029 13.75 5.50004C13.75 2.92979 12.5188 0.846191 11 0.846191C9.48122 0.846191 8.25 2.92979 8.25 5.50004C8.25 8.07029 9.48122 10.1539 11 10.1539Z" fill="#FFF5E0" />
                    <path d="M11 21.1539C12.5188 21.1539 13.75 19.0703 13.75 16.5C13.75 13.9298 12.5188 11.8462 11 11.8462C9.48122 11.8462 8.25 13.9298 8.25 16.5C8.25 19.0703 9.48122 21.1539 11 21.1539Z" fill="#FFF5E0" />
                    <path d="M5.49955 13.75C8.0698 13.75 10.1534 12.5188 10.1534 11C10.1534 9.48122 8.0698 8.25 5.49955 8.25C2.9293 8.25 0.845703 9.48122 0.845703 11C0.845703 12.5188 2.9293 13.75 5.49955 13.75Z" fill="#FFF5E0" />
                    <path d="M16.4995 13.75C19.0698 13.75 21.1534 12.5188 21.1534 11C21.1534 9.48122 19.0698 8.25 16.4995 8.25C13.9293 8.25 11.8457 9.48122 11.8457 11C11.8457 12.5188 13.9293 13.75 16.4995 13.75Z" fill="#FFF5E0" />
                    <path d="M10.9991 14.8078C13.102 14.8078 14.8068 13.103 14.8068 11.0001C14.8068 8.89714 13.102 7.19238 10.9991 7.19238C8.89617 7.19238 7.19141 8.89714 7.19141 11.0001C7.19141 13.103 8.89617 14.8078 10.9991 14.8078Z" fill="#1B3589" />
                    <path d="M11.0008 13.3267C12.2859 13.3267 13.3277 12.2849 13.3277 10.9998C13.3277 9.71465 12.2859 8.67285 11.0008 8.67285C9.71563 8.67285 8.67383 9.71465 8.67383 10.9998C8.67383 12.2849 9.71563 13.3267 11.0008 13.3267Z" fill="#FFF5E0" />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_1149">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Column 2: PRODUCT */}
            <div className="md:col-span-2">
              <h4 className="font-extrabold font-jetbrains text-xs tracking-[0.2em] text-[#F5A623] uppercase mb-5">
                PRODUCT
              </h4>
              <ul className="space-y-3 text-sm font-medium text-white/70 font-dmsans">
                <li><a href="#explore" className="hover:text-white transition-colors">Explore Swaps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Challenges</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div className="md:col-span-2">
              <h4 className="font-extrabold font-jetbrains text-xs tracking-[0.2em] text-[#F5A623] uppercase mb-5">
                COMPANY
              </h4>
              <ul className="space-y-3 text-sm font-medium text-white/70 font-dmsans">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Institutions</a></li>
              </ul>
            </div>

            {/* Column 4: TRUST */}
            <div className="md:col-span-3">
              <h4 className="font-extrabold font-jetbrains text-xs tracking-[0.2em] text-[#F5A623] uppercase mb-5">
                TRUST
              </h4>

              <ul className="space-y-3 text-sm font-medium text-white/70 font-dmsans">
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
            <p className="uppercase font-jetbrains tracking-widest text-[11px]">
              © {new Date().getFullYear()} OFFRAMP · EXPERT-VERIFIED · DIET-AGNOSTIC
            </p>

            <div className="flex items-center font-dmsans gap-6 text-xs text-white/60">
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
