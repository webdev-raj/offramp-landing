"use client";

import { BUDGET_OPTIONS, TRANSITION_PATH_OPTIONS } from "@/lib/api/dashboard";

export default function Step3Budget({ data, onChange }) {
  const { budgetLevel, transitionPath } = data;

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
