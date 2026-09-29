"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  Copy,
  Check,
  ChevronDown,
  X,
  ArrowRight,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function QuickConnectDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Reveal dock smoothly after initial page load
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleCopy = (text: string, type: "phone" | "email", e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Bottom Sheet Modal (when open on mobile) */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center font-sans">
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
            aria-hidden="true"
          />

          {/* Bottom Sheet Drawer */}
          <div className="relative w-full bg-[#111726] border-t border-white/15 rounded-t-3xl p-5 shadow-2xl z-10 max-h-[85vh] overflow-y-auto pb-safe animate-slideUp text-white">
            {/* Grab Handle */}
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-4" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-white">
                  Direct Operations Desk
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                  Online
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Direct executive routing for commerce initiatives, global trade sourcing, and software briefs.
            </p>

            {/* Actions List */}
            <div className="mt-4 space-y-2.5">
              {/* Voice Desk */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 flex-1 min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">
                      Voice Desk (Direct)
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      {COMPANY_CONTACT.phoneDisplay}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    onClick={(e) => handleCopy(COMPANY_CONTACT.phoneRaw, "phone", e)}
                    className="p-2.5 rounded-full bg-white/10 text-slate-300 hover:text-white"
                    title="Copy phone"
                  >
                    {copiedType === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                    className="px-3.5 py-2 text-xs font-semibold rounded-full bg-blue-600 text-white active:scale-95 shadow-sm"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Email Desk */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-3 flex-1 min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-semibold text-slate-400">
                      Inquiries Desk
                    </div>
                    <div className="text-sm font-bold text-white truncate">
                      {COMPANY_CONTACT.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    onClick={(e) => handleCopy(COMPANY_CONTACT.email, "email", e)}
                    className="p-2.5 rounded-full bg-white/10 text-slate-300 hover:text-white"
                    title="Copy email"
                  >
                    {copiedType === "email" ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="px-3.5 py-2 text-xs font-semibold rounded-full bg-indigo-600 text-white active:scale-95 shadow-sm"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Row */}
            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Response &lt;24 business hours</span>
              </span>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-blue-400 font-semibold flex items-center gap-1"
              >
                <span>Full Contact Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Container */}
      <aside
        aria-label="Quick Connect Desk"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 font-sans transition-all duration-300"
      >
        {/* Desktop Expanded Card */}
        {!isMobile && isOpen ? (
          <div className="glass-panel-glow rounded-2xl p-5 shadow-2xl shadow-black/80 w-[360px] border border-blue-500/30 text-white backdrop-blur-2xl transition-all duration-300 animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Direct Operations Desk
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 font-semibold border border-blue-500/30">
                  Online
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize Desk"
                aria-label="Minimize Desk"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Direct executive routing for commerce initiatives, global sourcing, and technology briefs.
            </p>

            {/* Action Channels */}
            <div className="mt-3.5 space-y-2">
              {/* Phone Channel */}
              <div className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-blue-600/10 border border-white/10 hover:border-blue-500/40 transition-all shadow-sm">
                <a
                  href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 flex-1 min-w-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Voice Desk
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                      {COMPANY_CONTACT.phoneDisplay}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-1 ml-2 shrink-0">
                  <button
                    onClick={(e) => handleCopy(COMPANY_CONTACT.phoneRaw, "phone", e)}
                    className="p-1.5 rounded-md bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedType === "phone" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                    className="luxury-btn-primary px-3 py-1 text-xs font-semibold rounded-lg text-white active:scale-95"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Email Channel */}
              <div className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-indigo-600/10 border border-white/10 hover:border-indigo-500/40 transition-all shadow-sm">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-3 flex-1 min-w-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Inquiries Desk
                    </div>
                    <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                      {COMPANY_CONTACT.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-1 ml-2 shrink-0">
                  <button
                    onClick={(e) => handleCopy(COMPANY_CONTACT.email, "email", e)}
                    className="p-1.5 rounded-md bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedType === "email" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95 shadow-sm transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SLA &lt;24h Response</span>
              </span>

              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 group py-0.5"
              >
                <span>Full Desk</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        ) : (
          /* Minimized Floating Pill / FAB */
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-[#111726]/95 hover:bg-[#161e32] backdrop-blur-xl border border-blue-500/40 hover:border-blue-400 shadow-2xl shadow-black/80 ring-1 ring-white/10 text-white transition-all active:scale-95 cursor-pointer"
            title="Open Quick Operations Desk"
            aria-label="Open Quick Operations Desk"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>

            <Headphones className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />

            <span className="text-xs font-semibold tracking-wide">
              Quick Connect
            </span>
          </button>
        )}
      </aside>
    </>
  );
}
