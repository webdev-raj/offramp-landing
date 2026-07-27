"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, CheckCircle2, Flame, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";

const SWAP_PRESETS = [
  {
    id: "makhani",
    originalName: "Butter Chicken",
    originalImg: "/butter_chicken.png",
    originalCalories: "520 kcal",
    originalFat: "38g",
    swapName: "Tofu Makhani",
    swapImg: "/tofu_makhani.png",
    swapCalories: "310 kcal",
    swapFat: "14g",
    savings: "-40% Calories",
    highlights: [
      "Zero cholesterol plant protein (Tofu)",
      "Cream substituted with spiced cashew emulsion",
      "Authentic North Indian Makhani gravy spices preserved",
    ],
  },
  {
    id: "biryani",
    originalName: "Mutton Biryani",
    originalImg: "/butter_chicken.png",
    originalCalories: "680 kcal",
    originalFat: "42g",
    swapName: "Jackfruit & Brown Rice Biryani",
    swapImg: "/tofu_makhani.png",
    swapCalories: "390 kcal",
    swapFat: "12g",
    savings: "-55% Carbs & Fat",
    highlights: [
      "Raw Kathal (Jackfruit) texture mimics tender meat",
      "High fiber complex carbs with brown basmati",
      "Rich Dum Pukht spice aroma",
    ],
  },
  {
    id: "samosa",
    originalName: "Deep Fried Samosa",
    originalImg: "/butter_chicken.png",
    originalCalories: "320 kcal",
    originalFat: "22g",
    swapName: "Air-Fried Baked Samosa",
    swapImg: "/tofu_makhani.png",
    swapCalories: "140 kcal",
    swapFat: "4g",
    savings: "-80% Oil Fat",
    highlights: [
      "Multi-seed whole wheat crust",
      "Spiced potato & green pea filling",
      "Golden crispy crunch without oil frying",
    ],
  },
];

export default function InteractiveSwapModal({ isOpen, onClose }) {
  const [activePreset, setActivePreset] = useState(SWAP_PRESETS[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FDF8EE] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E8DCC4] relative animate-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-[#E0187A] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FFD23F]" />
            <h3 className="font-anton text-2xl tracking-wide uppercase">
              AI Smart Food Swap Engine
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Dish Selector Tabs */}
          <p className="text-xs font-bold uppercase tracking-wider text-[#7A7A7A] mb-3">
            Select a sample Indian Dish Swap:
          </p>

          <div className="grid grid-cols-3 gap-2 mb-6">
            {SWAP_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                  activePreset.id === preset.id
                    ? "bg-[#1B2264] text-[#FFC93C] border-[#1B2264] shadow-md scale-[1.02]"
                    : "bg-white text-[#3A3A3A] border-[#E8DCC4] hover:bg-[#F5A623]/10"
                }`}
              >
                {preset.originalName}
              </button>
            ))}
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Original Dish */}
            <div className="bg-red-50/70 border border-red-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-red-100 text-red-700 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full mb-2">
                  Original Dish
                </span>
                <h4 className="font-bold text-lg text-gray-900">{activePreset.originalName}</h4>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-red-500" />
                    <span>{activePreset.originalCalories}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartPulse className="w-4 h-4 text-red-500" />
                    <span>Fat: {activePreset.originalFat}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Swap */}
            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase shadow">
                {activePreset.savings}
              </span>
              <div>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full mb-2">
                  Recommended Swap
                </span>
                <h4 className="font-bold text-lg text-emerald-950">{activePreset.swapName}</h4>
                <div className="flex items-center gap-4 mt-3 text-sm font-semibold text-emerald-900">
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-emerald-600" />
                    <span>{activePreset.swapCalories}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartPulse className="w-4 h-4 text-emerald-600" />
                    <span>Fat: {activePreset.swapFat}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-4 border border-[#E8DCC4] mb-6">
            <p className="text-xs font-bold text-[#1B2264] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E0187A]" />
              Dietitian & AI Breakdown:
            </p>
            <ul className="space-y-2">
              {activePreset.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#4A4A4A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-full bg-[#E0187A] hover:bg-[#c41267] text-white font-bold py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all uppercase tracking-wider text-sm"
            >
              <span>Get your personalized meal plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
