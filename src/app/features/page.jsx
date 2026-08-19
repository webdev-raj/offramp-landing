"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChefHat,
  ShieldCheck,
  Camera,
  Calendar,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── TAB DATA ────────────────────────────────────────────────────────────────
const TABS = [
  {
    id: "dish-conversion",
    icon: ChefHat,
    label: "Dish Conversion",
    headline: "Dish Conversion",
    subtext: "Turn familiar dishes into goal-aware versions.",
    cta: "Try dish conversion demo",
    accentColor: "#DC346B",
    accentBg: "bg-[#DC346B]",
    lightBg: "bg-[#FFF0F5]",
    iconBg: "bg-[#DC346B]/10",
    iconColor: "text-[#DC346B]",
    borderColor: "border-[#DC346B]",
    badgeBg: "bg-[#DC346B]/10",
    badgeText: "text-[#DC346B]",
    features: [
      "Turn familiar dishes into goal-aware versions",
      "Keep allergens and must-confirm rules visible",
      "Check labels and restaurant menus before acting",
      "Turn saved swaps into a practical week",
      "Low-friction reminders with consent controls",
      "Share progress and review notes clearly",
    ],
  },
  {
    id: "safety-profile",
    icon: ShieldCheck,
    label: "Safety Profile",
    headline: "Safety Profile",
    subtext: "Keep allergens and must-confirm rules visible.",
    cta: "View safety profile demo",
    accentColor: "#314894",
    accentBg: "bg-[#314894]",
    lightBg: "bg-[#EEF1FF]",
    iconBg: "bg-[#314894]/10",
    iconColor: "text-[#314894]",
    borderColor: "border-[#314894]",
    badgeBg: "bg-[#314894]/10",
    badgeText: "text-[#314894]",
    features: [
      "Store personal allergen and intolerance data",
      "Flag risky ingredients automatically",
      "Set must-confirm prompts before ordering",
      "Sync with family or care team profiles",
      "Audit trail of confirmed and skipped warnings",
      "One-tap emergency ingredient lookup",
    ],
  },
  {
    id: "menu-scan",
    icon: Camera,
    label: "Menu Scan",
    headline: "Product & Menu Scan",
    subtext: "Check labels and restaurant menus before acting.",
    cta: "Try menu scan demo",
    accentColor: "#308654",
    accentBg: "bg-[#308654]",
    lightBg: "bg-[#FFFBEB]",
    iconBg: "bg-[#308654]/15",
    iconColor: "text-[#7A5800]",
    borderColor: "border-[#308654]",
    badgeBg: "bg-[#308654]/15",
    badgeText: "text-[#7A5800]",
    features: [
      "Scan packaged product barcodes in seconds",
      "Upload restaurant menu photos for analysis",
      "Surface hidden ingredients and additives",
      "Compare options against your goal profile",
      "Save scanned items to your personal library",
      "Get a fast verdict: safe, caution, or avoid",
    ],
  },
  {
    id: "meal-planning",
    icon: Calendar,
    label: "Meal Planning",
    headline: "Meal Planning",
    subtext: "Turn saved swaps into a practical week.",
    cta: "Try meal planner demo",
    accentColor: "#7951A9",
    accentBg: "bg-[#7951A9]",
    lightBg: "bg-[#EDFDF6]",
    iconBg: "bg-[#7951A9]/10",
    iconColor: "text-[#7951A9]",
    borderColor: "border-[#7951A9]",
    badgeBg: "bg-[#7951A9]/10",
    badgeText: "text-[#7951A9]",
    features: [
      "Auto-build a week from your saved swaps",
      "Balance macros across all seven days",
      "Lock favourite meals and fill the rest",
      "Export shopping list by aisle category",
      "Adjust portions for one or the whole family",
      "Re-plan a single day without touching the rest",
    ],
  },
  {
    id: "whatsapp-nudges",
    icon: MessageCircle,
    label: "WhatsApp Nudges",
    headline: "WhatsApp Nudges",
    subtext: "Low-friction reminders with consent controls.",
    cta: "See nudge examples",
    accentColor: "#F5AE38",
    accentBg: "bg-[#F5AE38]",
    lightBg: "bg-[#F5EEFF]",
    iconBg: "bg-[#F5AE38]/10",
    iconColor: "text-[#F5AE38]",
    borderColor: "border-[#F5AE38]",
    badgeBg: "bg-[#F5AE38]/10",
    badgeText: "text-[#7E38B7]",
    features: [
      "Opt-in WhatsApp reminders — never spam",
      "Meal-time check-ins with one-tap logging",
      "Weekly summary sent to your number",
      "Pause or snooze from inside the chat",
      "Consent-first: full control at all times",
      "Works alongside your existing WhatsApp",
    ],
  },
  {
    id: "reports",
    icon: BarChart3,
    label: "Reports",
    headline: "Reports",
    subtext: "Share progress and review notes clearly.",
    cta: "Preview a sample report",
    accentColor: "#CB5638",
    accentBg: "bg-[#CB5638]",
    lightBg: "bg-[#FEF2EE]",
    iconBg: "bg-[#CB5638]/10",
    iconColor: "text-[#CB5638]",
    borderColor: "border-[#CB5638]",
    badgeBg: "bg-[#CB5638]/10",
    badgeText: "text-[#CB5638]",
    features: [
      "Weekly and monthly progress snapshots",
      "Advisor-ready PDF export in one tap",
      "Track goal adherence over time",
      "Annotate meals with private review notes",
      "Share selectively with your nutritionist",
      "Visual charts that tell your whole story",
    ],
  },
];
const TOP_CIRCLE_COUNT = 50;

// ── COMPONENT ────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const panelRef = useRef(null);

  const tab = TABS[activeTab];

  const switchTab = (idx) => {
    if (idx === activeTab || animating) return;
    setAnimating(true);
    // fade out
    if (panelRef.current) {
      panelRef.current.style.opacity = "0";
      panelRef.current.style.transform = "translateY(10px)";
    }
    setTimeout(() => {
      setActiveTab(idx);
      setAnimating(false);
      if (panelRef.current) {
        panelRef.current.style.opacity = "1";
        panelRef.current.style.transform = "translateY(0)";
      }
    }, 220);
  };

  return (
    <div className="min-h-screen bg-[#DC346B] font-dmsans text-[#1E2538] overflow-hidden">
      <Navbar onOpenSwapModal={() => { }} />

      {/* ══════════════════════════════════════════════════════════════════
          HERO — Pink background
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#DC346B] py-16 mt-20 px-6 text-center overflow-hidden" style={{
        backgroundImage: "url('/flowerSvg.svg')",
        backgroundSize: "350px",
      }}>
        {/* Devanagari watermark */}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat font-black text-white/[0.05] leading-none pointer-events-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 18vw, 220px)", letterSpacing: "-6px" }}
        >
          विशेषताएं
        </span>

        {/* Decorative rings */}
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full border-[40px] border-white/[0.04] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border-[50px] border-white/[0.04] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-jetbrains uppercase tracking-widest text-[#FFC93C] mb-6">
            ★ WHAT'S INCLUDED
          </div>

          {/* Headline */}
          <h1 className="font-haetten uppercase text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.92] tracking-wide mb-6">
            <span className="text-white">OUR</span>{" "}
            <span className="text-[#F5AE38]">FEATURES</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto mb-5 font-dmsans">
            Your everyday food guide — helping you choose better, not diet harder.
          </p>
        </div>

        {/* <div className="h-8" /> spacer for wave */}
      </section>
      <div className="h-5 w-full bg-[#FBF3E3] pl-2 flex items-center justify-start gap-2">
        {Array.from({ length: TOP_CIRCLE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-6 rounded-full bg-[#FBF3E3] shrink-0 -translate-y-1.5 "
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          TABBED FEATURE SHOWCASE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-10 py-16 lg:py-24 bg-[#FBF3E3]">
        <div className="max-w-5xl mx-auto">

          {/* ── Tab Bar ─────────────────────────────────────────────────── */}
          <div className="relative mb-10 sm:mb-12">
            {/* Scroll wrapper for mobile */}
            <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-stretch gap-1 sm:gap-2 min-w-max sm:min-w-0 sm:grid sm:grid-cols-6 bg-white rounded-2xl p-1.5 shadow-sm border border-[#E8DCC4]">
                {TABS.map((t, i) => {
                  const Icon = t.icon;
                  const isActive = activeTab === i;
                  return (
                    <button
                      key={t.id}
                      onClick={() => switchTab(i)}
                      className={`relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all duration-300 group min-w-[88px] sm:min-w-0 ${isActive
                          ? "bg-[#1E2538] text-white shadow-md"
                          : "text-[#6B6478] hover:text-[#1E2538] hover:bg-[#F5F0E8]"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 shrink-0 transition-colors duration-200 ${isActive ? "text-white" : ""}`}
                        style={isActive ? {} : { color: t.accentColor }}
                      />
                      <span className="font-jetbrains font-bold text-[10px] sm:text-[10.5px] tracking-[0.1em] uppercase text-center leading-tight">
                        {t.label}
                      </span>
                      {/* Active indicator dot */}
                      {isActive && (
                        <div
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                          style={{ background: t.accentColor }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Active Panel ─────────────────────────────────────────────── */}
          <div
            ref={panelRef}
            className="transition-all duration-300 ease-out"
            style={{ opacity: 1, transform: "translateY(0)" }}
          >
            {/* Scalloped card wrapper */}
            <div className="scallop-card" style={{ background: "white" }}>
              <div
                className="rounded-3xl overflow-hidden border-2"
                style={{ borderColor: tab.accentColor + "33" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[380px]">

                  {/* LEFT — Icon, headline, subtext, CTA */}
                  <div
                    className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden"
                    style={{ background: tab.accentColor }}
                  >
                    {/* Background watermark letter */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-4 -right-4 font-montserrat font-black leading-none text-white/[0.07] pointer-events-none select-none"
                      style={{ fontSize: "160px" }}
                    >
                      {tab.headline[0]}
                    </span>

                    <div className="relative z-10">
                      {/* Icon badge */}
                      <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 shadow-inner">
                        {(() => {
                          const Icon = tab.icon;
                          return <Icon className="w-7 h-7 text-white" />;
                        })()}
                      </div>

                      {/* Headline */}
                      <h2 className="font-haetten uppercase text-white leading-tight mb-3" style={{ fontSize: "clamp(34px, 5vw, 54px)" }}>
                        {tab.headline}
                      </h2>

                      {/* Subtext */}
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xs">
                        {tab.subtext}
                      </p>
                    </div>

                    {/* CTA button */}
                    <button
                      onClick={() => alert(`${tab.cta} — coming soon!`)}
                      className="relative z-10 self-start inline-flex items-center gap-2 bg-white font-montserrat font-black text-xs tracking-widest uppercase px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
                      style={{ color: tab.accentColor }}
                    >
                      {tab.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* RIGHT — "FEATURING:" checklist */}
                  <div className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    {/* Label */}
                    <div className="flex items-center gap-2 mb-6">
                      <span
                        className="font-jetbrains font-black text-[10px] tracking-[0.26em] uppercase px-3 py-1.5 rounded-full"
                        style={{
                          background: tab.accentColor + "18",
                          color: tab.accentColor,
                        }}
                      >
                        ★ FEATURING
                      </span>
                    </div>

                    {/* Checklist */}
                    <ul className="space-y-4">
                      {tab.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle2
                            className="w-5 h-5 shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110"
                            style={{ color: tab.accentColor }}
                          />
                          <span className="text-sm sm:text-base text-[#3A3A3A] leading-snug font-medium">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Tab pills navigation (mobile-friendly quick-switch below panel) */}
            {/* <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => switchTab(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTab === i ? "scale-125" : "bg-[#D4C9B8] hover:bg-[#A89880]"
                  }`}
                  style={activeTab === i ? { background: t.accentColor } : {}}
                  aria-label={`Go to ${t.label}`}
                />
              ))}
            </div> */}
          </div>

          {/* ── All Features Mini Grid (overview) ────────────────────────── */}
          {/* <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TABS.map((t, i) => {
              const Icon = t.icon;
              const isActive = activeTab === i;
              return (
                <button
                  key={t.id}
                  onClick={() => switchTab(i)}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                    isActive
                      ? "border-current shadow-md scale-105"
                      : "border-[#E8DCC4] bg-white hover:border-current hover:shadow-sm"
                  }`}
                  style={{
                    borderColor: isActive ? t.accentColor : undefined,
                    background: isActive ? t.accentColor + "0D" : undefined,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      background: isActive ? t.accentColor + "20" : "#F5F0E8",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: t.accentColor }}
                    />
                  </div>
                  <span className="font-jetbrains font-bold text-[10px] tracking-[0.1em] uppercase text-[#3A3A3A] leading-tight">
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div> */}

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CLOSING STATEMENT
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#314894] px-6 py-24 sm:py-32 text-center overflow-hidden">
        {/* Devanagari watermark */}
        {/* <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-montserrat font-black text-white/[0.04] leading-none pointer-events-none select-none"
          style={{ fontSize: "clamp(100px, 20vw, 260px)", letterSpacing: "-8px" }}
        >
          निर्णय
        </span> */}

        {/* Diamond dot pattern top strip */}

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="font-jetbrains font-bold text-[10px] tracking-[0.28em] uppercase text-[#F5AE38] mb-6">
            ★ Make it count
          </p>

          <h2
            className="font-montserrat-bold text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(36px, 5.5vw, 58px)"}}
          >
            Your Food <span className="text-[#F5AE38]">Decision</span><br /> Matter.
          </h2>

          <p className="text-white/60 font-dmsans text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-6 mb-10">
            Every swap, every label read, every week planned — it adds up. OffRamp makes that easier, one dish at a time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-[#F5AE38] hover:bg-[#F5AE38]/80 text-black font-jetbrains font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full"
            >
              Get started free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-montserrat font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full border-2 border-white/25 hover:border-white/50 transition-all"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Diamond strip bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#DC346B]" />
      </section>

      <Footer />
    </div>
  );
}
