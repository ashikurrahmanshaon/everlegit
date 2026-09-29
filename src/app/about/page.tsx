import React from "react";
import Link from "next/link";
import {
  Compass,
  Layers,
  ShieldCheck,
  Target,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Mail,
  Award,
  Globe2,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export const metadata = {
  title: "About Us — Global Commerce, Trade & Technology Architecture | Ever Legit",
  description:
    "Ever Legit is a modern enterprise group focused on building, operating, and scaling commercial ventures across commerce, technology, software, and digital growth.",
};

export default function AboutPage() {
  const principles = [
    {
      icon: Target,
      title: "Pragmatic Execution",
      desc: "Theoretical ideas carry minimal weight without practical implementation. Whether architecting an API, designing an international freight routing model, or optimizing an acquisition funnel, we prioritize concrete, testable execution.",
      accent: "text-blue-400",
      tag: "Execution Standard",
    },
    {
      icon: Layers,
      title: "Technological Leverage",
      desc: "Modern commerce and trade cannot succeed on manual labor alone. We embed automation, cloud software, and rigorous data telemetry into every operation to ensure durability, low latency, and operational precision.",
      accent: "text-indigo-400",
      tag: "Cloud Architecture",
    },
    {
      icon: Compass,
      title: "Cross-Border Vision",
      desc: "Local limitations restrict long-term commercial upside. We approach every business discipline with global eyes—evaluating international supply corridors, multi-currency trade compliance, and multi-region consumer demand.",
      accent: "text-cyan-400",
      tag: "Global Corridors",
    },
    {
      icon: ShieldCheck,
      title: "Ethical Legitimacy",
      desc: "Trust is built through transparency and adherence to standards. We do not manufacture fictitious client lists or exaggerate metrics. Our reputation is anchored in responsible operations, security compliance, and dependable partnerships.",
      accent: "text-emerald-400",
      tag: "Verified Integrity",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden bg-[#0b0f19] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-blue-400 font-semibold">About</span>
        </div>

        {/* Page Hero */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            About Ever Legit Group
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Building Sustainable Commercial Ventures
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal pt-1">
            Ever Legit is a private enterprise company focused on operating and supporting commercial ventures across international commerce, trade logistics, software engineering, and performance growth.
          </p>
        </div>

        {/* Operating Philosophy Quote Card */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-10 rounded-3xl bg-[#111726] border border-white/10 shadow-2xl shadow-black/40">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
              Core Strategic Approach
            </span>
            <blockquote className="text-base sm:text-xl font-medium text-white leading-relaxed">
              "Our approach is simple: identify high-potential commercial opportunities, build reliable technological solutions, and engineer resilient systems capable of growing across changing markets."
            </blockquote>
            <p className="text-xs text-slate-400 pt-1">
              Ever Legit Operating Governance & Strategic Philosophy
            </p>
          </div>
        </div>

        {/* Multi-Frontier Breakdown */}
        <div className="mt-16 sm:mt-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
              Foundational Tenets
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The Architecture Behind Ever Legit
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Instead of isolating capabilities into siloed teams, we align engineering, international trade, and growth under a single collaborative mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#111726] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-600/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mt-4 tracking-tight group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5 font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-white/5 text-xs text-slate-400 flex items-center justify-between">
                    <span>{item.tag}</span>
                    <span className="text-blue-400 font-medium">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operating Standards Checklist */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-[#111726] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                Operating Principles
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Standards We Uphold
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                How Ever Legit conducts business across ventures, client partnerships, and technology implementations.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Zero tolerance for deceptive claims or unverified proof",
                "Rigorous factory and supplier vetting before trade commitments",
                "Enterprise data security and strict privacy safeguards",
                "High availability, test-driven clean software engineering",
                "Clear terms and transparent milestone-based execution",
                "Long-term value creation over short-term hype",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-12 rounded-3xl bg-[#111726] border border-white/10 text-center space-y-4 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
              Partnership Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to Explore Collaborative Opportunities?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Connect directly with our operational leadership via phone, email, or our contact form.
            </p>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all active:scale-95 shadow-md shadow-blue-900/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all active:scale-95"
            >
              <span>Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
