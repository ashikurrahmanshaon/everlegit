"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import {
  ArrowUp,
  ShieldCheck,
  Mail,
  PhoneCall,
  Clock,
  Copy,
  Check,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function Footer() {
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopy = (text: string, field: "phone" | "email") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <footer className="bg-[#090d16] border-t border-white/10 text-slate-400 text-sm font-sans pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info & Inquiries */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />

            <p className="text-slate-300 font-semibold text-xs tracking-wider uppercase text-blue-400">
              Commerce • Technology • Growth
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Ever Legit operates across global e-commerce, international trade corridors, software engineering, and performance marketing to build durable commercial ventures.
            </p>

            {/* Direct Official Contact Cards */}
            <div className="pt-2 space-y-2 max-w-sm">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Direct Contact Desks
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="flex items-center gap-2.5 text-xs text-white hover:text-blue-300 transition-colors flex-1 min-w-0"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 uppercase block font-medium">
                      Direct Voice
                    </span>
                    <span className="font-semibold text-xs truncate block">{COMPANY_CONTACT.phoneDisplay}</span>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.phoneRaw, "phone")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-2.5 text-xs text-white hover:text-indigo-300 transition-colors flex-1 min-w-0"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 uppercase block font-medium">
                      Official Email
                    </span>
                    <span className="font-semibold text-xs truncate block">{COMPANY_CONTACT.email}</span>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.email, "email")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs"
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

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active Global Operations</span>
              </div>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors block py-0.5">
                  About Ever Legit
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors block py-0.5">
                  Core Disciplines
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors block py-0.5">
                  Portfolio & Ventures
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-blue-400 transition-colors block py-0.5">
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors block py-0.5">
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Business Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/ecommerce" className="hover:text-blue-400 transition-colors block py-0.5">
                  E-Commerce Systems
                </Link>
              </li>
              <li>
                <Link href="/services/import-export" className="hover:text-blue-400 transition-colors block py-0.5">
                  Import & Export Trade
                </Link>
              </li>
              <li>
                <Link href="/services/saas-software" className="hover:text-blue-400 transition-colors block py-0.5">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/saas-software" className="hover:text-blue-400 transition-colors block py-0.5">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-blue-400 transition-colors block py-0.5">
                  Performance Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors block py-0.5">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-400 transition-colors block py-0.5">
                  Cookie Policy
                </Link>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Confidentiality Protected</span>
                </div>
              </li>
              <li className="pt-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24-Hour Review SLA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with safe area */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ever Legit. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="hover:text-blue-300 text-slate-300 transition-colors"
            >
              Direct: {COMPANY_CONTACT.phoneDisplay}
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hover:text-blue-300 text-slate-300 transition-colors"
            >
              {COMPANY_CONTACT.email}
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 active:scale-95"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
