"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InteractiveSwapModal from "@/components/shared/InteractiveSwapModal";
import ExpertsHero from "./ExpertsHero";
import ExpertsFilterSection from "./ExpertsFilterSection";
import ExpertsGrid from "./ExpertsGrid";
import MyRequestsSection from "./MyRequestsSection";
import ExpertProfileModal from "./ExpertProfileModal";
import SendRequestModal from "./SendRequestModal";
import { EXPERTS_DATA } from "./expertsData";

export default function ExpertsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  // Modal State for Profile & Send Request Modals
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Handlers for Food Swap Modal
  const handleOpenSwapModal = () => {
    setIsSwapModalOpen(true);
  };

  const handleCloseSwapModal = () => {
    setIsSwapModalOpen(false);
  };

  // Handlers for Expert Profile Modal
  const handleOpenProfile = (expertOrId) => {
    let expert = expertOrId;
    if (typeof expertOrId === "string") {
      expert = EXPERTS_DATA.find((e) => e.id === expertOrId) || EXPERTS_DATA[0];
    }
    setSelectedExpert(expert);
    setIsRequestModalOpen(false);
    setIsProfileModalOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileModalOpen(false);
  };

  // Handlers for Send Request Modal
  const handleOpenSendRequest = (expert) => {
    if (expert) setSelectedExpert(expert);
    setIsProfileModalOpen(false);
    setIsRequestModalOpen(true);
  };

  const handleCloseSendRequest = () => {
    setIsRequestModalOpen(false);
  };

  const handleRequestSuccess = (requestData) => {
    console.log("Request sent successfully:", requestData);
  };

  const handleSelectQuickFilter = (goalId) => {
    setSelectedGoal(goalId);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedGoal("all");
    setSelectedRegion("all");
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FDF8EE] overflow-x-hidden selection:bg-[#D91E5C] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenSwapModal={handleOpenSwapModal} />

      {/* 2. Hero Section: Split Pink/Yellow + Balance Card + Search Bar */}
      <ExpertsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectQuickFilter={handleSelectQuickFilter}
        onOpenProfile={handleOpenProfile}
      />

      {/* 3. Interactive Goal & Region Filters */}
      <ExpertsFilterSection
        selectedGoal={selectedGoal}
        setSelectedGoal={setSelectedGoal}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      {/* 4. Expert Cards Grid */}
      <ExpertsGrid
        searchQuery={searchQuery}
        selectedGoal={selectedGoal}
        selectedRegion={selectedRegion}
        onResetFilters={handleResetFilters}
        onOpenProfile={handleOpenProfile}
        onOpenSwapModal={handleOpenSwapModal}
      />

      {/* 5. My Requests Section (Navy) */}
      <MyRequestsSection />

      {/* 6. Site Footer with Navy Newsletter Variant */}
      <Footer
        newsletterBg="bg-[#1B2264]"
        newsletterLabel="WEEKLY DISPATCH"
        newsletterHeading={
          <span className="font-haetten tracking-wide font-light leading-[0.85] text-2xl sm:text-3xl md:text-4xl block">
            Swap of the week.<br />
            <span className="text-[#F5AE38]">In your inbox.</span>
          </span>
        }
        newsletterButtonBg="bg-[#F5AE38]"
        newsletterButtonHoverBg="hover:bg-[#e09214]"
        newsletterButtonText="text-[#1E1E1E]"
        newsletterFocusRing="focus:ring-[#F5A623]"
      />

      {/* ── MODALS ── */}

      {/* 1. Expert Profile Modal */}
      <ExpertProfileModal
        isOpen={isProfileModalOpen}
        expert={selectedExpert}
        onClose={handleCloseProfile}
        onOpenSendRequest={handleOpenSendRequest}
      />

      {/* 2. Send Request Modal (Nested stack on top of profile modal) */}
      <SendRequestModal
        isOpen={isRequestModalOpen}
        expert={selectedExpert}
        onClose={handleCloseSendRequest}
        onSubmitSuccess={handleRequestSuccess}
      />

      {/* 3. Interactive Swap Engine Modal */}
      <InteractiveSwapModal
        isOpen={isSwapModalOpen}
        onClose={handleCloseSwapModal}
      />
    </main>
  );
}
