"use client";

import {
  REGION_OPTIONS,
  CUISINE_OPTIONS,
  ALLERGY_OPTIONS,
  BUDGET_OPTIONS,
  TRANSITION_PATH_OPTIONS,
} from "@/lib/api/dashboard";

const DIETARY_STYLES = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "jain", label: "Jain" },
  { id: "keto", label: "Keto / Low-carb" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "no-restriction", label: "No Restriction" },
];

function ReviewRow({ label, value, accent = "#1B3589" }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3.5 border-b border-[#F0EAD6] last:border-0">
      <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#9A9AAA] shrink-0 mt-0.5">
        {label}
      </p>
      <div className="flex flex-wrap gap-2 justify-end">
        {Array.isArray(value) ? (
          value.length > 0 ? (
            value.map((v) => (
              <span
                key={v}
                className="font-jetbrains font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-lg"
                style={{ backgroundColor: `${accent}15`, color: accent }}
              >
                {v}
              </span>
            ))
          ) : (
            <span className="font-dmsans text-xs text-[#9A9AAA] italic">Not set</span>
          )
        ) : value ? (
          <span
            className="font-jetbrains font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-lg"
            style={{ backgroundColor: `${accent}15`, color: accent }}
          >
            {value}
          </span>
        ) : (
          <span className="font-dmsans text-xs text-[#9A9AAA] italic">Not set</span>
        )}
      </div>
    </div>
  );
}

function resolveLabel(id, options) {
  return options.find((o) => o.id === id)?.label || id;
}

export default function Step4Review({ data, onEdit }) {
  const {
    region,
    preferredCuisines = [],
    dietaryStyle,
    allergies = [],
    budgetLevel,
    transitionPath,
  } = data;

  return (
    <div className="space-y-6">
      {/* ── Summary Cards ──────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4]/60 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-[#F5AE38]" />
            <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#F5AE38]">
              YOUR PREFERENCES SUMMARY
            </p>
          </div>
        </div>

        {/* Step 1 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#1B3589]">
              Step 1 — Cuisines
            </p>
            <button
              type="button"
              onClick={() => onEdit(1)}
              className="font-jetbrains font-bold text-[10px] tracking-wider uppercase text-[#E0187A] hover:underline cursor-pointer"
            >
              Edit →
            </button>
          </div>
          <ReviewRow
            label="Region"
            value={resolveLabel(region, REGION_OPTIONS)}
            accent="#1B3589"
          />
          <ReviewRow
            label="Cuisines"
            value={preferredCuisines.map((id) => resolveLabel(id, CUISINE_OPTIONS))}
            accent="#E0187A"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#F0EAD6] mb-6" />

        {/* Step 2 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#E0187A]">
              Step 2 — Constraints
            </p>
            <button
              type="button"
              onClick={() => onEdit(2)}
              className="font-jetbrains font-bold text-[10px] tracking-wider uppercase text-[#E0187A] hover:underline cursor-pointer"
            >
              Edit →
            </button>
          </div>
          <ReviewRow
            label="Diet Style"
            value={resolveLabel(dietaryStyle, DIETARY_STYLES)}
            accent="#E0187A"
          />
          <ReviewRow
            label="Allergies"
            value={allergies.map((id) => resolveLabel(id, ALLERGY_OPTIONS))}
            accent="#CB5638"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#F0EAD6] mb-6" />

        {/* Step 3 */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#1B7042]">
              Step 3 — Budget
            </p>
            <button
              type="button"
              onClick={() => onEdit(3)}
              className="font-jetbrains font-bold text-[10px] tracking-wider uppercase text-[#E0187A] hover:underline cursor-pointer"
            >
              Edit →
            </button>
          </div>
          <ReviewRow
            label="Budget"
            value={resolveLabel(budgetLevel, BUDGET_OPTIONS)}
            accent="#1B7042"
          />
          <ReviewRow
            label="Transition"
            value={resolveLabel(transitionPath, TRANSITION_PATH_OPTIONS)}
            accent="#6C5CE7"
          />
        </div>
      </div>

      {/* ── Confirmation Notice ────────────────────────────────────── */}
      <div className="flex items-start gap-3 px-5 py-4 rounded-xl bg-[#1B3589]/5 border border-[#1B3589]/15">
        <div className="w-5 h-5 rounded-full bg-[#1B3589] flex items-center justify-center shrink-0 mt-0.5">
          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2v4l2.5 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="font-dmsans text-xs text-[#4A4A5A] leading-relaxed">
          Once you click <strong>Save Preferences</strong>, our system will begin personalizing
          your swap recommendations. You can always return here to update them.
        </p>
      </div>
    </div>
  );
}
