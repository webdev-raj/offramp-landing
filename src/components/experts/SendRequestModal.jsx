"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, AlertCircle } from "lucide-react";
import PointsValue from "@/components/shared/PointsValue";

const CONTACT_OPTIONS = ["WhatsApp", "Video call", "Email"];
const URGENCY_OPTIONS = ["ASAP", "This week", "Flexible"];
const MIN_CHARS = 50;
const USER_STARTING_BALANCE = 450;

export default function SendRequestModal({
  isOpen,
  expert,
  onClose,
  onSubmitSuccess,
}) {
  const [helpMessage, setHelpMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState("WhatsApp");
  const [selectedUrgency, setSelectedUrgency] = useState("This week");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key & body scroll lock
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setHelpMessage("");
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !expert) return null;

  const accentColor = expert.accentColor || "#1B7042";
  const charCount = helpMessage.trim().length;
  const charsNeeded = Math.max(0, MIN_CHARS - charCount);
  const isValid =
    charCount >= MIN_CHARS &&
    Boolean(selectedContact) &&
    Boolean(selectedUrgency);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess({
        expertId: expert.id,
        expertName: expert.name,
        helpMessage,
        selectedContact,
        selectedUrgency,
        points: expert.points,
      });
    }

    // Auto-close after simulated submission
    setTimeout(() => {
      setIsSubmitted(false);
      setHelpMessage("");
      onClose();
    }, 2400);
  };

  const remainingBalance = Math.max(0, USER_STARTING_BALANCE - (expert.points || 0));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="send-request-title"
    >
      <div className="bg-[#FFFDF8] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8DCC4] relative my-auto animate-in zoom-in-95 duration-200">
        
        {/* ── 1. HEADER ── */}
        <div className="p-6 sm:p-7 border-b border-[#E8DCC4]/70 flex items-start justify-between gap-4 bg-[#FFF9EE]">
          <div>
            <p className="font-jetbrains text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8C6820] mb-1">
              SEND A REQUEST TO
            </p>
            <h3
              id="send-request-title"
              className="font-montserrat-bold text-2xl sm:text-3xl text-[#1E1E1E] font-extrabold leading-tight"
            >
              {expert.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#1E1E1E] transition-colors cursor-pointer shrink-0"
            aria-label="Close request modal"
          >
            <X size={19} />
          </button>
        </div>

        {/* ── SUCCESS STATE ── */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#1B7042]/10 text-[#1B7042] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-[#1B7042]" />
            </div>
            <h4 className="font-montserrat-bold text-2xl text-[#1E1E1E]">
              Request Sent to {expert.name}!
            </h4>
            <p className="font-dmsans text-sm text-[#555555] max-w-sm mx-auto leading-relaxed">
              Your request has been received. {expert.name} will reach out via your preferred contact method (
              <span className="font-semibold text-[#1E1E1E]">{selectedContact}</span>) within 24 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="bg-[#1B7042] hover:bg-[#145a34] text-white text-xs font-jetbrains font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* ── FORM ── */
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            
            {/* Field: What do you need help with? */}
            <div>
              <label
                htmlFor="help-textarea"
                className="block font-jetbrains text-xs font-extrabold uppercase tracking-[0.16em] text-[#6A5A30] mb-2"
              >
                WHAT DO YOU NEED HELP WITH?
              </label>

              <textarea
                id="help-textarea"
                value={helpMessage}
                onChange={(e) => setHelpMessage(e.target.value)}
                rows={4}
                placeholder="Describe your situation and what specific help you're looking for. The more context you give, the better the expert can prepare for your session."
                className="w-full bg-[#FFF4D9] focus:bg-white text-[#1E1E1E] font-dmsans text-sm p-3.5 rounded-xl border border-[#E8D4A2] focus:border-[#1B7042] focus:ring-2 focus:ring-[#1B7042]/20 focus:outline-none transition-all placeholder:text-[#8C7A55] leading-relaxed resize-none"
              />

              {/* Character Counter Status */}
              <div className="mt-1.5 flex justify-end">
                {charsNeeded > 0 ? (
                  <span className="font-jetbrains text-[11px] font-bold text-[#D91E5C] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{charsNeeded} more characters needed</span>
                  </span>
                ) : (
                  <span className="font-jetbrains text-[11px] font-bold text-[#1B7042] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{charCount} characters (ready)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Field: Preferred Contact */}
            <div>
              <label className="block font-jetbrains text-xs font-extrabold uppercase tracking-[0.16em] text-[#6A5A30] mb-2">
                PREFERRED CONTACT
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {CONTACT_OPTIONS.map((method) => {
                  const isSelected = selectedContact === method;
                  return (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setSelectedContact(method)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-dmsans font-semibold transition-all text-center border cursor-pointer ${
                        isSelected
                          ? "bg-[#1B7042] text-white border-[#1B7042] shadow-sm font-bold scale-[1.02]"
                          : "bg-[#FFF8E8] text-[#3D3A30] border-[#E8DCC4] hover:bg-white"
                      }`}
                    >
                      {method}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field: Urgency */}
            <div>
              <label className="block font-jetbrains text-xs font-extrabold uppercase tracking-[0.16em] text-[#6A5A30] mb-2">
                URGENCY
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {URGENCY_OPTIONS.map((urgency) => {
                  const isSelected = selectedUrgency === urgency;
                  return (
                    <button
                      key={urgency}
                      type="button"
                      onClick={() => setSelectedUrgency(urgency)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-dmsans font-semibold transition-all text-center border cursor-pointer ${
                        isSelected
                          ? "bg-[#EBF7F0] text-[#1B7042] border-[#1B7042] font-bold shadow-sm"
                          : "bg-[#FFF8E8] text-[#3D3A30] border-[#E8DCC4] hover:bg-white"
                      }`}
                    >
                      {urgency}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── 3. POINTS SUMMARY BAR (Navy Background) ── */}
            <div className="bg-[#1B3589] rounded-2xl p-4 sm:p-4.5 text-white flex items-center justify-between shadow-md">
              <div>
                <p className="font-jetbrains text-[10px] uppercase tracking-wider text-white/70 font-bold mb-0.5">
                  POINTS DEDUCTED
                </p>
                <div className="flex items-center gap-1 font-montserrat-bold text-xl sm:text-2xl text-[#F5AE38]">
                  <span>⚡</span>
                  <PointsValue value={expert.points} suffix="pts" />
                </div>
              </div>

              <div className="text-right">
                <p className="font-jetbrains text-[10px] uppercase tracking-wider text-white/70 font-bold mb-0.5">
                  Remaining balance
                </p>
                <div className="font-montserrat-bold text-xl sm:text-2xl text-white">
                  <PointsValue value={remainingBalance} suffix="pts" />
                </div>
              </div>
            </div>

            {/* ── 4. SUBMIT BUTTON ── */}
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-4 px-6 rounded-2xl font-jetbrains font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md ${
                isValid
                  ? "bg-[#F5AE38] hover:bg-[#ffbd12] text-[#3D1400] active:scale-98 cursor-pointer shadow-lg shadow-black/10"
                  : "bg-[#F5AE38]/30 text-[#8C7A55]/60 cursor-not-allowed border border-[#E8DCC4]"
              }`}
            >
              <Send className="w-4 h-4" />
              <span>SEND REQUEST</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
