"use client";

import { Check } from "lucide-react";

const STEPS = [
  { id: 1, label: "CUISINES", color: "#1B3589" },
  { id: 2, label: "CONSTRAINTS", color: "#E0187A" },
  { id: 3, label: "BUDGET", color: "#1B7042" },
  { id: 4, label: "REVIEW", color: "#F5AE38" },
  { id: 5, label: "TRANSITION", color: "#6C5CE7" },
];

const STEP_DETAILS = {
  1: {
    eyebrow: "STEP 1 OF 5",
    title: "What cuisines do you eat?",
    subtext: "Select the regions and cuisines you're interested in.",
  },
  2: {
    eyebrow: "STEP 2 OF 5",
    title: "Tell us about your constraints",
    subtext: "Help us avoid recommending dishes you can't eat.",
  },
  3: {
    eyebrow: "STEP 3 OF 5",
    title: "What's your budget level?",
    subtext: "This helps us prioritize recommendations.",
  },
  4: {
    eyebrow: "STEP 4 OF 5",
    title: "Review your preferences",
    subtext: "Review before we find your perfect swaps.",
  },
};

export default function StepProgressBar({ currentStep }) {
  const details = STEP_DETAILS[currentStep] || STEP_DETAILS[1];

  return (
    <div className="mb-8">
      {/* ── Progress Circles & Connecting Lines ──────────────────────── */}
      <div className="flex items-center justify-start mb-8 px-2">
        {STEPS.map((step, idx) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isFuture = currentStep < step.id;

          return (
            <div key={step.id} className="flex-1 flex items-center">
              {/* Step Circle + Label */}
              <div className="flex flex-col items-center relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-jetbrains font-extrabold text-xs transition-all shadow-sm ${
                    isCompleted
                      ? "bg-[#1B3589] text-white"
                      : isCurrent
                      ? "text-white shadow-md scale-105"
                      : "bg-[#FFF9EB] border-2 border-[#E8DCC4] text-[#8C827A]"
                  }`}
                  style={isCurrent ? { backgroundColor: step.color } : {}}
                >
                  {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.id}
                </div>

                <span
                  className={`font-jetbrains text-[9px] sm:text-[10px] tracking-wider uppercase mt-2 whitespace-nowrap ${
                    isCurrent
                      ? "font-extrabold text-[#1E1E1E]"
                      : isCompleted
                      ? "font-bold text-[#1B3589]"
                      : "font-semibold text-[#8C827A]/70"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting Line to next step */}
              {idx < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 -mt-5 transition-all ${
                    currentStep > step.id ? "bg-[#1B3589]" : "bg-[#E8DCC4]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Step Eyebrow + Heading + Subtext ────────────────────────── */}
      <div className="mb-6">
        <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.25em] uppercase text-[#1B3589] mb-1.5">
          {details.eyebrow}
        </p>
        <h2 className="font-montserrat-bold font-black text-2xl sm:text-3xl text-[#1E1E1E] tracking-tight mb-1">
          {details.title}
        </h2>
        <p className="font-dmsans text-xs sm:text-sm text-[#7A7A8A]">
          {details.subtext}
        </p>
      </div>
    </div>
  );
}
