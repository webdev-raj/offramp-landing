"use client";

import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";

export default function ImpactPage() {
  return (
    <div>
      <DashboardHeader eyebrow="IMPACT ANALYTICS" title="Impact" />
      <div className="bg-white rounded-2xl p-8 border border-[#E8DCC4] text-center py-16">
        <p className="font-jetbrains text-xs tracking-widest text-[#E0187A] uppercase mb-2">PAGE 3 COMING SOON</p>
        <h2 className="font-montserrat font-black text-2xl text-[#1E2538]">Impact Dashboard</h2>
        <p className="font-dmsans text-sm text-[#7A7A8A] mt-2">View your environmental, nutritional, and health metrics over time.</p>
      </div>
    </div>
  );
}
