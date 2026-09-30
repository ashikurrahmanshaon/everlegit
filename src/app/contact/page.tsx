"use client";

import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  HelpCircle,
  Mail,
  PhoneCall,
  Copy,
  Check,
  Search,
  MessageSquare,
  Calculator,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function ContactPage() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [faqSearch, setFaqSearch] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const faqs = [
    {
      category: "Process & Response",
      q: "What is your typical initial response time?",
      a: "Our operational team reviews incoming business inquiries and responds with a clear technical or commercial evaluation within 24 business hours.",
    },
    {
      category: "Confidentiality",
      q: "Do you sign Non-Disclosure Agreements (NDAs)?",
      a: "Yes. For proprietary architectures, unreleased software concepts, or private sourcing channels, we provide or sign standard mutual NDAs prior to detailed discussions.",
    },
    {
      category: "Operations",
      q: "Can Ever Legit handle both software engineering and cross-border trade?",
      a: "Yes. Ever Legit was deliberately built to connect physical supply trade pipelines with modern digital software systems under a single unified group.",
    },
    {
      category: "Milestones",
      q: "How do you structure collaborative engagements?",
      a: "Engagements are organized around clear deliverables, milestones, and transparent accountability from day one, with defined Sprint phases.",
    },
    {
      category: "Ownership",
      q: "Who owns the code and intellectual property for software builds?",
      a: "100% of custom code, deployment scripts, repository assets, and intellectual property developed for your engagement belong to your organization upon milestone handover.",
    },
    {
      category: "Sourcing",
      q: "How are international suppliers vetted in Import & Export?",
      a: "Our operations desk conducts factory capability checks, export license verifications, and compliance audits through trusted multi-region inspection corridors.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.category.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden bg-[#0b0f19] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-blue-400 font-semibold">Contact</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
            Direct Communications
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's start a conversation.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
            Whether you are launching a digital venture, expanding international trade sourcing, or seeking a reliable technology partner, we're here to help.
          </p>
        </div>

        {/* Direct Action Cards: Phone, Email, & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl">
          {/* Phone Desk Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#111726] border border-white/10 flex flex-col justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-400 block font-medium">
                  Direct Voice
                </span>
                <span className="text-sm sm:text-base font-bold text-white truncate block">
                  {COMPANY_CONTACT.phoneDisplay}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-white/5">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="flex-1 text-center px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
              >
                Call Now
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_CONTACT.phoneRaw, "phone")}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedType === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Email Desk Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#111726] border border-white/10 flex flex-col justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-400 block font-medium">
                  Official Inquiries
                </span>
                <span className="text-sm sm:text-base font-bold text-white truncate block">
                  {COMPANY_CONTACT.email}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-white/5">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex-1 text-center px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_CONTACT.email, "email")}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp / Rapid Message Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#111726] border border-white/10 flex flex-col justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-400 block font-medium">
                  WhatsApp Direct
                </span>
                <span className="text-sm sm:text-base font-bold text-white truncate block">
                  Instant Operations
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-white/5">
              <a
                href={`https://wa.me/${COMPANY_CONTACT.phoneRaw.replace("+", "")}?text=Hello%20Ever%20Legit,%20I%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Project Estimator Callout Banner */}
        <div className="mb-10 max-w-5xl p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-300">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Need an immediate turnaround estimate or roadmap?
              </h4>
              <p className="text-xs text-slate-300">
                Configure your project specs in our interactive planner and transfer it directly into this form.
              </p>
            </div>
          </div>
          <Link
            href="/services#estimator"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors"
          >
            Launch Scope Planner
          </Link>
        </div>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Interactive Searchable FAQ Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
              Knowledge & FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Find immediate answers regarding our consultation process, privacy, and operating model.
            </p>
          </div>

          {/* FAQ Search Bar */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. NDA, response time, code ownership)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Accordion FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                    isExpanded
                      ? "bg-[#141b2e] border-blue-500/40 shadow-lg"
                      : "bg-[#111726] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 text-white font-semibold text-sm">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isExpanded ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-2.5 text-xs text-slate-300 leading-relaxed pl-6 font-normal ${
                      isExpanded ? "block" : "line-clamp-2 text-slate-400"
                    }`}
                  >
                    {faq.a}
                  </div>
                  <div className="mt-2 pl-6">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-blue-300 font-medium">
                      {faq.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
