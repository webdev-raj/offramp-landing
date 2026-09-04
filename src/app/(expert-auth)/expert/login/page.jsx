"use client";

import ExpertAuthSidePanel from "@/components/expert-auth/ExpertAuthSidePanel";
import ExpertLoginForm from "@/components/expert-auth/ExpertLoginForm";

export default function ExpertLoginPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-[#F5A623] relative overflow-hidden selection:bg-[#1B2264] selection:text-white">
      {/* ════ LEFT PANEL (Navy Info Panel) ════════════════════════════════ */}
      <ExpertAuthSidePanel
        eyebrow="EXPERT PORTAL"
        titleWord1="SIGN IN"
        titleWord2="AS AN EXPERT."
        subtext="Access your expert dashboard to manage incoming requests, answer queries and track your impact."
      />

      {/* ════ WAVY / SCALLOPED SEPARATOR ══════════════════════════════════ */}
      <div className="hidden lg:block rotate-180 absolute top-0 bottom-0 left-[48.1%] -translate-x-[50%] z-5 h-full w-[50px] pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100%" viewBox="0 0 40 757" preserveAspectRatio="none" fill="none">
          <g clipPath="url(#clip0_614_1580)">
            <g clipPath="url(#clip1_614_1580)">
              <path d="M40 0C40 25.2253 0 25.2253 0 50.4507C0 75.676 40 75.676 40 100.901C40 126.127 0 126.127 0 151.352C0 176.577 40 176.577 40 201.803C40 227.028 0 227.028 0 252.253C0 277.479 40 277.479 40 302.704C40 327.929 0 327.929 0 353.155C0 378.38 40 378.38 40 403.605C40 428.831 0 428.831 0 454.056C0 479.281 40 479.281 40 504.507C40 529.732 0 529.732 0 554.957C0 580.183 40 580.183 40 605.408C40 630.633 0 630.633 0 655.859C0 681.084 40 681.084 40 706.309C40 731.535 0 731.535 0 756.76H40V0Z" fill="#1b3589" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_614_1580"><rect width="40" height="756.76" fill="white" /></clipPath>
            <clipPath id="clip1_614_1580"><rect width="40" height="756.76" fill="white" /></clipPath>
          </defs>
        </svg>
      </div>


      {/* ════ RIGHT PANEL (Form Area) ═════════════════════════════════════ */}
      <div className="lg:w-[50%] xl:w-[52%] bg-[#F5A623] p-6 sm:p-10 lg:p-14 flex items-center justify-center relative">
        {/* Ambient Decorative Circles in Yellow Background */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#E0981E]/30 pointer-events-none" />

        <ExpertLoginForm />
      </div>
    </main>
  );
}
