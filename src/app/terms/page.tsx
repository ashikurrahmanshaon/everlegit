import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Ever Legit websites and digital portals.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden bg-slate-50/70 border-b border-slate-200 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <div className="space-y-4 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Legal Terms
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: March 2026 • Ever Legit Corporate Governance
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing the website and digital platforms operated by Ever Legit ("Ever Legit", "we", "us"), you agree to be bound by these Terms of Service, applicable laws, and relevant trade regulations. If you do not accept these terms, you should discontinue use of our platforms immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Scope of Services & Conceptual Information</h2>
            <p>
              The content published on this website is for informational, technical demonstration, and business inquiry purposes. Software architectures, venture blueprints, and research whitepapers presented as concepts or internal prototypes do not constitute binding commercial offers or financial warranties until finalized in an executed master services agreement or formal contract.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property Rights</h2>
            <p>
              All trademarks, wordmarks (including "EVER LEGIT"), logos, interface designs, source code, data visualizations, and editorial materials published on this website are the proprietary property of Ever Legit or its licensors and are protected under international copyright, trademark, and unfair competition laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Acceptable Conduct</h2>
            <p>
              When interacting with our forms or portals, you agree not to submit fraudulent contact details, transmit malicious software, or attempt unauthorized penetration testing against our web infrastructure without prior written authorization from our security team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted under applicable law, Ever Legit and its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable international commercial standards. Any formal legal inquiries may be directed to our operations desk at <strong className="text-slate-900 font-semibold">info@everlegit.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
