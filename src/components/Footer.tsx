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
    <footer className="bg-slate-100/80 border-t border-slate-200 text-slate-600 text-sm font-sans pb-20 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand Info & Inquiries */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />

            <p className="text-blue-700 font-bold text-xs tracking-wider uppercase">
              Commerce • Technology • Growth
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Ever Legit operates across global e-commerce, international trade corridors, software engineering, and performance marketing to build durable commercial ventures.
            </p>

            {/* Direct Official Contact Cards */}
            <div className="pt-2 space-y-2 max-w-sm">
              <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                Direct Contact Desks
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="flex items-center gap-2.5 text-xs text-slate-900 hover:text-blue-600 transition-colors flex-1 min-w-0"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 uppercase block font-medium">
                      Direct Voice
                    </span>
                    <span className="font-bold text-xs truncate block text-slate-900">{COMPANY_CONTACT.phoneDisplay}</span>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.phoneRaw, "phone")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors text-xs"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-2.5 text-xs text-slate-900 hover:text-blue-600 transition-colors flex-1 min-w-0"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 uppercase block font-medium">
                      Official Email
                    </span>
                    <span className="font-bold text-xs truncate block text-slate-900">{COMPANY_CONTACT.email}</span>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.email, "email")}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors text-xs"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Global Operations</span>
              </div>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  About Ever Legit
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Core Disciplines
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Portfolio & Ventures
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Business Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/ecommerce" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  E-Commerce Systems
                </Link>
              </li>
              <li>
                <Link href="/services/import-export" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Import & Export Trade
                </Link>
              </li>
              <li>
                <Link href="/services/saas-software" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/saas-software" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Performance Marketing
                </Link>
              </li>
              <li className="pt-1.5 border-t border-slate-200">
                <Link href="/services#estimator" className="text-blue-600 hover:text-blue-700 font-bold transition-colors block py-0.5">
                  Scope & Cost Estimator →
                </Link>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-command-search"))}
                  className="text-slate-500 hover:text-slate-900 transition-colors block py-0.5 text-left cursor-pointer"
                >
                  Search Global Index (⌘K)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-600 text-slate-600 transition-colors block py-0.5">
                  Cookie Policy
                </Link>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Confidentiality Protected</span>
                </div>
              </li>
              <li className="pt-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>24-Hour Review SLA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with safe area */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Ever Legit. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="hover:text-blue-600 text-slate-600 transition-colors"
            >
              Direct: {COMPANY_CONTACT.phoneDisplay}
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="hover:text-blue-600 text-slate-600 transition-colors"
            >
              {COMPANY_CONTACT.email}
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors p-1.5 rounded-lg hover:bg-slate-200/50 active:scale-95 cursor-pointer"
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
