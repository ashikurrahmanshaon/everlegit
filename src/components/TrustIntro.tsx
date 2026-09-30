"use client";

import React from "react";
import Link from "next/link";
import {
  Globe2,
  Cpu,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
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
    <section className="py-12 sm:py-16 bg-white border-t border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
            Institutional Standards
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Engineered for Modern Commercial Scale
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Ever Legit bridges physical supply chain logistics, cloud software engineering, and performance growth under a single unified operating standard.
          </p>
        </div>

        {/* 4 Pillars of Operational Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-bold text-slate-900 block">
                        {item.stat}
                      </span>
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-5 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-blue-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
