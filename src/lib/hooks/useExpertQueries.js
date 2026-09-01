"use client";

import { useState, useEffect } from "react";
import { getExpertQueries } from "@/lib/api/expert-dashboard";

export function useExpertQueries(expertId = "expert_001") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getExpertQueries(expertId)
      .then((res) => { if (!cancelled) setData(res); })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [expertId]);

  return { data, loading, error };
}
