"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Ship,
  Code2,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  Globe2,
  Sparkles,
  Calculator,
  Search,
  Activity,
  CheckCircle2,
  Server,
  Zap,
  Layers,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function Hero() {
  const [activeHeroTab, setActiveHeroTab] = useState<"trade" | "cloud" | "growth">("trade");
  const [simulatedPing, setSimulatedPing] = useState(false);

  const handleSimulatePing = () => {
    setSimulatedPing(true);
    setTimeout(() => setSimulatedPing(false), 1200);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#f8fafc] font-sans">
      {/* Background Ambient Lighting & Clean Blueprint Dot Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,0.12)_0%,rgba(37,99,235,0.06)_35%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 dot-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Visionary Introduction */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="text-slate-900 font-semibold">Global Operations Desk Active</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-600 font-mono text-[11px] font-bold">Wyoming (USA) HQ</span>
            </div>

            {/* Shimmering Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 leading-[1.12]">
              Building Businesses That{" "}
              <span className="shimmer-text block mt-1">
                Move the World Forward.
              </span>
            </h1>

            {/* Clear Strategic Narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Ever Legit is a modern enterprise group operating across global e-commerce, audited international trade sourcing, scalable cloud software, and performance marketing.
            </p>

            {/* High-Impact Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-sm transition-all shadow-md shadow-blue-500/25 active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 text-sm transition-all active:scale-95 shadow-sm"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>Scope & Timeline Estimator</span>
              </Link>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-slate-900">4 Sectors</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">Core Disciplines</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-slate-900">Multi-Region</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">Trade Corridors</div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-blue-600">&lt; 24h</div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">Executive Review</div>
              </div>
            </div>
          </div>

          {/* Right Column: World-Class Interactive Platform Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* Ambient Background Light Behind Terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-sky-300/20 to-indigo-400/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Terminal Main Container (Light Luxury Enterprise Canvas) */}
            <div className="relative bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-2xl shadow-slate-300/50 text-slate-900 font-sans overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    everlegit.telemetry.live
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ONLINE</span>
                  </span>
                </div>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="flex items-center gap-1.5 mt-4 p-1 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-semibold">
                <button
                  onClick={() => setActiveHeroTab("trade")}
                  className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeHeroTab === "trade"
                      ? "bg-blue-600 text-white shadow-sm font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Ship className="w-3.5 h-3.5" />
                  <span>Global Trade</span>
                </button>

                <button
                  onClick={() => setActiveHeroTab("cloud")}
                  className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeHeroTab === "cloud"
                      ? "bg-blue-600 text-white shadow-sm font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Cloud Architecture</span>
                </button>

                <button
                  onClick={() => setActiveHeroTab("growth")}
                  className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeHeroTab === "growth"
                      ? "bg-blue-600 text-white shadow-sm font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Growth Velocity</span>
                </button>
              </div>

              {/* Tab 1: Global Trade Simulation */}
              {activeHeroTab === "trade" && (
                <div className="mt-5 space-y-4 animate-fadeIn">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Active Supply Corridors</span>
                      <span className="text-blue-600 font-mono text-[11px] font-bold">3 Corridors Synchronized</span>
                    </div>

                    {/* Corridor Line 1 */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 text-xs shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                        <span className="font-semibold text-slate-800">Shenzhen / Tokyo ➔ Long Beach Hub</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono font-semibold border border-blue-200">
                        In Transit
                      </span>
                    </div>

                    {/* Corridor Line 2 */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 text-xs shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-semibold text-slate-800">Wyoming Operations ➔ Frankfurt Node</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono font-semibold border border-emerald-200">
                        Cleared Customs
                      </span>
                    </div>

                    {/* Corridor Line 3 */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 text-xs shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="font-semibold text-slate-800">London / Dubai ➔ Singapore Depot</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono font-semibold border border-indigo-200">
                        Multi-Currency
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        Fulfillment Accuracy
                      </span>
                      <span className="text-xl font-black text-slate-900 mt-0.5 block">99.94%</span>
                      <span className="text-[10px] text-emerald-600 mt-1 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Factory Audited</span>
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        Annual Volume Run-Rate
                      </span>
                      <span className="text-xl font-black text-blue-600 mt-0.5 block">$2.4M+</span>
                      <span className="text-[10px] text-slate-500 mt-1 block">Cross-Border Flow</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Cloud Software Simulator */}
              {activeHeroTab === "cloud" && (
                <div className="mt-5 space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 font-mono text-xs space-y-2 text-white shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                      <span className="text-slate-300">API Infrastructure</span>
                      <button
                        onClick={handleSimulatePing}
                        className="px-2 py-0.5 rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer text-[10px] font-semibold"
                      >
                        {simulatedPing ? "Executing Ping..." : "Simulate Endpoint"}
                      </button>
                    </div>

                    <div className="text-slate-300 space-y-1 pt-1">
                      <p className="text-sky-400 font-semibold">POST /v2/commerce/checkout/settle</p>
                      <p className="text-slate-400">Payload: Multi-Currency USD/EUR • Omnichannel Sync</p>
                      <p className={simulatedPing ? "text-emerald-400 font-bold" : "text-emerald-400/90"}>
                        Response: 200 OK • Latency: 19ms • Edge: US-West (Wyoming)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Uptime</span>
                      <span className="font-bold text-slate-900 mt-0.5 block">99.98%</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Edge Nodes</span>
                      <span className="font-bold text-blue-600 mt-0.5 block">180+ Nodes</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Security</span>
                      <span className="font-bold text-emerald-600 mt-0.5 block">SOC2 / TLS 1.3</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Growth Velocity */}
              {activeHeroTab === "growth" && (
                <div className="mt-5 space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Attribution & ROAS Velocity</span>
                      <span className="text-emerald-600 font-mono text-[11px] font-bold">+38.4% Net Margin</span>
                    </div>

                    {/* Visual Bar Graph */}
                    <div className="h-20 flex items-end justify-between gap-2 pt-2 px-1">
                      {[40, 55, 62, 75, 68, 88, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                          <div
                            className="w-full rounded-t bg-gradient-to-t from-blue-600 to-sky-400 group-hover/bar:from-blue-700 group-hover/bar:to-sky-500 transition-all shadow-sm"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[9px] text-slate-400 font-mono">W{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        Server-Side CAPI Match
                      </span>
                      <span className="text-lg font-black text-slate-900 mt-0.5 block">94.8%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        Funnel Conversion Rate
                      </span>
                      <span className="text-lg font-black text-blue-600 mt-0.5 block">4.62%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Terminal Bottom Action Link */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Institutional Oversight</span>
                </span>

                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group py-0.5"
                >
                  <span>Explore 4 Pillars</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Micro-Badge Top Right */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-lg text-slate-800 text-[11px] font-semibold absolute -top-3 -right-3 animate-float">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Multi-Tenant Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
