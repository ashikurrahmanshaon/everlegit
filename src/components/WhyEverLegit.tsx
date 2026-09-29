"use client";

import React from "react";
import { PRINCIPLES } from "@/data/siteData";
import {
  Maximize2,
  Cpu,
  Globe2,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";

export default function WhyEverLegit() {
  const getIcon = (id: string) => {
    switch (id) {
      case "scale":
        return Maximize2;
      case "technology":
        return Cpu;
      case "global":
        return Globe2;
      case "execution":
        return CheckCircle;
      case "long-term":
        return Clock;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0c101b] border-t border-b border-white/[0.06] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            Operating Governance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            How We Approach Every Venture
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Built on operational discipline, transparent execution, and enduring commercial value.
          </p>
        </div>

        {/* 5 Principles Grid (Responsive & Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
          {PRINCIPLES.map((principle, index) => {
            const Icon = getIcon(principle.id);

            return (
              <div
                key={principle.id}
                className={`p-6 sm:p-7 rounded-2xl bg-[#111726] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-blue-400 font-mono tracking-tighter">
                      {principle.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-600/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Principle {principle.number}</span>
                  <span className="text-blue-400 font-medium">Ever Legit Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
