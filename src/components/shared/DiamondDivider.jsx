"use client";

export default function DiamondDivider({
  count = 44,
  fillColor = "bg-[#40372D]",
  borderColor = "border-[#40372D]",
  className = "py-9",
}) {
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden select-none pointer-events-none`}>
      <div className="h-3 w-full pl-1 flex items-center gap-1.5 justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="h-full flex items-center justify-start gap-1.5 shrink-0">
            <div className={`fill-rect h-full w-3 ${fillColor} rotate-45 -translate-y-1.5`} />
            <div className={`border-rect h-full w-3 bg-black/10 border-2 ${borderColor} rotate-45 -translate-y-1.5`} />
          </div>
        ))}
      </div>
    </div>
  );
}
