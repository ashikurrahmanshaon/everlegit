"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Mail,
  Copy,
  Check,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function CTASection() {
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

  const handleCopy = (text: string, field: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0c101b] border-t border-white/[0.06] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-12 lg:p-16 text-center bg-[#111726] border border-white/10 shadow-2xl space-y-6">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
            <span>Direct Commercial Inquiries</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Have a Business, Platform, or Trade Venture in Mind?
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            Connect directly with our operational leadership to explore e-commerce partnerships, global sourcing corridors, software architecture, or digital growth scaling.
          </p>

          {/* Two Clean Direct Contact Cards (Responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto text-left">
            
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Voice Desk
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 font-medium">Direct Voice Line</div>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5 truncate">
                  {COMPANY_CONTACT.phoneDisplay}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Call directly for urgent commercial inquiries or trade briefings.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all active:scale-95 shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.phoneRaw, "phone")}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Inquiries Desk
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 font-medium">Official Inquiries</div>
                <div className="text-base sm:text-lg font-bold text-white mt-0.5 truncate">
                  {COMPANY_CONTACT.email}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Submit technical project briefs, sourcing requests, or proposals.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.email, "email")}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tertiary Action & SLA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Review SLA: responses guaranteed within 24 business hours</span>
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300"
            >
              <span>Or complete the structured inquiry form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
