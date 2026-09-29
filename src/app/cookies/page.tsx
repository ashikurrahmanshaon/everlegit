import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Cookie Policy",
  description: "Information regarding the use of cookies and local storage on Ever Legit websites.",
};

export default function CookiesPage() {
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
            Technical Disclosure
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: March 2026 • Ever Legit Corporate Governance
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are compact text files placed on your browser or device when you access websites. They enable websites to recognize returning visitors, remember user preferences, maintain session state, and compile aggregated performance telemetry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Categories of Cookies We Utilize</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <h3 className="text-sm font-semibold text-white">Strictly Necessary Cookies</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Essential for the core technical operation of our website, including security token validation, CSRF protection, and load balancing across our edge CDN nodes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <h3 className="text-sm font-semibold text-white">Performance & Analytics Telemetry</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Anonymized metrics regarding page load durations, broken links, and aggregated traffic paths that assist our engineering team in optimizing site speed and accessibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <h3 className="text-sm font-semibold text-white">Preference & Functional Storage</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Remembers your interface settings, such as navigation states or dismissed banners, to deliver a coherent browsing session.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Third-Party Cookies & Tracking</h2>
            <p>
              We do not permit unauthorized third-party trackers to collect personal identifiers across external web domains. Any telemetry partners integrated with our portals must adhere to strict data anonymization standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Managing Your Preferences</h2>
            <p>
              You can control or disable cookies through your browser settings at any time. Note that disabling strictly necessary cookies may impact the proper rendering and functional security of our web applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
