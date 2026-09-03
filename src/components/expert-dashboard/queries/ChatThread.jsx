"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, Send, PhoneCall, CheckCheck, User, Calendar } from "lucide-react";
import ScheduleConnectModal from "./ScheduleConnectModal";

export default function ChatThread({
  conversation,
  onBack,
  onSendMessage,
}) {
  const [inputText, setInputText] = useState("");
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // // const scrollToBottom = () => {
  // //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // // };

  // useEffect(() => {
  //   // scrollToBottom();
  // }, [conversation?.messages]);

  if (!conversation) {
    return (
      <div className="bg-white border-2 border-[#2542A5] rounded-3xl h-[680px] flex flex-col items-center justify-center p-8 text-center shadow-md">
        <div className="w-16 h-16 rounded-full bg-[#FBF3E3] text-[#2542A5] flex items-center justify-center mb-4">
          <User className="w-8 h-8" />
        </div>
        <h3 className="font-montserrat font-black text-xl text-[#1E2538] mb-2">
          Select a Conversation
        </h3>
        <p className="font-dmsans text-sm text-[#7A7A8A] max-w-xs">
          Choose a user query from the list to view the full chat history, reply, or schedule a direct consultation call.
        </p>
      </div>
    );
  }

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    onSendMessage(conversation.id, inputText.trim());
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="bg-white border-2 border-[#2542A5] rounded-3xl h-[680px] flex flex-col overflow-hidden shadow-md">
        {/* ── Chat Header ─────────────────────────────────────────────── */}
        <div className="p-4 sm:px-6 bg-[#FBF3E3] border-b border-[#E8DCC4] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Mobile back button */}
            <button
              type="button"
              onClick={onBack}
              className="md:hidden p-1.5 rounded-lg text-[#1E2538] hover:bg-black/5"
              aria-label="Back to conversations list"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#E8DCC4] shrink-0 border border-[#E8DCC4]">
              <Image
                src={conversation.avatarUrl}
                alt={conversation.userName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div>
              <h3 className="font-montserrat-bold font-black text-sm sm:text-lg text-[#1E2538] leading-tight">
                {conversation.userName}
              </h3>
              <p className="font-dmsans text-[11px] text-[#1B7042] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B7042]" />
                Asking clinical query · Active
              </p>
            </div>
          </div>

          {/* Connect Option Button (Opens 3-day scheduler modal) */}
          <button
            type="button"
            onClick={() => setIsConnectModalOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 font-jetbrains font-extrabold text-[11px] sm:text-xs tracking-wider uppercase px-3.5 sm:px-5 py-2.5 rounded-xl bg-[#1B7042] hover:bg-[#145733] text-white transition-all shadow-sm cursor-pointer active:scale-95 shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </div>

        {/* ── Chat Messages Scroll Area ─────────────────────────────────── */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#FFFDF5]/40">
          {/* Top date divider */}
          <div className="flex items-center justify-center my-2">
            <span className="bg-[#F5ECD5] px-3 py-1 rounded-full font-jetbrains text-[10px] tracking-wider uppercase text-[#7A7A8A] font-bold">
              Direct Query Thread
            </span>
          </div>

          {conversation.messages.map((msg) => {
            const isExpert = msg.sender === "expert";

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isExpert ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3.5 sm:p-4 rounded-2xl shadow-xs ${
                    isExpert
                      ? "bg-[#DC346B] text-white rounded-tr-xs"
                      : "bg-white border border-[#E8DCC4] text-[#1E1E1E] rounded-tl-xs"
                  }`}
                >
                  <p className="font-dmsans text-sm sm:text-[15px] leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </p>
                  <div
                    className={`flex items-center gap-1 justify-end mt-1.5 text-[10px] font-dmsans ${
                      isExpert ? "text-white/70" : "text-[#9A9AAA]"
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {isExpert && <CheckCheck className="w-3.5 h-3.5 text-white/90" />}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* ── Reply Input Box ─────────────────────────────────────────── */}
        <form
          onSubmit={handleSend}
          className="p-3 sm:p-4 bg-[#FBF3E3] border-t border-[#E8DCC4] flex items-center gap-2 sm:gap-3"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Reply to ${conversation.userName} with nutrition guidance...`}
            className="flex-1 px-4 py-3 rounded-2xl bg-white border border-[#E8DCC4] text-xs sm:text-sm font-dmsans text-[#1E2538] placeholder:text-[#9A9AAA] focus:outline-none focus:ring-2 focus:ring-[#2542A5]/30 transition-all"
          />

          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-3 sm:px-5 sm:py-3 rounded-2xl bg-[#E0187A] hover:bg-[#c41267] disabled:opacity-40 text-white font-jetbrains font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#E0187A]/20 cursor-pointer disabled:cursor-not-allowed active:scale-95 shrink-0"
          >
            <span className="hidden sm:inline">Send</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* ── Schedule Connect Modal ────────────────────────────────────── */}
      <ScheduleConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        userName={conversation.userName}
      />
    </>
  );
}
