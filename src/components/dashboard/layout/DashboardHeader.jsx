"use client";

export default function DashboardHeader({ eyebrow = "PROFILE CONTROL CENTER", title = "Profile" }) {
  return (
    <div className="mb-8">
      <p className="font-jetbrains text-[10px] sm:text-xs tracking-[0.25em] font-extrabold text-[#B59963] uppercase mb-1">
        {eyebrow}
      </p>
      <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E2538] tracking-tight leading-none">
        {title}
      </h1>
    </div>
  );
}
