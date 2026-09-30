import React from "react";
import PortfolioSection from "@/components/PortfolioSection";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Selected Work & Ventures — Portfolio of Ever Legit",
  description:
    "Explore Ever Legit's selected software products, digital commerce ventures, and growth concepts.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-14 sm:pb-18 font-sans bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-semibold">Portfolio</span>
        </div>
      </div>

      <PortfolioSection />

      {/* Corporate Disclosure Banner */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-6 pt-8 border-t border-slate-200 text-xs text-slate-500 space-y-2.5">
        <div className="inline-flex items-center gap-1.5 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>Disclosure & Attribution Policy</span>
        </div>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-xs">
          The projects shown above represent internal ventures, active prototypes, and proprietary platforms engineered by Ever Legit. Ever Legit respects confidentiality and does not publish unverified customer endorsements or speculative figures.
        </p>
      </div>
    </div>
  );
}
