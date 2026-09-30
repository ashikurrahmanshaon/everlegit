import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/siteData";
import ProjectScopeEstimator from "@/components/ProjectScopeEstimator";
import {
  ShoppingBag,
  Ship,
  Code2,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export const metadata = {
  title: "Services & Capabilities — Ever Legit",
  description:
    "Explore Ever Legit's core business disciplines: E-commerce operations, Import & Export trade solutions, SaaS & Software development, and Performance Digital Marketing.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return ShoppingBag;
      case "Ship":
        return Ship;
      case "Code2":
        return Code2;
      case "BarChart3":
        return BarChart3;
      default:
        return Code2;
    }
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden bg-[#0b0f19] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-blue-400 font-semibold">Services</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            Core Business Sectors
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Integrated Services & Solutions
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal pt-1">
            From consumer digital storefronts and international trade sourcing to cloud software platforms and data-driven customer acquisition campaigns.
          </p>
        </div>

        {/* Detailed Service Pillars Breakdown */}
        <div className="mt-14 sm:mt-18 space-y-10 sm:space-y-14">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#111726] border border-white/10 shadow-xl group hover:border-white/20 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Content Column */}
                  <div className={`space-y-5 lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                        Sector 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>

                    {/* Features Grid */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Key Capabilities & Methodologies
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Link to Dedicated Page */}
                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        href={service.ctaLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all active:scale-95 shadow-md shadow-blue-900/30"
                      >
                        <span>Learn more about {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Architecture & Metrics Box */}
                  <div className={`lg:col-span-5 bg-[#0e1422] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                        Operational Scope
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        Performance Metrics
                      </h4>
                    </div>

                    <div className="space-y-2.5">
                      {service.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex items-center justify-between pb-2 border-b border-white/5 text-xs"
                        >
                          <span className="text-slate-400">{m.label}</span>
                          <span className="text-white font-semibold">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Core Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {service.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Turnaround Estimator Section */}
        <div className="mt-16 sm:mt-24">
          <ProjectScopeEstimator />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-12 rounded-3xl bg-[#111726] border border-white/10 text-center space-y-4 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
              Strategic Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to Discuss Scope and Timelines?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Connect directly with our group to review requirements, feasibility, and technical deployment.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all active:scale-95 shadow-md shadow-blue-900/30"
            >
              <span>Contact Group</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-all active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
