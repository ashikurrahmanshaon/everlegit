"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Globe,
  PhoneCall,
  Mail,
  Copy,
  Check,
  Zap,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function EcommerceServicePage() {
  const capabilities = [
    {
      title: "Storefront Engineering",
      desc: "Fast, custom e-commerce web applications optimized for mobile checkout and global consumer trust.",
    },
    {
      title: "Cross-Border Checkout",
      desc: "Multi-currency settlement, regional payment method integration, and smooth localized checkout flows.",
    },
    {
      title: "Inventory & Fulfillment",
      desc: "Synchronized inventory management across sales channels and automated warehouse order routing.",
    },
    {
      title: "Conversion Optimization",
      desc: "A/B testing, cart recovery sequences, and friction-free user journeys designed to increase average order value.",
    },
  ];

  return (
    <div className="pt-24 pb-14 sm:pt-28 sm:pb-18 relative overflow-hidden bg-slate-50/70 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-semibold">E-Commerce</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <span>Digital Retail & Storefronts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            E-Commerce Engineered for the{" "}
            <span className="text-blue-600">Global Consumer.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal pt-1">
            Build, operate, and scale online commerce businesses across international markets. We combine high-speed digital storefronts with end-to-end operational execution.
          </p>

          {/* Quick Direct Desk Connect */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all active:scale-95 shadow-md shadow-blue-500/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-14">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xs mb-3.5">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Core Competency</span>
                <span className="text-blue-600 font-medium">Ever Legit Model</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Blueprint */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
              Execution Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              End-to-End E-Commerce Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Managing the critical connection points between online discovery, checkout speed, and product delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                step: "Phase 1: Architecture",
                desc: "Custom storefront design, technical payment setups, and responsive mobile optimization.",
              },
              {
                step: "Phase 2: Operations",
                desc: "Catalog listing, multi-currency processing, and shipping carrier integrations.",
              },
              {
                step: "Phase 3: Scale",
                desc: "Customer re-engagement automation, reviews syndication, and multi-market localization.",
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2"
              >
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {phase.step}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Desk */}
        <div className="mt-14 p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/70 border border-blue-200/70 text-center space-y-5 shadow-sm">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
              Direct Commerce Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Discuss Your E-Commerce Venture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Reach out directly to review your digital storefront roadmap, checkout performance, or international sales goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all active:scale-95 shadow-md shadow-blue-500/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all active:scale-95 shadow-sm"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
