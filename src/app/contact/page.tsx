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
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function ContactPage() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const faqs = [
    {
      q: "What is your typical initial response time?",
      a: "Our operational team reviews incoming business inquiries and responds with a clear evaluation within 24 business hours.",
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs)?",
      a: "Yes. For proprietary architectures, unreleased software concepts, or private sourcing channels, we provide or sign standard mutual NDAs prior to detailed discussions.",
    },
    {
      q: "Can Ever Legit handle both software engineering and cross-border trade?",
      a: "Yes. Ever Legit was deliberately built to connect physical supply trade pipelines with modern digital software systems under a single group.",
    },
    {
      q: "How do you structure collaborative engagements?",
      a: "Engagements are organized around clear deliverables, milestones, and transparent accountability from day one.",
    },
  ];

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

        {/* Direct Action Cards: Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl">
          {/* Phone Desk Card */}
          <div className="p-5 rounded-xl bg-[#111726] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">
                  Direct Phone
                </span>
                <span className="text-base font-bold text-white">
                  {COMPANY_CONTACT.phoneDisplay}
                </span>
                <span className="text-xs text-slate-400 block font-normal">
                  Immediate calls & audio briefings
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
              >
                Call Now
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_CONTACT.phoneRaw, "phone")}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy phone number"
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
          <div className="p-5 rounded-xl bg-[#111726] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-slate-400 block font-medium">
                  Official Inquiries
                </span>
                <span className="text-base font-bold text-white truncate block">
                  {COMPANY_CONTACT.email}
                </span>
                <span className="text-xs text-slate-400 block font-normal">
                  Proposals, RFPs, and partnerships
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white font-medium text-xs transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={() => copyToClipboard(COMPANY_CONTACT.email, "email")}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactForm />

        {/* FAQ Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-300 font-normal">
              Answers regarding our consultation process, privacy, and operating model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#111726] border border-white/10 space-y-2"
              >
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <h4>{faq.q}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6 font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
