"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard/layout/Sidebar";

const STORAGE_KEY = "offramp_user_session";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check for existing session flag in localStorage
    try {
      if (typeof window !== "undefined") {
        const session = localStorage.getItem(STORAGE_KEY);
        const isValid = Boolean(session && session !== "false" && session !== "null");
        if (isValid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.replace("/auth");
        }
      }
    } catch (err) {
      console.warn("Could not check auth status:", err);
      setIsAuthenticated(false);
      router.replace("/auth");
    }
  }, [router]);

  // Loading indicator during auth check
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#FBF3E3] flex items-center justify-center font-jetbrains text-sm text-[#1B2264]">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-[#E0187A] border-t-transparent rounded-full animate-spin" />
          <span>Verifying session...</span>
        </div>
      </div>
    );
  }

  if (isAuthenticated === false) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex bg-[#FBF3E3]">
      {/* Persistent Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 ml-64 bg-[#FBF3E3] min-h-screen">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
