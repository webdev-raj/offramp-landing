"use client";

import { CheckCircle, Zap } from "lucide-react";

function ActivityIcon({ type }) {
  if (type === "session") {
    return (
      <div className="w-10 h-10 rounded-full bg-[#1B7042]/10 text-[#1B7042] flex items-center justify-center shrink-0 border border-[#1B7042]/20">
        <CheckCircle className="w-5 h-5" />
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-[#F5AE38]/15 text-[#F5AE38] flex items-center justify-center shrink-0 border border-[#F5AE38]/30">
      <Zap className="w-5 h-5" />
    </div>
  );
}

export default function RecentActivityList({ activities, loading, error }) {
  if (loading) {
    return (
      <div className="mb-8 animate-pulse">
        <div className="h-4 w-40 bg-gray-200 rounded mb-4" />
        <div className="bg-white border border-[#E8DCC4] rounded-2xl p-6 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-red-200 text-center mb-8">
        <p className="font-dmsans text-sm text-red-600">
          Failed to load recent points activity.
        </p>
      </div>
    );
  }

  const items = activities || [];

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-jetbrains font-extrabold text-xs tracking-[0.22em] uppercase text-[#1E2538]">
          RECENT ACTIVITY
        </h3>
      </div>

      {/* Activity List Card */}
      <div className=" overflow-hidden">
        {items.length === 0 ? (
          <div className="p-8 text-center text-sm font-dmsans text-[#7A7A8A]">
            No recent activity recorded yet.
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 p-4 sm:p-5 hover:bg-[#FBF3E3]/40 transition-colors mb-2 bg-white border-2 border-[#ffe8b0] rounded-xl "
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <ActivityIcon type={item.type} />
                <div className="min-w-0">
                  <p className="font-dmsans font-black text-sm sm:text-lg text-[#1E2538] truncate tracking-wide">
                    {item.description}
                  </p>
                  <p className="font-jetbrains text-xs text-[#9A9AAA] mt-0.5">
                    {item.timeAgo}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <span className="font-montserrat-bold font-black text-base sm:text-lg text-[#1B7042]">
                  +{item.points}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
