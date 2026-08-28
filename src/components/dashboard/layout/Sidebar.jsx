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
    router.push("/auth");
  };

  return (
    <aside className="fixed left-0 top-0 w-64 sm:w-72 bg-[#1B2264] text-white h-screen flex flex-col justify-between p-6 shrink-0 z-30 border-r border-[#2A3382]">
      <div>
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#E0187A] flex items-center justify-center shadow-md shadow-[#E0187A]/30">
            <Star className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="font-montserrat font-black text-2xl tracking-tight text-white flex items-center">
            <span>Off</span>
            <span className="text-[#F5AE38]">Ramp</span>
          </div>
        </div>

        {/* User Eyebrow & Name Block */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <p className="font-jetbrains text-[10px] tracking-[0.25em] font-extrabold text-white/50 uppercase mb-1">
            DASHBOARD
          </p>
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
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
                  <span>{item.label}</span>
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
