"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Parses raw stat strings like "24,000+", "4.8/5", "91%", "12k+"
 */
function parseValueString(rawStr) {
  if (typeof rawStr === "number") {
    return { target: rawStr, prefix: "", suffix: "", decimals: 0, useCommas: false };
  }

  const str = String(rawStr).trim();
  const match = str.match(/^([^0-9.]*)([0-9.,]+)(.*)$/);

  if (!match) {
    return { target: 0, prefix: "", suffix: str, decimals: 0, useCommas: false };
  }

  const prefix = match[1] || "";
  const numStr = match[2];
  const suffix = match[3] || "";

  const cleanNumStr = numStr.replace(/,/g, "");
  const target = parseFloat(cleanNumStr) || 0;
  const hasComma = numStr.includes(",");
  
  let decimals = 0;
  if (cleanNumStr.includes(".")) {
    const parts = cleanNumStr.split(".");
    decimals = parts[1] ? parts[1].length : 0;
  }

  return {
    target,
    prefix,
    suffix,
    decimals,
    useCommas: hasComma || target >= 1000,
  };
}

export default function AnimatedCounter({
  value,
  target: propTarget,
  prefix: propPrefix,
  suffix: propSuffix,
  decimals: propDecimals,
  duration = 2,
  className = "",
}) {
  const countRef = useRef(null);

  const parsed = parseValueString(value);
  const target = propTarget !== undefined ? propTarget : parsed.target;
  const prefix = propPrefix !== undefined ? propPrefix : parsed.prefix;
  const suffix = propSuffix !== undefined ? propSuffix : parsed.suffix;
  const decimals = propDecimals !== undefined ? propDecimals : parsed.decimals;

  useEffect(() => {
    if (!countRef.current) return;

    const obj = { count: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        count: target,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (!countRef.current) return;
          let formattedStr = "";
          if (decimals > 0) {
            formattedStr = obj.count.toFixed(decimals);
          } else {
            formattedStr = Math.floor(obj.count).toLocaleString("en-US");
          }
          countRef.current.textContent = `${prefix}${formattedStr}${suffix}`;
        },
      });
    }, countRef);

    return () => ctx.revert();
  }, [target, prefix, suffix, decimals, duration]);

  const initialFormatted =
    decimals > 0 ? target.toFixed(decimals) : Math.floor(target).toLocaleString("en-US");

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {initialFormatted}
      {suffix}
    </span>
  );
}
