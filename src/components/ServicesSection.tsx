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
    <section className="py-14 sm:py-20 bg-[#f8fafc] relative overflow-hidden font-sans" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>Core Disciplines & Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mt-2 text-xs sm:text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Core Competencies Checklist */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                      Core Competencies
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.ctaLink}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 active:scale-95 group/btn shadow-xs shadow-blue-500/20"
                  >
                    <span>{service.ctaText.replace(" →", "")}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    Enterprise Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope Estimator Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/70 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-xs">
              <Calculator className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Want to calculate deliverables, phases & turnaround?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Configure your business requirements across our 4 sectors with our live interactive planner.
              </p>
            </div>
          </div>

          <Link
            href="/services#estimator"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shrink-0 flex items-center gap-1.5 transition-all shadow-xs shadow-blue-500/20 active:scale-95"
          >
            <span>Launch Scope Estimator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
