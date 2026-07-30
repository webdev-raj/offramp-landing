"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import LiveMetrics from "@/components/LiveMetrics";
import ToolsGrid from "@/components/ToolsGrid";
import RegionalDishes from "@/components/RegionalDishes";
import GoalMatching from "@/components/GoalMatching";
import CommunityReviews from "@/components/CommunityReviews";
import MeetTheTeam from "@/components/MeetTheTeam";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import InteractiveSwapModal from "@/components/InteractiveSwapModal";

export default function Home() {
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8EE] overflow-x-hidden selection:bg-[#E0187A] selection:text-white">

      {/* 1. Navigation Header */}
      <Navbar onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* 2. Hero — Split screen + floating phone mockup */}
      <Hero onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* 3. Stats Band — Navy 4-metric strip */}
      <StatsBand />

      {/* 4. Live Kitchen Data — 6 coloured metric cards */}
      <LiveMetrics />

      {/* 5. Tools Grid — 4 feature cards "From kitchen counter to confident choice" */}
      <ToolsGrid onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* 6. Regional Dishes — "Regional dishes that match your goals exactly" */}
      <RegionalDishes onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* 7. Meet the Team — Standalone section */}
      <MeetTheTeam onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* 8. Goal Matching — "Your goal, our recipe logic" */}
      <GoalMatching onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* 9. Community Reviews — "People are testing familiar food" */}
      <CommunityReviews />

      {/* 10. Call to Action Banner (Start with one dish you already love) */}
      <CtaBanner onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* 11. Footer */}
      <Footer onOpenSwapModal={() => setIsSwapModalOpen(true)} />

      {/* Interactive Food Swap Engine Modal */}
      <InteractiveSwapModal
        isOpen={isSwapModalOpen}
        onClose={() => setIsSwapModalOpen(false)}
      />
    </main>
  );
}
