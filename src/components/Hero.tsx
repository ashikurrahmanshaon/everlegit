"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Ship,
  Code2,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Calculator,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"trade" | "cloud" | "growth">("trade");

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#f8fafc] font-sans">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06)_0%,rgba(14,165,233,0.03)_40%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Visionary Introduction */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            
            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-slate-900 font-semibold">Institutional Operations</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-medium">Wyoming (USA) HQ</span>
            </div>

            {/* Clear, Prestigious Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-slate-900 leading-[1.16]">
              Building Businesses That{" "}
              <span className="text-blue-600 block sm:inline">
                Move the World Forward.
              </span>
            </h1>

            {/* Strategic Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Ever Legit is a global multi-discipline enterprise operating across international e-commerce, audited cross-border trade sourcing, scalable cloud software, and performance marketing.
            </p>

            {/* High-Impact Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 text-sm transition-all shadow-sm shadow-blue-500/20 active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 text-sm transition-all active:scale-95 shadow-xs"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>Scope Estimator</span>
              </Link>
            </div>

            {/* Clean Balanced Metrics Row */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl font-bold text-slate-900 tracking-tight">4 Sectors</div>
                <div className="text-xs text-slate-500 mt-0.5">Core Disciplines</div>
              </div>
              <div className="border-l border-slate-200/80 pl-4">
                <div className="text-2xl font-bold text-slate-900 tracking-tight">Global</div>
                <div className="text-xs text-slate-500 mt-0.5">Trade Corridors</div>
              </div>
              <div className="border-l border-slate-200/80 pl-4">
                <div className="text-2xl font-bold text-blue-600 tracking-tight">&lt; 24h</div>
                <div className="text-xs text-slate-500 mt-0.5">Direct Review SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Operations Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-lg shadow-slate-200/60 text-slate-900 font-sans">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="text-xs font-semibold text-slate-900">
                    Ever Legit Operations Command
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Systems Operational</span>
                </div>
              </div>

              {/* Discipline Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5 mt-3.5 p-1 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium">
                <button
                  onClick={() => setActiveTab("trade")}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "trade"
                      ? "bg-white text-blue-600 shadow-xs font-semibold border border-slate-200/60"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Ship className="w-3.5 h-3.5 text-blue-600" />
                  <span>Global Trade</span>
                </button>
                <button
                  onClick={() => setActiveTab("cloud")}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "cloud"
                      ? "bg-white text-blue-600 shadow-xs font-semibold border border-slate-200/60"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>SaaS & Cloud</span>
                </button>
                <button
                  onClick={() => setActiveTab("growth")}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "growth"
                      ? "bg-white text-blue-600 shadow-xs font-semibold border border-slate-200/60"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  <span>Growth</span>
                </button>
              </div>

              {/* 4 Core KPI Highlights */}
              <div className="grid grid-cols-2 gap-3 mt-4 text-left">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/50 transition-colors">
                  <span className="text-xs text-slate-500 font-medium block">
                    {activeTab === "trade" ? "Supply Corridors" : activeTab === "cloud" ? "Target Uptime" : "Blended ROAS"}
                  </span>
                  <span className="text-xl font-bold text-slate-900 tracking-tight mt-0.5 block">
                    {activeTab === "trade" ? "3 Active Routes" : activeTab === "cloud" ? "99.98% SLA" : "4.2x ROAS"}
                  </span>
                  <span className="text-[11px] text-emerald-600 mt-1 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{activeTab === "trade" ? "Audited Supply" : activeTab === "cloud" ? "Zero Single-Point" : "Attributed Media"}</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/50 transition-colors">
                  <span className="text-xs text-slate-500 font-medium block">
                    {activeTab === "trade" ? "Annual Sourcing Run-Rate" : activeTab === "cloud" ? "Edge Response" : "Monthly Reach"}
                  </span>
                  <span className="text-xl font-bold text-blue-600 tracking-tight mt-0.5 block">
                    {activeTab === "trade" ? "$2.4M+ Flow" : activeTab === "cloud" ? "19ms Latency" : "420K+ Users"}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {activeTab === "trade" ? "Multi-Region Hubs" : activeTab === "cloud" ? "CDN Edge Nodes" : "Multi-Platform"}
                  </span>
                </div>
              </div>

              {/* Streamlined Live Corridors Bar */}
              <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Primary Trade Corridors</span>
                  <span className="text-blue-600 font-medium">Live Routing</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs">
                    <span className="text-slate-700 font-medium truncate">Tokyo / Shenzhen ➔ Long Beach Port</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-semibold border border-emerald-200">
                      In Transit
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs">
                    <span className="text-slate-700 font-medium truncate">Frankfurt Node ➔ London Hub</span>
                    <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-200">
                      Cleared Customs
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Quick Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Need specific capabilities scoping?</span>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Explore Sectors</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
