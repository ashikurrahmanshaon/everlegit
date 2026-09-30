"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Ship,
  Code2,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calculator,
} from "lucide-react";
import { SERVICES } from "@/data/siteData";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return ShoppingBag;
      case "Ship":
        return Ship;
      case "Code2":
        return Code2;
      case "BarChart3":
        return BarChart3;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc] relative overflow-hidden font-sans" id="services">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <span>Core Disciplines & Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Built for{" "}
            <span className="text-blue-600">
              Commercial Execution.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            From consumer digital storefronts and international trade logistics to custom cloud platforms and data-driven customer acquisition.
          </p>
        </div>

        {/* Services Grid (Responsive 1 or 2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:text-white group-hover:bg-blue-600 transition-all p-3 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] text-slate-500 font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mt-2.5 text-xs sm:text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Core Competencies Checklist */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                      Core Competencies
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.ctaLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 active:scale-95 group/btn shadow-md shadow-blue-500/20"
                  >
                    <span>{service.ctaText.replace(" →", "")}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline">
                    Enterprise SLA
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope Estimator Banner (Light Corporate Styling) */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-sm">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Want to calculate deliverables, phases & turnaround?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Configure your business requirements across our 4 sectors with our live interactive planner.
              </p>
            </div>
          </div>

          <Link
            href="/services#estimator"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/25 active:scale-95"
          >
            <span>Launch Scope Estimator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
