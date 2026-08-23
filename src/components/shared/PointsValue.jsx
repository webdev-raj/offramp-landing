"use client";

import { useIsLoggedIn } from "./useIsLoggedIn";

/**
 * Renders a points value conditionally based on user auth status.
 * If logged out -> renders "X" (or custom placeholder).
 * If logged in -> renders the actual numeric value.
 * Appends the suffix (e.g. "PTS", "POINTS", "pts") if provided.
 */
export default function PointsValue({
  value,
  suffix = "PTS",
  placeholder = "X",
  className = "",
  showSuffix = true,
}) {
  const isLoggedIn = useIsLoggedIn();
  const displayValue = isLoggedIn ? value : placeholder;

  return (
    <span className={className}>
      {displayValue}
      {showSuffix && suffix ? ` ${suffix}` : ""}
    </span>
  );
}
