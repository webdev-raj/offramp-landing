"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  User,
  Inbox,
  MessageSquare,
  Zap,
  ChevronRight,
  LogOut,
  Star,
} from "lucide-react";
import { useExpertOverview } from "@/lib/hooks/useExpertOverview";

const NAV_ITEMS = [
  { label: "Overview", href: "/expert", icon: User, badge: null },
  { label: "Requests", href: "/expert/requests", icon: Inbox, badgeKey: "newRequestsCount", badgeColor: "bg-[#F5AE38] text-[#1E1E1E]" },
  { label: "Queries", href: "/expert/queries", icon: MessageSquare, badgeKey: "openQueriesCount", badgeColor: "bg-[#E0187A] text-white" },
  { label: "Points", href: "/expert/points", icon: Zap, badge: null },
];

// Expert session flag — separate from the user session flag (offramp_user_session).
// This allows expert and user sessions to coexist independently in localStorage.
const EXPERT_SESSION_KEY = "offramp_expert_session";

export default function ExpertSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: expert } = useExpertOverview();

  const displayName = expert
    ? `${expert.title} ${expert.firstName} ${expert.lastName}`
    : "Dr. Meera Iyer";
  const sessionCount = expert?.sessionCount ?? "—";

  const handleSignOut = () => {
    try {
      localStorage.removeItem(EXPERT_SESSION_KEY);
      window.dispatchEvent(new Event("offramp-auth-change"));
    } catch (_) { }
    router.push("/expert/login");
  };

  return (
    <aside className="fixed left-0 top-0 w-64 sm:w-72 bg-[#1B3589] text-white h-screen flex flex-col z-30 border-r border-[#2A3382]">
      {/* ── Top section (scrollable content) ─────────────────────────── */}
      <div className="flex-1 flex flex-col p-5 overflow-y-auto">

        {/* Logo + EXPERT badge */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-[#E0187A] flex items-center justify-center shadow-md shadow-[#E0187A]/30 shrink-0">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
          <div className="font-montserrat-bold font-black text-xl tracking-tight text-white">
            <span>Off</span>
            <span className="text-[#F5AE38]">Ramp</span>
          </div>
          <span className="font-jetbrains font-bold text-[9px] tracking-[0.2em] uppercase text-white/50 border border-white/20 px-1.5 py-0.5 rounded ml-auto shrink-0">
            EXPERT
          </span>
        </div>

        {/* Expert Identity Card */}
        <div className="bg-[#F5AE38] p-4 mb-6">
          <div className="flex items-center justify-center text-center">
            {/* Avatar */}
            <div className="flex items-center flex-col">

              <div className="relative w-16 h-16 overflow-hidden rounded-md shadow-md mb-2 bg-[#1B2264]">
                {expert?.avatarUrl ? (
                  <Image
                    src={expert.avatarUrl}
                    alt={displayName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white/60" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-ping absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-full w-full rounded-full bg-[#1B7042] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B7042]" />
                </span>
                <span className="font-jetbrains text-[10px] text-[#1B7042] font-bold uppercase tracking-wide">
                  Online
                </span>
              </div>

            </div>
            <div className="flex flex-col items-center w-full">
              <p className="font-montserrat font-black text-lg text-[#1E1E1E] leading-tight mb-1.5">
                {expert ? `${expert.firstName} ${expert.lastName}` : "Meera Iyer"}
              </p>

              {/* Online status dot */}


              {/* Session count */}
              <p className="font-dmsans text-xs text-[#1E1E1E]/80">
                {sessionCount} sessions
              </p>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 font-dmsans">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/expert" && pathname.startsWith(item.href));

            const badgeCount = item.badgeKey && expert ? expert[item.badgeKey] : null;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${isActive
                    ? "bg-[#E0187A] text-white font-semibold shadow-lg shadow-[#E0187A]/30 translate-x-1"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-white/60"}`} />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {badgeCount != null && badgeCount > 0 && (
                    <span className={`font-jetbrains font-extrabold text-[10px] w-5 h-5 flex items-center justify-center rounded-full ${item.badgeColor}`}>
                      {badgeCount}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-4 h-4 text-white" />}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ── Bottom pinned links ────────────────────────────────────────── */}
      <div className="p-5 border-t border-white/10 space-y-1">
        <button
          type="button"
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-dmsans cursor-pointer"
        >
          <LogOut className="w-4 h-4 text-white/40" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
