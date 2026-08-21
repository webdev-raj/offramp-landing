"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SDK_WAIT_MS = 8000;
const START_DELAY_MS = 500;

function waitForTourKit(timeoutMs = SDK_WAIT_MS) {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.TourKit) {
      resolve(window.TourKit);
      return;
    }

    const startedAt = Date.now();
    const intervalId = setInterval(() => {
      if (window.TourKit) {
        clearInterval(intervalId);
        resolve(window.TourKit);
        return;
      }

      if (Date.now() - startedAt > timeoutMs) {
        clearInterval(intervalId);
        resolve(null);
      }
    }, 50);
  });
}

export default function TourKitProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const timer = setTimeout(async () => {
      const TourKit = await waitForTourKit();
      if (!cancelled && TourKit?.startFor) {
        TourKit.startFor(pathname);
      }
    }, START_DELAY_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
