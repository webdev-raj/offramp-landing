"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function Navbar({ onOpenSwapModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        yPercent: "-900",
        duration: 0.6,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-[#FBF3E3] border-b border-[#E8DCC4]/50 fixed top-0 w-full z-40 px-4 md:px-12 py-3 sm:py-5 transition-all"
    >
      <div className="max-w-7xl font-jetbrains mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center justify-center gap-2 group">
          <div>
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

        {/* Desktop Navigation */}
        <nav className="hidden font-dmsans md:flex items-center gap-8 text-sm font-semibold text-[#3A3A3A]">
          <a href="/explore" data-tourkit="explore-swaps" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Explore Swaps
          </a>
          <a href="/how-it-works" data-tourkit="how-it-works" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            How It Works
          </a>
          <a href="/experts" data-tourkit="experts-link" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Experts
          </a>
          <a href="/pricing" data-tourkit="pricing-link" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Pricing
          </a>
          <a href="/features" data-tourkit="features-link" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Features
          </a>
          <a href="#community" data-tourkit="community-link" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Community
          </a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4 font-dmsans">
          <a
            href="/login"
            className="hidden sm:inline-flex items-center relative group py-1 text-sm font-semibold text-[#3A3A3A] hover:text-[#E0187A] transition-colors"
          >
            <span>Log in</span>

          </a>
          <a
            href="/signup"
            data-tourkit="get-started-btn"
            className="bg-[#E0187A] max-sm:hidden hover:bg-[#c41267] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-[#E0187A]/25 hover:shadow-xl hover:shadow-[#E0187A]/35 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Get started free</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1E1E1E] p-2 rounded-lg hover:bg-black/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 bg-[#FBF3E3] border-t border-[#E8DCC4] mt-3 rounded-b-2xl shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#3A3A3A] mb-6">
            <a href="/explore" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Explore Swaps</a>
            <a href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">How It Works</a>
            <a href="/experts" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Experts</a>
            <a href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Pricing</a>
            <a href="/features" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Features</a>
            <a href="#community" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Community</a>
            <a href="/login" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Log in</a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSwapModal();
            }}
            className="w-full bg-[#E0187A] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow-md"
          >
            <span>Get started free</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
