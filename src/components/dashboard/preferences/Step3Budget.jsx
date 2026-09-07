"use client";

import { BUDGET_OPTIONS } from "@/lib/api/dashboard";

export default function Step3Budget({ data, onChange }) {
  const { budgetLevel } = data;

  return (
    <div className="space-y-8">
      {/* ── Budget Level ─────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl p-6 border border-[#E8DCC4]/60 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-6 rounded-full bg-[#1B7042]" />
          <p className="font-jetbrains font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#1B7042]">
            BUDGET LEVEL
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {BUDGET_OPTIONS.map((opt) => {
            const isSelected = budgetLevel === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange({ budgetLevel: opt.id })}
                className={`relative flex flex-col gap-3 p-5 rounded-2xl border-2 text-left transition-all cursor-pointer group ${
                  isSelected
                    ? "shadow-lg scale-[1.02]"
                    : "border-[#E8DCC4] bg-white hover:shadow-md"
                }`}
                style={
                  isSelected
                    ? { borderColor: opt.color, backgroundColor: `${opt.color}10` }
                    : {}
                }
              >
                {/* Color swatch accent */}
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${opt.color}20` }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: opt.color }}
                  />
                </div>

                <div>
                  <p
                    className="font-jetbrains font-extrabold text-xs tracking-wider uppercase mb-1"
                    style={{ color: isSelected ? opt.color : "#1E2538" }}
                  >
                    {opt.label}
                  </p>
                  <p className="font-dmsans text-xs text-[#7A7A8A] leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                {isSelected && (
                  <div
                    className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: opt.color }}
                  >
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Transition Path ──────────────────────────────────────── */}
      
    </div>
  );
}
