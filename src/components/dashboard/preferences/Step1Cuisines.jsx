"use client";

import { REGION_OPTIONS, CUISINE_OPTIONS } from "@/lib/api/dashboard";

// ─── Region Row ────────────────────────────────────────────────────────────────
function RegionRow({ option, selected, onSelect }) {
  const isDisabled = !option.available;

  if (isDisabled) {
    return (
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-dashed border-[#D6C99A] bg-transparent opacity-50 cursor-not-allowed select-none">
        <span className="text-[#9A8E6E] text-[11px]">⊘</span>
        <span className="font-dmsans text-sm text-[#9A8E6E]">{option.label}</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={`w-full flex items-center gap-2.5 px-4 py-3 rounded-xl border-2 transition-all cursor-pointer select-none text-left ${
        selected
          ? "bg-[#1B3589] border-[#1B3589] text-white shadow-md"
          : "bg-white border-[#E8DCC4] text-[#2E2E3A] hover:border-[#1B3589]/40 hover:bg-[#F0F3FF]"
      }`}
    >
      {selected && (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <span className="font-dmsans font-medium text-sm">{option.label}</span>
    </button>
  );
}

// ─── Cuisine Chip ──────────────────────────────────────────────────────────────
function CuisineChip({ option, selected, onToggle }) {
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
          ? "bg-[#F5AE38] border-[#F5AE38] text-[#1E1E1E] shadow-sm"
          : "bg-white border-[#D6C99A] text-[#2E2E3A] hover:border-[#F5AE38]/60 hover:bg-[#FEF9EC]"
      }`}
    >
      {selected && (
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {option.label}
    </button>
  );
}

// ─── Coming Soon Divider ───────────────────────────────────────────────────────
function ComingSoonDivider() {
  return (
    <div className="flex items-center gap-2 my-3">
      <svg className="w-3.5 h-3.5 text-[#C4A95A] shrink-0" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-jetbrains text-[10px] font-bold tracking-[0.18em] uppercase text-[#C4A95A]">
        Coming Soon
      </span>
      <div className="flex-1 h-px bg-[#E8DCC4]" />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
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

  const availableRegions = REGION_OPTIONS.filter((o) => o.available);
  const disabledRegions = REGION_OPTIONS.filter((o) => !o.available);
  const availableCuisines = CUISINE_OPTIONS.filter((o) => o.available);
  const disabledCuisines = CUISINE_OPTIONS.filter((o) => !o.available);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* ── Left: Region Panel ──────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/70 shadow-sm">
        {/* Panel Header */}
        <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#8A8070] mb-4">
          Region
        </p>

        {/* Available Regions */}
        <div className="flex flex-col gap-2">
          {availableRegions.map((opt) => (
            <RegionRow
              key={opt.id}
              option={opt}
              selected={region === opt.id}
              onSelect={selectRegion}
            />
          ))}
        </div>

        {/* Coming Soon divider */}
        {disabledRegions.length > 0 && <ComingSoonDivider />}

        {/* Disabled Regions */}
        {disabledRegions.length > 0 && (
          <div className="flex flex-col gap-2">
            {disabledRegions.map((opt) => (
              <RegionRow
                key={opt.id}
                option={opt}
                selected={false}
                onSelect={() => {}}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Right: Preferred Cuisines Panel ────────────────────────────── */}
      <div className="bg-white rounded-2xl p-5 border border-[#E8DCC4]/70 shadow-sm">
        {/* Panel Header */}
        <div className="flex items-center gap-2 mb-4">
          <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.2em] uppercase text-[#8A8070]">
            Preferred Cuisines
          </p>
          <span className="font-jetbrains text-[9px] tracking-wider text-[#B0A484] normal-case">
            optional
          </span>
        </div>

        {/* Available Cuisines */}
        <div className="flex flex-wrap gap-2">
          {availableCuisines.map((opt) => (
            <CuisineChip
              key={opt.id}
              option={opt}
              selected={preferredCuisines.includes(opt.id)}
              onToggle={toggleCuisine}
            />
          ))}
        </div>

        {/* Coming Soon divider */}
        {disabledCuisines.length > 0 && <ComingSoonDivider />}

        {/* Disabled Cuisines */}
        {disabledCuisines.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {disabledCuisines.map((opt) => (
              <CuisineChip
                key={opt.id}
                option={opt}
                selected={false}
                onToggle={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
