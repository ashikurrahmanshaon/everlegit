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
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const disciplines = [
    {
      title: "Global E-Commerce",
      desc: "Creating high-performing online storefronts and cross-border digital retail channels.",
      icon: ShoppingBag,
      tag: "Retail & Commerce",
      accent: "text-blue-400",
      highlight: "Omnichannel Distribution",
      link: "/services/ecommerce",
    },
    {
      title: "Import & Export",
      desc: "Audited factory sourcing, regulatory compliance, and multi-region freight logistics.",
      icon: Ship,
      tag: "Trade Logistics",
      accent: "text-cyan-400",
      highlight: "Verified Sourcing Corridors",
      link: "/services/import-export",
    },
    {
      title: "Software & Cloud",
      desc: "Engineering custom web applications, SaaS platforms, and enterprise automation tools.",
      icon: Code2,
      tag: "Technology",
      accent: "text-indigo-400",
      highlight: "Fault-Tolerant Architecture",
      link: "/services/saas-software",
    },
    {
      title: "Digital Growth",
      desc: "Performance marketing, attribution telemetry, and conversion rate optimization.",
      icon: TrendingUp,
      tag: "Marketing",
      accent: "text-emerald-400",
      highlight: "Predictive Audience Scaling",
      link: "/services/digital-marketing",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0b0f19] font-sans">
      {/* Soft natural ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[520px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clear, Commanding Corporate Introduction */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Clean Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Global Commerce • Trade Logistics • Software</span>
            </div>

            {/* Clean Minimalist Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Building Businesses That{" "}
              <span className="text-blue-400">
                Move the World Forward.
              </span>
            </h1>

            {/* Human, Natural Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              Ever Legit is a global business group operating across e-commerce, international trade, cloud software engineering, and performance marketing to build durable commercial ventures.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 text-sm transition-all shadow-md shadow-blue-900/30 active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-sm transition-all active:scale-95"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>

            {/* Simple Business Stats (Mobile-Optimized) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                <div className="text-xl sm:text-2xl font-bold text-white">4 Sectors</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Core Disciplines</div>
              </div>
              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                <div className="text-xl sm:text-2xl font-bold text-white">Global</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Trade Reach</div>
              </div>
              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">&lt;24h</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Direct Response</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Sector Showcase */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl p-5 sm:p-7 bg-[#111726] border border-white/10 shadow-2xl shadow-black/50 space-y-4">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                    Operating Sectors
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    Integrated Group Capabilities
                  </h3>
                </div>

                <span className="text-xs text-slate-400 hidden sm:inline">
                  Select a sector
                </span>
              </div>

              {/* 4 Interactive Discipline Cards */}
              <div className="space-y-2.5">
                {disciplines.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeTab === idx;

                  return (
                    <div
                      key={item.title}
                      onClick={() => setActiveTab(idx)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer select-none ${
                        isActive
                          ? "bg-[#182035] border-blue-500/40 shadow-lg"
                          : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isActive
                              ? "bg-blue-600 text-white shadow-md shadow-blue-900/50"
                              : "bg-white/5 text-slate-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-semibold text-white truncate">
                              {item.title}
                            </h4>
                            <span className="text-[10px] sm:text-[11px] text-slate-400 shrink-0">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                            {item.desc}
                          </p>

                          {/* Expanded Link */}
                          {isActive && (
                            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs animate-fadeIn">
                              <span className="text-blue-300 font-medium">
                                {item.highlight}
                              </span>
                              <Link
                                href={item.link}
                                className="text-white hover:text-blue-300 font-medium flex items-center gap-1 group py-0.5"
                              >
                                <span>Learn more</span>
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Help */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Direct Leadership Review</span>
                </span>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                >
                  <span>Connect with us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
