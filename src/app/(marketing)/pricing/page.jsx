"use client";

import { useState } from "react";
import { ChevronDown, Star, Check, Minus, Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ── PLANS ───────────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceAnnual: 0,
    period: "forever",
    accentBg: "bg-[#FBF3E3]",
    accentBorder: "border-[#E8DCC4]",
    accentTag: null,
    btnLabel: "Get Started",
    btnStyle: "border-2 border-[#1E2538] text-[#1E2538] hover:bg-[#1E2538] hover:text-white",
    reassure: "No card required",
    features: ["5 guided swaps monthly", "Basic conflict checks", "Community access"],
  },
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 299,
    priceAnnual: 254,
    period: "/mo",
    accentBg: "bg-[#FBF3E3]",
    accentBorder: "border-[#E8DCC4]",
    accentTag: null,
    btnLabel: "Start Starter",
    btnStyle: "border-2 border-[#2542A5] text-[#2542A5] hover:bg-[#2542A5] hover:text-white",
    reassure: "Cancel anytime",
    features: ["30 guided swaps monthly", "Saved safety profile", "Menu conflict checks"],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 699,
    priceAnnual: 594,
    period: "/mo",
    popular: true,
    accentBg: "bg-[#DC346B]",
    accentBorder: "border-[#DC346B]",
    accentTag: "MOST POPULAR",
    btnLabel: "Start Pro",
    btnStyle: "bg-[#DC346B] text-white hover:bg-[#c41267] shadow-lg shadow-[#DC346B]/30",
    reassure: "Cancel anytime",
    features: ["Unlimited swaps", "Weekly AI transition plan", "WhatsApp meal nudges", "2 expert review credits"],
  },
  {
    id: "family",
    name: "Family",
    priceMonthly: 1499,
    priceAnnual: 1274,
    period: "/mo",
    accentBg: "bg-[#FBF3E3]",
    accentBorder: "border-[#E8DCC4]",
    accentTag: null,
    btnLabel: "Start Family",
    btnStyle: "border-2 border-[#F5AE38] text-[#7A5800] hover:bg-[#F5AE38] hover:text-[#1E2538]",
    reassure: "Cancel anytime",
    features: ["Up to 5 profiles", "Shared meal planner", "Caregiver-safe notes"],
  },
];

// Compare table data
const COMPARE_ROWS = [
  { feature: "Guided swaps / month", values: ["5", "30", "Unlimited", "Unlimited"] },
  { feature: "Conflict checks", values: ["✓", "✓", "✓", "✓"] },
  { feature: "Saved safety profile", values: [null, "✓", "✓", "✓"] },
  { feature: "AI transition plan", values: [null, null, "Weekly", "Weekly"] },
  { feature: "Expert review credits", values: [null, null, "2 / mo", "Priority"] },
  { feature: "Family profiles", values: [null, null, null, "Up to 5"] },
];

// Testimonials
const TESTIMONIALS = [
  {
    quote: "\"High-protein swaps finally fit my training routine and my regular grocery list.\"",
    attr: "Varun N., Bengaluru",
    stars: 5,
    accentColor: "text-[#1B7042]",
    borderColor: "border-[#1B7042]/20",
  },
  {
    quote: "\"Expert review made it easier to decide which swaps were worth repeating.\"",
    attr: "Isha B., Jaipur",
    stars: 5,
    accentColor: "text-[#2542A5]",
    borderColor: "border-[#2542A5]/20",
  },
  {
    quote: "\"I stopped guessing and started building a reliable week around foods I know.\"",
    attr: "Dev S., Chennai",
    stars: 4,
    accentColor: "text-[#DC346B]",
    borderColor: "border-[#DC346B]/20",
  },
];

// FAQ
const FAQS = [
  {
    q: "Can I cancel or change my plan anytime?",
    a: "Yes. Upgrade, downgrade, or cancel whenever you like — changes apply from your next billing cycle.",
  },
  {
    q: "Is my health and dietary data private?",
    a: "Always. We never sell your data — it's used only to power your swaps.",
  },
  {
    q: "Is Offramp a substitute for medical advice?",
    a: "No. Offramp helps with everyday food choices, but doesn't replace guidance from a doctor or dietitian.",
  },
  {
    q: "What happens to my saved swaps if I downgrade?",
    a: "They're always yours to keep — downgrading only limits new swaps and review credits going forward.",
  },
];

const TOP_CIRCLE_COUNT = 50;
// ─────────────────────────────────────────────────────────────────────────────
export default function PricingPage() {
  const [billing, setBilling] = useState("monthly"); // "monthly" | "annual"
  const [compareOpen, setCompareOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const getPrice = (plan) => {
    const raw = billing === "annual" ? plan.priceAnnual : plan.priceMonthly;
    if (raw === 0) return "₹0";
    return "₹" + raw.toLocaleString("en-IN");
  };

  return (
    <div className="min-h-screen bg-[#DC346B] font-dmsans text-[#1E2538] overflow-x-hidden">
      <Navbar onOpenSwapModal={() => { }} />

      {/* ══ HERO (Navy) ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#DC346B] text-white py-16 px-6 text-center overflow-hidden mt-16" style={{
    backgroundImage: "url('/images/icons/flowerSvg.svg')",
    backgroundSize: "350px",
  }}>
        {/* Background ring decoration */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border-[60px] border-white/[0.03] pointer-events-none" /> */}

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-jetbrains uppercase tracking-widest text-[#FFC93C] mb-6">
         
         Pricing
          </div>
          <h1 className="font-haetten text-white uppercase leading-[0.85] text-6xl sm:text-7xl lg:text-[6.5rem] mb-6">
            Simple Plans for<br />
            <span className="text-[#F5AE38]">Safer Food Routines.</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto mb-5 font-dmsans">
            Start free, no card required. Potential conflict checks are included at every tier.
          </p>
          <div className="flex items-center justify-center gap-3 text-[#ffffff] text-xs sm:text-sm">
            <span className="font-montserrat font-bold text-[#F5AE38]">12,600+</span>
            <span>home cooks</span>
            <span className="opacity-40">·</span>
            <span className="font-montserrat font-bold text-[#F5AE38]">4.8/5</span>
            <span>average trust score</span>
          </div>
        </div>

        {/* Wave bottom */}
      </section>
      <div className="h-5 w-full bg-[#FBF3E3] pl-2 flex items-center justify-start gap-2">
        {Array.from({ length: TOP_CIRCLE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-6 rounded-full bg-[#FBF3E3] shrink-0 -translate-y-1.5 "
          />
        ))}
      </div>
      <section className="bg-[#FBF3E3]">
        {/* ══ BILLING TOGGLE ════════════════════════════════════════════════ */}
        <div className="flex justify-center pb-14 pt-10 px-6">
          <div className="flex gap-1 bg-white border border-[#E8DCC4] rounded-full p-1 shadow-sm">
            {["monthly", "annual"].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-6 py-2.5 rounded-full font-montserrat font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${billing === b
                  ? "bg-[#1E2538] text-white shadow-sm"
                  : "text-[#6B6478] hover:text-[#1E2538]"
                  }`}
              >
                {b === "monthly" ? "Monthly" : "Annual"}
                {b === "annual" && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${billing === "annual" ? "bg-[#1B7042]/30 text-[#86EFAC]" : "bg-[#1B7042]/15 text-[#1B7042]"}`}>
                    Save 15%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ══ PRICING CARDS ═════════════════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 bg-[#FBF3E3]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${plan.popular
                  ? "ring-2 ring-[#DC346B] shadow-2xl shadow-[#DC346B]/20 scale-[1.02] lg:scale-105"
                  : "border border-[#E8DCC4] shadow-md hover:shadow-lg"
                  } bg-white`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="bg-[#DC346B] px-4 py-2 text-center">
                    <span className="font-jetbrains font-bold text-[10px] tracking-[0.22em] uppercase text-white">
                      ★ Most Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Plan name */}
                  <p className="font-montserrat font-black text-[#1E2538] text-base uppercase tracking-wide mb-4">
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`font-montserrat font-black leading-none ${plan.popular ? "text-[#DC346B]" : "text-[#1E2538]"}`} style={{ fontSize: "clamp(32px, 4vw, 42px)" }}>
                        {getPrice(plan)}
                      </span>
                      <span className="text-xs text-[#9A93A8] font-medium">
                        {plan.period === "forever" ? (
                          <span className="text-[#9A93A8]">forever</span>
                        ) : (
                          <>
                            /mo
                            {billing === "annual" && plan.priceAnnual > 0 && (
                              <span className="block text-[10px] text-[#1B7042] font-bold mt-0.5">billed annually</span>
                            )}
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B6478]">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-[#DC346B]" : "text-[#1B7042]"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => alert(`Starting ${plan.name} plan!`)}
                    className={`w-full font-montserrat font-bold text-xs sm:text-sm py-3.5 rounded-full transition-all ${plan.btnStyle}`}
                  >
                    {plan.btnLabel}
                  </button>
                  <p className="text-center text-[10px] text-[#9A93A8] mt-2.5">{plan.reassure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ COMPARE ALL FEATURES ══════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 text-center bg-[#FBF3E3]">
          <button
            onClick={() => setCompareOpen(!compareOpen)}
            className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-[#2542A5] hover:text-[#DC346B] transition-colors"
          >
            <span>{compareOpen ? "Hide comparison" : "Compare all features"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${compareOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Compare table */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${compareOpen ? "max-h-[900px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
          >
            <div className="overflow-x-auto rounded-2xl border border-[#E8DCC4] bg-white shadow-sm">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#E8DCC4]">
                    <th className="text-left p-4 font-jetbrains font-bold text-[10px] tracking-[0.18em] uppercase text-[#9A93A8]">Feature</th>
                    {["Free", "Starter", "Pro", "Family"].map((h) => (
                      <th key={h} className="p-4 font-montserrat font-black text-xs text-[#1E2538] text-center">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-[#E8DCC4]/60 ${i % 2 === 1 ? "bg-[#FBF3E3]/40" : ""}`}>
                      <td className="p-4 text-xs sm:text-sm font-semibold text-[#1E2538] text-left">{row.feature}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="p-4 text-center text-xs sm:text-sm">
                          {v ? (
                            <span className={`font-medium ${v === "✓" ? "text-[#1B7042]" : "text-[#1E2538]"}`}>{v}</span>
                          ) : (
                            <Minus className="w-4 h-4 text-[#C9CDEA] mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ══ TESTIMONIALS ══════════════════════════════════════════════════ */}
        <section className="px-6 sm:px-10 py-20 border-t border-[#E8DCC4] bg-[#FBF3E3]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-jetbrains font-bold text-[10px] tracking-[0.28em] uppercase text-[#DC346B] mb-3">★ Community Activity</p>
              <h2 className="font-montserrat font-black text-[#1E2538] uppercase tracking-tight leading-tight" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>
                Real Swaps, Real Routines.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`bg-white border ${t.borderColor} rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow`}>
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${s < t.stars ? `${t.accentColor} fill-current` : "text-[#E8DCC4]"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-[#1E2538] leading-relaxed italic font-medium mb-5">
                      {t.quote}
                    </p>
                  </div>
                  <p className={`text-xs font-jetbrains font-bold tracking-[0.18em] uppercase ${t.accentColor}`}>
                    — {t.attr}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TRUST NOTE ════════════════════════════════════════════════════ */}
        <div className="px-6 py-10 border-t border-[#E8DCC4] bg-[#FBF3E3]">
          <p className="text-center text-xs sm:text-sm text-[#6B6478] max-w-2xl mx-auto leading-relaxed">
            Potential conflict checks are included at every tier, including Free. Offramp does not make medical guarantees — always consult a registered dietitian for clinical needs.
          </p>
        </div>

        {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
        <section className="px-6 sm:px-10 py-20 border-t border-[#E8DCC4] bg-[#FBF3E3]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-jetbrains font-bold text-[10px] tracking-[0.28em] uppercase text-[#DC346B] mb-3">★ Support</p>
              <h2 className="font-montserrat font-black text-[#1E2538] uppercase tracking-tight" style={{ fontSize: "clamp(22px, 4vw, 32px)" }}>
                Questions People Ask
              </h2>
            </div>

            <div className="space-y-0">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border-b border-[#E8DCC4]">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-montserrat font-bold text-sm sm:text-base text-[#1E2538]">{faq.q}</span>
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isOpen ? "border-[#DC346B] bg-[#DC346B] text-white" : "border-[#E8DCC4] text-[#9A93A8]"}`}>
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
                    >
                      <p className="text-sm text-[#6B6478] leading-relaxed pb-5 max-w-xl">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ INSTITUTIONAL CTA ═════════════════════════════════════════════ */}
        <div className="px-6 py-8 border-t border-[#E8DCC4] bg-[#FBF3E3]">
          <p className="text-center text-xs sm:text-sm text-[#6B6478]">
            Running a hospital or care facility?{" "}
            <a href="#" className="font-bold text-[#2542A5] hover:text-[#DC346B] transition-colors underline underline-offset-2">
              Book an institutional demo →
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
