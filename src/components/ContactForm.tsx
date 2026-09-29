"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Send,
  CheckCircle2,
  Clock,
  Mail,
  Shield,
  PhoneCall,
  FileText,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    interest: "E-Commerce",
    message: "",
    agreedToPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const interestOptions = [
    "E-Commerce",
    "Import & Export",
    "Software & Cloud",
    "Digital Marketing",
    "Strategic Partnership",
    "General Inquiry",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your name";
    }
    if (!formData.company.trim()) {
      errs.company = "Please enter your company or business name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please describe what you are looking to discuss";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please share a few more details (at least 10 characters)";
    }
    if (!formData.agreedToPrivacy) {
      errs.agreedToPrivacy = "Please confirm acceptance of privacy terms";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Fallback
      }
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Side: What to expect & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-2">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What happens next?
            </h2>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed font-normal">
              Every inquiry is reviewed directly by our leadership team to provide clear evaluation and next steps.
            </p>
          </div>

          {/* 3 Simple Steps */}
          <div className="space-y-4 border-l border-white/10 pl-5 ml-1">
            <div>
              <h4 className="text-sm font-semibold text-white">
                1. Initial Assessment
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We review your requirements and project scope within 24 business hours.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                2. Direct Consultation
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We schedule a brief call to align on technical feasibility, sourcing parameters, or timelines.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                3. Clear Proposal
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We present structured milestones and transparent deliverables to start work.
              </p>
            </div>
          </div>

          {/* Direct Phone & Email Desks */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Direct Contact Desks
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone Desk */}
              <div className="p-3.5 rounded-xl bg-[#111726] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct Phone</span>
                  <a
                    href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                    className="text-xs font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_CONTACT.phoneRaw, "phone")}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email Desk */}
              <div className="p-3.5 rounded-xl bg-[#111726] border border-white/10 flex items-center justify-between">
                <div className="truncate mr-2">
                  <span className="text-[11px] text-slate-400 block">Email Us</span>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="text-xs font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_CONTACT.email, "email")}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Minimalist Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111726] border border-white/10 shadow-lg">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your inquiry regarding <strong className="text-blue-300">{formData.interest}</strong>. An operations lead will reach out to <strong className="text-white">{formData.email}</strong> within 24 business hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Smith"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      id="contact-full-name"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Business / Company */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Company / Organization <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      id="contact-company"
                    />
                    {errors.company && (
                      <p className="text-xs text-red-400">{errors.company}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      id="contact-email"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Phone Number <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      id="contact-phone"
                    />
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    What can we help you with? <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-[#0e1422] focus:border-blue-500 focus:outline-none text-white text-sm transition-colors cursor-pointer"
                    id="contact-interest"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0e1422] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Message / Project Details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us briefly about your goals, timelines, or requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 resize-none transition-colors"
                    id="contact-message"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Privacy Agreement */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedToPrivacy}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreedToPrivacy: e.target.checked,
                        })
                      }
                      className="mt-1 h-3.5 w-3.5 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-0 cursor-pointer"
                      id="contact-privacy-check"
                    />
                    <span className="text-xs text-slate-400 leading-normal">
                      I agree to the processing of this inquiry in accordance with the{" "}
                      <a href="/privacy" className="text-blue-400 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                  {errors.agreedToPrivacy && (
                    <p className="text-xs text-red-400 mt-1">{errors.agreedToPrivacy}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    id="contact-submit-button"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
