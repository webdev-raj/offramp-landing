"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

// ── STEP DATA ──────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    numColor: "text-[#E53870]",
    label: "Tell us your goal",
    labelBg: "bg-[#E53870]/10",
    labelColor: "text-[#E53870]",
    title: "Pick what\nmatters to you",
    body: "Fitness, weight, budget, or blood sugar — you set the direction once. OfRamp maps every swap to that single goal, every week.",
    borderColor: "border-[#E53870]",
    cardBg: "bg-pink-50",
    preview: (
      <div className="space-y-2">
        <span className="block text-[10px] font-jetbrains font-bold tracking-[0.2em] text-[#E53870]/60 uppercase mb-3">Goal category</span>
        {[
          { icon: "🏋️", label: "Fitness or Gym", bg: "bg-[#2E8B5A]", text: "text-white" },
          { icon: "⚖️", label: "Weight Management", bg: "bg-[#4A56C4]", text: "text-white" },
          { icon: "💰", label: "Budget Friendly", bg: "bg-[#E53870]", text: "text-white" },
          { icon: "🩺", label: "Blood Sugar", bg: "bg-[#7A3DB8]", text: "text-white" },
        ].map((p) => (
          <div key={p.label} className={`flex items-center justify-between px-3 py-2.5 rounded-xl ${p.bg} ${p.text} text-xs font-montserrat font-bold`}>
            <span>{p.icon} {p.label}</span>
            <span className="opacity-50 text-[10px]">→</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    numColor: "text-[#7A3DB8]",
    label: "Explore dishes",
    labelBg: "bg-[#7A3DB8]/8",
    labelColor: "text-[#7A3DB8]",
    title: "Start with food\nyou already love",
    body: "Type a dish — Biryani, Dosa, Vada Pav. OfRamp fetches every verified swap, filtered to your region and your goal. Familiar food first, always.",
    borderColor: "border-[#7A3DB8]",
    cardBg: "bg-indigo-50",
    preview: (
      <div>
        <span className="block text-[10px] font-jetbrains font-bold tracking-[0.2em] text-[#7A3DB8]/60 uppercase mb-3">Butter Chicken → swaps · Punjabi</span>
        {[
          { name: "Jackfruit Makhani", meta: "34g pro · 22g carbs · 318 kcal", score: "90%", scoreColor: "text-[#DC346B]", bg: "bg-[#EEF0FF]", border: "border-[#7A3DB8]", nameColor: "text-[#7A3DB8]" },
          { name: "Tofu Makhani", meta: "28g pro · 19g carbs · 299 kcal", score: "84%", scoreColor: "text-[#1B7042]", bg: "bg-[#EDFDF6]", border: "border-[#1B7042]", nameColor: "text-[#1B7042]" },
        ].map((s) => (
          <div key={s.name} className={`flex items-center justify-between px-3 py-2.5 rounded-xl border border-dashed ${s.border} ${s.bg} mb-2`}>
            <div>
              <p className={`font-montserrat font-bold text-xs ${s.nameColor}`}>{s.name}</p>
              <p className="text-[10px] text-[#777] mt-0.5">{s.meta}</p>
            </div>
            <span className={`font-montserrat font-black text-lg ${s.scoreColor}`}>{s.score}</span>
          </div>
        ))}
        <p className="text-[10px] text-[#AAA] mt-2">★ All ICMR-referenced · Dietitian-verified</p>
      </div>
    ),
  },
  {
    num: "03",
    numColor: "text-[#F5AE38]",
    label: "Cook confidently",
    labelBg: "bg-[#F5AE38]/15",
    labelColor: "text-[#7A5800]",
    title: "Get the recipe,\nnot just the idea",
    body: "Every swap comes with a full step-by-step recipe. Nutritional guidance reviewed by qualified professionals. Same spice. Smarter ingredient. Zero guesswork.",
    borderColor: "border-[#F5AE38]",
    cardBg: "bg-amber-50",
    preview: (
      <div>
        <span className="block text-[10px] font-jetbrains font-bold tracking-[0.2em] text-[#F5AE38]/90 uppercase mb-3">Jackfruit Makhani · Full recipe</span>
        <p className="font-montserrat font-black text-base text-[#1E1E1E] mb-3">Ready in 25 min</p>
        <div className="flex gap-2 mb-3">
          {[{ val: "34g", lbl: "Protein" }, { val: "22g", lbl: "Carbs" }, { val: "318", lbl: "kcal" }].map((m) => (
            <div key={m.lbl} className="flex-1 bg-[#F5AE38]/15 rounded-xl py-2.5 px-2 text-center">
              <p className="font-montserrat font-black text-lg text-[#7A5800] leading-none">{m.val}</p>
              <p className="text-[9.5px] text-[#7A5800]/70 mt-0.5">{m.lbl}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#AAA]">✓ Medically credible &nbsp;·&nbsp; ✓ Regionally sourced</p>
      </div>
    ),
  },
  {
    num: "04",
    numColor: "text-[#2E8B5A]",
    label: "Track decisions",
    labelBg: "bg-[#1B7042]/10",
    labelColor: "text-[#2E8B5A]",
    title: "See what's\nactually changing",
    body: "Monitor real progress across your swaps each week. Protein up. Calories dialled. Your dashboard shows real kitchen behaviour — not wishful estimates.",
    borderColor: "border-[#2E8B5A]",
    cardBg: "bg-emerald-50",
    preview: (
      <div>
        <span className="block text-[10px] font-jetbrains font-bold tracking-[0.2em] text-[#2E8B5A]/60 uppercase mb-3">Weekly progress · Goal: Weight</span>
        {[
          { label: "Protein", value: "+18g avg", width: "74%", barColor: "bg-[#2E8B5A]", labelColor: "text-[#2E8B5A]" },
          { label: "Calories saved", value: "−92 kcal", width: "55%", barColor: "bg-[#DC346B]", labelColor: "text-[#DC346B]" },
          { label: "Goal alignment", value: "91%", width: "91%", barColor: "bg-[#7A3DB8]", labelColor: "text-[#7A3DB8]" },
        ].map((b) => (
          <div key={b.label} className="mb-3 last:mb-0">
            <div className={`flex justify-between text-xs font-semibold mb-1.5 ${b.labelColor}`}>
              <span>{b.label}</span><span>{b.value}</span>
            </div>
            <div className="h-1.5 bg-black/7 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${b.barColor}`} style={{ width: b.width }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "05",
    numColor: "text-[#4A56C4]",
    label: "Refine your plan",
    labelBg: "bg-[#4A56C4]/10",
    labelColor: "text-[#4A56C4]",
    title: "Loop back.\nGo deeper.",
    body: "Every swap you try teaches OfRamp your taste. Next week's suggestions get sharper. The loop compounds — until eating healthier is just how you eat.",
    borderColor: "border-[#4A56C4]",
    cardBg: "bg-violet-50",
    preview: (
      <div>
        <span className="block text-[10px] font-jetbrains font-bold tracking-[0.2em] text-[#4A56C4]/60 uppercase mb-3">Your taste profile · Week 4</span>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["Punjabi ✓", "High protein", "Veg-flex", "Budget ≤ ₹120", "No onion"].map((tag) => (
            <span key={tag} className="bg-[#7E38B7]/10 text-[#4A56C4] text-[11px] font-montserrat font-bold px-3 py-1.5 rounded-full">{tag}</span>
          ))}
        </div>
        <p className="font-montserrat font-bold text-xs text-[#4A56C4]">↻ 14 new swaps unlocked this week</p>
      </div>
    ),
  },
];

const TRUST = [
  {
    icon: "✅",
    iconBg: "bg-[#1B7042]/20",
    title: "Dietitian-Verified",
    desc: "Every swap reviewed by a registered dietitian. No anonymous wellness claims.",
  },
  {
    icon: "📊",
    iconBg: "bg-[#F5AE38]/20",
    title: "ICMR-Referenced",
    desc: "Nutritional data from India's foremost food science authority. Real credentials.",
  },
  {
    icon: "📍",
    iconBg: "bg-[#DC346B]/15",
    title: "Regional Accuracy",
    desc: "Ingredients verified by availability per region. North, South, West, East — covered.",
  },
];

const TOP_CIRCLE_COUNT = 50;

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen w-full bg-[#DC346B] font-dmsans text-[#1E2538] overflow-hidden">
      <Navbar onOpenSwapModal={() => { }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#DC346B] mt-12 lg:mt-20 py-16 px-6 sm:px-10 lg:px-20 overflow-hidden" style={{
        backgroundImage: "url('/images/icons/flowerSvg.svg')",
        backgroundSize: "350px",
      }}>
        {/* Devanagari watermark */}
        <span
          aria-hidden="true"
          className="absolute -bottom-6 -left-6 font-montserrat font-black text-white/[0.05] leading-none pointer-events-none select-none"
          style={{ fontSize: "clamp(120px, 22vw, 280px)", letterSpacing: "-10px" }}
        >
          विधि
        </span>

        <div className="max-w-7xl h-full mx-auto flex items-center justify-between max-md:flex-col gap-10 lg:gap-16">
          {/* Left */}
          <div className="relative z-10 pb-16 lg:pb-20">
            <div className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-jetbrains uppercase tracking-widest text-[#FFC93C] mb-6">
              ★ The process
            </div>
            <h1 className="font-haetten text-6xl sm:text-7xl lg:text-[6.5rem] uppercase leading-[0.85] text-white mb-6">
              How the <br />
              <span className="text-[#F5AE38]">swap works.</span>

            </h1>
            <p className="text-white/80 font-dmsans text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Five clean steps. One dish you already love. A habit that actually sticks — no willpower, no giving anything up.
            </p>
          </div>

          {/* Right — Snap Card */}
          <div className="h-full relative z-10 ">
            <div
              className="bg-[#1B3589] border-4 border-white/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full max-w-sm"
            >
              {/* Header Label */}
              <div className="flex items-center justify-between text-[10px] font-jetbrains uppercase tracking-widest text-white/60 mb-3 border-b border-white/15 pb-2">
                <span>SWAP OF THE WEEK</span>
                <span className="bg-[#FFC93C] text-[#1B3589] font-bold px-2 py-0.5 rounded">POPULAR</span>
              </div>

              {/* Dish Swap Header */}
              <p className="text-white/70 text-xs font-jetbrains uppercase line-through tracking-wider mb-1">
                Butter Chicken
              </p>
              <h3 className="font-montserrat-bold text-2xl sm:text-3xl text-white mb-3 group-hover:text-[#FFC93C] transition-colors">
                Jackfruit Makhani
              </h3>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-white/15 text-white text-[10px] font-jetbrains px-2.5 py-1 rounded-md uppercase font-bold">
                  EXPLORE
                </span>
                <span className="bg-[#1A7A45] text-white text-[10px] font-jetbrains px-2.5 py-1 rounded-md uppercase font-bold">
                  VEG
                </span>
                <span className="bg-white/15 text-white text-[10px] font-jetbrains px-2.5 py-1 rounded-md uppercase font-bold">
                  RECIPE
                </span>
              </div>

              {/* Score & Macros */}
              <div className="flex items-end justify-between pt-4 border-t border-white/15">
                <p className="text-white/80 text-xs font-jetbrains leading-snug">
                  27g pro · 11g carbs <br />
                  <span className="font-bold text-white">340 kcal</span>
                </p>
                <div className="text-right">
                  <span className="font-haetten text-5xl text-[#FFC93C] leading-none block">
                    <AnimatedCounter value="90%" />
                  </span>
                  <span className="text-[9px] font-jetbrains uppercase tracking-wider text-white/60">
                    MATCH SCORE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave transition */}
      </section>
       <div className="h-5 w-full bg-[#FBF3E3] pl-2 flex items-center justify-start gap-2 ">
        {Array.from({ length: TOP_CIRCLE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-6 rounded-full bg-[#FBF3E3] shrink-0 -translate-y-1.5 "
          />
        ))}
      </div>

      {/* ══ STEPS ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FBF3E3] px-6 sm:px-10 lg:px-20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <p className="font-jetbrains font-bold text-[10px] tracking-[0.22em] uppercase text-[#DC346B] mb-3">★ Our recipe logic</p>
              <h1 className="font-haetten text-[#1E2538] text-5xl sm:text-6xl lg:text-7xl leading-[0.85]">
                Five steps.<br />
                <span className="text-[#DC346B]">One loop.</span>
              </h1>
            </div>
            <p className="text-[#777] font-dmsans text-sm sm:text-base leading-relaxed max-w-sm lg:text-right">
              No crash program. No before-after promises. Just a sustainable loop you run every week — and it gets smarter each time.
            </p>
          </div>

          {/* Step rows */}
          <div>
            {STEPS.map((step, i) => (
              <div key={step.num} className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0 py-10 sm:py-12 border-t border-[#E8DCC4] ${i === STEPS.length - 1 ? "border-b" : ""}`}>
                {/* Left col — number + badge */}
                <div className="mb-4 md:mb-0">
                  <p className={`font-montserrat font-bold leading-none tracking-tight mb-2 ${step.numColor}`} style={{ fontSize: "68px" }}>
                    {step.num}
                  </p>
                  <span className={`inline-block font-jetbrains font-bold text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full ${step.labelBg} ${step.labelColor}`}>
                    {step.label}
                  </span>
                </div>

                {/* Right col — title + body + preview card */}
                <div className="md:pl-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
                  <div>
                    <h3 className="font-montserrat-bold text-[#1E2538] uppercase leading-[1.05] tracking-tight text-2xl sm:text-3xl mb-3 whitespace-pre-line">
                      {step.title}
                    </h3>
                    <p className="text-[#777] text-sm sm:text-base font-dmsans leading-relaxed max-w-sm">
                      {step.body}
                    </p>
                  </div>

                  {/* Mini preview card */}
                  <div className={`rounded-2xl border-2 border-dashed ${step.borderColor} ${step.cardBg} p-5`}>
                    {step.preview}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NAVY CTA ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#314894] px-6 sm:px-10 lg:px-20 py-24 lg:py-32 overflow-hidden">
        {/* Devanagari watermark */}
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 font-montserrat font-black text-white/[0.04] leading-none pointer-events-none select-none"
          style={{ fontSize: "clamp(120px, 22vw, 280px)" }}
        >
          शुरू
        </span>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* Left — CTA text */}
          <div>
            <p className="font-jetbrains font-bold text-[10px] tracking-[0.22em] uppercase text-[#F5AE38] mb-6">★ Start today</p>
            <h2 className="font-montserrat-bold font-black text-white leading-[0.95] tracking-tight mb-5" style={{ fontSize: "clamp(36px, 5.5vw, 58px)" }}>
              Start with one dish you already <span className="text-[#F5AE38]">love.</span>
            </h2>
            <p className="text-white/50 font-dmsans text-sm sm:text-base leading-relaxed max-w-sm mb-10">
              No crash program. No giving anything up. Just a smarter version of what's already on your plate — this week.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="inline-flex items-center gap-2 bg-[#F5AE38] hover:bg-[#F5AE38]/90 text-black font-jetbrains font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full shadow-lg transition-all"
              >
                Get started free →
              </a>
              <a
                href="/explore"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-montserrat font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full border-2 border-white/25 transition-all"
              >
                See all swaps
              </a>
            </div>
          </div>

          {/* Right — Trust trio */}
          <div className="flex flex-col gap-5">
            {TRUST.map((t) => (
              <div key={t.title} className="flex items-start gap-5 bg-white/4 border border-dashed border-white/12 rounded-2xl p-6">
                <div className={`w-11 h-11 rounded-xl ${t.iconBg} flex items-center justify-center text-xl shrink-0`}>
                  {t.icon}
                </div>
                <div>
                  <h4 className="font-montserrat font-black text-white text-sm uppercase tracking-wide mb-1">{t.title}</h4>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
