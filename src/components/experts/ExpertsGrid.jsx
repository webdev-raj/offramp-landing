"use client";

import { useMemo } from "react";
import ExpertCard from "./ExpertCard";
import { EXPERTS_DATA } from "./expertsData";

export default function ExpertsGrid({
  searchQuery,
  selectedGoal,
  selectedRegion,
  onResetFilters,
  onOpenProfile,
  onOpenSwapModal,
}) {
  const filteredExperts = useMemo(() => {
    return EXPERTS_DATA.filter((expert) => {
      // 1. Goal filter
      if (selectedGoal && selectedGoal !== "all") {
        if (selectedGoal === "fitness" && expert.category !== "fitness") return false;
        if (selectedGoal === "weight" && expert.category !== "weight") return false;
        if (selectedGoal === "blood-sugar" && expert.category !== "blood-sugar") return false;
        if (selectedGoal === "budget" && expert.category !== "budget") return false;
        if (selectedGoal === "gut-health" && expert.category !== "gut-health") return false;
      }

      // 2. Region filter
      if (selectedRegion && selectedRegion !== "all") {
        if (expert.region !== selectedRegion) return false;
      }

      // 3. Search query filter
      if (searchQuery && searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = expert.name.toLowerCase().includes(query);
        const matchesSpecialty = expert.specialty.toLowerCase().includes(query);
        const matchesDesc = expert.description.toLowerCase().includes(query);
        const matchesLocation = expert.location.toLowerCase().includes(query);
        const matchesBullets = expert.bullets.some((b) => b.toLowerCase().includes(query));

        if (!matchesName && !matchesSpecialty && !matchesDesc && !matchesLocation && !matchesBullets) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedGoal, selectedRegion]);

  return (
    <section className="bg-[#FDF8EE] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Row: Count + Trust Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E8DCC4]">
          <div className="flex items-baseline gap-2">
            <span className="font-haetten text-4xl sm:text-5xl text-[#E0187A] leading-none">
              {filteredExperts.length}
            </span>
            <span className="font-montserrat-bold text-xl sm:text-2xl text-[#1E2538]">
              experts available
            </span>
          </div>

          <div className="text-[11px] font-jetbrains uppercase tracking-[0.2em] text-[#7A7A7A] font-bold">
            ALL ICMR-REFERENCED · VERIFIED
          </div>
        </div>

        {/* 8 Expert Cards Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        {filteredExperts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredExperts.map((expert) => (
              <ExpertCard
                key={expert.id}
                expert={expert}
                onOpenProfile={onOpenProfile}
                onOpenSwapModal={onOpenSwapModal}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-[#E8DCC4] max-w-lg mx-auto my-8">
            <p className="font-montserrat-bold text-xl text-[#1E2538] mb-2">
              No matching experts found
            </p>
            <p className="font-dmsans text-sm text-[#7A7A7A] mb-6">
              Try adjusting your search query, goal, or region filter to view available specialists.
            </p>
            <button
              onClick={onResetFilters}
              className="bg-[#D91E5C] text-white text-xs font-jetbrains font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-pink-700 transition-all shadow-md cursor-pointer"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
