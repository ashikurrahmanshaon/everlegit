"use client";

import React from "react";
import Link from "next/link";
import {
  Globe2,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  TrendingUp,
} from "lucide-react";

export default function TrustIntro() {
  const trustHighlights = [
    {
      icon: Globe2,
      title: "Cross-Border Infrastructure",
      desc: "Audited manufacturing corridors, compliant customs handling, and multi-region fulfillment networks.",
      stat: "Global",
      statLabel: "Trade Routes",
    },
    {
      icon: Cpu,
      title: "Cloud Software & Automation",
      desc: "High-performance TypeScript web platforms, SaaS platforms, and enterprise business automation tooling.",
      stat: "99.9%",
      statLabel: "Target Uptime",
    },
    {
      icon: TrendingUp,
      title: "Performance Growth Scaling",
      desc: "Attribution telemetry, predictive customer acquisition funnels, and precision conversion optimization.",
      stat: "Full-Funnel",
      statLabel: "Attribution",
    },
    {
      icon: ShieldCheck,
      title: "Operational Transparency",
      desc: "Strict compliance standards, zero speculative fluff, and direct executive accountability with <24h SLA.",
      stat: "< 24h",
      statLabel: "Direct SLA",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#0c101b] border-t border-b border-white/[0.06] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            Institutional Standards
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Engineered for Modern Commercial Scale
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Ever Legit bridges physical supply chain logistics, cloud software engineering, and performance growth under a single unified operating standard.
          </p>
        </div>

        {/* 4 Pillars of Operational Trust (Clean, Distinctive, Mobile-Friendly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#111726] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-600/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-bold text-white block">
                        {item.stat}
                      </span>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/5 flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
