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
          <div className="flex items-baseline gap-1">
            <span className="font-montserrat-bold text-4xl sm:text-5xl text-[#E0187A] leading-none">
              {filteredExperts.length}
            </span>
            <span className="font-rajdhani text-xl sm:text-2xl text-[#000]">
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
          <div className="h-75 text-center max-w-lg mx-auto my-9 flex flex-col items-center justify-center">
            <svg width="70" height="70" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#F5bebe" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#F5bebe" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#F5bebe" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#F5bebe" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#F5bebe" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#F5bebe" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#F5bebe" stroke-width="0.23882" />
            </svg>

            <p className="font-montserrat-bold text-2xl md:text-3xl text-[#1E2538] mb-2 mt-5">
              No experts match.
            </p>
            <p className="font-dmsans text-sm md:text-lg text-[#7A7A7A] mb-6">
              Try a different search term or clear your filters.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
