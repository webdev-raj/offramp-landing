"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";

import { useUserPreferences } from "@/lib/hooks/useUserPreferences";
import { saveUserPreferences } from "@/lib/api/dashboard";

import StepProgressBar from "./StepProgressBar";
import Step1Cuisines from "./Step1Cuisines";
import Step2Constraints from "./Step2Constraints";
import Step3Budget from "./Step3Budget";
import Step4Review from "./Step4Review";
import PreferencesSuccessState from "./PreferencesSuccessState";

// ─── Validation helpers ────────────────────────────────────────────────────────
function isStepValid(step, data) {
  switch (step) {
    case 1:
      return !!data.region && data.preferredCuisines?.length > 0;
    case 2:
      return !!data.allergies && !!data.transitionPath;
    case 3:
      return !!data.budgetLevel;
    case 4:
      return true;
    default:
      return true;
  }
}

const TOTAL_STEPS = 4; // steps 1-4; step 5 is the success state

export default function PreferencesWizard() {
  const { data: initialData, loading, error } = useUserPreferences();

  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  // Central wizard state — seeded from API once loaded
  const [wizardData, setWizardData] = useState(null);

  // Seed once initialData arrives
  if (initialData && wizardData === null) {
    setWizardData({
      region: initialData.region ?? "",
      preferredCuisines: initialData.preferredCuisines ?? [],
      dietaryStyle: initialData.dietaryStyle ?? "",
      allergies: initialData.allergies ?? [],
      budgetLevel: initialData.budgetLevel ?? "",
      transitionPath: initialData.transitionPath ?? "",
    });
  }

  // ── Loading / error states ───────────────────────────────────────────────
  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-16 bg-[#E8DCC4]/40 rounded-2xl" />
        <div className="h-48 bg-[#E8DCC4]/40 rounded-2xl" />
        <div className="h-32 bg-[#E8DCC4]/40 rounded-2xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-red-200 text-red-600 font-dmsans text-sm">
        Failed to load preferences. Please refresh and try again.
      </div>
    );
  }

  if (done) {
    return <PreferencesSuccessState />;
  }

  if (!wizardData) return null;

  // ── Handlers ─────────────────────────────────────────────────────────────
  function handleChange(partial) {
    setWizardData((prev) => ({ ...prev, ...partial }));
  }

  function handleNext() {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  }

  function handleBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleEditStep(targetStep) {
    setStep(targetStep);
  }

  async function handleSave() {
    setSaving(true);
    setSaveError(null);
    try {
      await saveUserPreferences("user_001", wizardData);
      setDone(true);
    } catch (err) {
      setSaveError("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  const canProceed = isStepValid(step, wizardData);

  // ── Render current step content ───────────────────────────────────────────
  function renderStep() {
    switch (step) {
      case 1:
        return <Step1Cuisines data={wizardData} onChange={handleChange} />;
      case 2:
        return <Step2Constraints data={wizardData} onChange={handleChange} />;
      case 3:
        return <Step3Budget data={wizardData} onChange={handleChange} />;
      case 4:
        return <Step4Review data={wizardData} onEdit={handleEditStep} />;
      default:
        return null;
    }
  }

  return (
    <div>
      {/* ── Progress Bar + Step heading ──────────────────────────────── */}
      <StepProgressBar currentStep={step} />

      {/* ── Step Content ─────────────────────────────────────────────── */}
      {renderStep()}

      {/* ── Save error ───────────────────────────────────────────────── */}
      {saveError && (
        <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 font-dmsans text-xs text-red-600">
          {saveError}
        </div>
      )}

      {/* ── Navigation Buttons ───────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F0EAD6]">
        {/* Back */}
        <button
          type="button"
          onClick={handleBack}
          disabled={step === 1}
          className={`inline-flex items-center gap-2 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-5 py-3 rounded-xl border-2 transition-all ${step === 1
              ? "border-[#E8DCC4] text-[#C4B89A] cursor-not-allowed bg-[#FAF7F0]"
              : "border-[#E8DCC4] text-[#4A4A5A] hover:border-[#1B3589]/40 hover:bg-[#F5F3FF] cursor-pointer active:scale-95"
            }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>

        {/* Right side: Skip + Next / Save */}
        <div className="flex items-center gap-3">
          {/* Skip (only on non-final steps) */}
          {step < TOTAL_STEPS && (
            <button
              type="button"
              onClick={handleNext}
              className="font-jetbrains font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl border-2 border-[#E8DCC4] text-[#7A7A8A] hover:border-[#1B3589]/30 hover:bg-[#F5F3FF] cursor-pointer transition-all active:scale-95"
            >
              Skip
            </button>
          )}

          {/* Next / Save */}
          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed}
              className={`inline-flex items-center gap-2 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-xl border-2 transition-all ${canProceed
                  ? "bg-[#1B3589] border-[#1B3589] text-white hover:bg-[#162B72] cursor-pointer shadow-md active:scale-95"
                  : "bg-[#E8DCC4]/50 border-[#E8DCC4] text-[#C4B89A] cursor-not-allowed"
                }`}
            >
              Next
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 font-jetbrains font-extrabold text-xs tracking-wider uppercase px-6 py-3 rounded-xl border-2 bg-[#1B7042] border-[#1B7042] text-white hover:bg-[#165E38] cursor-pointer shadow-md active:scale-95 transition-all disabled:opacity-60"
            >
              {saving ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  Save Preferences
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
