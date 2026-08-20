"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Star,
  FileText,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

// ── TERMS CONTENT ────────────────────────────────────────────────────────────
const TERMS_SECTIONS = [
  {
    title: "1. Purpose of OffRamp",
    body: [
      "OffRamp provides food decision support, plant-forward swap ideas, planning tools, and educational guidance. Recommendations are designed to help you compare options, not to replace professional medical, nutrition, or emergency advice.",
      "You are responsible for deciding whether a swap, meal plan, grocery item, restaurant suggestion, or expert-reviewed note is suitable for your circumstances.",
    ],
  },
  {
    title: "2. Accounts and Access",
    body: [
      "You agree to provide accurate account information and keep your credentials secure. Do not share your account, impersonate another person, or attempt to access areas that are not assigned to you.",
      "Institution, expert, and admin features may include additional role-based permissions. You must only use those features for authorized workflows.",
    ],
  },
  {
    title: "3. Health, Allergy, and Safety Limits",
    body: [
      "Always verify ingredient labels, allergen notices, restaurant preparation details, medication conflicts, and serving suitability before acting on any recommendation.",
      "OffRamp may flag potential conflicts, but no automated system can guarantee complete safety. For medical conditions, allergies, pregnancy, pediatric nutrition, eating disorders, or complex goals, consult a qualified professional.",
    ],
  },
  {
    title: "4. AI and Expert Review",
    body: [
      "AI-generated content can be incomplete or inaccurate. Treat AI output as a starting point for review and not as a final authority.",
      "Expert-reviewed content is labeled separately where available. Even expert input depends on the details you provide and may not cover every personal factor.",
    ],
  },
  {
    title: "5. User Content and Data",
    body: [
      "You may submit goals, preferences, restrictions, feedback, uploaded references, and other content to personalize the product. You confirm that you have the right to submit this content.",
      "Do not upload unlawful, unsafe, abusive, misleading, or privacy-infringing content. Do not submit someone else's sensitive health information unless you are authorized to do so.",
    ],
  },
  {
    title: "6. Payments and Subscriptions",
    body: [
      "Paid plans, expert credits, and checkout details are presented before purchase. Payment processing may be handled by third-party providers.",
      "Taxes, renewals, cancellations, refunds, and plan limits are governed by the terms shown in the billing flow and any applicable provider terms.",
    ],
  },
  {
    title: "7. Acceptable Use",
    body: [
      "Do not misuse the service, scrape data, interfere with security, reverse engineer protected functionality, overload systems, or use OffRamp to produce harmful instructions.",
      "Community and feedback features must stay respectful and must not contain unsafe medical claims, harassment, spam, or deceptive content.",
    ],
  },
  {
    title: "8. Availability and Changes",
    body: [
      "The service may change, pause, or become unavailable due to maintenance, provider outages, security work, or product updates.",
      "Features may be added, removed, renamed, or adjusted as the product evolves, while core account and safety expectations continue to apply.",
    ],
  },
  {
    title: "9. Disclaimers and Liability",
    body: [
      "OffRamp is provided for informational and planning support. To the fullest extent permitted by law, the service is provided without warranties of uninterrupted availability, exact nutritional accuracy, or fitness for a particular outcome.",
      "You agree that food, health, purchase, and lifestyle decisions remain your responsibility.",
    ],
  },
  {
    title: "10. Acceptance",
    body: [
      "By selecting Accept, you confirm that you have read these Terms & Conditions and agree to follow them while using OffRamp.",
      "If you do not agree, do not continue with sign in, sign up, or connected authentication.",
    ],
  },
];

// ── TERMS MODAL ───────────────────────────────────────────────────────────────
function TermsModal({ onAccept }) {
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // small -4px threshold for rounding tolerance
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 4) {
      setScrolledToBottom(true);
    }
  }, []);

  return (
    /* Backdrop — click-outside intentionally disabled (no onClick on backdrop) */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      {/* Modal card */}
      <div className="relative w-full max-w-3xl bg-[#FFFDF5] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="bg-[#1B3589] px-5 py-5 lg:py-6 lg:px-6 shrink-0">
          <div className="flex items-start gap-4">
            {/* Icon badge */}
            <div className="w-12 h-12 rounded-xl bg-[#DC346B] flex items-center justify-center shrink-0 shadow-md shadow-[#DC346B]/30 mt-0.5">
              <FileText className="w-6 h-6 text-white" />
            </div>

            <div>
              <p className="font-jetbrains font-bold text-[0.52rem] lg:text-[0.7rem]  tracking-[0.26em] uppercase text-[#F5AE38] mb-1.5">
                REQUIRED BEFORE AUTHENTICATION
              </p>
              <h2 className="font-haetten text-3xl md:text-4xl lg:text-5xl text-white leading-tighter">
                Terms & Conditions
              </h2>
              <p className="font-dmsans text-white/65 text-xs lg:text-base leading-snug mt-2">
                Please read the full Terms &amp; Conditions. You can continue to sign in or sign up only after you scroll to the end and accept.
              </p>
            </div>
          </div>
        </div>

        {/* ── Scrollable Terms Content ────────────────────────────────────── */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-y-auto flex-1 px-7 py-6 bg-white"
          style={{ minHeight: 0 }}
        >
          <div className="space-y-6">
            {TERMS_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="font-montserrat font-black text-[#1E2538] text-base mb-2">
                  {section.title}
                </h3>
                {section.body.map((para, i) => (
                  <p key={i} className="font-dmsans text-sm text-[#4A4A5A] leading-relaxed mb-2 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
            
        {/* ── Status Banner ───────────────────────────────────────────────── */}
        <div className="px-7 pt-4 pb-3 shrink-0 bg-[#FFFDF5]">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs lg:text-sm font-dmsans font-medium transition-all duration-400 ${
              scrolledToBottom
                ? "bg-[#1B7042]/10 text-[#1B7042] border border-[#1B7042]/25"
                : "bg-[#F5AE38]/12 text-[#7A5800] border border-[#F5AE38]/30"
            }`}
          >
            {scrolledToBottom ? (
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[#1B7042]" />
            ) : (
              <ShieldAlert className="w-5 h-5 shrink-0 text-[#F5AE38]" />
            )}
            <span>
              {scrolledToBottom
                ? "You reached the end of the terms."
                : "Scroll to the bottom to reveal the acceptance button."}
            </span>
          </div>
        </div>

        {/* ── Accept Button ───────────────────────────────────────────────── */}
        <div className="px-7 pb-7 shrink-0 bg-[#FFFDF5]">
          <button
            onClick={scrolledToBottom ? onAccept : undefined}
            disabled={!scrolledToBottom}
            className={`w-full flex items-center justify-center gap-2.5 font-montserrat font-black text-xs lg:text-sm tracking-widest uppercase py-4 px-6 rounded-2xl transition-all duration-300 ${
              scrolledToBottom
                ? "bg-[#DC346B] hover:bg-[#c41267] text-white shadow-lg shadow-[#DC346B]/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                : "bg-[#E8DCC4]/60 text-[#B0A090] cursor-not-allowed"
            }`}
          >
            <CheckCircle2 className={`w-5 h-5 ${scrolledToBottom ? "text-white" : "text-[#B0A090]"}`} />
            Accept and continue
          </button>
        </div>
      </div>
    </div>
  );
}

// ── MAIN AUTHPAGE ─────────────────────────────────────────────────────────────
export default function AuthPage({ initialMode = "signup" }) {
  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

  // Terms acceptance state — null means "not yet determined" (checking localStorage)
  const [termsAccepted, setTermsAccepted] = useState(null);

  // On mount: check localStorage for prior acceptance
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("offramp_terms_accepted");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.accepted === true) {
          setTermsAccepted(true);
          return;
        }
      }
    } catch (_) {
      // storage blocked or corrupted — show modal to be safe
    }
    setTermsAccepted(false);
  }, []);

  const handleAccept = useCallback(() => {
    // Persist acceptance
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "offramp_terms_accepted",
          JSON.stringify({ accepted: true, timestamp: Date.now() })
        );
      } catch (_) {
        // ignore storage errors
      }
    }
    setTermsAccepted(true);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      mode === "signup"
        ? `Account created for ${formData.fullName || "User"}!`
        : `Signed in as ${formData.email || "User"}!`
    );
  };

  return (
    <div>
      <Navbar onOpenSwapModal={() => {}} />

      {/* Terms Modal — shown when termsAccepted is explicitly false */}
      {termsAccepted === false && <TermsModal onAccept={handleAccept} />}

      {/* Main Content — always rendered, but visually locked while modal is showing */}
      <main
        className={`flex-1 min-h-screen pt-19 flex items-center justify-center bg-[#D91E5C] transition-all duration-500 ${
          termsAccepted === false ? "blur-[2px] pointer-events-none select-none" : ""
        }`}
      >
        <div className="w-full h-full flex flex-col lg:flex-row relative">

          {/* ════ LEFT PANEL (Pink) ════════════════════════════════════════ */}
          <div className="lg:w-[52%] h-full bg-[#D91E5C] text-white p-8 sm:p-12 lg:py-24 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border-[30px] border-white/10 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/10 pointer-events-none" />

            <div className="relative z-10">
              <h1 className="font-montserrat-bold font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] uppercase">
                <span className="block text-white">LOVE THE FOOD.</span>
                <span className="block text-[#f5a623]">SWAP THE REST.</span>
              </h1>
              <p className="text-[#f3b7b7] text-sm sm:text-xl font-dmsans max-w-md mt-5 leading-relaxed">
                8,400+ Indian dishes. Smarter ingredients.
                <br className="hidden sm:inline" /> Same flavour — without the compromises.
              </p>
            </div>

            <div className="relative z-10 my-8 space-y-3.5">
              <div className="p-1 bg-[#F5A623] max-w-xs">
                <div className="border-2 border-[#F7B84F] text-[#1E1E1E] px-4 py-2.5 flex items-center justify-between">
                  <span className="font-montserrat-bold font-black text-2xl sm:text-3xl tracking-tight">24,800+</span>
                  <span className="text-[10px] sm:text-xs font-jetbrains tracking-[0.2em] uppercase text-black/70">ACTIVE USERS</span>
                </div>
              </div>
              <div className="p-1 bg-[#FFF5E0] max-w-[18rem]">
                <div className="bg-[#FFF5E0] border-2 border-[#FFF5E0] text-[#E0187A] px-4 py-2.5 flex items-center justify-between">
                  <span className="font-montserrat-bold font-black text-2xl sm:text-3xl tracking-tight">8,400+</span>
                  <span className="text-[10px] sm:text-xs font-jetbrains tracking-[0.2em] uppercase text-[#E0187A]/75">INDIAN DISHES</span>
                </div>
              </div>
              <div className="p-1 bg-[#1B3489] max-w-[21rem]">
                <div className="bg-[#1B3489] border-2 border-[#5467a7] text-white px-5 py-3.5 flex items-center justify-between shadow-md max-w-sm">
                  <span className="font-montserrat-bold font-black text-2xl sm:text-3xl tracking-tight">12,600+</span>
                  <span className="text-[10px] sm:text-xs font-jetbrains tracking-[0.2em] uppercase text-white/70">SWAPS COMPLETED</span>
                </div>
              </div>
            </div>

            <div className="p-1 bg-[#1B3489] max-w-lg z-10">
              <div className="relative text-white p-6 shadow-xl border border-white/10">
                <p className="italic font-dmsans text-xs sm:text-lg leading-loose text-white/90 font-normal">
                  &ldquo;OffRamp is the first tool that truly respects Indian food culture while helping me control my blood sugar.&rdquo;
                </p>
                <div className="flex items-center justify-between font-jetbrains mt-4 pt-3 border-t border-white/10">
                  <span className="text-xs font-bold text-[#F5A623]">&mdash; Priya S., Chennai</span>
                  <div className="flex gap-1 text-[#F5A623]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 left-6 right-6 text-white/20 text-[10px] font-mono tracking-widest overflow-hidden whitespace-nowrap pointer-events-none">
              ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆ ◆
            </div>
          </div>

          {/* ════ WAVY SEPARATOR ══════════════════════════════════════════ */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[51.9%] -translate-x-[50%] z-20 h-full w-[50px] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100%" viewBox="0 0 40 757" preserveAspectRatio="none" fill="none">
              <g clipPath="url(#clip0_614_1580)">
                <g clipPath="url(#clip1_614_1580)">
                  <path d="M40 0C40 25.2253 0 25.2253 0 50.4507C0 75.676 40 75.676 40 100.901C40 126.127 0 126.127 0 151.352C0 176.577 40 176.577 40 201.803C40 227.028 0 227.028 0 252.253C0 277.479 40 277.479 40 302.704C40 327.929 0 327.929 0 353.155C0 378.38 40 378.38 40 403.605C40 428.831 0 428.831 0 454.056C0 479.281 40 479.281 40 504.507C40 529.732 0 529.732 0 554.957C0 580.183 40 580.183 40 605.408C40 630.633 0 630.633 0 655.859C0 681.084 40 681.084 40 706.309C40 731.535 0 731.535 0 756.76H40V0Z" fill="#F1A323" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_614_1580"><rect width="40" height="756.76" fill="white" /></clipPath>
                <clipPath id="clip1_614_1580"><rect width="40" height="756.76" fill="white" /></clipPath>
              </defs>
            </svg>
          </div>

          {/* ════ RIGHT PANEL (Form) ═══════════════════════════════════════ */}
          <div className="lg:w-[48%] bg-[#F5A623] p-6 sm:p-10 lg:p-12 flex items-center justify-center relative">
            <div className="bg-[#FFF5E0] border-t-4 border-[#D91E5C] shadow-2xl w-full max-w-[30rem] p-6 sm:p-8 relative z-10">

              {/* Mode tag + Tab switcher */}
              <div className="mb-6">
                <p className="text-[10px] font-jetbrains font-bold tracking-[0.2em] text-[#f5a623] uppercase mb-4">
                  OFFRAMP &middot; {mode === "signup" ? "NEW ACCOUNT" : "WELCOME BACK"}
                </p>
                <div className="flex items-center gap-6 border-b border-[#EADFC7] pb-3">
                  <button
                    type="button"
                    onClick={() => setMode("signin")}
                    className={`text-base transition-colors font-montserrat-bold tracking-tight relative pb-1 ${
                      mode === "signin"
                        ? "font-extrabold text-[#1E1E1E] after:content-[''] after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-0.5 after:bg-[#D91E5C]"
                        : "font-semibold text-[#f5a623] hover:text-[#1E1E1E]"
                    }`}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className={`text-base font-montserrat-bold tracking-tight transition-colors relative pb-1 ${
                      mode === "signup"
                        ? "font-extrabold text-[#1E1E1E] after:content-[''] after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-0.5 after:bg-[#D91E5C]"
                        : "font-semibold text-[#f5a623] hover:text-[#1E1E1E]"
                    }`}
                  >
                    Create account
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h2 className="font-montserrat-bold font-black text-3xl sm:text-4xl text-[#1E1E1E] tracking-tight">
                  {mode === "signup" ? "Join OffRamp." : "Good to see you."}
                </h2>
                <p className="text-xs font-dmsans sm:text-sm text-[#8B6830] font-medium mt-1.5">
                  {mode === "signup" ? "Free forever. No credit card needed." : "Sign in to your swaps, planner, and history."}
                </p>
              </div>

              {/* Google Sign-in */}
              <button
                type="button"
                onClick={() => alert("Google Sign-In integration ready.")}
                className="w-full bg-[#ffff] hover:bg-gray-50 border-2 border-[#FFE8B0] text-[#1E1E1E] font-bold text-xs sm:text-sm py-3 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2.5 mb-5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-jetbrains">
                  {mode === "signup" ? "Sign up with Google" : "Continue with Google"}
                </span>
              </button>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-5">
                <div className="border-t border-[#EADFC7] w-full" />
                <span className="bg-[#FFF5E0] px-3 text-[10px] font-mono text-[#8C827A] font-bold uppercase tracking-widest">OR</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "signup" && (
                  <div>
                    <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">FULL NAME</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      required
                      className="w-full bg-[#FFE8B0] text-[#1E1E1E] text-sm py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0187A]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
                    />
                  </div>
                )}

                <div>
                  <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0187A]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">PASSWORD</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder={mode === "signup" ? "Min. 6 characters" : "Your password"}
                      required
                      className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-3 px-4 pr-11 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0187A]/40 transition-all placeholder:text-[#A8946B] placeholder:font-dmsans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#1E1E1E] transition-colors p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {mode === "signin" && (
                    <div className="text-right mt-1.5">
                      <button type="button" onClick={() => alert("Password reset link sent.")} className="text-xs font-dmsans text-[#E0187A] hover:underline">
                        Forgot password?
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FDE3A0] hover:bg-[#FCD34D] text-[#523A0B] font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-md shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider mt-6 font-montserrat-bold"
                >
                  <span>{mode === "signup" ? "NEXT: YOUR PREFERENCES" : "SIGN IN"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* ── Terms acceptance confirmation row (replaces old inline link) ── */}
              {mode === "signup" && (
                <div className="flex items-center justify-center gap-2.5 mt-5 px-1">
                  <CheckCircle2 className="w-4 h-4 text-[#1B7042] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-dmsans text-[#6B6560]">
                    I have read and accepted the Terms &amp; Conditions.
                  </span>
                </div>
              )}

              {/* Switch mode link */}
              <div className="mt-4 text-center font-montserrat">
                <p className="text-xs text-[#6B6560] font-medium">
                  {mode === "signup" ? (
                    <>
                      Already have an account?{" "}
                      <button type="button" onClick={() => setMode("signin")} className="font-extrabold text-[#E0187A] hover:underline">
                        Sign in
                      </button>
                    </>
                  ) : (
                    <>
                      New to OffRamp?{" "}
                      <button type="button" onClick={() => setMode("signup")} className="font-extrabold text-[#E0187A] hover:underline">
                        Create a free account
                      </button>
                    </>
                  )}
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
