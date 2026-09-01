"use client";

import { useState, useEffect } from "react";
import ConversationList from "@/components/expert-dashboard/queries/ConversationList";
import ChatThread from "@/components/expert-dashboard/queries/ChatThread";
import DiamondDivider from "@/components/shared/DiamondDivider";
import { useExpertQueries } from "@/lib/hooks/useExpertQueries";

export default function ExpertQueriesPage() {
  const { data: initialConversations, loading, error } = useExpertQueries();
  const [conversations, setConversations] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isMobileThreadOpen, setIsMobileThreadOpen] = useState(false);

  // Sync loaded data to local state
  useEffect(() => {
    if (initialConversations && initialConversations.length > 0) {
      setConversations(initialConversations);
      setSelectedId((prev) => prev || initialConversations[0]?.id);
    }
  }, [initialConversations]);

  const handleSelect = (convId) => {
    setSelectedId(convId);
    setIsMobileThreadOpen(true);
  };

  const handleSendMessage = (convId, text) => {
    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === convId) {
          const newMsg = {
            id: `msg_${Date.now()}`,
            sender: "expert",
            text,
            timestamp: "Just now",
          };
          return {
            ...c,
            unreadCount: 0,
            lastMessageAt: "Just now",
            messages: [...c.messages, newMsg],
          };
        }
        return c;
      })
    );
  };

  const currentConversation = conversations.find((c) => c.id === selectedId);

  return (
    <div>
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#E0187A] font-bold text-xs">◆</span>
          <p className="font-jetbrains text-[10px] sm:text-xs tracking-[0.25em] font-extrabold text-[#B59963] uppercase">
            USER QUESTIONS
          </p>
        </div>
        <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-[#1E2538]">
          <span className="text-[#E0187A]">Queries </span> &amp; Conversations
        </h1>
        {/* <p className="font-dmsans text-xs sm:text-sm text-[#7A7A8A] mt-2">
          WhatsApp-style direct messaging thread with users seeking nutritional guidance.
        </p> */}
      </div>

      {/* ── Loading / Error States ──────────────────────────────────── */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="md:col-span-5 h-[680px] bg-white border-2 border-[#E8DCC4] rounded-3xl animate-pulse p-6" />
          <div className="md:col-span-7 h-[680px] bg-white border-2 border-[#E8DCC4] rounded-3xl animate-pulse p-6" />
        </div>
      ) : error ? (
        <div className="bg-white rounded-2xl p-8 border border-red-200 text-center mb-8">
          <p className="font-dmsans text-sm text-red-600">
            Failed to load conversations. Please try again.
          </p>
        </div>
      ) : (
        /* ── Responsive Two-Panel WhatsApp-Style Grid ──────────────── */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          {/* Left Panel: Conversation List */}
          <div
            className={`md:col-span-5 ${
              isMobileThreadOpen ? "hidden md:block" : "block"
            }`}
          >
            <ConversationList
              conversations={conversations}
              selectedId={selectedId}
              onSelect={handleSelect}
            />
          </div>

          {/* Right Panel: Chat Thread View */}
          <div
            className={`md:col-span-7 ${
              !isMobileThreadOpen ? "hidden md:block" : "block"
            }`}
          >
            <ChatThread
              conversation={currentConversation}
              onBack={() => setIsMobileThreadOpen(false)}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      )}

      {/* ── Shared Bottom Divider ────────────────────────────────────── */}
      <DiamondDivider variant="triangles" count={44} className="pt-4 pb-12" />
    </div>
  );
}
