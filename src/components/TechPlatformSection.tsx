"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Activity,
  Server,
  Layers,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function TechPlatformSection() {
  const [activeTab, setActiveTab] = useState<"performance" | "orders" | "infrastructure">("performance");

  const tabData = {
    performance: {
      title: "Commercial Growth & Analytics Velocity",
      subtitle: "Telemetry tracked across distributed commerce platforms",
      metrics: [
        { label: "Revenue Run-Rate", value: "$184,920", change: "+18.4%", note: "Monthly Volume" },
        { label: "Gross Margin", value: "64.2%", change: "+4.1%", note: "Optimized Sourcing" },
        { label: "Active Customers", value: "1,420", change: "+12.6%", note: "Multi-Region" },
        { label: "Funnel Conversion", value: "4.32%", change: "+3.8%", note: "A/B Tested" },
      ],
      chart: [
        { label: "M1", h: "45%", val: "$28k" },
        { label: "M2", h: "58%", val: "$39k" },
        { label: "M3", h: "52%", val: "$34k" },
        { label: "M4", h: "70%", val: "$49k" },
        { label: "M5", h: "66%", val: "$44k" },
        { label: "M6", h: "84%", val: "$61k" },
        { label: "M7", h: "100%", val: "$84k" },
      ],
      logs: [
        { time: "Just now", event: "Checkout session settled in USD", status: "Processed" },
        { time: "3m ago", event: "Multi-currency FX rates synced", status: "Synced" },
        { time: "7m ago", event: "Attribution model updated for Meta Ads", status: "Active" },
        { time: "12m ago", event: "Automated repurchase email triggered", status: "Delivered" },
      ],
      footerLeft: "Network Delivery: 99.4% Cached",
      footerRight: "Average Response: 24ms",
    },
    orders: {
      title: "Automated Order Processing & Settlement",
      subtitle: "End-to-end fulfillment routing and freight coordination",
      metrics: [
        { label: "Settled Orders", value: "4,812", change: "+24.1%", note: "This Month" },
        { label: "Dispatch Velocity", value: "2.4 hrs", change: "-35%", note: "Avg Processing" },
        { label: "Return Rate", value: "0.8%", change: "-12%", note: "Quality Inspected" },
        { label: "Active Hubs", value: "5 Hubs", change: "Stable", note: "Asia, EU & US" },
      ],
      chart: [
        { label: "W1", h: "40%", val: "420" },
        { label: "W2", h: "55%", val: "610" },
        { label: "W3", h: "68%", val: "740" },
        { label: "W4", h: "62%", val: "680" },
        { label: "W5", h: "85%", val: "920" },
        { label: "W6", h: "92%", val: "1050" },
        { label: "W7", h: "100%", val: "1190" },
      ],
      logs: [
        { time: "Just now", event: "Consolidated freight dispatched to Europe", status: "In Transit" },
        { time: "4m ago", event: "Customs declaration verified by broker", status: "Cleared" },
        { time: "8m ago", event: "Factory batch inspection approved", status: "Passed" },
        { time: "15m ago", event: "Inventory allocated across 3 regional depots", status: "Synced" },
      ],
      footerLeft: "Fulfillment Accuracy: 99.8%",
      footerRight: "Dispatch Window: <24h",
    },
    infrastructure: {
      title: "Global Platform Availability & Response",
      subtitle: "Resilient cloud infrastructure with zero single-point failure",
      metrics: [
        { label: "System Uptime", value: "99.98%", change: "Nominal", note: "Continuous SLA" },
        { label: "Edge Latency", value: "19ms", change: "-4ms", note: "Global CDN" },
        { label: "API Error Rate", value: "0.001%", change: "Zero", note: "Fault-Tolerant" },
        { label: "Security Status", value: "Compliant", change: "Verified", note: "Role-Based ACL" },
      ],
      chart: [
        { label: "US-E", h: "92%", val: "18ms" },
        { label: "US-W", h: "88%", val: "22ms" },
        { label: "EU-W", h: "94%", val: "16ms" },
        { label: "EU-C", h: "85%", val: "24ms" },
        { label: "AP-S", h: "80%", val: "28ms" },
        { label: "AP-E", h: "86%", val: "23ms" },
        { label: "ME-C", h: "82%", val: "26ms" },
      ],
      logs: [
        { time: "Just now", event: "Automated TLS certificates verified", status: "Secure" },
        { time: "2m ago", event: "Database read replicas synchronized", status: "Healthy" },
        { time: "6m ago", event: "Edge workers deployed across 180 nodes", status: "Active" },
        { time: "10m ago", event: "Encrypted backup snapshot finalized", status: "Saved" },
      ],
      footerLeft: "Encryption: AES-256 / TLS 1.3",
      footerRight: "Incident Status: All Systems Operational",
    },
  };

  const current = tabData[activeTab];

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block">
            Technology & Platforms
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Turning Complex Workflows Into Simple Software
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We design and engineer cloud digital systems that make businesses faster, smarter, and simpler to scale.
          </p>
        </div>

        {/* Dashboard Preview Container (Light Enterprise Console) */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          
          {/* Header Bar with Tabs */}
          <div className="px-5 py-4 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-bold text-slate-900 text-sm">
                Ever Legit Operational Suite
              </span>
              <span className="text-slate-300 text-xs hidden sm:inline">•</span>
              <span className="text-slate-500 text-xs hidden sm:inline font-mono">Live Telemetry</span>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center bg-slate-200/70 p-1 rounded-xl border border-slate-200 text-xs font-semibold w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={() => setActiveTab("performance")}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "performance"
                    ? "bg-white text-blue-600 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "orders"
                    ? "bg-white text-blue-600 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Orders & Flow
              </button>
              <button
                onClick={() => setActiveTab("infrastructure")}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "infrastructure"
                    ? "bg-white text-blue-600 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Systems
              </button>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-[#f8fafc]">
            {current.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1 shadow-sm transition-all"
              >
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
                  <span className="truncate font-medium">{m.label}</span>
                  <span className="text-emerald-600 font-bold text-[11px] flex items-center shrink-0">
                    {m.change}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 truncate">
                  {m.note}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Visual Area (Chart + Log) */}
          <div className="p-4 sm:p-6 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 bg-white">
            
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    {current.title}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {current.subtitle}
                </p>
              </div>

              {/* Chart Visual Simulation */}
              <div className="h-36 sm:h-44 flex items-end gap-2 sm:gap-3 pt-6 pb-2 px-1 border-b border-slate-200">
                {current.chart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center gap-1.5 group relative"
                  >
                    <div
                      className="w-full rounded-t transition-all duration-300 bg-blue-600/30 group-hover:bg-blue-600"
                      style={{ height: item.h }}
                    />
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-500 pt-3 gap-1">
                <span>{current.footerLeft}</span>
                <span className="text-blue-600 font-semibold">{current.footerRight}</span>
              </div>
            </div>

            {/* Operational Event Feed */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center justify-between">
                  <span>Recent Events</span>
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                </h4>
                <div className="space-y-2">
                  {current.logs.map((log, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs shadow-sm"
                    >
                      <div className="space-y-0.5 min-w-0 pr-2">
                        <div className="text-slate-800 font-semibold truncate text-xs">
                          {log.event}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {log.time}
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-400 text-center font-medium">
                Ever Legit Enterprise Platform
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/services/saas-software"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-white text-xs transition-all shadow-md shadow-blue-500/20 active:scale-95"
          >
            <span>Explore Engineering & Platforms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
