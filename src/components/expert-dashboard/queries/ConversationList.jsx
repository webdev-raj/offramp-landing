"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MessageSquare, CheckCheck } from "lucide-react";

export default function ConversationList({
  conversations = [],
  selectedId,
  onSelect,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = conversations.filter((conv) => {
    const nameMatch = conv.userName.toLowerCase().includes(searchQuery.toLowerCase());
    const lastMsg = conv.messages[conv.messages.length - 1]?.text || "";
    const msgMatch = lastMsg.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || msgMatch;
  });

  return (
    <div className="bg-white border-2 border-[#2542A5] rounded-3xl overflow-hidden flex flex-col h-[680px] shadow-md">
      {/* ── Search Header (WhatsApp Chat List Style) ─────────────────── */}
      <div className="p-4 bg-[#FBF3E3] border-b border-[#E8DCC4]">
        <div className="relative">
          <Search className="w-4 h-4 text-[#7A7A8A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search queries or user name..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8DCC4] text-xs sm:text-sm font-dmsans text-[#1E2538] placeholder:text-[#9A9AAA] focus:outline-none focus:ring-2 focus:ring-[#2542A5]/30 transition-all"
          />
        </div>
      </div>

      {/* ── Conversations Scroll Area ────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#E8DCC4]/50">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-sm font-dmsans text-[#7A7A8A]">
            No conversations match your search.
          </div>
        ) : (
          filtered.map((conv) => {
            const isSelected = selectedId === conv.id;
            const lastMsg = conv.messages[conv.messages.length - 1];
            const hasUnread = (conv.unreadCount || 0) > 0;

            return (
              <button
                key={conv.id}
                type="button"
                onClick={() => onSelect(conv.id)}
                className={`w-full text-left p-4 sm:p-4.5 flex items-start gap-3.5 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#FFF5E0] border-l-4 border-l-[#E0187A]"
                    : "hover:bg-[#FBF3E3]/50"
                }`}
              >
                {/* Avatar with unread indicator dot */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#E8DCC4] shrink-0 border border-[#E8DCC4]">
                  <Image
                    src={conv.avatarUrl}
                    alt={conv.userName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {hasUnread && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#E0187A] border-2 border-white" />
                  )}
                </div>

                {/* Info & Snippet */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-montserrat font-black text-sm text-[#1E2538] truncate">
                      {conv.userName}
                    </h4>
                    <span className={`font-dmsans text-[11px] shrink-0 ${
                      hasUnread ? "text-[#E0187A] font-bold" : "text-[#9A9AAA]"
                    }`}>
                      {conv.lastMessageAt}
                    </span>
                  </div>

                  <p className="font-dmsans text-xs text-[#5A5A6A] truncate">
                    {lastMsg?.sender === "expert" && (
                      <span className="text-[#1B7042] font-semibold mr-1">You: </span>
                    )}
                    {lastMsg?.text || "No messages yet"}
                  </p>
                </div>

                {/* Unread Message Count Badge */}
                {hasUnread && (
                  <div className="shrink-0 pt-0.5">
                    <span className="font-jetbrains font-extrabold text-[10px] w-5 h-5 rounded-full bg-[#E0187A] text-white flex items-center justify-center shadow-xs">
                      {conv.unreadCount}
                    </span>
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
