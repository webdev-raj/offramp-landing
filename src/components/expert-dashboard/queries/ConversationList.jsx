"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function ConversationList({
  conversations = [],
  selectedId,
  onSelect,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter conversations by user name or message text
  const filteredConversations = useMemo(() => {
    if (!searchQuery.trim()) return conversations;
    const q = searchQuery.toLowerCase();
    return conversations.filter(
      (c) =>
        c.userName.toLowerCase().includes(q) ||
        c.messages.some((m) => m.text.toLowerCase().includes(q))
    );
  }, [conversations, searchQuery]);

  // Calculate dynamic unread total for the pill badge
  const unreadCountTotal = useMemo(() => {
    return conversations.filter((c) => c.unreadCount > 0).length;
  }, [conversations]);

  return (
    <div className="bg-white border-r border-[#E8DCC4] flex flex-col h-full overflow-hidden shrink-0">
      {/* ── Top Header (Navy #1B2264) ────────────────────────────────── */}
      <div className="bg-[#1B2264] p-5 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-haetten text-3xl sm:text-4xl text-white tracking-wide uppercase leading-none">
            Queries
          </h2>
          {unreadCountTotal > 0 && (
            <span className="bg-[#E0187A] text-white font-jetbrains font-extrabold text-[11px] tracking-wider px-3 py-1 rounded-full uppercase shadow-sm">
              {unreadCountTotal} NEW
            </span>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-white/40 text-white placeholder-white/50 text-xs font-dmsans rounded-xl py-2.5 pl-10 pr-4 outline-none transition-all"
          />
        </div>
      </div>

      {/* ── Scrollable Conversation Rows ────────────────────────────── */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#F0E6D2] bg-white">
        {filteredConversations.length === 0 ? (
          <div className="p-8 text-center text-[#7A7A8A] font-dmsans text-xs">
            No queries found matching &ldquo;{searchQuery}&rdquo;
          </div>
        ) : (
          filteredConversations.map((conv) => {
            const isSelected = conv.id === selectedId;
            const lastMsg = conv.messages[conv.messages.length - 1];
            const isAnsweredByExpert = lastMsg?.sender === "expert";
            const previewText = lastMsg ? lastMsg.text : "No messages yet";
            const hasUnread = conv.unreadCount > 0;

            return (
              <button
                key={conv.id}
                type="button"
                onClick={() => onSelect(conv.id)}
                className={`w-full text-left p-4 flex items-start gap-3.5 transition-all relative ${
                  isSelected
                    ? "bg-[#FFF5DB] border-l-4 border-[#E0187A] pl-3"
                    : "hover:bg-[#FAF6EC]"
                }`}
              >
                {/* User Avatar with Pink border if unread */}
                <div
                  className={`relative w-11 h-11 rounded-sm overflow-hidden bg-[#E8DCC4] shrink-0 border-2 ${
                    hasUnread ? "border-[#E0187A]" : "border-[#E8DCC4]"
                  }`}
                >
                  <Image
                    src={conv.avatarUrl}
                    alt={conv.userName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Name, Time & Message Preview */}
                <div className="flex-1 min-w-0 pr-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-montserrat-bold font-black text-sm text-[#1E1E1E] truncate">
                      {conv.userName}
                    </span>
                    <span className="text-[10px] font-jetbrains font-bold tracking-tight text-[#E0187A] shrink-0">
                      {conv.lastMessageAt}
                    </span>
                  </div>

                  <p className="font-dmsans text-xs text-[#6A6A7A] truncate leading-snug">
                    {isAnsweredByExpert ? (
                      <>
                        <span className="font-medium text-[#8A8A9A]">Ans: </span>
                        {previewText}
                      </>
                    ) : (
                      previewText
                    )}
                  </p>
                </div>

                {/* Pink Unread Circle Badge */}
                {hasUnread && (
                  <div className="w-5 h-5 rounded-full bg-[#E0187A] text-white font-jetbrains font-extrabold text-[10px] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {conv.unreadCount}
                  </div>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
