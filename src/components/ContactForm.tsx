"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
  Sparkles,
  Calendar,
  Layers,
  RotateCcw,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

function ContactFormInner() {
  const searchParams = useSearchParams();

  const [formMode, setFormMode] = useState<"brief" | "callback">("brief");

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    interest: "E-Commerce",
    budget: "$10k - $50k",
    timeline: "1 - 3 Months",
    preferredSlot: "Morning (9am - 12pm MT)",
    message: "",
    agreedToPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [draftSaved, setDraftSaved] = useState(false);
  const [refCode, setRefCode] = useState("");

  const interestOptions = [
    "E-Commerce",
    "Import & Export",
    "Software & Cloud",
    "Digital Marketing",
    "Strategic Partnership",
    "General Inquiry",
  ];

  const budgetOptions = [
    "Under $10k",
    "$10k - $50k",
    "$50k - $100k",
    "Enterprise / Strategic",
  ];

  const timelineOptions = [
    "Immediate (< 2 Weeks)",
    "1 Month",
    "1 - 3 Months",
    "Flexible / Planning",
  ];

  // Prefill from URL query params (from Estimator or Portfolio links)
  useEffect(() => {
    const interestParam = searchParams.get("interest");
    const projectParam = searchParams.get("project");
    const scaleParam = searchParams.get("scale");
    const weeksParam = searchParams.get("weeks");
    const featuresParam = searchParams.get("features");

    // Check localStorage draft first
    const savedDraft = localStorage.getItem("everlegit_contact_draft");
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData((prev) => ({ ...prev, ...parsed }));
      } catch (err) {
        // fallback
      }
    }

    // URL params take precedence over draft
    if (interestParam || projectParam || featuresParam) {
      let customMsg = "";
      if (projectParam) {
        customMsg = `I would like to explore a venture / technical architecture similar to "${projectParam}".\n`;
      }
      if (scaleParam || weeksParam || featuresParam) {
        customMsg += `[Scope Transfer]:\nScale: ${scaleParam || "Growth"}\nTarget Turnaround: ~${weeksParam || "4"} Weeks\nCapabilities: ${featuresParam || "Standard Implementation"}\n`;
      }

      setFormData((prev) => ({
        ...prev,
        interest: interestParam || prev.interest,
        message: customMsg || prev.message,
      }));
    }
  }, [searchParams]);

  // Auto-save draft to localStorage on change
  useEffect(() => {
    if (formData.fullName || formData.message || formData.email) {
      localStorage.setItem("everlegit_contact_draft", JSON.stringify(formData));
      setDraftSaved(true);
      const timer = setTimeout(() => setDraftSaved(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [formData]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your name";
    }
    if (formMode === "brief" && !formData.company.trim()) {
      errs.company = "Please enter your company or business name";
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      errs.email = "Please provide an email or phone number";
    } else if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errs.email = "Please enter a valid email address";
    }
    if (formMode === "brief") {
      if (!formData.message.trim()) {
        errs.message = "Please describe what you are looking to discuss";
      } else if (formData.message.trim().length < 10) {
        errs.message = "Please share a few more details (at least 10 characters)";
      }
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

    const generatedRef = "EL-" + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedRef);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      localStorage.removeItem("everlegit_contact_draft");
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Fallback
      }
    }, 900);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      interest: "E-Commerce",
      budget: "$10k - $50k",
      timeline: "1 - 3 Months",
      preferredSlot: "Morning (9am - 12pm MT)",
      message: "",
      agreedToPrivacy: false,
    });
    localStorage.removeItem("everlegit_contact_draft");
  };

  return (
    <div className="max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Side: What to expect & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-2">
              Direct Communications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Executive Review Desk
            </h2>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed font-normal">
              Every message and callback request is handled under a verified Non-Disclosure framework and evaluated directly by operational leads.
            </p>
          </div>

          {/* 3 Simple Steps */}
          <div className="space-y-4 border-l border-white/10 pl-5 ml-1">
            <div>
              <h4 className="text-sm font-semibold text-white">
                1. Initial Assessment
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We review technical feasibility, sourcing parameters, and project scope within 24 business hours.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                2. Direct Consultation Call
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                A structured 20-minute executive briefing to align on deliverables, timelines, and milestones.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                3. Phased Implementation Plan
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                A clear proposal with accountable milestones, transparent pricing, and deployment schedules.
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
                  <span className="text-[11px] text-slate-400 block">Direct Voice</span>
                  <a
                    href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                    className="text-xs font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_CONTACT.phoneRaw, "phone")}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
                  <span className="text-[11px] text-slate-400 block">Email Desk</span>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="text-xs font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(COMPANY_CONTACT.email, "email")}
                  className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
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

        {/* Right Side: Tabbed Interactive Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111726] border border-white/10 shadow-xl relative">
            
            {/* Form Mode Selector */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/5">
                <button
                  type="button"
                  onClick={() => setFormMode("brief")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    formMode === "brief"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Commercial Brief
                </button>
                <button
                  type="button"
                  onClick={() => setFormMode("callback")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    formMode === "callback"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  15-Min Express Callback
                </button>
              </div>

              {draftSaved && (
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 animate-fadeIn">
                  <Check className="w-3 h-3" />
                  <span>Draft saved</span>
                </span>
              )}
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Inquiry Confirmed
                  </h3>
                  <p className="text-xs text-blue-400 font-mono mt-1">
                    Priority Tracking Reference: <strong>{refCode}</strong>
                  </p>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. We have received your inquiry regarding <strong className="text-blue-300">{formData.interest}</strong>. An operational lead will review and respond to <strong className="text-white">{formData.email || formData.phone}</strong> within 24 business hours.
                </p>

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Vance"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      id="contact-full-name"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Business / Company */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Company / Organization{" "}
                      {formMode === "brief" ? (
                        <span className="text-red-400">*</span>
                      ) : (
                        <span className="text-slate-500">(Optional)</span>
                      )}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global Ltd"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
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
                      placeholder="michael@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      id="contact-email"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Phone Number{" "}
                      {formMode === "callback" ? (
                        <span className="text-red-400">*</span>
                      ) : (
                        <span className="text-slate-500">(For WhatsApp/Call)</span>
                      )}
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      id="contact-phone"
                    />
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Discipline / Subject <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0e1422] focus:border-blue-500 focus:outline-none text-white text-sm transition-colors cursor-pointer"
                    id="contact-interest"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0e1422] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mode-specific fields */}
                {formMode === "brief" ? (
                  <>
                    {/* Budget & Timeline Chips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400">
                          Estimated Budget / Scale
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {budgetOptions.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`p-2 rounded-lg text-[11px] font-medium border text-left truncate transition-colors cursor-pointer ${
                                formData.budget === b
                                  ? "bg-blue-600/20 border-blue-500 text-white"
                                  : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-400">
                          Target Timeline
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {timelineOptions.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: t })}
                              className={`p-2 rounded-lg text-[11px] font-medium border text-left truncate transition-colors cursor-pointer ${
                                formData.timeline === t
                                  ? "bg-blue-600/20 border-blue-500 text-white"
                                  : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        Message / Project Scope <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us briefly about your goals, timelines, or specifications..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 resize-none transition-colors"
                        id="contact-message"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400">{errors.message}</p>
                      )}
                    </div>
                  </>
                ) : (
                  /* Callback Mode */
                  <div className="space-y-3 pt-1 animate-fadeIn">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Preferred Callback Window
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          "Morning (9am - 12pm MT)",
                          "Afternoon (1pm - 5pm MT)",
                          "Urgent / ASAP",
                        ].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, preferredSlot: slot })
                            }
                            className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-colors cursor-pointer ${
                              formData.preferredSlot === slot
                                ? "bg-blue-600/20 border-blue-500 text-white"
                                : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">
                        Quick Note / Context (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Need pricing on cross-border logistics or Next.js app MVP..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] focus:border-blue-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>
                )}

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
                      I agree to the processing of this communication in accordance with Ever Legit's{" "}
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
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-900/30 active:scale-95 disabled:opacity-50"
                    id="contact-submit-button"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>
                          {formMode === "brief"
                            ? "Send Commercial Brief"
                            : "Schedule 15-Min Callback"}
                        </span>
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

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-400">
          Loading consultation interface...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
