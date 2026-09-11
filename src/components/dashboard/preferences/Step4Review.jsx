"use client";

import {
  REGION_OPTIONS,
  CUISINE_OPTIONS,
  ALLERGY_OPTIONS,
  BUDGET_OPTIONS,
  TRANSITION_PATH_OPTIONS,
} from "@/lib/api/dashboard";

function resolveLabel(id, options) {
  return options.find((o) => o.id === id)?.label || id;
}

export default function Step4Review({ data, onEdit, onSave, saving }) {
  const {
    region,
    preferredCuisines = [],
    allergies = [],
    budgetLevel,
    transitionPath,
  } = data;

  const budgetOption = BUDGET_OPTIONS.find((o) => o.id === budgetLevel);

  return (
    <div className="space-y-4">
      {/* ── Cuisines Card (full-width) ──────────────────────────────── */}
      <div className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/70 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#1B7042]">
            Your Cuisines
          </p>
          <button
            type="button"
            onClick={() => onEdit(1)}
            className="font-jetbrains font-bold text-[10px] tracking-wider uppercase text-[#4A4A5A] hover:text-[#1B3589] cursor-pointer transition-colors"
          >
            Edit
          </button>
        </div>

        {/* Region */}
        <p className="font-montserrat-bold font-black text-xl tracking-tight text-[#1E1E1E] mb-3">
          {resolveLabel(region, REGION_OPTIONS).toUpperCase()}
        </p>

        {/* Cuisine pills */}
        <div className="flex flex-wrap gap-2">
          {preferredCuisines.length > 0 ? (
            preferredCuisines.map((id) => (
              <span
                key={id}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#D6C99A] font-dmsans text-sm text-[#2E2E3A]"
              >
                {resolveLabel(id, CUISINE_OPTIONS)}
              </span>
            ))
          ) : (
            <span className="font-dmsans text-xs text-[#9A9AAA] italic">
              No cuisines selected
            </span>
          )}
        </div>
      </div>

      {/* ── Constraints + Budget (side-by-side) ────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Constraints */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/70 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#1B7042]">
              Your Constraints
            </p>
            <button
              type="button"
              onClick={() => onEdit(2)}
              className="font-jetbrains font-bold text-[10px] tracking-wider uppercase text-[#4A4A5A] hover:text-[#1B3589] cursor-pointer transition-colors"
            >
              Edit
            </button>
          </div>

          {/* Allergies */}
          <p className="font-dmsans text-sm text-[#2E2E3A] mb-2">
            {allergies.length > 0
              ? allergies
                  .map((id) => resolveLabel(id, ALLERGY_OPTIONS))
                  .join(", ")
              : "None selected"}
          </p>

          {/* Transition path */}
          <p className="font-jetbrains text-[10px] tracking-wider text-[#8A8070]">
            Transition:{" "}
            <span className="text-[#5A5A6A]">
              {transitionPath
                ? resolveLabel(transitionPath, TRANSITION_PATH_OPTIONS).toLowerCase()
                : "not set"}
            </span>
          </p>
        </div>

        {/* Budget */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/70 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#1B7042]">
              Your Budget
            </p>
            <button
              type="button"
              onClick={() => onEdit(3)}
              className="font-jetbrains font-bold text-[10px] tracking-wider uppercase text-[#4A4A5A] hover:text-[#1B3589] cursor-pointer transition-colors"
            >
              Edit
            </button>
          </div>

          {/* Budget level name */}
          <p
            className="font-jetbrains font-extrabold text-lg tracking-wider uppercase mb-1"
            style={{ color: budgetOption?.color || "#1E1E1E" }}
          >
            {budgetOption?.label || "Not set"}
          </p>

          {/* Description */}
          <p className="font-dmsans text-sm text-[#7A7A8A]">
            {budgetOption?.description || ""}
          </p>
        </div>
      </div>

      {/* ── Green Save CTA Banner ─────────────────────────────────── */}
      <button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="w-full flex items-center gap-4 px-6 py-5 rounded-2xl bg-[#1B7042] hover:bg-[#165E38] text-white cursor-pointer transition-all active:scale-[0.99] shadow-md disabled:opacity-60"
      >
        {/* Checkmark circle */}
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          {saving ? (
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
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
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6l3 3 5-5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <div className="text-left">
          <p className="font-jetbrains font-extrabold text-sm tracking-wider uppercase">
            {saving ? "Saving..." : "Save & Get Swapping"}
          </p>
          <p className="font-dmsans text-sm text-white/70 mt-0.5">
            We&apos;ll personalise your recommendations immediately
          </p>
        </div>
      </button>
    </div>
  );
}
