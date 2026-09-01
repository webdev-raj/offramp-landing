"use client";

import { useState } from "react";
import { X, Calendar, Clock, CheckCircle2 } from "lucide-react";

// Generate the 3 eligible dates dynamically from current date
function getNextThreeDays() {
  const dates = [];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  for (let i = 0; i < 3; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);

    const relativeLabel = i === 0 ? "Today" : i === 1 ? "Tomorrow" : `${daysOfWeek[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
    const fullDate = `${daysOfWeek[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;

    dates.push({
      id: `day_${i}`,
      relativeLabel,
      fullDate,
      dayName: daysOfWeek[d.getDay()],
      dateNumber: d.getDate(),
      month: months[d.getMonth()],
    });
  }
  return dates;
}

const TIME_SLOTS = [
  "09:30 AM",
  "10:30 AM",
  "11:45 AM",
  "02:00 PM",
  "03:15 PM",
  "04:30 PM",
  "05:45 PM",
  "06:30 PM",
];

export default function ScheduleConnectModal({ isOpen, onClose, userName }) {
  const dates = getNextThreeDays();
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FFFDF5] border-2 border-[#1B2264] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E8DCC4]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#E0187A] text-xs">◆</span>
              <span className="font-jetbrains font-extrabold text-[10px] tracking-[0.25em] text-[#B59963] uppercase">
                SCHEDULE CONSULTATION
              </span>
            </div>
            <h3 className="font-montserrat font-black text-xl sm:text-2xl text-[#1E2538]">
              Connect with {userName || "User"}
            </h3>
            <p className="font-dmsans text-xs text-[#7A7A8A] mt-1">
              Pick a date (max 3 days window) and a preferred time slot.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#7A7A8A] hover:text-[#1E1E1E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#1B7042]/10 text-[#1B7042] flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-montserrat font-black text-xl text-[#1E2538] mb-2">
              Call Scheduled!
            </h4>
            <p className="font-dmsans text-sm text-[#4A4A5A] max-w-xs">
              Direct connection confirmed with{" "}
              <strong className="text-[#1E1E1E]">{userName}</strong> for{" "}
              <span className="text-[#2542A5] font-bold">
                {selectedDate.fullDate} at {selectedTime}
              </span>.
            </p>
          </div>
        ) : (
          <>
            {/* Two-Column Scrollable Picker */}
            <div className="grid grid-cols-2 gap-4 my-6">
              {/* Column 1: Date Scroll/Picker (3 Days Max) */}
              <div>
                <div className="flex items-center gap-1.5 font-jetbrains font-bold text-xs text-[#1E2538] uppercase tracking-wider mb-2.5">
                  <Calendar className="w-3.5 h-3.5 text-[#2542A5]" />
                  <span>Select Date (3 Days)</span>
                </div>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {dates.map((dateObj) => {
                    const isSelected = selectedDate.id === dateObj.id;
                    return (
                      <button
                        key={dateObj.id}
                        type="button"
                        onClick={() => setSelectedDate(dateObj)}
                        className={`w-full text-left p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#1B2264] border-[#1B2264] text-white shadow-md"
                            : "bg-white border-[#E8DCC4] text-[#1E2538] hover:border-[#1B2264]/40"
                        }`}
                      >
                        <p className={`font-jetbrains font-extrabold text-[11px] tracking-wider uppercase ${
                          isSelected ? "text-[#F5AE38]" : "text-[#B59963]"
                        }`}>
                          {dateObj.relativeLabel}
                        </p>
                        <p className="font-montserrat font-black text-sm">
                          {dateObj.fullDate}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Time Slots Scroll/Picker */}
              <div>
                <div className="flex items-center gap-1.5 font-jetbrains font-bold text-xs text-[#1E2538] uppercase tracking-wider mb-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#E0187A]" />
                  <span>Select Time Slot</span>
                </div>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  {TIME_SLOTS.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`w-full text-left px-3.5 py-2 rounded-xl border font-jetbrains font-bold text-xs tracking-wider transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#E0187A] border-[#E0187A] text-white shadow-sm"
                            : "bg-white border-[#E8DCC4] text-[#2E2E38] hover:border-[#E0187A]/40"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Selected Summary & Confirm Button */}
            <div className="pt-4 border-t border-[#E8DCC4] flex items-center justify-between gap-4">
              <div className="text-left">
                <p className="font-jetbrains text-[10px] tracking-wider text-[#9A9AAA] uppercase font-bold">
                  CONFIRMED SLOT
                </p>
                <p className="font-montserrat font-extrabold text-xs sm:text-sm text-[#1E2538]">
                  {selectedDate.fullDate} · {selectedTime}
                </p>
              </div>

              <button
                type="button"
                onClick={handleConfirm}
                className="font-jetbrains font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-xl bg-[#1B7042] hover:bg-[#145733] text-white transition-all shadow-md shadow-[#1B7042]/20 cursor-pointer active:scale-95"
              >
                Confirm Connect
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
