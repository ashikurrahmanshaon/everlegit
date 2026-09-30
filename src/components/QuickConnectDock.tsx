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
  MessageSquare,
  Clock,
  Send,
  Calculator,
  Search,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function QuickConnectDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"direct" | "callback">("direct");
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [deskTime, setDeskTime] = useState<string>("");

  // In-dock quick callback form state
  const [quickForm, setQuickForm] = useState({
    name: "",
    contact: "",
    topic: "E-Commerce",
  });
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Update Cheyenne, Wyoming (America/Denver) operational desk time
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Denver",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setDeskTime(timeStr);
      } catch (err) {
        setDeskTime("Operational");
      }
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 10000);

    // Reveal dock smoothly
    const timer = setTimeout(() => setIsVisible(true), 300);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timeInterval);
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

  const handleQuickCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name.trim() || !quickForm.contact.trim()) return;

    const randomTicket = "EL-" + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomTicket);
    setCallbackSubmitted(true);
  };

  const openGlobalSearch = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("open-command-search"));
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
          <div className="relative w-full bg-[#111726] border-t border-white/15 rounded-t-3xl p-5 shadow-2xl z-10 max-h-[88vh] overflow-y-auto pb-safe animate-slideUp text-white">
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
                {deskTime && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{deskTime} MT</span>
                  </span>
                )}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab buttons */}
            <div className="flex items-center gap-2 mt-3 p-1 rounded-xl bg-white/[0.04] border border-white/5">
              <button
                onClick={() => setActiveTab("direct")}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "direct"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Direct Channels
              </button>
              <button
                onClick={() => setActiveTab("callback")}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "callback"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Quick Callback
              </button>
            </div>

            {/* Mobile Tab 1: Direct Channels */}
            {activeTab === "direct" && (
              <div className="mt-4 space-y-2.5 animate-fadeIn">
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
                      className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white active:scale-95 shadow-sm"
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
                        Email Desk
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
                      className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white active:scale-95 shadow-sm"
                    >
                      Email
                    </a>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.phoneRaw.replace("+", "")}?text=Hello%20Ever%20Legit%20Desk,%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Direct Chat on WhatsApp ({COMPANY_CONTACT.phoneDisplay})</span>
                </a>

                {/* Quick Shortcuts */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={openGlobalSearch}
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5"
                  >
                    <Search className="w-3.5 h-3.5 text-blue-400" />
                    <span>Search Index</span>
                  </button>
                  <Link
                    href="/services#estimator"
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Project Scope</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Mobile Tab 2: Quick Callback Micro-form */}
            {activeTab === "callback" && (
              <div className="mt-4 animate-fadeIn">
                {callbackSubmitted ? (
                  <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <div className="text-sm font-bold text-white">
                      Callback Priority Queued
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Reference <span className="font-mono text-emerald-300">{ticketId}</span>. Our operational desk will reach out shortly.
                    </p>
                    <button
                      onClick={() => {
                        setCallbackSubmitted(false);
                        setQuickForm({ name: "", contact: "", topic: "E-Commerce" });
                      }}
                      className="mt-2 text-xs text-blue-400 underline font-medium"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickCallback} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={quickForm.name}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone or Email *"
                        required
                        value={quickForm.contact}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, contact: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <select
                        value={quickForm.topic}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, topic: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161e32] border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="E-Commerce">E-Commerce Architecture</option>
                        <option value="Import & Export">Import & Export Sourcing</option>
                        <option value="SaaS Software">SaaS & Cloud Software</option>
                        <option value="Digital Marketing">Digital Growth & Ads</option>
                        <option value="General">Strategic Consultation</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 shadow-md shadow-blue-900/30 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Urgent Review</span>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Footer Row */}
            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Response &lt;24h SLA</span>
              </span>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-blue-400 font-semibold flex items-center gap-1"
              >
                <span>Full Consultation Page</span>
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
          <div className="glass-panel-glow rounded-2xl p-5 shadow-2xl shadow-black/80 w-[380px] border border-blue-500/30 text-white backdrop-blur-2xl transition-all duration-300 animate-fadeIn">
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
                {deskTime && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 font-medium border border-blue-500/30 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{deskTime} MT</span>
                  </span>
                )}
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

            {/* Desktop Tabs */}
            <div className="flex items-center gap-1.5 mt-3 p-1 rounded-xl bg-white/[0.04] border border-white/5">
              <button
                onClick={() => setActiveTab("direct")}
                className={`flex-1 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "direct"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Channels
              </button>
              <button
                onClick={() => setActiveTab("callback")}
                className={`flex-1 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "callback"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Fast Callback
              </button>
            </div>

            {/* Desktop Tab 1: Channels */}
            {activeTab === "direct" && (
              <div className="mt-3 space-y-2 animate-fadeIn">
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
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
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

                {/* Direct WhatsApp Action */}
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.phoneRaw.replace("+", "")}?text=Hello%20Ever%20Legit%20Operations,%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-300 border border-emerald-500/25 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Direct ({COMPANY_CONTACT.phoneDisplay})</span>
                </a>

                {/* Quick Tool Links */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={openGlobalSearch}
                    className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Search className="w-3.5 h-3.5 text-blue-400" />
                    <span>Search Index</span>
                  </button>
                  <Link
                    href="/services#estimator"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Calculator className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Scope Planner</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Desktop Tab 2: Fast Callback Form */}
            {activeTab === "callback" && (
              <div className="mt-3 animate-fadeIn">
                {callbackSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div className="text-xs font-bold text-white">
                      Request Confirmed
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Assigned Reference <span className="font-mono text-emerald-300 font-bold">{ticketId}</span>. Direct contact within 24h.
                    </p>
                    <button
                      onClick={() => {
                        setCallbackSubmitted(false);
                        setQuickForm({ name: "", contact: "", topic: "E-Commerce" });
                      }}
                      className="text-[11px] text-blue-400 underline font-medium cursor-pointer"
                    >
                      New request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickCallback} className="space-y-2.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={quickForm.name}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, name: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone or Email *"
                        required
                        value={quickForm.contact}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, contact: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <select
                        value={quickForm.topic}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, topic: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#161e32] border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="E-Commerce">E-Commerce Architecture</option>
                        <option value="Import & Export">Import & Export Sourcing</option>
                        <option value="SaaS Software">SaaS & Cloud Software</option>
                        <option value="Digital Marketing">Digital Growth & Ads</option>
                        <option value="General">Strategic Consultation</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Request Rapid Callback</span>
                    </button>
                  </form>
                )}
              </div>
            )}

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
            title="Open Direct Operations Desk"
            aria-label="Open Direct Operations Desk"
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
