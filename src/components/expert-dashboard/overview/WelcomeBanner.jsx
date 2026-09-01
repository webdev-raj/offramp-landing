"use client";

export default function WelcomeBanner({ expert, loading }) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-[#DC346B] p-8 mb-6 animate-pulse h-36 relative overflow-hidden" />
    );
  }

  const title = expert?.title ?? "Dr.";
  const lastName = expert?.lastName ?? "Iyer";
  const requests = expert?.newRequestsCount ?? 0;
  const queries = expert?.openQueriesCount ?? 0;

  const requestsText =
    requests === 0
      ? "no new requests"
      : requests === 1
      ? "1 new request"
      : `${requests} new requests`;

  const queriesText =
    queries === 0
      ? "no open queries"
      : queries === 1
      ? "1 open query"
      : `${queries} open queries`;

  return (
    <div className="relative rounded-2xl bg-[#DC346B] p-7 sm:p-9 mb-6 overflow-hidden">
      {/* Decorative soft circles (purely decorative, match mockup) */}
      <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -right-4 top-10 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <p className="font-jetbrains font-extrabold text-[10px] sm:text-xs tracking-[0.28em] uppercase text-white/70 mb-2">
          EXPERT WORKSPACE
        </p>
        <h1 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
          <span className="text-white">Welcome back, </span>
          <span className="text-[#F5AE38]">
            {title} {lastName}.
          </span>
        </h1>
        <p className="font-dmsans text-white/80 text-sm sm:text-base">
          You have{" "}
          <span className="font-semibold text-white">{requestsText}</span> and{" "}
          <span className="font-semibold text-white">{queriesText}</span> waiting
          for you.
        </p>
      </div>
    </div>
  );
}
