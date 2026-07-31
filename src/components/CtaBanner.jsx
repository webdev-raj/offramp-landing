"use client";

import { ArrowRight, Check } from "lucide-react";

export default function CtaBanner({ onOpenSwapModal }) {
  const DIAMOND_COUNT = 34;
  return (
    <div className="bg-[#314894] relative">
    <section className="text-white py-24 lg:py-40 px-6 overflow-hidden">
      {/* Translucent Purple Watermark Circle on Bottom Right */}
      {/* <div className="absolute -bottom-36 -right-36 w-[450px] h-[450px] rounded-full bg-[#463C9B]/40 pointer-events-none" /> */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Double Concentric Ring Emblem with 6-pointed Golden Star */}
        <div className="w-24 h-24 rounded-full border-2 border-[#F7AC2B] p-1 flex items-center justify-center mx-auto mb-8 shadow-sm">
          <div className="w-full h-full rounded-full border border-[#F7AC38]/60 flex items-center justify-center">
            <svg width="40" height="40" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#F7AC38" />
                        <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#F7AC38" />
                        <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#F7AC38" />
                        <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#F7AC38" />
                        <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#F7AC38" />
                        <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#F7AC38" />
                        <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#F7AC38" stroke-width="0.23882" />
                      </svg>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="font-montserrat-bold font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none mb-5">
          <span className="text-white block">Start with one dish</span>
          <span className="text-[#F7AC38] block mt-1">you already love.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-9 font-normal">
          No diet overhaul, no upfront subscription. Enter a familiar dish and see its goal alignment in seconds.
        </p>

        {/* Action Button */}
        <div className="mb-9">
          <button
            onClick={onOpenSwapModal}
            className="bg-[#F7AC2B] hover:bg-[#e2991e] active:scale-95 text-[#231E1B] font-extrabold text-sm sm:text-base tracking-wider uppercase px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2.5"
          >
            <span>GET STARTED FREE</span>
            <ArrowRight className="w-4.5 h-4.5 text-[#231E1B] stroke-[2.5]" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/60 font-medium">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#34D399]/80 stroke-[2.5]" />
            <span>Free forever</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#34D399]/80 stroke-[2.5]" />
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#34D399]/80 stroke-[2.5]" />
            <span>Verified by real professionals</span>
          </div>
        </div>
      </div>

      {/* Bottom Alternating Diamond Pattern Strip */}
    </section>
       <div className="h-4 w-full flex items-center gap-1.5">
        {Array.from({ length: DIAMOND_COUNT }).map((_, i) => (
          <div key={i} className="h-full flex items-center justify-start gap-1.5">
            <div className="fill-rect h-full w-4 bg-[#F5AE38] rotate-45 -translate-y-1.5" />
            <div className="border-rect h-full w-4 bg-white/10 border-2 border-[#F5AE38] rotate-45 -translate-y-1.5" />
          </div>
        ))}
      </div>
    </div>
  );
}
