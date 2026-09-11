"use client";

import { BUDGET_OPTIONS } from "@/lib/api/dashboard";

// ─── Budget Card ───────────────────────────────────────────────────────────────
function BudgetCard({ option, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={`relative flex flex-col gap-4 p-5 rounded-xl  border-2 text-left transition-all cursor-pointer ${
        selected
          ? "text-white shadow-lg border-transparent"
          : "bg-white border-[#E8DCC4] hover:shadow-md hover:border-[#D6C99A]"
      }`}
      style={
        selected
          ? { backgroundColor: option.color, borderColor: option.color }
          : {}
      }
    >
      {/* Top-left circle indicator */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
          selected
            ? "bg-white/25"
            : "border-2 border-[#D6C99A]"
        }`}
      >
        {selected && (
          <svg className="w-4 h-4 text-white" viewBox="0 0 12 12" fill="none">
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

      {/* Label + Description */}
      <div>
        <p
          className="font-jetbrains font-extrabold text-lg tracking-wider uppercase mb-1"
          style={selected ? {} : { color: option.color }}
        >
          {option.label}
        </p>
        <p
          className={`font-dmsans text-base w-[78%] leading-tight ${
            selected ? "text-white/80" : "text-[#7A7A8A]"
          }`}
        >
          {option.description}
        </p>
      </div>
    </button>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Step3Budget({ data, onChange }) {
  const { budgetLevel } = data;

  return (
    <div className="space-y-4">
      {/* ── Budget Cards Row ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {BUDGET_OPTIONS.map((opt) => (
          <BudgetCard
            key={opt.id}
            option={opt}
            selected={budgetLevel === opt.id}
            onSelect={(id) => onChange({ budgetLevel: id })}
          />
        ))}
      </div>

      {/* ── Info Banner ───────────────────────────────────────────── */}
      <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-[black]/10 text-black">
        <svg
          className="w-4 h-4 mt-0.5 shrink-0 text-black"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 7v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="8" cy="5" r="0.75" fill="currentColor" />
        </svg>
        <p className="font-dmsans text-sm leading-relaxed">
          Budget level affects ranking, but all swaps are designed to be
          affordable and accessible.
        </p>
      </div>
    </div>
  );
}
