"use client";

import { useState, useEffect } from "react";
import { getExpertOverview } from "@/lib/api/expert-dashboard";

export function useExpertOverview(expertId = "expert_001") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getExpertOverview(expertId)
      .then((res) => { if (!cancelled) setData(res); })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [expertId]);

  return { data, loading, error };
}
