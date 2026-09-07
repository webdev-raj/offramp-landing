"use client";

import { REGION_OPTIONS, CUISINE_OPTIONS } from "@/lib/api/dashboard";

function OptionChip({ option, selected, onToggle, accentColor = "#1B3589" }) {
  const isDisabled = !option.available;

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={() => !isDisabled && onToggle(option.id)}
      className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-jetbrains font-extrabold text-[11px] tracking-wider uppercase transition-all cursor-pointer select-none ${
        isDisabled
          ? "border-[#E8DCC4] bg-[#FAF7F0] text-[#C4B89A] cursor-not-allowed"
          : selected
          ? "border-current text-white shadow-md scale-[1.02]"
          : "border-[#E8DCC4] bg-white text-[#4A4A5A] hover:border-[#1B3589]/40 hover:bg-[#F5F3FF]"
      }`}
      style={selected && !isDisabled ? { backgroundColor: accentColor, borderColor: accentColor } : {}}
    >
      {option.label}
      {isDisabled && (
        <span className="font-jetbrains text-[9px] tracking-wider text-[#C4B89A] normal-case font-normal ml-1">
          soon
        </span>
      )}
      {selected && !isDisabled && (
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default function Step1Cuisines({ data, onChange }) {
  const { region, preferredCuisines = [] } = data;

  function toggleCuisine(id) {
    const next = preferredCuisines.includes(id)
      ? preferredCuisines.filter((c) => c !== id)
      : [...preferredCuisines, id];
    onChange({ preferredCuisines: next });
  }

  function selectRegion(id) {
    onChange({ region: id });
  }

  return (
    <div className="space-y-8">
      {/* ── Region ──────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4]/60 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-6 rounded-full bg-[#1B3589]" />
          <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#1B3589]">
            SELECT YOUR REGION
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {REGION_OPTIONS.map((opt) => (
            <OptionChip
              key={opt.id}
              option={opt}
              selected={region === opt.id}
              onToggle={selectRegion}
              accentColor="#1B3589"
            />
          ))}
        </div>
      </div>

      {/* ── Cuisines ─────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4]/60 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-[#E0187A]" />
            <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#E0187A]">
              PREFERRED CUISINES
            </p>
          </div>
          {preferredCuisines.length > 0 && (
            <span className="font-jetbrains font-bold text-[10px] tracking-wider text-[#1B3589] bg-[#1B3589]/10 px-2.5 py-1 rounded-full">
              {preferredCuisines.length} selected
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {CUISINE_OPTIONS.map((opt) => (
            <OptionChip
              key={opt.id}
              option={opt}
              selected={preferredCuisines.includes(opt.id)}
              onToggle={toggleCuisine}
              accentColor="#E0187A"
            />
          ))}
        </div>
        {preferredCuisines.length === 0 && (
          <p className="mt-3 font-dmsans text-xs text-[#9A9AAA] italic">
            Select at least one cuisine to continue.
          </p>
        )}
      </div>
    </div>
  );
}
