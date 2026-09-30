"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calculator,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Ship,
  Code2,
  TrendingUp,
  Layers,
  Copy,
  Check,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

interface SectorOption {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  features: { id: string; label: string; estDays: number }[];
}

const SECTOR_DATA: Record<string, SectorOption> = {
  ecommerce: {
    id: "ecommerce",
    name: "Global E-Commerce",
    icon: ShoppingBag,
    tagline: "High-speed digital storefronts & cross-border checkout operations",
    features: [
      { id: "storefront", label: "Custom Headless Storefront (Next.js / Sub-second)", estDays: 14 },
      { id: "multicurrency", label: "Multi-Currency & International Tax Engine", estDays: 7 },
      { id: "marketplace", label: "Omnichannel Marketplace Feeds (Amazon/Walmart)", estDays: 7 },
      { id: "inventory", label: "Multi-Hub Realtime Inventory & Fulfillment Sync", estDays: 10 },
      { id: "retention", label: "Automated Post-Purchase & Retention Workflows", estDays: 5 },
    ],
  },
  "import-export": {
    id: "import-export",
    name: "Import & Export Sourcing",
    icon: Ship,
    tagline: "Audited factory sourcing, customs compliance & freight logistics",
    features: [
      { id: "audit", label: "Direct Factory Audit & Compliance Verification", estDays: 12 },
      { id: "customs", label: "Customs, Tariff Classification & Regulatory Clearance", estDays: 8 },
      { id: "freight", label: "Multimodal Freight Logistics & Routing Plan", estDays: 10 },
      { id: "escrow", label: "Escrow Settlement & Quality Inspection Protocol", estDays: 6 },
      { id: "corridor", label: "Dedicated International Sourcing Corridor Setup", estDays: 14 },
    ],
  },
  "saas-software": {
    id: "saas-software",
    name: "SaaS & Cloud Software",
    icon: Code2,
    tagline: "Modern cloud platforms, custom software & automated business tools",
    features: [
      { id: "web-app", label: "Full-Stack Web Application (TypeScript / React / Cloud)", estDays: 20 },
      { id: "api-backend", label: "High-Performance REST & GraphQL Backend Architecture", estDays: 12 },
      { id: "auth-billing", label: "Multi-Tenant Auth, Team Permissions & Stripe Billing", estDays: 8 },
      { id: "ai-tooling", label: "AI / LLM Integration & Workflow Automation", estDays: 10 },
      { id: "devops", label: "Cloud Infrastructure (AWS/Vercel) & CI/CD Pipeline", estDays: 6 },
    ],
  },
  "digital-marketing": {
    id: "digital-marketing",
    name: "Digital Growth & Marketing",
    icon: TrendingUp,
    tagline: "Attribution telemetry, paid performance acquisition & conversion funnels",
    features: [
      { id: "paid-ads", label: "Omnichannel Paid Acquisition (Meta, Google, TikTok)", estDays: 7 },
      { id: "telemetry", label: "Server-Side CAPI & GA4 Attribution Setup", estDays: 5 },
      { id: "cro", label: "High-Converting Landing Page & CRO Multivariate Setup", estDays: 8 },
      { id: "creatives", label: "Iterative Ad Creative Pipeline & Testing Framework", estDays: 6 },
      { id: "retargeting", label: "Full-Funnel Retargeting & Customer Lifecycle Flows", estDays: 5 },
    ],
  },
};

export default function ProjectScopeEstimator() {
  const router = useRouter();
  const [selectedSector, setSelectedSector] = useState<string>("ecommerce");
  const [scale, setScale] = useState<"startup" | "growth" | "enterprise">("growth");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "storefront",
    "multicurrency",
  ]);
  const [timelineSpeed, setTimelineSpeed] = useState<"standard" | "accelerated">("standard");
  const [copied, setCopied] = useState(false);

  // Active sector data
  const currentSector = SECTOR_DATA[selectedSector];

  // Handle sector change
  const handleSectorChange = (sectorId: string) => {
    setSelectedSector(sectorId);
    const newFeatures = SECTOR_DATA[sectorId].features.slice(0, 2).map((f) => f.id);
    setSelectedFeatures(newFeatures);
  };

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      if (selectedFeatures.length === 1) return; // Keep at least one
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
    } else {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  // Calculate scope metrics
  const calculation = useMemo(() => {
    const featureCount = selectedFeatures.length;
    let baseDays = selectedFeatures.reduce((acc, featId) => {
      const feat = currentSector.features.find((f) => f.id === featId);
      return acc + (feat ? feat.estDays : 5);
    }, 0);

    // Apply scale multiplier
    if (scale === "startup") baseDays = Math.round(baseDays * 0.75);
    if (scale === "enterprise") baseDays = Math.round(baseDays * 1.35);

    // Apply timeline compression
    if (timelineSpeed === "accelerated") {
      baseDays = Math.max(7, Math.round(baseDays * 0.65));
    }

    const weeks = Math.max(1, Math.ceil(baseDays / 7));

    let tierLabel = "Growth Implementation";
    if (scale === "startup") tierLabel = "Rapid Sprint / MVP";
    if (scale === "enterprise") tierLabel = "Enterprise Architecture";

    return {
      featureCount,
      estimatedWeeks: weeks,
      estimatedDays: baseDays,
      tierLabel,
    };
  }, [selectedSector, selectedFeatures, scale, timelineSpeed, currentSector]);

  // Copy scope summary
  const copySummary = () => {
    const summaryText = `[Ever Legit Project Scope]
Sector: ${currentSector.name}
Scale: ${scale.toUpperCase()} (${calculation.tierLabel})
Pace: ${timelineSpeed === "accelerated" ? "Accelerated Sprint" : "Standard Milestone"}
Estimated Turnaround: ~${calculation.estimatedWeeks} Weeks (${calculation.estimatedDays} business days)
Selected Capabilities:
${selectedFeatures
  .map((fid) => {
    const f = currentSector.features.find((item) => item.id === fid);
    return ` - ${f?.label}`;
  })
  .join("\n")}
Direct inquiry via Ever Legit Commercial Desk.`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Transfer to Contact form
  const transferToContact = () => {
    const queryParams = new URLSearchParams({
      interest: currentSector.name,
      scale: scale,
      weeks: calculation.estimatedWeeks.toString(),
      features: selectedFeatures.join(","),
    });
    router.push(`/contact?${queryParams.toString()}`);
  };

  const IconComponent = currentSector.icon;

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden font-sans" id="estimator">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-2 shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Planner</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Scope & Turnaround Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
            Configure your commercial project requirements to generate an instant timeline and architecture blueprint.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedSector("ecommerce");
            setScale("growth");
            setSelectedFeatures(["storefront", "multicurrency"]);
            setTimelineSpeed("standard");
          }}
          className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-200"
          title="Reset configuration"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Sector Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
              Step 1: Choose Operational Sector
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {Object.values(SECTOR_DATA).map((sector) => {
                const SecIcon = sector.icon;
                const isSelected = selectedSector === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => handleSectorChange(sector.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-24 ${
                      isSelected
                        ? "bg-blue-50/90 border-blue-500 text-blue-950 shadow-sm ring-1 ring-blue-500/20"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <SecIcon
                      className={`w-5 h-5 ${
                        isSelected ? "text-blue-600" : "text-slate-500"
                      }`}
                    />
                    <span className="text-xs font-bold leading-tight line-clamp-2">
                      {sector.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Scale Tier Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
              Step 2: Business Stage & Scale
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "startup", title: "Launch / MVP", sub: "Speed & core validation" },
                { id: "growth", title: "Scaling Business", sub: "Robust systems & volume" },
                { id: "enterprise", title: "Enterprise", sub: "Complex cross-border" },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setScale(tier.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    scale === tier.id
                      ? "bg-blue-50/90 border-blue-500 text-blue-950 shadow-sm ring-1 ring-blue-500/20"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold">{tier.title}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{tier.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Feature Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Step 3: Select Capabilities ({selectedFeatures.length} Active)
              </label>
              <span className="text-[11px] text-blue-600 font-semibold">Click to add/remove</span>
            </div>
            <div className="space-y-2">
              {currentSector.features.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      isChecked
                        ? "bg-blue-50/70 border-blue-300 text-slate-900 shadow-xs"
                        : "bg-slate-50/80 border-slate-200 hover:bg-slate-100 text-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold text-slate-800 truncate">
                        {feat.label}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 shrink-0 font-mono font-medium">
                      ~{feat.estDays}d
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Pace Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
              Step 4: Target Execution Pace
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTimelineSpeed("standard")}
                className={`flex-1 p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                  timelineSpeed === "standard"
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Standard Milestones (Phased)
              </button>
              <button
                onClick={() => setTimelineSpeed("accelerated")}
                className={`flex-1 p-2.5 rounded-xl border text-center text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  timelineSpeed === "accelerated"
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Accelerated Sprint</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Calculated Blueprint Card */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-blue-200 shadow-md space-y-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-blue-700">
                    Live Scope Output
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {currentSector.name}
                  </div>
                </div>
              </div>

              <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                {calculation.tierLabel}
              </span>
            </div>

            {/* Calculated Turnaround Metric Display */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Est. Delivery Time
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  ~{calculation.estimatedWeeks}{" "}
                  <span className="text-xs font-medium text-slate-500">Weeks</span>
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Active Features
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  {calculation.featureCount}{" "}
                  <span className="text-xs font-medium text-slate-500">Modules</span>
                </span>
              </div>
            </div>

            {/* Phased Roadmap Timeline */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Phased Implementation Blueprint
              </span>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Architecture & Discovery</span>
                    <p className="text-[11px] text-slate-500">Scope alignment, API/logistics mapping & design sign-off.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Engineering & Operational Pipeline</span>
                    <p className="text-[11px] text-slate-500">Core software build, factory vetting, or ad funnel setup.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Validation & Deployment</span>
                    <p className="text-[11px] text-slate-500">Stress testing, compliance review, and live launch handover.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={transferToContact}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Transfer Scope to Consultation Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={copySummary}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Scope Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Structured Scope Summary</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct review by Ever Legit strategic desk within 24h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
