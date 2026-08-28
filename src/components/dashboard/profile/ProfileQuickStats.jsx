"use client";

import { Utensils, Wallet, Salad } from "lucide-react";

export default function ProfileQuickStats({ profile, loading, error }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/60 animate-pulse h-24" />
        ))}
      </div>
    );
  }

  if (error || !profile) return null;

  const quickStats = [
    {
      label: "DIET TYPE",
      value: profile.dietType || "Vegan",
      icon: Salad,
      color: "text-green-600 bg-green-50",
    },
    {
      label: "BUDGET FOCUS",
      value: profile.budgetFocus || "Medium",
      icon: Wallet,
      color: "text-amber-600 bg-amber-50",
    },
    {
      label: "CUISINE",
      value: profile.cuisine || "South Indian",
      icon: Utensils,
      color: "text-blue-600 bg-blue-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {quickStats.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/60 shadow-sm flex items-start justify-between relative overflow-hidden group hover:border-[#E0187A]/30 transition-all"
          >
            <div>
              <p className="font-jetbrains text-[10px] tracking-[0.2em] font-extrabold text-[#9A9AAA] uppercase mb-1">
                {item.label}
              </p>
              <h3 className="font-montserrat font-black text-xl sm:text-2xl text-[#1E2538]">
                {item.value}
              </h3>
            </div>
            <div className={`p-2.5 rounded-xl ${item.color} shrink-0`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
