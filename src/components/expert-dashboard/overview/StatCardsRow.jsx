"use client";

export default function StatCardsRow({ expert, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white h-28 rounded-2xl animate-pulse border border-[#E8DCC4]" />
        ))}
      </div>
    );
  }

  if (!expert) return null;

  const cards = [
    {
      label: "NEW REQUESTS",
      value: expert.newRequestsCount,
      display: String(expert.newRequestsCount),
      borderColor: "border-[#F5AE38]",
      textColor: "text-[#F5AE38]",
    },
    {
      label: "ACTIVE SESSIONS",
      value: expert.activeSessionsCount,
      display: String(expert.activeSessionsCount),
      borderColor: "border-[#1B7042]",
      textColor: "text-[#1B7042]",
    },
    {
      label: "OPEN QUERIES",
      value: expert.openQueriesCount,
      display: String(expert.openQueriesCount),
      borderColor: "border-[#E0187A]",
      textColor: "text-[#E0187A]",
    },
    {
      label: "POINTS THIS MONTH",
      value: expert.pointsThisMonth,
      display: `${expert.pointsThisMonth}`,
      unit: "pts",
      borderColor: "border-[#2542A5]",
      textColor: "text-[#2542A5]",
      large: true, // mockup shows bigger treatment for points
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`bg-white p-5 border-4 ${card.borderColor} shadow-sm flex flex-col justify-between h-32 hover:scale-[1.02] transition-transform`}
        >
          <p className="font-jetbrains text-[10px] sm:text-[11px] tracking-[0.15em] font-extrabold text-[#9A9AAA] uppercase leading-tight">
            {card.label}
          </p>
          <div className="flex items-end gap-1">
            <p className={`font-montserrat-bold font-black ${card.large ? "text-4xl sm:text-5xl" : "text-4xl sm:text-5xl"} ${card.textColor} tracking-tight leading-none`}>
              {card.display}
            </p>
            {card.unit && (
              <p className={`font-montserrat-bold font-black text-xl sm:text-2xl ${card.textColor} pb-0.5`}>
                {card.unit}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
