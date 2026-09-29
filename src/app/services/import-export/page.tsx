"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Ship,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  Copy,
  Check,
  Globe2,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function ImportExportPage() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const tradePillars = [
    {
      title: "Global Factory Sourcing",
      desc: "Vetting manufacturers, assessing production standards, and establishing resilient supplier relationships in primary industrial centers.",
    },
    {
      title: "Quality Verification & Auditing",
      desc: "Pre-production sample verification, factory on-site audits, and pre-shipment container inspections to eliminate defects.",
    },
    {
      title: "Trade Compliance & Customs",
      desc: "Customs classification, duty optimization, export manifests, and cross-border documentation clearance.",
    },
    {
      title: "Multi-Modal Freight Logistics",
      desc: "Coordinating ocean container shipping, air priority freight, warehousing staging, and domestic last-mile delivery partners.",
    },
  ];

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden bg-[#0b0f19] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-cyan-400 font-semibold">Import & Export</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
            <span>Global Sourcing & Trade</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            International Sourcing &{" "}
            <span className="text-cyan-400">Trade Solutions.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal pt-1">
            Connecting products, vetted suppliers, and global markets across borders. We eliminate international trade friction through diligent sourcing, rigorous auditing, and compliant logistics corridors.
          </p>

          {/* Quick Direct Desk Connect */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all active:scale-95 shadow-md shadow-blue-900/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.email}?subject=Trade Sourcing Inquiry`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-200 hover:text-white border border-white/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-14">
          {tradePillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#111726] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-xs mb-3.5">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 mt-5 border-t border-white/5 text-xs text-slate-400 flex items-center justify-between">
                <span>Audited Protocol</span>
                <span className="text-cyan-400 font-medium">Verified Trade</span>
              </div>
            </div>
          ))}
        </div>

        {/* Risk Mitigation & Standards */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-[#111726] border border-white/10 space-y-6 shadow-xl">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
              Risk Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Compliant & Transparent Trade Protocols
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              International trade requires uncompromising adherence to regulations and contract integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Supplier Verification",
                text: "Audited manufacturing credentials and business license verification prior to engagement.",
              },
              {
                title: "Milestone Contracts",
                text: "Structured commercial payments tied directly to verifiable inspection milestones.",
              },
              {
                title: "Document Accuracy",
                text: "Accurate commercial invoicing and packing slips to prevent port customs delays.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2"
              >
                <div className="flex items-center gap-2 text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold">{p.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Desk */}
        <div className="mt-14 p-6 sm:p-12 rounded-3xl bg-[#111726] border border-white/10 text-center space-y-5 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
              Direct Sourcing Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Inquire About Cross-Border Sourcing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Connect directly with our global trade team to discuss factory vetting, container logistics, and payment terms.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all active:scale-95 shadow-md shadow-blue-900/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all active:scale-95"
            >
              <span>Submit Sourcing Brief</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
