"use client";

import { Star } from "lucide-react";

const METRIC_CARDS = [
  {
    id: "accuracy",
    bgClass: "bg-[#308654] text-white border-[#155A34]",
    value: "91%",
    label: "Prediction accuracy",
  },
  {
    id: "confidence",
    bgClass: "bg-[#314894] text-white border-[#1C3384]",
    value: "4.8/5",
    label: "Confidence score",
  },
  {
    id: "professionals",
    bgClass: "bg-[#DC346B] text-white border-[#B2134E]",
    value: "620+",
    label: "Verified professionals",
  },
  {
    id: "spend",
    bgClass: "bg-[#C95530] text-white border-[#A13411]",
    value: "38%",
    label: "Grocery spend reduction",
  },
  {
    id: "reviewed",
    bgClass: "bg-[#F5AE38] text-white border-[#B87600]",
    value: "3,200+",
    label: "Dietitian-reviewed swaps",
  },
  {
    id: "plans",
    bgClass: "bg-[#7951A9] text-white border-[#632994]",
    value: "12k+",
    label: "Weekly active plans",
  },
];

export default function LiveMetrics() {
  return (
    <section className="relative bg-[#FDF6E8] py-20 lg:py-28 px-6 overflow-hidden">
      {/* Background Watermark */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-12 -translate-y-1/2 text-[14rem] sm:text-[18rem] lg:text-[22rem] font-anton text-[#F5A623]/[0.08] select-none pointer-events-none leading-none"
      >
        पोषण
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-start gap-2 text-[#C95530] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3">
              <svg width="22" height="22" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#C95530" />
                <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#C95530" />
                <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#C95530" />
                <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#C95530" />
                <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#C95530" />
                <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#C95530" />
                <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#C95530" stroke-width="0.23882" />
              </svg>
              <p>LIVE KITCHEN DATA</p>
            </div>

            <h2 className="font-anton uppercase text-4xl sm:text-5xl lg:text-6xl text-[#1E2538] leading-[0.98] tracking-tight">
              Trusted Kitchen metrics <br className="hidden sm:inline" />
              from real food decisions
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end gap-4">
            <p className="text-[#4A4A4A] text-base sm:text-lg font-medium leading-relaxed">
              Numbers grounded in professional input and user outcomes — not marketing estimates.
            </p>

            {/* 4 Decorative Floral Badges */}
            <div className="flex items-center gap-2 pt-2">
              <FloralBadge bg="bg-[#E0187A]" />
              <FloralBadge bg="bg-[#2542A5]" />
              <FloralBadge bg="bg-[#1B7042]" />
              <FloralBadge bg="bg-[#C44319]" />
            </div>
          </div>
        </div>

        {/* 6 Colored Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {METRIC_CARDS.map((card) => (
            <div
              key={card.id}
              className={`${card.bgClass} scallop-card rounded-2xl p-3 sm:p-4 border-2 flex flex-col justify-between min-h-[210px] sm:min-h-[230px] shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-pointer`}
            >
              <div className="border-2 border-white/40 flex flex-col justify-between h-full w-full p-3 sm:p-4">
                {/* Card Top Star */}
                <div>
                  <svg width="22" height="22" className="mb-6 group-hover:scale-110 transition-transform" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="white" />
                    <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="white" />
                    <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="white" />
                    <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="white" />
                    <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="white" />
                    <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="white" />
                    <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="white" stroke-width="0.23882" />
                  </svg>

                  <p className="font-anton text-3xl sm:text-4xl lg:text-4xl text-white tracking-tight leading-none">
                    {card.value}
                  </p>
                  <p className="text-white/90 text-xs sm:text-sm font-semibold mt-2 leading-snug">
                    {card.label}
                  </p>
                </div>

                {/* Bottom Footer Label */}
                <p className="text-[9px] uppercase tracking-widest font-extrabold text-white/50 pt-4 border-t border-white/20 mt-4">
                  OFFRAMP INDIA
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Decorative Floral Emblem Icon matching the design
function FloralBadge({ bg }) {
  return (
    <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center shadow-sm transform hover:scale-110 transition-transform`}>
      <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM22 12C22 13.1 21.1 14 20 14C18.9 14 18 13.1 18 12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12ZM12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22ZM2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z" />
      </svg>
    </div>
  );
}
