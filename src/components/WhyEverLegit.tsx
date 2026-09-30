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
    <section className="py-14 sm:py-20 bg-white border-t border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block shadow-xs">
            Operating Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            How We Approach Every Venture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Built on operational discipline, transparent execution, and enduring commercial value.
          </p>
        </div>

        {/* 5 Principles Grid (Responsive & Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {PRINCIPLES.map((principle, index) => {
            const Icon = getIcon(principle.id);

            return (
              <div
                key={principle.id}
                className={`p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-blue-600 font-mono tracking-tighter">
                      {principle.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Principle {principle.number}</span>
                  <span className="text-blue-600 font-semibold">Ever Legit Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
