"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, Calendar, Check, CheckCircle2, AlertCircle } from "lucide-react";
import ScheduleConnectModal from "./ScheduleConnectModal";
import { useDailyMessageLimit } from "@/lib/hooks/useDailyMessageLimit";

export default function ChatThread({
  conversation,
  onSendMessage,
  onScheduleSession,
}) {
  const [inputText, setInputText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  // Daily message rate limit hook
  const {
    count: dailySentCount,
    limit: dailyLimit,
    remaining,
    limitReached,
    isNearLimit,
    nextMessageNumber,
    incrementCount,
  } = useDailyMessageLimit();

  const isTyping = isFocused && inputText.trim().length > 0;

  if (!conversation) {
    return (
      <div className="bg-[#FFFDF5] h-full flex items-center justify-center p-8 text-center text-[#7A7A8A] font-dmsans">
        Select a query from the left panel to begin answering.
      </div>
    );
  }

  const isScheduled =
    conversation.status === "scheduled" ||
    Boolean(conversation.scheduledSession);
  const isAnswered = conversation.status === "answered";
  const isAwaitingResponse = conversation.status === "unanswered";

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    if (limitReached) {
      alert("Daily message limit of 15 messages reached. Resets at midnight.");
      return;
    }

    const success = incrementCount();
    if (!success) {
      alert("Daily message limit reached.");
      return;
    }

    onSendMessage(conversation.id, inputText.trim());
    setInputText("");
    setIsFocused(false);
  };

  const handleScheduleConfirm = (sessionData) => {
    onScheduleSession(conversation.id, sessionData);
  };

  return (
    <div className="bg-[#FFFDF5] h-full flex flex-col overflow-hidden">
      {/* ── Top Header (Navy #1B2264) ────────────────────────────────── */}
      <div className="bg-[#1B3589] px-6 py-4.5 flex items-center justify-between shrink-0 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-[#E8DCC4] shrink-0 border border-[#F5AE38]">
            <Image
              src={conversation.avatarUrl}
              alt={conversation.userName}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h3 className="font-montserrat-bold font-black text-base sm:text-lg text-white leading-tight">
              {conversation.userName}
            </h3>
            <p className="font-dmsans text-xs text-white/60 mt-0.5">
              {isScheduled && conversation.scheduledSession
                ? `Session: ${conversation.scheduledSession.date}, ${conversation.scheduledSession.time}`
                : isAnswered
                ? "Query answered"
                : "Awaiting your response"}
            </p>
          </div>
        </div>

        {/* Header Action Button (State-dependent) */}
        <div>
          {isScheduled ? (
            <div className="bg-[#1B7042] text-white font-jetbrains font-extrabold text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm">
              <Check className="w-3.5 h-3.5" />
              <span>SCHEDULED</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsScheduleModalOpen(true)}
              className="bg-[#F5AE38] hover:bg-[#E0981E] active:scale-95 text-[#1E1E1E] font-jetbrains font-extrabold text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>CONNECT</span>
            </button>
          )}
        </div>
      </div>

      {/* ── Message Thread Body (Cream #FFFDF5) ──────────────────────── */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FFFDF5]">
        {conversation.messages.map((msg, idx) => {
          const isUser = msg.sender === "user";

          if (isUser) {
            return (
              <div key={msg.id || idx} className="flex flex-col items-start max-w-xl">
                {/* User Name Label */}
                <span className="font-jetbrains text-[10px] text-[#8C827A] font-semibold mb-1 ml-10">
                  {conversation.userName}
                </span>

                <div className="flex items-start gap-2.5 w-full">
                  {/* Avatar */}
                  <div className="relative w-7 h-7 rounded-sm overflow-hidden bg-[#E8DCC4] shrink-0 mt-0.5 border border-black/5">
                    <Image
                      src={conversation.avatarUrl}
                      alt={conversation.userName}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* White User Message Bubble */}
                  <div className="bg-white rounded-2xl rounded-tl-xs p-4 sm:p-5 text-xs sm:text-sm text-[#1E1E1E] leading-relaxed shadow-xs border border-black/5 max-w-lg">
                    {msg.text}
                  </div>
                </div>

                <span className="text-[10px] font-jetbrains text-[#A0988A] mt-1 ml-10">
                  {msg.timestamp}
                </span>
              </div>
            );
          }

          // Expert Reply
          return (
            <div key={msg.id || idx} className="flex flex-col items-end max-w-xl ml-auto">
              {/* Expert Name Label */}
              <span className="font-jetbrains text-[10px] text-[#8C827A] font-semibold mb-1 mr-10">
                Dr. Meera
              </span>

              <div className="flex items-start justify-end gap-2.5 w-full">
                {/* Navy Expert Message Bubble */}
                <div className="bg-[#1B2264] text-white rounded-2xl rounded-tr-xs p-4 sm:p-5 text-xs sm:text-sm leading-relaxed shadow-sm max-w-lg">
                  {msg.text}
                </div>

                {/* Dr. Meera Avatar */}
                <div className="relative w-7 h-7 rounded-sm overflow-hidden bg-[#1B2264] shrink-0 mt-0.5 border border-black/10">
                  <Image
                    src="/images/experts/meera_iyer.jpg"
                    alt="Dr. Meera Iyer"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <span className="text-[10px] font-jetbrains text-[#A0988A] mt-1 mr-10">
                {msg.timestamp}
              </span>
            </div>
          );
        })}

        {/* Scheduled Session Confirmation Banner (Inline) */}
        {isScheduled && conversation.scheduledSession && (
          <div className="my-3">
            <div className="border-2 border-[#1B7042] bg-white rounded-xl p-3.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-jetbrains font-bold text-[#1B7042] shadow-xs max-w-md mx-auto">
              <Calendar className="w-4 h-4 text-[#1B7042]" />
              <span>
                Session confirmed &ndash; {conversation.scheduledSession.date},{" "}
                {conversation.scheduledSession.time}
              </span>
            </div>
          </div>
        )}

        {/* Typing Indicator — ONLY shown when expert is actively typing into the input */}
        {isTyping && (
          <div className="flex items-center justify-end gap-2.5 pt-1 animate-in fade-in duration-200">
            <div className="bg-white border border-[#E8DCC4] rounded-2xl rounded-tr-xs px-4 py-3 flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8987E] animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8987E] animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8987E] animate-bounce [animation-delay:0.4s]" />
            </div>
            <div className="relative w-7 h-7 rounded-sm overflow-hidden bg-[#1B2264] shrink-0 opacity-80">
              <Image
                src="/images/experts/meera_iyer.jpg"
                alt="Dr. Meera Iyer"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        )}

        {/* Query Answered Bottom Badge */}
        {isAnswered && (
          <div className="pt-2 flex items-center justify-center gap-1.5 font-jetbrains font-extrabold text-[11px] tracking-widest uppercase text-[#1B7042]">
            <CheckCircle2 className="w-4 h-4 text-[#1B7042]" />
            <span>QUERY ANSWERED</span>
          </div>
        )}
      </div>

      {/* ── Reply Input Box (Only shown for active / unanswered queries) ── */}
      {!isAnswered && (
        <div className="p-4 bg-[#FAF3E3] border-t border-[#E8DCC4] shrink-0 space-y-2">
          {/* Daily Limit Warning Banner (from 10th send onward) */}
          {isNearLimit && !limitReached && (
            <div className="flex items-center justify-between bg-[#FFF5DB] border border-[#F5AE38] px-3.5 py-1.5 rounded-xl text-xs font-jetbrains text-[#8C6B10] shadow-xs">
              <span className="flex items-center gap-1.5 font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-[#F5AE38]" />
                Daily Allowance: {nextMessageNumber}/{dailyLimit} messages
              </span>
              <span className="text-[10px] text-[#A08848]">
                {remaining} remaining today
              </span>
            </div>
          )}

          {/* Daily Limit Reached Banner */}
          {limitReached && (
            <div className="flex items-center gap-2 bg-[#CB5638]/10 border border-[#CB5638] px-3.5 py-2 rounded-xl text-xs font-jetbrains font-bold text-[#CB5638]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                Daily message limit reached ({dailyLimit}/{dailyLimit}). Resets
                at midnight.
              </span>
            </div>
          )}

          {/* Form container */}
          <form
            onSubmit={handleSend}
            className="bg-[#FDE5A9] rounded-2xl p-2.5 flex items-center gap-3 shadow-inner border border-[#E6CE93]"
          >
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              disabled={limitReached}
              placeholder={
                limitReached
                  ? "Daily message limit reached (15/15)..."
                  : "Type your expert answer..."
              }
              rows={1}
              className="bg-transparent text-[#1E1E1E] placeholder-[#8C7A58] text-xs sm:text-sm font-dmsans focus:outline-none flex-1 resize-none py-1.5 px-2.5 disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={limitReached || !inputText.trim()}
              className="w-10 h-10 rounded-xl bg-[#FDE3A0] hover:bg-[#FCD34D] active:scale-95 text-[#523A0B] flex items-center justify-center shrink-0 shadow-sm transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              title={
                limitReached ? "Limit reached" : "Send answer (Enter to send)"
              }
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* ── Schedule Connect Modal ──────────────────────────────────── */}
      <ScheduleConnectModal
        isOpen={isScheduleModalOpen}
        conversation={conversation}
        onClose={() => setIsScheduleModalOpen(false)}
        onConfirm={handleScheduleConfirm}
      />
    </div>
  );
}
