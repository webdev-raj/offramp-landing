"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ onOpenSwapModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FBF3E3] border-b border-[#E8DCC4]/50 fixed top-0 w-full z-40 px-4 md:px-12 py-3 sm:py-5 transition-all">
      <div className="max-w-7xl font-jetbrains mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className=" flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-[#E0187A] ring-4 ring-[#F5A623]/40 flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
            D
          </div>
          <span className=" text-2xl tracking-tight text-[#1E1E1E]">
            <span className="text-[#E0187A]">off</span>
            <span className="text-[#F5A623]">ramp</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden font-dmsans md:flex items-center gap-8 text-sm font-semibold text-[#3A3A3A]">
          <a href="/explore" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Explore Swaps
          </a>
          <a href="#how-it-works" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            How It Works
          </a>
          <a href="#features" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Features
          </a>
          <a href="#pricing" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Pricing
          </a>
          <a href="#community" className="hover:text-[#E0187A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E0187A] hover:after:w-full after:transition-all">
            Community
          </a>
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-4 font-dmsans">
          <a href="#login" className="hidden sm:inline-block text-sm font-semibold text-[#3A3A3A] hover:text-[#E0187A] transition-colors">
            Log in
          </a>
          <button
            onClick={onOpenSwapModal}
            className="bg-[#E0187A] max-sm:hidden hover:bg-[#c41267] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-[#E0187A]/25 hover:shadow-xl hover:shadow-[#E0187A]/35 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Get started free</span>
          </button>

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
            <a href="#explore" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Explore Swaps</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">How It Works</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Pricing</a>
            <a href="#community" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Community</a>
            <a href="#login" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#E0187A]">Log in</a>
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
