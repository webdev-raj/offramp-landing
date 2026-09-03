"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ExpertSidebar from "@/components/expert-dashboard/layout/ExpertSidebar";

// Separate session flag from the regular user session (offramp_user_session).
// Experts have their own session token so the two roles can coexist independently.
// To log in as an expert for dev/testing: localStorage.setItem("offramp_expert_session", JSON.stringify({ expert: "expert_001", timestamp: Date.now() }))
const EXPERT_SESSION_KEY = "offramp_expert_session";

export default function ExpertDashboardLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const session = localStorage.getItem(EXPERT_SESSION_KEY);
        const isValid = Boolean(session && session !== "false" && session !== "null");
        if (isValid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.replace("/login");
        }
      }
    } catch (err) {
      console.warn("Could not check expert auth status:", err);
      setIsAuthenticated(false);
      router.replace("/login");
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#FBF3E3] flex items-center justify-center font-jetbrains text-sm text-[#1B2264]">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-[#F5AE38] border-t-transparent rounded-full animate-spin" />
          <span>Verifying expert session...</span>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return null; // redirect handled in useEffect
  }

  return (
    <div className="min-h-screen flex bg-[#FBF3E3]">
      {/* Persistent Expert Sidebar */}
      <ExpertSidebar />

      {/* Main Content Area — ml-64 matches sidebar w-64 */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 ml-64 bg-[#FBF3E3] min-h-screen">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
