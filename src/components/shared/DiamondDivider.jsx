"use client";

export default function DiamondDivider({
  count = 44,
  fillColor = "bg-[#E0187A]",
  borderColor = "border-[#E0187A]",
  triangleColor = "text-[#E0187A]",
  variant = "diamonds", // 'diamonds' | 'triangles'
  className = "py-6",
}) {
  if (variant === "triangles") {
    return (
      <div className={`${className} flex flex-col items-center justify-center overflow-hidden select-none pointer-events-none gap-1`}>
        <div className={`flex items-center gap-1.5 justify-center flex-wrap ${triangleColor} text-[10px] tracking-[0.2em]`}>
          {Array.from({ length: count }).map((_, i) => (
            <span key={i} className="inline-block transform -rotate-90 opacity-75 font-bold">
              ▲
            </span>
          ))}
        </div>
        <div className={`flex items-center gap-1.5 justify-center flex-wrap ${triangleColor} text-[10px] tracking-[0.2em] max-w-[60%]`}>
          {Array.from({ length: Math.floor(count / 2) }).map((_, i) => (
            <span key={`sub-${i}`} className="inline-block transform -rotate-90 opacity-60 font-bold">
              ▲
            </span>
          ))}
        </div>
      </div>
    );
  }

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
