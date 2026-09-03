"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  User,
  RefreshCw,
  BarChart3,
  SlidersHorizontal,
  Activity,
  Settings,
  ChevronRight,
  LogOut,
  Star,
} from "lucide-react";
import { useUserProfile } from "@/lib/hooks/useUserProfile";
import { setMockLoggedIn } from "@/components/shared/useIsLoggedIn";

const NAV_ITEMS = [
  { label: "Profile", href: "/dashboard", icon: User },
  { label: "My Swaps", href: "/dashboard/swaps", icon: RefreshCw },
  { label: "Impact", href: "/dashboard/impact", icon: BarChart3 },
  { label: "Preferences", href: "/dashboard/preferences", icon: SlidersHorizontal },
  { label: "Activity", href: "/dashboard/activity", icon: Activity },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: profile } = useUserProfile();

  const firstName = profile?.name ? profile.name.split(" ")[0] : "Anshuman";

  const handleLogout = () => {
    setMockLoggedIn(false);
    router.push("/login");
  };

  return (
    <aside className="fixed left-0 top-0 w-64 sm:w-72 bg-[#1B3589] text-white h-screen flex flex-col justify-between p-6 shrink-0 z-30 border-r border-[#2A3382]">
      <div>
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#E0187A] flex items-center justify-center shadow-md shadow-[#E0187A]/30">
            {/* <Star className="w-5 h-5 text-white fill-white" /> */}
            <svg width="19" height="19" viewBox="1.6 1.6 13.4 13.4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35868 7.16446C9.26547 7.16446 10.0006 5.96157 10.0006 4.47774C10.0006 2.9939 9.26547 1.79102 8.35868 1.79102C7.45189 1.79102 6.7168 2.9939 6.7168 4.47774C6.7168 5.96157 7.45189 7.16446 8.35868 7.16446Z" fill="white"/>
<path d="M9.49458 7.98959C9.77479 8.852 11.146 9.1794 12.5572 8.72087C13.9684 8.26234 14.8852 7.19151 14.605 6.3291C14.3248 5.4667 12.9536 5.13929 11.5424 5.59782C10.1312 6.05635 9.21437 7.12718 9.49458 7.98959Z" fill="white"/>
<path d="M9.06013 9.32466C8.32653 9.85765 8.43886 11.2629 9.31103 12.4633C10.1832 13.6638 11.485 14.2049 12.2186 13.6719C12.9522 13.1389 12.8398 11.7336 11.9677 10.5332C11.0955 9.33274 9.79374 8.79166 9.06013 9.32466Z" fill="white"/>
<path d="M7.65629 9.32468C6.92268 8.79168 5.62094 9.33276 4.74876 10.5332C3.87658 11.7337 3.76425 13.1389 4.49786 13.6719C5.23147 14.2049 6.53321 13.6638 7.40539 12.4634C8.27756 11.2629 8.3899 9.85768 7.65629 9.32468Z" fill="white"/>
<path d="M7.22329 7.98958C7.5035 7.12718 6.58664 6.05635 5.17543 5.59782C3.76422 5.13929 2.39305 5.46669 2.11284 6.3291C1.83263 7.19151 2.74948 8.26234 4.16069 8.72087C5.5719 9.1794 6.94307 8.85199 7.22329 7.98958Z" fill="white"/>
<path d="M8.3592 10.4484C9.5133 10.4484 10.4489 9.51281 10.4489 8.35871C10.4489 7.20462 9.5133 6.26904 8.3592 6.26904C7.20511 6.26904 6.26953 7.20462 6.26953 8.35871C6.26953 9.51281 7.20511 10.4484 8.3592 10.4484Z" fill="white"/>
<path opacity="0.3" d="M8.35903 12.5381C10.6672 12.5381 12.5384 10.667 12.5384 8.35879C12.5384 6.0506 10.6672 4.17944 8.35903 4.17944C6.05084 4.17944 4.17969 6.0506 4.17969 8.35879C4.17969 10.667 6.05084 12.5381 8.35903 12.5381Z" stroke="white" stroke-width="0.23882"/>
</svg>

          </div>
          <div className="font-montserrat-bold font-black text-2xl tracking-tight text-white flex items-center">
            <span>Off</span>
            <span className="text-[#F5AE38]">Ramp</span>
          </div>
        </div>

        {/* User Eyebrow & Name Block */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <p className="font-jetbrains text-[10px] tracking-[0.25em] font-extrabold text-white/50 uppercase mb-1">
            DASHBOARD
          </p>
          <h2 className="font-montserrat-bold font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            {firstName}
          </h2>
          <p className="font-dmsans text-xs text-white/60 mt-1">
            Track swaps, impact, and controls.
          </p>
        </div>

        {/* Navigation List */}
        <nav className="space-y-2 font-dmsans">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#E0187A] text-white font-semibold shadow-lg shadow-[#E0187A]/30 translate-x-1"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-white/60"}`} />
                  <span className="font-rajdhani">{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-white" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Pinned Logout Button */}
      <div className="pt-6 mt-auto">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full bg-[#1B7042] hover:bg-[#145733] text-white font-jetbrains font-extrabold text-xs tracking-widest uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <LogOut className="w-4 h-4 text-white" />
          <span>LOGOUT</span>
        </button>
      </div>
    </aside>
  );
}
