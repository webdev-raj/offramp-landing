"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import LiveMetrics from "@/components/LiveMetrics";
import ToolsGrid from "@/components/ToolsGrid";
import RegionalDishes from "@/components/RegionalDishes";
import Footer from "@/components/Footer";
import InteractiveSwapModal from "@/components/InteractiveSwapModal";

export default function Home() {
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8EE] overflow-x-hidden selection:bg-[#E0187A] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* Hero Section with Split Screen & Floating Phone Mockup */}
      <Hero onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* Navy Stats Band */}
      <StatsBand />

      {/* Live Kitchen Data Metrics Grid Section */}
      <LiveMetrics />

      {/* Four Tools · One Kitchen Section */}
      <ToolsGrid onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* Regional Dishes That Match Your Goals */}
      <RegionalDishes onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* Footer */}
      <Footer onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* Interactive Food Swap Modal / Drawer */}
      <InteractiveSwapModal
        isOpen={isSwapModalOpen}
        onClose={() => setIsSwapModalOpen(false)}
      />
    </main>
  );
}
