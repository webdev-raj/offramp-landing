// "use client";

// import { useRef, useEffect } from "react";
// import Image from "next/image";
// import { ArrowRight, ChevronRight, Star } from "lucide-react";
// import gsap from "gsap";
// import AnimatedCounter from "./AnimatedCounter";

// export default function Hero({ onOpenSwapModal }) {
//   const heroRef = useRef(null);
//   const pinkContentRef = useRef(null);
//   const badgeRef = useRef(null);
//   const headlineRef = useRef(null);
//   const paraRef = useRef(null);
//   const btnsRef = useRef(null);
//   const ratingRef = useRef(null);
//   const phoneRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//       // 1. Pink content block slides in from the left (x: -100% -> 0)
//       tl.from(pinkContentRef.current, {
//         xPercent: -100,
//         opacity: 0,
//         duration: 0.7,
//       })
//         // 2. Badge fades/slides up slightly
//         .from(
//           badgeRef.current,
//           { y: 20, opacity: 0, duration: 0.4 },
//           "-=0.35"
//         )
//         // 3. Headline reveals from inside its overflow-hidden mask (y: -100% -> 0)
//         .from(
//           headlineRef.current,
//           { yPercent: -100, duration: 0.6 },
//           "-=0.2"
//         )
//         // 4. Paragraph reveals the same way
//         .from(
//           paraRef.current,
//           { yPercent: -100, opacity: 0, duration: 0.5 },
//           "-=0.35"
//         )
//         // 5. Buttons row reveals
//         .from(
//           btnsRef.current,
//           { yPercent: -100, opacity: 0, duration: 0.5 },
//           "-=0.3"
//         )
//         // 6. Rating footer reveals
//         .from(
//           ratingRef.current,
//           { yPercent: -100, opacity: 0, duration: 0.45 },
//           "-=0.25"
//         )
//         // 7. Phone mockup scales + fades in, overlapping the tail end
//         .from(
//           phoneRef.current,
//           { opacity: 0, duration: 0.7 },
//           "-=0.5"
//         );
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative overflow-hidden min-h-screen md:min-h-[48rem] max-sm:mt-16 flex flex-col justify-center"
//     >
//       {/* Two-panel split background (Desktop only) */}
//       <div className="hidden md:flex absolute inset-0 flex-row">
//         {/* Pink panel */}
//         <div className="w-[65%] bg-[#DC346B] relative overflow-hidden shrink-0" />
//         {/* Yellow panel with custom patternbg.png */}
//         <div
//           className="w-[35%] bg-[#F5AE38] relative shrink-0"
//           style={{
//             backgroundImage: `url('/bgyellow.svg')`,
//             backgroundRepeat: "repeat",
//             backgroundSize: "550px",
//           }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row">
//         {/* Left Side Content (Pink Section on Mobile) */}
//         <div
//           ref={pinkContentRef}
//           className="w-full font-jetbrains md:w-[95%] bg-[#DC346B] md:bg-transparent min-h-[51rem] md:min-h-0 relative isolate px-6 sm:px-10 lg:pl-6 lg:pr-12 py-20 md:py-16 flex flex-col justify-center items-center md:items-start text-center md:text-left"
//         >
//           {/* Subheader Badge */}
//           <div
//             ref={badgeRef}
//             className="flex items-center gap-2 text-[#F5AE38] text-xs font-extrabold tracking-widest uppercase mb-4 sm:mb-5"
//           >
//             <svg width="17" height="17" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#F5AE38" />
//               <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#F5AE38" />
//               <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#F5AE38" />
//               <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#F5AE38" />
//               <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#F5AE38" />
//               <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#F5AE38" />
//               <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#F5AE38" strokeWidth="0.23882" />
//             </svg>

//             <span>SMART FOOD SWAPS · INDIA</span>
//           </div>

//           {/* Main Headline — masked reveal wrapper */}
//           <div className="overflow-hidden mb-4 sm:mb-5">
//             <h1
//               ref={headlineRef}
//               className="font-haetten uppercase leading-[0.8] text-[3.8rem] sm:text-7xl lg:text-[7rem]"
//             >
//               <span className="text-[#F5AE38]">LOVE THE </span>
//               <span className="text-white">FOOD</span>
//               <br />
//               <span className="text-white">SWAP </span>
//               <span className="text-[#F5AE38]">THE REST.</span>
//             </h1>
//           </div>

//           {/* Body Paragraph — masked reveal wrapper */}
//           <div className="overflow-hidden mb-6 sm:mb-7 w-full flex justify-center md:justify-start">
//             <p
//               ref={paraRef}
//               className="text-white/90 font-dmsans text-base sm:text-lg max-w-md leading-relaxed font-normal"
//             >
//               Helping people change what they eat without changing who they are —
//               through AI-guided food transitions using familiar Indian flavors.
//             </p>
//           </div>

//           {/* Action Buttons — masked reveal wrapper */}
//           <div className="overflow-hidden w-full max-w-md mx-auto md:max-w-none md:mx-0 mb-6 sm:mb-8">
//             <div
//               ref={btnsRef}
//               className="z-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 w-full"
//             >
//               <button
//                 onClick={onOpenSwapModal}
//                 className="bg-[#F5AE38] hover:bg-[#ffbd12] text-[#3D1400] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-black/15 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto"
//               >
//                 <span>START SWAP</span>
//                 <ArrowRight className="w-5 h-5" />
//               </button>

//               <button
//                 onClick={onOpenSwapModal}
//                 className="border-2 border-white/80 hover:border-white text-white font-semibold text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-white/10 transition-colors w-full sm:w-auto"
//               >
//                 <span>See how it works</span>
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Rating Footer — masked reveal wrapper */}
//           <div className="overflow-hidden w-full flex justify-center md:justify-start">
//             <div
//               ref={ratingRef}
//               className="flex items-center justify-center md:justify-start gap-3 text-white/95 text-xs sm:text-sm font-medium z-10"
//             >
//               <div className="flex items-center gap-1 text-[#F5AE38]">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-[#F5AE38] text-[#F5AE38]" />
//                 ))}
//                 <span className="font-bold text-[#F5AE38] ml-1">
//                   <AnimatedCounter value="4.8 / 5" />
//                 </span>
//               </div>
//               <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
//               <span>
//                 <AnimatedCounter value="24,800+" /> active users
//               </span>
//             </div>
//           </div>

//           {/* Subtle Devanagari background watermark */}
//           <span
//             aria-hidden="true"
//             className="hidden watermark-shimmer lg:block absolute bottom-3 left-50 text-[7rem] font-anton text-white/[0.05] select-none leading-none pointer-events-none"
//           >
//             आहार
//           </span>
//         </div>

//         {/* Mobile/Desktop Phone Mockup Area (Yellow Section on Mobile) */}
//         <div className="w-full md:w-[47%] mobile-yellow-bg md:bg-transparent min-h-[90vh] md:min-h-0 relative flex items-center justify-center py-24 md:py-0">
//           <div
//             ref={phoneRef}
//             className="relative md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:-translate-x-1/2 z-20 w-[280px] sm:w-[300px] lg:w-[325px] hover:scale-[1.01] transition-transform duration-300"
//           >
//             {/* Phone Frame */}
//             <div className="rounded-[3rem] bg-[#1C1D21] p-3.5 ring-1 ring-black/40 shadow-2xl border border-white/10">
//               <div className="rounded-[2.4rem] bg-[#FDF6E8] overflow-hidden border border-[#E8DCC4]">
//                 {/* Dynamic Island / Notch */}
//                 <div className="h-7 bg-[#FDF6E8] flex items-center justify-center pt-2">
//                   <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2">
//                     <div className="w-2 h-2 rounded-full bg-[#1A1A1A] ring-1 ring-white/10" />
//                   </div>
//                 </div>

//                 {/* Phone App Screen Content */}
//                 <div className="px-4 pb-5 pt-1">
//                   <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#3A3A3A] mb-0.5 text-center">
//                     RECOMMENDED SWAP
//                   </p>
//                   <p className="text-[9px] text-[#7A7A7A] mb-3 text-center">
//                     AI-guided Indian food transition
//                   </p>

//                   {/* Dish 1: Butter Chicken (Your Dish) */}
//                   <div className="bg-[#C0392B] text-white rounded-xl p-3 mb-2.5 shadow-sm relative overflow-hidden flex items-center justify-between gap-2">
//                     <div className="flex-1">
//                       <p className="text-[8px] text-white/80 uppercase font-bold tracking-wider">
//                         Your Dish
//                       </p>
//                       <p className="text-white font-extrabold text-sm leading-tight mt-0.5">
//                         BUTTER CHICKEN.
//                       </p>
//                     </div>
//                     <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0">
//                       <Image
//                         src="/butter_chicken.png"
//                         alt="Butter Chicken"
//                         fill
//                         sizes="56px"
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>

//                   {/* Dish 2: Tofu Makhani (Better Alternative) */}
//                   <div className="bg-[#E0187A] text-white rounded-xl p-3 mb-3 shadow-md relative overflow-hidden flex items-center justify-between gap-2">
//                     <div className="flex-1">
//                       <p className="text-[8px] text-white/80 uppercase font-bold tracking-wider">
//                         Better Alternative
//                       </p>
//                       <p className="text-white font-extrabold text-sm leading-tight mt-0.5">
//                         TOFU MAKHANI.
//                       </p>
//                     </div>
//                     <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/30 shadow-md shrink-0">
//                       <Image
//                         src="/tofu_makhani.png"
//                         alt="Tofu Makhani"
//                         fill
//                         sizes="56px"
//                         className="object-cover"
//                       />
//                     </div>
//                   </div>

//                   {/* Swap Details Bullet Points */}
//                   <ul className="space-y-1.5 mb-4 px-1">
//                     <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
//                       <span className="text-[#E0187A] font-bold">•</span>
//                       <span>45% lower saturated fat &amp; zero cholesterol</span>
//                     </li>
//                     <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
//                       <span className="text-[#E0187A] font-bold">•</span>
//                       <span>Rich Makhani gravy flavor profile retained</span>
//                     </li>
//                     <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
//                       <span className="text-[#E0187A] font-bold">•</span>
//                       <span>Dietitian-verified protein absorption</span>
//                     </li>
//                   </ul>

//                   {/* Phone Action CTA Button */}
//                   <button
//                     onClick={onOpenSwapModal}
//                     className="w-full bg-[#E0187A] hover:bg-[#c41267] active:scale-98 text-white text-xs font-bold py-2.5 rounded-full shadow-md transition-all text-center uppercase tracking-wider"
//                   >
//                     SEE WHY
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Mobile Yellow Background Style */}
//       <style jsx>{`
//         @media (max-width: 767px) {
//           .mobile-yellow-bg {
//             background-color: #F5AE38;
//             background-image: url('/bgyellow.svg');
//             background-repeat: repeat;
//             background-size: 550px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
 

// new code
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import gsap from "gsap";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero({ onOpenSwapModal }) {
  const heroRef = useRef(null);
  const yellowPanelRef = useRef(null);
  const pinkContentRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const btnsRef = useRef(null);
  const ratingRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Yellow background panel starts full-width (100%) and shrinks down
      //    to its real width (35%) — pink background panel is flex-1, so it
      //    automatically fills the space yellow gives up, in perfect sync.
      // 2. Pink content block slides in from the left (x: -100% -> 0)
      //    at the exact same time as the yellow panel shrink.
      tl.from(
        yellowPanelRef.current,
        {
          width: "100%",
          duration: 0.7,
        },
        0
      ).from(
        pinkContentRef.current,
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.7,
        },
        0
      )
        // 2. Badge fades/slides up slightly
        .from(
          badgeRef.current,
          { y: 20, opacity: 0, duration: 0.4 },
          "-=0.35"
        )
        // 3. Headline reveals from inside its overflow-hidden mask (y: -100% -> 0)
        .from(
          headlineRef.current,
          { yPercent: -100, duration: 0.6 },
          "-=0.2"
        )
        // 4. Paragraph reveals the same way
        .from(
          paraRef.current,
          { yPercent: -100, opacity: 0, duration: 0.5 },
          "-=0.35"
        )
        // 5. Buttons row reveals
        .from(
          btnsRef.current,
          { yPercent: -100, opacity: 0, duration: 0.5 },
          "-=0.3"
        )
        // 6. Rating footer reveals
        .from(
          ratingRef.current,
          { yPercent: -100, opacity: 0, duration: 0.45 },
          "-=0.25"
        )
        // 7. Phone mockup scales + fades in, overlapping the tail end
        .from(
          phoneRef.current,
          { opacity: 0, duration: 0.7 },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-screen md:min-h-[48rem] max-sm:mt-16 flex flex-col justify-center"
    >
      {/* Two-panel split background (Desktop only) */}
      <div className="hidden md:flex absolute inset-0 flex-row">
        {/* Pink panel — fills whatever space the yellow panel gives up */}
        <div className="flex-1 bg-[#DC346B] relative overflow-hidden shrink-0" />
        {/* Yellow panel — starts at 100% width, GSAP shrinks it to 35% */}
        <div
          ref={yellowPanelRef}
          className="shrink-0 grow-0 bg-[#F5AE38] relative"
          style={{
            width: "35%",
            backgroundImage: `url('/bgyellow.svg')`,
            backgroundRepeat: "repeat",
            backgroundSize: "550px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left Side Content (Pink Section on Mobile) */}
        <div
          ref={pinkContentRef}
          className="w-full font-jetbrains md:w-[95%] bg-[#DC346B] md:bg-transparent min-h-[51rem] md:min-h-0 relative isolate px-6 sm:px-10 lg:pl-6 lg:pr-12 py-20 md:py-16 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          {/* Subheader Badge */}
          <div
            ref={badgeRef}
            className="flex items-center gap-2 text-[#F5AE38] text-xs font-extrabold tracking-widest uppercase mb-4 sm:mb-5"
          >
            <svg width="17" height="17" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#F5AE38" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#F5AE38" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#F5AE38" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#F5AE38" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#F5AE38" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#F5AE38" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#F5AE38" strokeWidth="0.23882" />
            </svg>
            <span>SMART FOOD SWAPS · INDIA</span>
          </div>

          {/* Main Headline — masked reveal wrapper */}
          <div className="overflow-hidden mb-4 sm:mb-5">
            <h1
              ref={headlineRef}
              className="font-haetten uppercase leading-[0.8] text-[3.8rem] sm:text-7xl lg:text-[7rem]"
            >
              <span className="text-[#F5AE38]">LOVE THE </span>
              <span className="text-white">FOOD</span>
              <br />
              <span className="text-white">SWAP </span>
              <span className="text-[#F5AE38]">THE REST.</span>
            </h1>
          </div>

          {/* Body Paragraph — masked reveal wrapper */}
          <div className="overflow-hidden mb-6 sm:mb-7 w-full flex justify-center md:justify-start">
            <p
              ref={paraRef}
              className="text-white/90 font-dmsans text-base sm:text-lg max-w-md leading-relaxed font-normal"
            >
              Helping people change what they eat without changing who they are —
              through AI-guided food transitions using familiar Indian flavors.
            </p>
          </div>

          {/* Action Buttons — masked reveal wrapper */}
          <div className="overflow-hidden w-full max-w-md mx-auto md:max-w-none md:mx-0 mb-6 sm:mb-8">
            <div
              ref={btnsRef}
              className="z-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 w-full"
            >
              <button
                onClick={onOpenSwapModal}
                className="bg-[#F5AE38] hover:bg-[#ffbd12] text-[#3D1400] font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-black/15 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto"
              >
                <span>START SWAP</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenSwapModal}
                className="border-2 border-white/80 hover:border-white text-white font-semibold text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                <span>See how it works</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Rating Footer — masked reveal wrapper */}
          <div className="overflow-hidden w-full flex justify-center md:justify-start">
            <div
              ref={ratingRef}
              className="flex items-center justify-center md:justify-start gap-3 text-white/95 text-xs sm:text-sm font-medium z-10"
            >
              <div className="flex items-center gap-1 text-[#F5AE38]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5AE38] text-[#F5AE38]" />
                ))}
                <span className="font-bold text-[#F5AE38] ml-1">
                  <AnimatedCounter value="4.8 / 5" />
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span>
                <AnimatedCounter value="24,800+" /> active users
              </span>
            </div>
          </div>

          {/* Subtle Devanagari background watermark */}
          <span
            aria-hidden="true"
            className="hidden watermark-shimmer lg:block absolute bottom-3 left-50 text-[7rem] font-anton text-white/[0.05] select-none leading-none pointer-events-none"
          >
            आहार
          </span>
        </div>

        {/* Mobile/Desktop Phone Mockup Area (Yellow Section on Mobile) */}
        <div className="w-full md:w-[47%] mobile-yellow-bg md:bg-transparent min-h-[90vh] md:min-h-0 relative flex items-center justify-center py-24 md:py-0">
          <div
            ref={phoneRef}
            className="relative md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:-translate-x-1/2 z-20 w-[280px] sm:w-[300px] lg:w-[325px] hover:scale-[1.01] transition-transform duration-300"
          >
            {/* Phone Frame */}
            <div className="rounded-[3rem] bg-[#1C1D21] p-3.5 ring-1 ring-black/40 shadow-2xl border border-white/10">
              <div className="rounded-[2.4rem] bg-[#FDF6E8] overflow-hidden border border-[#E8DCC4]">
                {/* Dynamic Island / Notch */}
                <div className="h-7 bg-[#FDF6E8] flex items-center justify-center pt-2">
                  <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2">
                    <div className="w-2 h-2 rounded-full bg-[#1A1A1A] ring-1 ring-white/10" />
                  </div>
                </div>

                {/* Phone App Screen Content */}
                <div className="px-4 pb-5 pt-1">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#3A3A3A] mb-0.5 text-center">
                    RECOMMENDED SWAP
                  </p>
                  <p className="text-[9px] text-[#7A7A7A] mb-3 text-center">
                    AI-guided Indian food transition
                  </p>

                  {/* Dish 1: Butter Chicken (Your Dish) */}
                  <div className="bg-[#C0392B] text-white rounded-xl p-3 mb-2.5 shadow-sm relative overflow-hidden flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-[8px] text-white/80 uppercase font-bold tracking-wider">
                        Your Dish
                      </p>
                      <p className="text-white font-extrabold text-sm leading-tight mt-0.5">
                        BUTTER CHICKEN.
                      </p>
                    </div>
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0">
                      <Image
                        src="/butter_chicken.png"
                        alt="Butter Chicken"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Dish 2: Tofu Makhani (Better Alternative) */}
                  <div className="bg-[#E0187A] text-white rounded-xl p-3 mb-3 shadow-md relative overflow-hidden flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-[8px] text-white/80 uppercase font-bold tracking-wider">
                        Better Alternative
                      </p>
                      <p className="text-white font-extrabold text-sm leading-tight mt-0.5">
                        TOFU MAKHANI.
                      </p>
                    </div>
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/30 shadow-md shrink-0">
                      <Image
                        src="/tofu_makhani.png"
                        alt="Tofu Makhani"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Swap Details Bullet Points */}
                  <ul className="space-y-1.5 mb-4 px-1">
                    <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
                      <span className="text-[#E0187A] font-bold">•</span>
                      <span>45% lower saturated fat &amp; zero cholesterol</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
                      <span className="text-[#E0187A] font-bold">•</span>
                      <span>Rich Makhani gravy flavor profile retained</span>
                    </li>
                    <li className="flex items-start gap-1.5 text-[9px] text-[#4A4A4A] font-medium leading-tight">
                      <span className="text-[#E0187A] font-bold">•</span>
                      <span>Dietitian-verified protein absorption</span>
                    </li>
                  </ul>

                  {/* Phone Action CTA Button */}
                  <button
                    onClick={onOpenSwapModal}
                    className="w-full bg-[#E0187A] hover:bg-[#c41267] active:scale-98 text-white text-xs font-bold py-2.5 rounded-full shadow-md transition-all text-center uppercase tracking-wider"
                  >
                    SEE WHY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Mobile Yellow Background Style */}
      <style jsx>{`
        @media (max-width: 767px) {
          .mobile-yellow-bg {
            background-color: #F5AE38;
            background-image: url('/bgyellow.svg');
            background-repeat: repeat;
            background-size: 550px;
          }
        }
      `}</style>
    </section>
  );
}