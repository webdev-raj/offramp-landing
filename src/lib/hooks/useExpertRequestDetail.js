"use client";

import { useState, useEffect } from "react";
import { getExpertRequestById } from "@/lib/api/expert-dashboard";

export function useExpertRequestDetail(requestId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!requestId) return;
    let cancelled = false;
    setLoading(true);
    getExpertRequestById(requestId)
      .then((res) => {
        if (!cancelled) setData(res);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [requestId]);

  return { data, loading, error };
}
