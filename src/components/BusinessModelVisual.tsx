"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Cpu,
  Ship,
  TrendingUp,
  Box,
  Layout,
  Tag,
  Zap,
  ArrowRight,
  Workflow,
  Sparkles,
} from "lucide-react";

export default function BusinessModelVisual() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("commerce");

  const pillars = [
    {
      id: "commerce",
      name: "E-Commerce",
      sub: "Digital Retail Operations",
      icon: ShoppingBag,
      output: "Online Stores & Multi-Region Inventory",
      outputDesc: "Consumer lifestyle storefronts, optimized checkout funnels, and centralized fulfillment sync.",
      outputIcon: Box,
      accent: "text-blue-400",
      accentBg: "bg-blue-600/15 border-blue-500/30 text-blue-400",
      link: "/services/ecommerce",
    },
    {
      id: "technology",
      name: "Technology & SaaS",
      sub: "Software & Cloud Systems",
      icon: Cpu,
      output: "Cloud Software & Enterprise Platforms",
      outputDesc: "Modern TypeScript web apps, custom API automation engines, and scalable internal operational tooling.",
      outputIcon: Layout,
      accent: "text-indigo-400",
      accentBg: "bg-indigo-600/15 border-indigo-500/30 text-indigo-400",
      link: "/services/saas-software",
    },
    {
      id: "trade",
      name: "Global Trade",
      sub: "Import & Export Corridors",
      icon: Ship,
      output: "Cross-Border Trade Pipelines",
      outputDesc: "Audited manufacturing partners, customs compliance clearance, and multi-modal container freight.",
      outputIcon: Tag,
      accent: "text-cyan-400",
      accentBg: "bg-cyan-600/15 border-cyan-500/30 text-cyan-400",
      link: "/services/import-export",
    },
    {
      id: "marketing",
      name: "Growth & Media",
      sub: "Customer Acquisition",
      icon: TrendingUp,
      output: "Performance Scaling & Retention",
      outputDesc: "Multi-network attribution modeling, predictive audience targeting, and automated customer lifetime value loops.",
      outputIcon: Zap,
      accent: "text-emerald-400",
      accentBg: "bg-emerald-600/15 border-emerald-500/30 text-emerald-400",
      link: "/services/digital-marketing",
    },
  ];

  const activePillar = pillars.find((p) => p.id === selectedPillarId) || pillars[0];
  const ActiveOutIcon = activePillar.outputIcon;

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block shadow-xs">
            Operating Structure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Our Business Model Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            A coordinated multi-disciplinary holding structure turning core operational capabilities into enduring commercial enterprises.
          </p>
        </div>

        {/* 3-Tier Minimalist Architecture (Touch & Mobile Friendly) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Level 1: Central Strategic Leadership */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 text-center max-w-lg mx-auto shadow-sm">
            <span className="text-[10px] uppercase tracking-wider font-bold text-blue-700 block mb-1">
              Central Holding & Governance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Ever Legit Group
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
              Strategic capital allocation, technological architecture, and executive governance uniting international trade, software, and digital commerce.
            </p>
          </div>

          {/* Flow Connector Line */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          </div>

          {/* Level 2: 4 Core Operating Sectors (Interactive Tap / Click) */}
          <div>
            <div className="text-center mb-3">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                Select an Operating Discipline
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {pillars.map((p) => {
                const Icon = p.icon;
                const isSelected = selectedPillarId === p.id;

                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPillarId(p.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all text-center flex flex-col items-center justify-between cursor-pointer active:scale-95 ${
                      isSelected
                        ? "bg-blue-50/80 border-blue-400 shadow-md shadow-blue-500/10 ring-1 ring-blue-400"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {p.sub}
                      </p>
                    </div>

                    <span
                      className={`mt-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-blue-200/60 text-blue-800"
                          : "text-slate-400"
                      }`}
                    >
                      {isSelected ? "Active Discipline" : "Tap to Inspect"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Level 3: Dynamic Deliverable Showcase for Selected Discipline */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-200 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className={`p-2.5 rounded-xl border ${activePillar.accentBg}`}>
                  <ActiveOutIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                    Delivered Output
                  </span>
                  <h5 className="text-base sm:text-lg font-bold text-slate-900">
                    {activePillar.output}
                  </h5>
                </div>
              </div>

              <Link
                href={activePillar.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors py-1 self-start sm:self-auto"
              >
                <span>Read Full Service Specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {activePillar.outputDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Fully Integrated Into Ever Legit Group</span>
              </span>
              <span>•</span>
              <span>Enterprise SLA Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
