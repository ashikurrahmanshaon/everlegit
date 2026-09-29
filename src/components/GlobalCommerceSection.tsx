"use client";

import React, { useState } from "react";
import Link from "next/link";
import { REGIONS_DATA } from "@/data/siteData";
import { Globe, ArrowRight, CheckCircle2, Navigation } from "lucide-react";

export default function GlobalCommerceSection() {
  const [selectedRegionId, setSelectedRegionId] = useState(REGIONS_DATA[0].id);

  const selectedRegion =
    REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];

  return (
    <section className="py-20 sm:py-28 bg-[#0b0f19] border-t border-b border-white/[0.06] font-sans" id="global-commerce">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            Global Trade & Market Reach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Commerce Without Borders
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Ever Legit powers trade through international digital storefronts, audited sourcing corridors, and multi-region fulfillment pipelines.
          </p>
        </div>

        {/* Region Buttons Navigation (Touch scrollable on mobile) */}
        <div className="mt-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
          {REGIONS_DATA.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {region.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Visual & Regional Focus Card */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Connected Regions Schematic Map */}
          <div className="lg:col-span-7 p-5 sm:p-7 rounded-2xl bg-[#111726] border border-white/10 flex flex-col justify-between shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
              <span className="flex items-center gap-2 font-medium text-slate-200">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Corridors & Supply Routing</span>
              </span>
              <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Network</span>
              </span>
            </div>

            {/* Stylized SVG Map with Connected Hubs */}
            <div className="relative w-full h-[220px] sm:h-[280px] my-4 bg-[#0d1220] rounded-xl border border-white/5 flex items-center justify-center overflow-hidden p-2">
              <svg
                viewBox="0 0 800 360"
                className="w-full h-full max-h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Grid Lat/Long */}
                <ellipse cx="400" cy="180" rx="360" ry="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40" y1="180" x2="760" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="400" y1="30" x2="400" y2="330" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                
                {/* Connecting trade corridors */}
                <path
                  d="M 200 130 C 320 80, 420 80, 480 120"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="opacity-80"
                />
                <path
                  d="M 480 120 C 520 140, 560 170, 580 190"
                  stroke="#60A5FA"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="opacity-80"
                />
                <path
                  d="M 580 190 C 620 200, 650 200, 670 160"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="opacity-80"
                />
                <path
                  d="M 200 130 C 360 260, 540 260, 670 160"
                  stroke="#818CF8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="opacity-40"
                />

                {/* Region Nodes */}
                {[
                  { id: "north-america", x: 200, y: 130, label: "North America" },
                  { id: "europe", x: 480, y: 120, label: "Europe" },
                  { id: "middle-east", x: 550, y: 180, label: "Middle East" },
                  { id: "south-asia", x: 610, y: 210, label: "South Asia" },
                  { id: "east-asia", x: 670, y: 160, label: "East Asia" },
                ].map((item) => {
                  const isActive = item.id === selectedRegionId;
                  return (
                    <g
                      key={item.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedRegionId(item.id)}
                    >
                      {isActive && (
                        <circle
                          cx={item.x}
                          cy={item.y}
                          r="16"
                          fill="rgba(59, 130, 246, 0.25)"
                          className="animate-ping"
                        />
                      )}
                      <circle
                        cx={item.x}
                        cy={item.y}
                        r={isActive ? "9" : "6"}
                        className={
                          isActive
                            ? "fill-blue-500 stroke-white stroke-2"
                            : "fill-blue-400 stroke-slate-900 stroke-2"
                        }
                      />
                      <text
                        x={item.x}
                        y={item.y - 14}
                        textAnchor="middle"
                        className={`text-sm font-semibold pointer-events-none select-none ${
                          isActive ? "fill-white font-bold" : "fill-slate-300"
                        }`}
                      >
                        {item.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span>Tap a node or tab to explore region</span>
              <span className="text-blue-400 font-medium">Sourcing & Freight</span>
            </div>
          </div>

          {/* Right: Selected Region Strategy Details */}
          <div className="lg:col-span-5 p-5 sm:p-7 rounded-2xl bg-[#111726] border border-white/10 space-y-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="space-y-1 pb-3.5 border-b border-white/10">
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                  Regional Focus
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedRegion.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  {selectedRegion.focus}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {selectedRegion.description}
              </p>

              {/* Active Capabilities in this market */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                  Operating Capabilities
                </span>
                <div className="space-y-2">
                  {selectedRegion.activePillars.map((pillar) => (
                    <div
                      key={pillar}
                      className="flex items-center gap-2.5 text-xs text-slate-200 bg-white/[0.03] border border-white/5 px-3 py-2.5 rounded-xl"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-medium">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/services/import-export"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Read Sourcing & Trade Model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
