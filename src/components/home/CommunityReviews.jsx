"use client";

import { Star } from "lucide-react";

const STATS = [
  { value: "24k", label: "Weekly active users" },
  { value: "620+", label: "Verified professionals" },
  { value: "91%", label: "Goal match rate" },
  { value: "4.8/5", label: "Satisfaction score" },
];

export default function CommunityReviews() {
  return (
    <section className="relative bg-[#FCF6E8] py-20 lg:py-28 px-6 overflow-hidden">
      {/* Devanagari Background Watermark */}
      <span
        aria-hidden="true"
        className="absolute watermark-shimmer-yello  top-56 right-6 text-[12rem] sm:text-[8rem] lg:text-[10rem] font-anton text-[#F5A623]/[0.15] select-none pointer-events-none leading-none z-10"
      >
        प्रदान
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <p className="font-jetbrains flex items-center gap-2 text-[#DC346b] text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase mb-3">
            <svg width="22" height="22" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="#DC346b" />
              <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="#DC346b" />
              <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="#DC346b" />
              <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="#DC346b" />
              <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="#DC346b" />
              <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="#DC346b" />
              <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="#DC346b" strokeWidth="0.23882" />
            </svg>
            <span>COMMUNITY ACTIVITY</span>
          </p>
          <h2 className="font-haetten text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            <span className="text-[#1E2538] block">People are testing</span>
            <span className="text-[#DC346b] block">familiar food</span>
          </h2>
        </div>

        {/* 2-Column Main Layout matching Image 1 exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: 2x2 Stats Grid + Arjun's Review Pair below */}
          <div className="space-y-8">
            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 h-65">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white flex flex-col justify-center rounded-2xl p-6 sm:p-7 border border-[#E8DCC4] shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-montserrat-bold font-extrabold text-3xl sm:text-4xl text-[#1B2264] tracking-tight leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[#967944] font-dmsans text-xs sm:text-sm font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Arjun Mehta Review Pair (Bottom Left in Image 1) */}
            <div className="h-65 grid grid-cols-1 sm:grid-cols-12 rounded-2xl overflow-hidden shadow-sm border border-[#E8DCC4] hover:shadow-md transition-shadow">
              {/* White Quote Box */}
              <div className="sm:col-span-7 bg-white p-6 sm:p-7 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-[#E8DCC4]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E0187A] text-[#E0187A]" />

                  ))}
                </div>
                <p className="text-[#4D3D27] text-sm sm:text-lg leading-relaxed font-dmsans italic">
                  "The professional verification layer gives me real confidence. I know a qualified dietitian has reviewed these — not just an algorithm."
                </p>
              </div>

              {/* Pastel Profile Box */}
              <div className="sm:col-span-5 font-jetbrains bg-[#FDE8B5] p-6 flex flex-col justify-between relative min-h-[220px]">
                {/* Top-Right Badge */}
                <div className="flex h-20 w-full justify-end">
                  <div className="w-16 h-full bg-[#E0187A] flex items-center justify-center shadow-sm p-1">
                    <div className="h-full w-full border-2 border-[#E984A6] flex items-center justify-center">
                      <svg width="40" height="40" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="white" />
                        <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="white" />
                        <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="white" />
                        <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="white" />
                        <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="white" />
                        <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="white" />
                        <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="white" strokeWidth="0.23882" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Faint Lines */}
                <div className="space-y-1.5 pt-8 mb-6">
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-3/4" />
                </div>

                {/* Profile Text */}
                <div>
                  <h4 className="font-extrabold text-[#1E2538] text-base sm:text-lg leading-tight">
                    Arjun Mehta
                  </h4>
                  <p className="text-[#6B5B3E] text-xs sm:text-sm font-medium mt-0.5">
                    Bangalore
                  </p>
                  <p className="text-[#8C754B] text-[11px] font-semibold uppercase tracking-wider mt-2">
                    Gym-focused · 5 months
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Ritika's Review Pair (Top) + Priya's Review Pair (Bottom) */}
          <div className="space-y-8">
            {/* Ritika Sharma Review Pair (Top Right in Image 1) */}
            <div className="h-65 grid grid-cols-1 sm:grid-cols-12 rounded-2xl overflow-hidden shadow-sm border border-[#E8DCC4] hover:shadow-md transition-shadow">
              {/* White Quote Box */}
              <div className="sm:col-span-7 bg-white p-6 sm:p-7 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-[#E8DCC4]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#1B2264] text-[#1B2264]" />
                  ))}
                </div>
                <p className="text-[#4D3D27] text-sm sm:text-lg leading-relaxed font-dmsans italic">
                  "First app that didn't make me feel like I had to give up Indian food to manage my sugar. The swap engine is genuinely useful — not just a calorie counter."
                </p>
              </div>

              {/* Pastel Profile Box */}
              <div className="sm:col-span-5 font-jetbrains bg-[#FDE8B5] p-6 flex flex-col justify-between relative min-h-[220px]">
                {/* Top-Right Badge */}
                <div className="flex h-20 w-full justify-end">
                  <div className="w-16 h-full bg-[#314894] flex items-center justify-center shadow-sm p-1">
                    <div className="h-full w-full border-2 border-[#8390BE] flex items-center justify-center">
                      <svg width="40" height="40" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="white" />
                        <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="white" />
                        <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="white" />
                        <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="white" />
                        <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="white" />
                        <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="white" />
                        <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="white" strokeWidth="0.23882" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Faint Lines */}
                <div className="space-y-1.5 pt-8 mb-6">
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-3/4" />
                </div>

                {/* Profile Text */}
                <div>
                  <h4 className="font-extrabold text-[#1E2538] text-base sm:text-lg leading-tight">
                    Ritika Sharma
                  </h4>
                  <p className="text-[#6B5B3E] text-xs sm:text-sm font-medium mt-0.5">
                    Mumbai
                  </p>
                  <p className="text-[#8C754B] text-[11px] font-semibold uppercase tracking-wider mt-2">
                    Diabetic meal plan · 3 months
                  </p>
                </div>
              </div>
            </div>

            {/* Priya Nair Review Pair (Bottom Right in Image 1) */}
            <div className="h-65 grid grid-cols-1 sm:grid-cols-12 rounded-2xl overflow-hidden shadow-sm border border-[#E8DCC4] hover:shadow-md transition-shadow">
              {/* White Quote Box */}
              <div className="sm:col-span-7 bg-white p-6 sm:p-7 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-[#E8DCC4]">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C44319] text-[#C44319]" />
                  ))}
                  <Star className="w-4 h-4 fill-none text-[#C44319]" />
                </div>
                <p className="text-[#4D3D27] text-sm sm:text-lg leading-relaxed font-dmsans italic">
                  "Cut my grocery bill by ₹2,400/month and actually eating better. The budget-friendly filter is brilliant — I didn't know I was wasting money on foods I didn't even need."
                </p>
              </div>

              {/* Pastel Profile Box */}
              <div className="sm:col-span-5 font-jetbrains bg-[#FDE8B5] p-6 flex flex-col justify-between relative min-h-[220px]">
                {/* Top-Right Badge */}
                <div className="flex h-20 w-full justify-end">
                  <div className="w-16 h-full bg-[#C95530] flex items-center justify-center shadow-sm p-1">
                    <div className="h-full w-full border-2 border-[#E984A6] flex items-center justify-center">
                   <svg width="40" height="40" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="white" />
                        <path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="white" />
                        <path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="white" />
                        <path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="white" />
                        <path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="white" />
                        <path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="white" />
                        <path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="white" strokeWidth="0.23882" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Faint Lines */}
                <div className="space-y-1.5 pt-8 mb-6">
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-full" />
                  <div className="h-0.5 bg-[#E8D49E] rounded-full w-3/4" />
                </div>

                {/* Profile Text */}
                <div>
                  <h4 className="font-extrabold text-[#1E2538] text-base sm:text-lg leading-tight">
                    Priya Nair
                  </h4>
                  <p className="text-[#6B5B3E] text-xs sm:text-sm font-medium mt-0.5">
                    Chennai
                  </p>
                  <p className="text-[#8C754B] text-[11px] font-semibold uppercase tracking-wider mt-2">
                    Budget-conscious · 2 months
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
