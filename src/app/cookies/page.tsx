import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Cookie Policy",
  description: "Information regarding the use of cookies and local storage on Ever Legit websites.",
};

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-14 sm:pt-28 sm:pb-18 relative overflow-hidden bg-slate-50/70 border-b border-slate-200 font-sans">
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
            Technical Disclosure
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: March 2026 • Ever Legit Corporate Governance
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. What Are Cookies?</h2>
            <p>
              Cookies are compact text files placed on your browser or device when you access websites. They enable websites to recognize returning visitors, remember user preferences, maintain session state, and compile aggregated performance telemetry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Categories of Cookies We Utilize</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">Strictly Necessary Cookies</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Essential for the core technical operation of our website, including security token validation, CSRF protection, and load balancing across our edge CDN nodes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">Performance & Analytics Telemetry</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Anonymized metrics regarding page load durations, broken links, and aggregated traffic paths that assist our engineering team in optimizing site speed and accessibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">Preference & Functional Storage</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Remembers your interface settings, such as navigation states or dismissed banners, to deliver a coherent browsing session.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Third-Party Cookies & Tracking</h2>
            <p>
              We do not permit unauthorized third-party trackers to collect personal identifiers across external web domains. Any telemetry partners integrated with our portals must adhere to strict data anonymization standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Managing Your Preferences</h2>
            <p>
              You can control or disable cookies through your browser settings at any time. Note that disabling strictly necessary cookies may impact the proper rendering and functional security of our web applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
