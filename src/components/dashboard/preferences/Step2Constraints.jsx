"use client";

import { ALLERGY_OPTIONS, TRANSITION_PATH_OPTIONS } from "@/lib/api/dashboard";

// const DIETARY_STYLES = [
//   { id: "vegetarian", label: "Vegetarian", icon: "🥦", color: "#1B7042" },
//   { id: "vegan", label: "Vegan", icon: "🌱", color: "#2A8050" },
//   { id: "jain", label: "Jain", icon: "⚪", color: "#4A5A9A" },
//   { id: "keto", label: "Keto / Low-carb", icon: "🥩", color: "#CB5638" },
//   { id: "gluten-free", label: "Gluten-Free", icon: "🌾", color: "#B59963" },
//   { id: "no-restriction", label: "No Restriction", icon: "✨", color: "#6C5CE7" },
// ];

// ─── Coming Soon Divider ───────────────────────────────────────────────────────
function ComingSoonDivider() {
  return (
    <div className="flex items-center gap-2 my-3">
      <svg className="w-3.5 h-3.5 text-[#C4A95A] shrink-0" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 5v3l2 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-jetbrains text-[10px] font-bold tracking-[0.18em] uppercase text-[#C4A95A]">
        Coming Soon
      </span>
      <div className="flex-1 h-px bg-[#E8DCC4]" />
    </div>
  );
}

// ─── Allergy Chip ──────────────────────────────────────────────────────────────
function AllergyChip({ option, selected, onToggle }) {
  const isDisabled = !option.available;

  if (isDisabled) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-dashed border-[#D6C99A] text-[#9A8E6E] opacity-50 cursor-not-allowed select-none font-dmsans text-xs">
        <span className="text-[10px]">⊘</span>
        {option.label}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onToggle(option.id)}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 font-dmsans font-medium text-sm transition-all cursor-pointer select-none ${
        selected
          ? "bg-[#CB3A6B] border-[#CB3A6B] text-white shadow-sm"
          : "bg-white border-[#D6C99A] text-[#2E2E3A] hover:border-[#CB3A6B]/50 hover:bg-[#FFF0F5]"
      }`}
    >
      {selected && (
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {option.label}
    </button>
  );
}

// ─── Transition Path Chip ──────────────────────────────────────────────────────
function TransitionChip({ option, selected, onSelect }) {
  const isDisabled = !option.available;

  if (isDisabled) {
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-dashed border-[#D6C99A] text-[#9A8E6E] opacity-50 cursor-not-allowed select-none font-dmsans text-sm">
        <span className="text-[10px]">⊘</span>
        {option.label}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border-2 font-dmsans font-medium text-sm transition-all cursor-pointer select-none ${
        selected
          ? "bg-[#CB5638] border-[#CB5638] text-white shadow-sm"
          : "bg-white border-[#D6C99A] text-[#2E2E3A] hover:border-[#CB5638]/50 hover:bg-[#FFF4F0]"
      }`}
    >
      {selected && (
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {option.label}
    </button>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Step2Constraints({ data, onChange }) {
  const { transitionPath, allergies = [] } = data;

  // function selectDiet(id) {
  //   onChange({ dietaryStyle: id });
  // }

  function toggleAllergy(id) {
    const next = allergies.includes(id)
      ? allergies.filter((a) => a !== id)
      : [...allergies, id];
    onChange({ allergies: next });
  }

  const availableAllergies = ALLERGY_OPTIONS.filter((o) => o.available);
  const disabledAllergies = ALLERGY_OPTIONS.filter((o) => !o.available);
  const availableTransitions = TRANSITION_PATH_OPTIONS.filter((o) => o.available);
  const disabledTransitions = TRANSITION_PATH_OPTIONS.filter((o) => !o.available);

  return (
    <div className="space-y-4">
      {/* ── Allergies Panel ────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/70 shadow-sm">
        {/* Header */}
        <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#8A8070] mb-1">
          Allergies
        </p>
        <p className="font-dmsans text-sm text-[#5A5A6A] mb-4">
          Help us avoid recommending dishes you can&apos;t eat.
        </p>

        {/* Available allergy chips */}
        <div className="flex flex-wrap gap-2">
          {availableAllergies.map((opt) => (
            <AllergyChip
              key={opt.id}
              option={opt}
              selected={allergies.includes(opt.id)}
              onToggle={toggleAllergy}
            />
          ))}
        </div>

        {/* Coming Soon divider + disabled chips */}
        {disabledAllergies.length > 0 && <ComingSoonDivider />}
        {disabledAllergies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {disabledAllergies.map((opt) => (
              <AllergyChip
                key={opt.id}
                option={opt}
                selected={false}
                onToggle={() => {}}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Diet Transition Path Panel ─────────────────────────────── */}
      <div className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/70 shadow-sm">
        {/* Header */}
        <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#8A8070] mb-1">
          Diet Transition Path
        </p>
        <p className="font-dmsans text-sm text-[#5A5A6A] mb-4">
          Where do you want to go?
        </p>

        {/* Available transition chips */}
        <div className="flex flex-wrap gap-2">
          {availableTransitions.map((opt) => (
            <TransitionChip
              key={opt.id}
              option={opt}
              selected={transitionPath === opt.id}
              onSelect={(id) => onChange({ transitionPath: id })}
            />
          ))}
        </div>

        {/* Coming Soon divider + disabled chips */}
        {disabledTransitions.length > 0 && <ComingSoonDivider />}
        {disabledTransitions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {disabledTransitions.map((opt) => (
              <TransitionChip
                key={opt.id}
                option={opt}
                selected={false}
                onSelect={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
