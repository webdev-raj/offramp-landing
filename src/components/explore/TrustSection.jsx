"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, MapPin, Send } from "lucide-react";

export default function TrustSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#FDF6E8] pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 3 Colorful Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Green Card */}
          <div className="bg-[#1A7A45] text-white scallop-card rounded-3xl p-6 shadow-md border-2 border-[#135A32] flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-2xl shrink-0">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-montserrat-bold text-xl text-white mb-1">
                Dietitian-verified
              </h4>
              <p className="text-white/80 font-dmsans text-xs sm:text-sm leading-relaxed">
                Every swap reviewed by a registered dietitian
              </p>
            </div>
          </div>

          {/* Yellow Card */}
          <div className="bg-[#F5AE38] text-[#1E2538] scallop-card rounded-3xl p-6 shadow-md border-2 border-[#B87A14] flex items-start gap-4">
            <div className="bg-black/10 p-3 rounded-2xl shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#1E2538]" />
            </div>
            <div>
              <h4 className="font-montserrat-bold text-xl text-[#1E2538] mb-1">
                ICMR-referenced
              </h4>
              <p className="text-[#1E2538]/80 font-dmsans text-xs sm:text-sm leading-relaxed">
                Nutritional data from India's foremost authority
              </p>
            </div>
          </div>

          {/* Pink Card */}
          <div className="bg-[#D91E5C] text-white scallop-card rounded-3xl p-6 shadow-md border-2 border-[#940E3B] flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-2xl shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-montserrat-bold text-xl text-white mb-1">
                Regional accuracy
              </h4>
              <p className="text-white/80 font-dmsans text-xs sm:text-sm leading-relaxed">
                Ingredients verified by availability per region
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Dispatch Banner (Deep Blue Section) */}
        <div className="bg-[#1B3589] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border-4 border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <p className="text-[#FFC93C] font-jetbrains text-xs font-extrabold uppercase tracking-widest mb-2">
                WEEKLY DISPATCH
              </p>
              <h3 className="font-haetten text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Swap of the week. <br />
                <span className="text-[#FFC93C]">In your inbox.</span>
              </h3>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="bg-white/10 border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder-white/50 font-jetbrains text-sm focus:outline-none focus:border-[#FFC93C] w-full"
                />
                <button
                  type="submit"
                  className="bg-[#FFC93C] hover:bg-yellow-300 text-[#1B3589] font-jetbrains font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 shrink-0 shadow-lg"
                >
                  {subscribed ? "SUBSCRIBED ✓" : "SUBSCRIBE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
