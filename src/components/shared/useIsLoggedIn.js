"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "offramp_user_session";

/**
 * Reusable hook to check if user is logged in.
 * Checks localStorage for the `offramp_user_session` flag.
 * Safely handles SSR and listens for storage / custom event changes.
 */
export function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        if (typeof window !== "undefined") {
          const session = localStorage.getItem(STORAGE_KEY);
          setIsLoggedIn(Boolean(session && session !== "false" && session !== "null"));
        }
      } catch (err) {
        console.warn("Could not read auth session from localStorage:", err);
        setIsLoggedIn(false);
      }
    };

    // Initial check on mount
    checkAuth();

    // Listen for storage events across tabs or within app
    const handleStorage = (e) => {
      if (!e || e.key === STORAGE_KEY) {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("offramp-auth-change", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("offramp-auth-change", handleStorage);
    };
  }, []);

  return isLoggedIn;
}

/**
 * Helper to toggle or set mock login status (for dev testing / demo).
 */
export function setMockLoggedIn(status) {
  if (typeof window === "undefined") return;
  try {
    if (status) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: "demo_user", timestamp: Date.now() }));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    window.dispatchEvent(new Event("offramp-auth-change"));
  } catch (err) {
    console.warn("Could not write auth session to localStorage:", err);
  }
}
