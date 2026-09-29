import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy and data governance standards of Ever Legit.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden bg-[#0b0f19] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Legal Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: March 2026 • Ever Legit Corporate Governance
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Commitment to Data Privacy</h2>
            <p>
              Ever Legit ("we", "our", or "the Company") respects individual privacy and is committed to protecting the proprietary business and personal data entrusted to us. This Privacy Policy outlines the categories of information we collect through our web portals, communications channels, and digital tools, and describes how that data is safeguarded, processed, and utilized.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect information strictly necessary to facilitate business inquiries, evaluate commercial partnerships, and deliver our digital services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong>Contact & Organizational Details:</strong> Full name, professional email address, company name, telephone number, and message contents submitted via our inquiry forms.</li>
              <li><strong>Technical Telemetry:</strong> Anonymized browser metadata, IP address, device type, and interaction metrics collected automatically to ensure system stability and security.</li>
              <li><strong>Commercial Specifications:</strong> Project scopes, sourcing parameters, and software requirements voluntarily disclosed during technical discovery phases.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How Information Is Processed</h2>
            <p>
              Information collected by Ever Legit is processed exclusively for legitimate commercial purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Reviewing, responding to, and scoping incoming business inquiries and technical requests.</li>
              <li>Drafting proposals, non-disclosure agreements, and service specifications.</li>
              <li>Ensuring network security, fraud prevention, and regulatory trade compliance.</li>
              <li>Improving the performance and usability of our web applications and digital interfaces.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. No Sale or Deceptive Sharing of Personal Data</h2>
            <p>
              Ever Legit does not sell, rent, lease, or monetize customer or inquiry information to third-party data brokers or marketing aggregators. We only disclose information to trusted infrastructure providers (such as cloud hosting and email delivery partners) bound by strict confidentiality and data protection covenants.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Data Security & Storage Standards</h2>
            <p>
              We enforce modern administrative, technical, and physical safeguards designed to prevent unauthorized access, disclosure, alteration, or loss of information. Communications sent via our forms utilize Transport Layer Security (TLS 1.3) encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Your Rights & Inquiries</h2>
            <p>
              Depending on your jurisdiction, you have the right to request access to, rectification of, or deletion of your personal data held in our systems. For all privacy inquiries, please contact our legal desk at <strong className="text-white">info@everlegit.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
