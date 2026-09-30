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
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0b0f19] font-sans">
      {/* Background Ambient Lighting & Cybernetic Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(circle_at_50%_15%,rgba(56,189,248,0.18)_0%,rgba(37,99,235,0.12)_35%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 dot-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Visionary Introduction */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-medium text-slate-200 shadow-lg shadow-blue-950/50 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-white font-semibold">Global Operations Desk Active</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-300 font-mono text-[11px]">Wyoming (USA) HQ</span>
            </div>

            {/* Shimmering Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight text-white leading-[1.12]">
              Building Businesses That{" "}
              <span className="shimmer-text block mt-1">
                Move the World Forward.
              </span>
            </h1>

            {/* Clear Strategic Narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Ever Legit is a private enterprise company operating at the intersection of international commerce, audited global trade sourcing, scalable cloud software, and precision performance marketing.
            </p>

            {/* High-Impact Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-blue-500/30 text-sm transition-all active:scale-95 shadow-sm"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Scope & Timeline Estimator</span>
              </Link>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                <div className="text-xl sm:text-2xl font-black text-white">4 Sectors</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Core Disciplines</div>
              </div>
              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                <div className="text-xl sm:text-2xl font-black text-white">Multi-Region</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Trade Corridors</div>
              </div>
              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">&lt; 24h</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Executive Review</div>
              </div>
            </div>
          </div>

          {/* Right Column: World-Class Interactive Platform Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* Ambient Background Glow Behind Terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-indigo-600/30 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Terminal Main Container */}
            <div className="relative glass-glow-card p-5 sm:p-7 shadow-2xl text-white font-sans overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    everlegit.telemetry.live
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </span>
                </div>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="flex items-center gap-1.5 mt-4 p-1 rounded-xl bg-white/[0.04] border border-white/5 text-xs font-semibold">
                <button
                  onClick={() => setActiveHeroTab("trade")}
                  className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeHeroTab === "trade"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Ship className="w-3.5 h-3.5" />
                  <span>Global Trade</span>
                </button>

                <button
                  onClick={() => setActiveHeroTab("cloud")}
                  className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeHeroTab === "cloud"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Cloud Architecture</span>
                </button>

                <button
                  onClick={() => setActiveHeroTab("growth")}
                  className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    activeHeroTab === "growth"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Growth Velocity</span>
                </button>
              </div>

              {/* Tab 1: Global Trade Simulation */}
              {activeHeroTab === "trade" && (
                <div className="mt-5 space-y-4 animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Active Supply Corridors</span>
                      <span className="text-cyan-400 font-mono text-[11px]">3 Corridors Synchronized</span>
                    </div>

                    {/* Corridor Line 1 */}
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span className="font-semibold text-white">Shenzhen / Tokyo ➔ Long Beach Hub</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                        In Transit
                      </span>
                    </div>

                    {/* Corridor Line 2 */}
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-semibold text-white">Wyoming Operations ➔ Frankfurt Node</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        Cleared Customs
                      </span>
                    </div>

                    {/* Corridor Line 3 */}
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="font-semibold text-white">London / Dubai ➔ Singapore Depot</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                        Multi-Currency
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                        Fulfillment Accuracy
                      </span>
                      <span className="text-xl font-black text-white mt-0.5 block">99.94%</span>
                      <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Factory Audited</span>
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                        Annual Volume Run-Rate
                      </span>
                      <span className="text-xl font-black text-cyan-400 mt-0.5 block">$2.4M+</span>
                      <span className="text-[10px] text-slate-400 mt-1 block">Cross-Border Flow</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Cloud Software Simulator */}
              {activeHeroTab === "cloud" && (
                <div className="mt-5 space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-2">
                      <span>API Infrastructure</span>
                      <button
                        onClick={handleSimulatePing}
                        className="px-2 py-0.5 rounded bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white transition-colors cursor-pointer text-[10px]"
                      >
                        {simulatedPing ? "Executing Ping..." : "Simulate Endpoint"}
                      </button>
                    </div>

                    <div className="text-slate-300 space-y-1 pt-1">
                      <p className="text-blue-400">POST /v2/commerce/checkout/settle</p>
                      <p className="text-slate-400">Payload: Multi-Currency USD/EUR • Omnichannel Sync</p>
                      <p className={simulatedPing ? "text-emerald-400 font-bold" : "text-emerald-400/90"}>
                        Response: 200 OK • Latency: 19ms • Edge: US-West (Wyoming)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] text-slate-400 block">Uptime</span>
                      <span className="font-bold text-white mt-0.5 block">99.98%</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] text-slate-400 block">Edge Nodes</span>
                      <span className="font-bold text-cyan-400 mt-0.5 block">180+ Nodes</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] text-slate-400 block">Security</span>
                      <span className="font-bold text-emerald-400 mt-0.5 block">SOC2 / TLS 1.3</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Growth Velocity */}
              {activeHeroTab === "growth" && (
                <div className="mt-5 space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Attribution & ROAS Velocity</span>
                      <span className="text-emerald-400 font-mono text-[11px]">+38.4% Net Margin</span>
                    </div>

                    {/* Visual Bar Graph */}
                    <div className="h-20 flex items-end justify-between gap-2 pt-2 px-1">
                      {[40, 55, 62, 75, 68, 88, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                          <div
                            className="w-full rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 group-hover/bar:from-cyan-400 group-hover/bar:to-white transition-all"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[9px] text-slate-500 font-mono">W{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                        Server-Side CAPI Match
                      </span>
                      <span className="text-lg font-black text-white mt-0.5 block">94.8%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                        Funnel Conversion Rate
                      </span>
                      <span className="text-lg font-black text-cyan-400 mt-0.5 block">4.62%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Terminal Bottom Action Link */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Institutional Oversight</span>
                </span>

                <Link
                  href="/services"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group py-0.5"
                >
                  <span>Explore 4 Pillars</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Micro-Badge Top Right */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111726]/90 border border-blue-500/40 backdrop-blur-md shadow-xl text-white text-[11px] font-semibold absolute -top-3 -right-3 animate-float">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Multi-Tenant Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
