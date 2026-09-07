"use client";

import { ALLERGY_OPTIONS,TRANSITION_PATH_OPTIONS } from "@/lib/api/dashboard";

// const DIETARY_STYLES = [
//   { id: "vegetarian", label: "Vegetarian", icon: "🥦", color: "#1B7042" },
//   { id: "vegan", label: "Vegan", icon: "🌱", color: "#2A8050" },
//   { id: "jain", label: "Jain", icon: "⚪", color: "#4A5A9A" },
//   { id: "keto", label: "Keto / Low-carb", icon: "🥩", color: "#CB5638" },
//   { id: "gluten-free", label: "Gluten-Free", icon: "🌾", color: "#B59963" },
//   { id: "no-restriction", label: "No Restriction", icon: "✨", color: "#6C5CE7" },
// ];

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

  return (
    <div className="space-y-8">
      {/* ── Dietary Style ─────────────────────────────────────────── */}
      {/* <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4]/60 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-6 rounded-full bg-[#E0187A]" />
          <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#E0187A]">
            DIETARY STYLE
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {DIETARY_STYLES.map((style) => {
            const isSelected = dietaryStyle === style.id;
            return (
              <button
                key={style.id}
                type="button"
                onClick={() => selectDiet(style.id)}
                className={`flex flex-col items-start gap-2 p-4 rounded-xl border-2 transition-all text-left cursor-pointer ${
                  isSelected
                    ? "shadow-md scale-[1.02]"
                    : "border-[#E8DCC4] bg-white hover:border-[#E0187A]/30 hover:bg-[#FFF5F9]"
                }`}
                style={
                  isSelected
                    ? {
                        borderColor: style.color,
                        backgroundColor: `${style.color}12`,
                      }
                    : {}
                }
              >
                <span className="text-xl">{style.icon}</span>
                <span
                  className="font-jetbrains font-extrabold text-[11px] tracking-wider uppercase"
                  style={{ color: isSelected ? style.color : "#4A4A5A" }}
                >
                  {style.label}
                </span>
              </button>
            );
          })}
        </div>
      </div> */}

      {/* ── Allergies / Intolerances ──────────────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4]/60 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-[#CB5638]" />
            <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#CB5638]">
              ALLERGIES & INTOLERANCES
            </p>
          </div>
          {allergies.length > 0 && (
            <span className="font-jetbrains font-bold text-[10px] tracking-wider text-[#CB5638] bg-[#CB5638]/10 px-2.5 py-1 rounded-full">
              {allergies.length} flagged
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {ALLERGY_OPTIONS.map((opt) => {
            const isDisabled = !opt.available;
            const isSelected = allergies.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                disabled={isDisabled}
                onClick={() => !isDisabled && toggleAllergy(opt.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border-2 font-jetbrains font-extrabold text-[11px] tracking-wider uppercase transition-all ${
                  isDisabled
                    ? "border-[#E8DCC4] bg-[#FAF7F0] text-[#C4B89A] cursor-not-allowed"
                    : isSelected
                    ? "bg-[#CB5638] border-[#CB5638] text-white shadow-md scale-[1.02]"
                    : "border-[#E8DCC4] bg-white text-[#4A4A5A] hover:border-[#CB5638]/40 hover:bg-[#FFF4F1] cursor-pointer"
                }`}
              >
                {opt.label}
                {isDisabled && (
                  <span className="font-normal text-[9px] normal-case text-[#C4B89A] ml-1">soon</span>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-4 font-dmsans text-xs text-[#9A9AAA]">
          We&apos;ll never recommend swaps containing these ingredients.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4]/60 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-6 rounded-full bg-[#6C5CE7]" />
          <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#6C5CE7]">
            TRANSITION PATH
          </p>
        </div>
        <p className="font-dmsans text-xs text-[#9A9AAA] mb-5 ml-4">
          The dietary journey you&apos;re currently on.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TRANSITION_PATH_OPTIONS.map((opt) => {
            const isDisabled = !opt.available;
            const isSelected = transitionPath === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                disabled={isDisabled}
                onClick={() => !isDisabled && onChange({ transitionPath: opt.id })}
                className={`flex items-center justify-between px-5 py-3.5 rounded-xl border-2 font-jetbrains font-extrabold text-xs tracking-wider uppercase transition-all ${
                  isDisabled
                    ? "border-[#E8DCC4] bg-[#FAF7F0] text-[#C4B89A] cursor-not-allowed"
                    : isSelected
                    ? "bg-[#6C5CE7] border-[#6C5CE7] text-white shadow-md"
                    : "border-[#E8DCC4] bg-white text-[#4A4A5A] hover:border-[#6C5CE7]/40 hover:bg-[#F5F3FF] cursor-pointer"
                }`}
              >
                <span>{opt.label}</span>
                {isDisabled ? (
                  <span className="font-normal text-[9px] normal-case text-[#C4B89A]">soon</span>
                ) : isSelected ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-[#C4B89A]" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
