"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "offramp_expert_daily_message_count";
export const DAILY_MESSAGE_LIMIT = 15;
export const WARNING_THRESHOLD = 9; // Display counter from 10th message onwards (count >= 9)

function getTodayDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function useDailyMessageLimit() {
  const [count, setCount] = useState(0);

  const loadCount = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const today = getTodayDateString();
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.date === today && typeof parsed?.count === "number") {
          setCount(parsed.count);
          return;
        }
      }
      // If no entry or date is different (past midnight), reset to 0
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count: 0, date: today })
      );
      setCount(0);
    } catch (err) {
      console.warn("Error reading daily message count from localStorage:", err);
      setCount(0);
    }
  }, []);

  useEffect(() => {
    loadCount();

    const handleStorage = (e) => {
      if (!e || e.key === STORAGE_KEY) {
        loadCount();
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("offramp-msg-limit-change", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("offramp-msg-limit-change", handleStorage);
    };
  }, [loadCount]);

  const incrementCount = useCallback(() => {
    if (typeof window === "undefined") return false;
    try {
      const today = getTodayDateString();
      let currentCount = 0;
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.date === today && typeof parsed?.count === "number") {
          currentCount = parsed.count;
        }
      }

      if (currentCount >= DAILY_MESSAGE_LIMIT) {
        return false; // Limit reached
      }

      const nextCount = currentCount + 1;
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count: nextCount, date: today })
      );
      setCount(nextCount);
      window.dispatchEvent(new Event("offramp-msg-limit-change"));
      return true;
    } catch (err) {
      console.warn("Error incrementing daily message count:", err);
      return true;
    }
  }, []);

  const limitReached = count >= DAILY_MESSAGE_LIMIT;
  const remaining = Math.max(0, DAILY_MESSAGE_LIMIT - count);
  const isNearLimit = count >= WARNING_THRESHOLD;

  return {
    count,
    limit: DAILY_MESSAGE_LIMIT,
    remaining,
    limitReached,
    isNearLimit,
    nextMessageNumber: Math.min(DAILY_MESSAGE_LIMIT, count + 1),
    incrementCount,
  };
}
