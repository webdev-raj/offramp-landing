"use client";

import { useState, useEffect } from "react";
import ConversationList from "@/components/expert-dashboard/queries/ConversationList";
import ChatThread from "@/components/expert-dashboard/queries/ChatThread";
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
            status: "answered",
            unreadCount: 0,
            lastMessageAt: "Just now",
            messages: [...c.messages, newMsg],
          };
        }
        return c;
      })
    );
  };

  const handleScheduleSession = (convId, sessionData) => {
    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === convId) {
          return {
            ...c,
            status: "scheduled",
            scheduledSession: sessionData,
          };
        }
        return c;
      })
    );
  };

  const currentConversation = conversations.find((c) => c.id === selectedId);

  return (
    <div className="-m-6 sm:-m-10 lg:-m-12 h-screen flex flex-col md:flex-row overflow-hidden bg-white">
      {/* ── Loading / Error States ── */}
      {loading ? (
        <div className="flex-1 flex flex-col md:flex-row h-full animate-pulse">
          <div className="w-full md:w-80 lg:w-[360px] bg-[#1B2264]/10 h-full border-r border-[#E8DCC4]" />
          <div className="flex-1 bg-[#FFFDF5] h-full" />
        </div>
      ) : error ? (
        <div className="flex-1 flex items-center justify-center p-8 text-center bg-[#FFFDF5]">
          <p className="font-dmsans text-sm text-red-600">
            Failed to load conversations. Please refresh or try again later.
          </p>
        </div>
      ) : (
        /* ── Full-Screen Unified Two-Panel Workspace ── */
        <>
          {/* Left Panel: Conversation List */}
          <div
            className={`w-full md:w-80 lg:w-[360px] h-full shrink-0 ${
              isMobileThreadOpen ? "hidden md:flex flex-col" : "flex flex-col"
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
            className={`flex-1 h-full overflow-hidden ${
              !isMobileThreadOpen ? "hidden md:flex flex-col" : "flex flex-col"
            }`}
          >
            <ChatThread
              conversation={currentConversation}
              onBack={() => setIsMobileThreadOpen(false)}
              onSendMessage={handleSendMessage}
              onScheduleSession={handleScheduleSession}
            />
          </div>
        </>
      )}
    </div>
  );
}
