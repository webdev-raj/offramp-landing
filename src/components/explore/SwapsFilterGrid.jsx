"use client";

import { useState } from "react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const DIET_FILTERS = ["ALL TYPES", "VEG", "NO-OIL", "FLEX"];
const REGION_FILTERS = ["All India", "North", "South", "West", "Pan-India"];

const SWAPS_DATA = [
  {
    id: 1,
    original: "Egg Roll",
    swap: "Tofu Protein Roll",
    matchScore: "88%",
    protein: "22g pro",
    carbs: "18g carbs",
    calories: "270 kcal",
    diet: "FLEX",
    region: "North",
    cuisineTag: "PUNJABI",
    goal: "fitness",
    goalLabel: "FITNESS",
    borderColor: "border-[#F5AE38]",
    scoreColor: "text-[#F5AE38]",
  },
  {
    id: 2,
    original: "Butter Chicken",
    swap: "Jackfruit Makhani",
    matchScore: "90%",
    protein: "17g pro",
    carbs: "11g carbs",
    calories: "340 kcal",
    diet: "VEG",
    region: "North",
    cuisineTag: "PUNJABI",
    goal: "weight",
    goalLabel: "WEIGHT",
    borderColor: "border-[#D91E5C]",
    scoreColor: "text-[#D91E5C]",
  },
  {
    id: 3,
    original: "Mutton Biryani",
    swap: "Soya Biryani",
    matchScore: "84%",
    protein: "24g pro",
    carbs: "35g carbs",
    calories: "420 kcal",
    diet: "FLEX",
    region: "South",
    cuisineTag: "HYDERABADI",
    goal: "budget",
    goalLabel: "BUDGET",
    borderColor: "border-[#D91E5C]",
    scoreColor: "text-[#D91E5C]",
  },
  {
    id: 4,
    original: "Paneer Tikka",
    swap: "Tofu Tikka",
    matchScore: "96%",
    protein: "31g pro",
    carbs: "6g carbs",
    calories: "190 kcal",
    diet: "VEG",
    region: "North",
    cuisineTag: "PUNJABI",
    goal: "fitness",
    goalLabel: "FITNESS",
    borderColor: "border-[#1B3589]",
    scoreColor: "text-[#1B3589]",
  },
  {
    id: 5,
    original: "Curd Rice",
    swap: "Coconut Yogurt Rice",
    matchScore: "89%",
    protein: "8g pro",
    carbs: "47g carbs",
    calories: "310 kcal",
    diet: "VEG",
    region: "South",
    cuisineTag: "TAMIL",
    goal: "blood-sugar",
    goalLabel: "BLOOD SUGAR",
    borderColor: "border-[#1A7A45]",
    scoreColor: "text-[#1A7A45]",
  },
  {
    id: 6,
    original: "Aloo Paratha",
    swap: "Oats Methi Paratha",
    matchScore: "87%",
    protein: "12g pro",
    carbs: "28g carbs",
    calories: "240 kcal",
    diet: "VEG",
    region: "North",
    cuisineTag: "PUNJABI",
    goal: "blood-sugar",
    goalLabel: "BLOOD SUGAR",
    borderColor: "border-[#F5AE38]",
    scoreColor: "text-[#F5AE38]",
  },
  {
    id: 7,
    original: "Fish Curry",
    swap: "Jackfruit Fish Curry",
    matchScore: "82%",
    protein: "14g pro",
    carbs: "16g carbs",
    calories: "260 kcal",
    diet: "FLEX",
    region: "West",
    cuisineTag: "KONKANI",
    goal: "budget",
    goalLabel: "BUDGET",
    borderColor: "border-[#D91E5C]",
    scoreColor: "text-[#D91E5C]",
  },
  {
    id: 8,
    original: "Masala Dosa",
    swap: "Ragi Masala Dosa",
    matchScore: "91%",
    protein: "10g pro",
    carbs: "38g carbs",
    calories: "220 kcal",
    diet: "VEG",
    region: "South",
    cuisineTag: "TAMIL",
    goal: "blood-sugar",
    goalLabel: "BLOOD SUGAR",
    borderColor: "border-[#D91E5C]",
    scoreColor: "text-[#D91E5C]",
  },
  {
    id: 9,
    original: "Vada Pav",
    swap: "Oats Tikki Pav",
    matchScore: "85%",
    protein: "14g pro",
    carbs: "36g carbs",
    calories: "290 kcal",
    diet: "VEG",
    region: "West",
    cuisineTag: "MAHARASHTRIAN",
    goal: "weight",
    goalLabel: "WEIGHT",
    borderColor: "border-[#1B3589]",
    scoreColor: "text-[#1B3589]",
  },
  {
    id: 10,
    original: "Palak Paneer",
    swap: "Palak Tofu",
    matchScore: "94%",
    protein: "26g pro",
    carbs: "12g carbs",
    calories: "210 kcal",
    diet: "VEG",
    region: "North",
    cuisineTag: "NORTH",
    goal: "fitness",
    goalLabel: "FITNESS",
    borderColor: "border-[#1A7A45]",
    scoreColor: "text-[#1A7A45]",
  },
  {
    id: 11,
    original: "Chicken Sandwich",
    swap: "Soya Chaap Sandwich",
    matchScore: "86%",
    protein: "20g pro",
    carbs: "31g carbs",
    calories: "340 kcal",
    diet: "FLEX",
    region: "Pan-India",
    cuisineTag: "WEST",
    goal: "budget",
    goalLabel: "APP CHOICE",
    borderColor: "border-[#F5AE38]",
    scoreColor: "text-[#F5AE38]",
  },
];

export default function SwapsFilterGrid({
  searchQuery,
  selectedGoal,
  onOpenSwapModal,
}) {
  const [selectedDiet, setSelectedDiet] = useState("ALL TYPES");
  const [selectedRegion, setSelectedRegion] = useState("All India");

  // Filtering Logic
  const filteredSwaps = SWAPS_DATA.filter((item) => {
    // Search query match
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName =
        item.original.toLowerCase().includes(q) ||
        item.swap.toLowerCase().includes(q) ||
        item.cuisineTag.toLowerCase().includes(q);
      if (!matchName) return false;
    }

    // Goal match
    if (selectedGoal && item.goal !== selectedGoal) {
      return false;
    }

    // Diet match
    if (selectedDiet !== "ALL TYPES") {
      if (selectedDiet === "VEG" && item.diet !== "VEG") return false;
      if (selectedDiet === "FLEX" && item.diet !== "FLEX") return false;
      if (selectedDiet === "NO-OIL" && item.diet !== "NO-OIL") return false;
    }

    // Region match
    if (selectedRegion !== "All India") {
      if (
        item.region.toLowerCase() !== selectedRegion.toLowerCase() &&
        item.region !== "Pan-India"
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <section className="bg-[#FDF6E8] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Sand Filter Control Bar */}
        <div className="bg-[#F9E8C9] border-2 border-[#EAD09D] rounded-3xl p-4 sm:p-6 mb-12 shadow-sm space-y-4 sm:space-y-6">
          {/* DIET Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="bg-[#1B3589] text-white text-xs font-jetbrains uppercase px-3 py-1.5 rounded-lg font-bold">
              DIET
            </span>
            {DIET_FILTERS.map((diet) => (
              <button
                key={diet}
                onClick={() => setSelectedDiet(diet)}
                className={`text-xs sm:text-sm font-jetbrains font-extrabold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedDiet === diet
                    ? "bg-[#1B3589] text-white shadow-md"
                    : "bg-white/60 hover:bg-white text-[#1B3589]"
                }`}
              >
                {diet}
              </button>
            ))}
          </div>

          {/* REGION Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-t border-[#EAD09D] pt-4">
            <span className="bg-[#D91E5C] text-white text-xs font-jetbrains uppercase px-3 py-1.5 rounded-lg font-bold">
              REGION
            </span>
            {REGION_FILTERS.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`text-xs sm:text-sm font-jetbrains font-extrabold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedRegion === region
                    ? "bg-[#D91E5C] text-white shadow-md"
                    : "bg-white/60 hover:bg-white text-[#D91E5C]"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-haetten text-4xl sm:text-5xl text-[#1E2538]">
              <span className="text-[#D91E5C] font-black mr-2">
                <AnimatedCounter value={filteredSwaps.length} />
              </span>
              swaps found
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-jetbrains uppercase tracking-widest text-[#1B3589] bg-white border border-[#1B3589]/20 px-3.5 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1A7A45]" />
            <span>ALL DIETITIAN-VERIFIED · 100% REGION-ACCURATE</span>
          </div>
        </div>

        {/* Top Featured Large Swap Card (Keema) */}
        <div
          onClick={onOpenSwapModal}
          className="bg-white border-4 border-[#1A7A45] rounded-3xl p-6 sm:p-8 mb-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4 sm:gap-6">
            {/* Green Icon Box */}
            <div className="bg-[#1A7A45] text-white p-3.5 rounded-2xl shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[11px] font-jetbrains uppercase tracking-wider text-gray-500 mb-1">
                <span>VEG</span>
                <span>•</span>
                <span>PUNJABI</span>
                <span>•</span>
                <span>NORTH</span>
              </div>

              <p className="text-gray-500 text-sm font-jetbrains uppercase">
                Chicken Keema →
              </p>
              <h3 className="font-montserrat-bold text-2xl sm:text-4xl text-[#1E2538] group-hover:text-[#1A7A45] transition-colors">
                Mushroom Soya Keema
              </h3>

              <p className="text-gray-600 font-jetbrains text-sm mt-2">
                28g pro · 12g carbs · 180 kcal
              </p>
            </div>
          </div>

          <div className="flex md:flex-col items-end justify-between md:justify-center gap-4">
            <div className="text-right">
              <span className="font-haetten text-5xl sm:text-6xl text-[#1A7A45] leading-none block">
                <AnimatedCounter value="92%" />
              </span>
              <span className="text-[10px] font-jetbrains uppercase tracking-widest text-gray-400">
                MATCH SCORE
              </span>
            </div>

            <button className="bg-[#1A7A45] hover:bg-[#145E35] text-white font-jetbrains font-extrabold text-xs px-6 py-3 rounded-full shadow-md group-hover:scale-105 transition-all">
              GET SWAP →
            </button>
          </div>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSwaps.map((card) => (
            <div
              key={card.id}
              onClick={onOpenSwapModal}
              className={`bg-white border-4 ${card.borderColor} rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all cursor-pointer flex flex-col justify-between group min-h-[220px]`}
            >
              <div>
                {/* Header Tag + Match Score */}
                <div className="flex items-center justify-between text-[11px] font-jetbrains uppercase font-bold text-gray-400 mb-2">
                  <span>
                    {card.diet} • {card.cuisineTag}
                  </span>
                  <span className={`font-haetten text-2xl ${card.scoreColor}`}>
                    <AnimatedCounter value={card.matchScore} />
                  </span>
                </div>

                {/* Original Dish -> Swap Dish */}
                <p className="text-gray-400 text-xs font-jetbrains uppercase tracking-wider mb-1">
                  {card.original}
                </p>
                <h4 className="font-montserrat-bold text-2xl text-[#1E2538] leading-snug mb-3 group-hover:text-[#D91E5C] transition-colors">
                  {card.swap}
                </h4>
              </div>

              <div>
                {/* Macros */}
                <p className="text-gray-500 font-jetbrains text-xs mb-4">
                  {card.protein} · {card.carbs} · {card.calories}
                </p>

                {/* Footer Tag */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[9px] font-jetbrains uppercase tracking-widest text-gray-400 font-bold">
                    {card.goalLabel}
                  </span>
                  <span className="text-xs font-jetbrains text-gray-400 group-hover:text-black">
                    Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSwaps.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-300 my-8">
            <p className="font-montserrat-bold text-2xl text-gray-500 mb-2">
              No matching swaps found
            </p>
            <p className="text-gray-400 text-sm font-dmsans">
              Try adjusting your search term or clearing filters to see more recipes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
