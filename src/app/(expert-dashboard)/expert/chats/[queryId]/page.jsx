"use client";

// ⚠️  CHAT PLACEHOLDER — FUTURE PROMPT REQUIRED
//
// The designer flagged (Figma comment, Anshuman → raj):
//   "just remember to redirect it directly to specific user chat"
//   raj replied: "currently i dont coded this part ill call U tomorrow then explain it again"
//
// This route exists solely so the "ANSWER" button in UnansweredQueriesList doesn't 404.
// A real chat/messaging interface must be built in a dedicated future prompt.
// Do NOT build chat UI here — this is intentionally a placeholder.

import Link from "next/link";

export default function ExpertChatPlaceholderPage({ params }) {
  const { queryId } = params;

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white rounded-2xl border border-[#E8DCC4] p-10 max-w-lg w-full shadow-sm">
        <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.28em] uppercase text-[#E0187A] mb-3">
          CHAT — COMING SOON
        </p>
        <h1 className="font-montserrat font-black text-2xl text-[#1E2538] mb-3">
          Chat feature not yet built
        </h1>
        <p className="font-dmsans text-sm text-[#7A7A8A] mb-2 leading-relaxed">
          This page is a scaffold for the direct expert ↔ user chat conversation
          (query <code className="font-mono bg-[#FBF3E3] px-1 rounded text-[#1B2264]">{queryId}</code>).
        </p>
        <p className="font-dmsans text-xs text-[#9A9AAA] mb-6">
          The designer has flagged that "ANSWER" should open a direct chat with the specific user.
          This will be implemented in a dedicated future prompt.
        </p>
        <Link
          href="/expert"
          className="inline-flex items-center gap-2 font-jetbrains font-extrabold text-xs tracking-widest uppercase px-6 py-3 rounded-xl bg-[#E0187A] text-white hover:bg-[#c41267] transition-all shadow-sm"
        >
          ← Back to Overview
        </Link>
      </div>
    </div>
  );
}
