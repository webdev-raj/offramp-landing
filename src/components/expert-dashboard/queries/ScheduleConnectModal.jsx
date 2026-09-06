"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Check } from "lucide-react";

const DATE_OPTIONS = [
  { label: "Today", value: "Today" },
  { label: "Tomorrow", value: "Tomorrow" },
  { label: "Wed, 10 Sep", value: "Wed, 10 Sep" },
];

const TIME_OPTIONS = [
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "2:00 PM",
  "4:30 PM",
  "6:00 PM",
];

export default function ScheduleConnectModal({
  isOpen,
  conversation,
  onClose,
  onConfirm,
}) {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  if (!isOpen || !conversation) return null;

  const firstName = conversation.userName
    ? conversation.userName.split(" ")[0]
    : "User";

  const handleConfirm = () => {
    onConfirm({
      date: selectedDate,
      time: selectedTime,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FFFDF5] border border-[#E8DCC4] rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* ── Modal Header ────────────────────────────────────────── */}
        <div className="p-5 flex items-center justify-between border-b border-[#E8DCC4]">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-sm overflow-hidden bg-[#E8DCC4] shrink-0 border border-[#F5AE38]">
              <Image
                src={conversation.avatarUrl}
                alt={conversation.userName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p className="font-jetbrains font-extrabold text-[9px] tracking-[0.2em] text-[#8C734B] uppercase">
                SCHEDULE WITH
              </p>
              <h3 className="font-montserrat-bold font-black text-lg text-[#1E1E1E] leading-tight">
                {firstName}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8C827A] hover:text-[#1E1E1E] hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Two-Column Picker Table ─────────────────────────────── */}
        <div className="p-5">
          <div className="border border-[#EADFC7] rounded-xl overflow-hidden bg-white mb-4">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-[#FFF5DB] border-b border-[#EADFC7] py-2">
              <span className="text-center font-jetbrains font-extrabold text-[10px] text-[#8C734B] tracking-[0.2em] uppercase">
                DATE
              </span>
              <span className="text-center font-jetbrains font-extrabold text-[10px] text-[#8C734B] tracking-[0.2em] uppercase">
                TIME
              </span>
            </div>

            {/* Grid rows with interactive selection */}
            <div className="grid grid-cols-2 divide-x divide-[#EADFC7]">
              {/* Date Column */}
              <div className="p-2 space-y-1">
                {DATE_OPTIONS.map((d) => {
                  const isSelected = selectedDate === d.value;
                  return (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setSelectedDate(d.value)}
                      className={`w-full py-2 px-3 text-center rounded-lg text-xs font-montserrat transition-all ${
                        isSelected
                          ? "bg-[#FFF5DB] font-montserrat-bold font-black text-[#1E1E1E] border-y-2 border-[#1B2264] shadow-xs"
                          : "text-[#8C827A] hover:bg-black/5 font-medium"
                      }`}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>

              {/* Time Column */}
              <div className="p-2 space-y-1 max-h-40 overflow-y-auto">
                {TIME_OPTIONS.map((t) => {
                  const isSelected = selectedTime === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`w-full py-2 px-3 text-center rounded-lg text-xs font-montserrat transition-all ${
                        isSelected
                          ? "bg-[#FFF5DB] font-montserrat-bold font-black text-[#1E1E1E] border-y-2 border-[#1B2264] shadow-xs"
                          : "text-[#8C827A] hover:bg-black/5 font-medium"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Scheduled For Summary Bar (Navy #1B2264) ───────────── */}
          <div className="bg-[#1B2264] rounded-xl p-3.5 flex items-center justify-between text-white mb-4 shadow-sm">
            <span className="font-jetbrains text-[9px] font-bold tracking-widest uppercase text-white/60">
              SCHEDULED FOR
            </span>
            <span className="font-montserrat-bold font-black text-sm text-white">
              {selectedDate}, {selectedTime}
            </span>
          </div>

          {/* ── Confirm Session Button ──────────────────────────────── */}
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full bg-[#1B2264] hover:bg-[#141A4F] text-white font-montserrat-bold font-black text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Check className="w-4 h-4" />
            <span>CONFIRM SESSION</span>
          </button>
        </div>
      </div>
    </div>
  );
}
