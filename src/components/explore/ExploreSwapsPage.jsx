"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InteractiveSwapModal from "@/components/shared/InteractiveSwapModal";
import ExploreHero from "./ExploreHero";
import GoalPicker from "./GoalPicker";
import SwapsFilterGrid from "./SwapsFilterGrid";
import TrustSection from "./TrustSection";

export default function ExploreSwapsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsSwapModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSwapModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF6E8] overflow-x-hidden selection:bg-[#D91E5C] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenSwapModal={handleOpenModal} />

      {/* 2. Pink Hero + Large Search Bar */}
      <ExploreHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenSwapModal={handleOpenModal}
        onSelectQuickTag={(tag) => setSearchQuery(tag)}
      />

      {/* 3. Deep Blue Goal Picker Section */}
      <GoalPicker
        selectedGoal={selectedGoal}
        onSelectGoal={(goalId) => setSelectedGoal(goalId)}
      />

      {/* 4. Sand Filter Bar + Results Counter + Swaps Grid */}
      <SwapsFilterGrid
        searchQuery={searchQuery}
        selectedGoal={selectedGoal}
        onOpenSwapModal={handleOpenModal}
      />

      {/* 5. Trust Badges + Weekly Dispatch Newsletter */}
      <TrustSection />

      {/* 6. Site Footer */}
      <Footer onOpenSwapModal={handleOpenModal} />

      {/* Interactive Food Swap Engine Modal */}
      <InteractiveSwapModal
        isOpen={isSwapModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
