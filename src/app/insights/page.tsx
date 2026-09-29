"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { INSIGHTS_ARTICLES, InsightArticle } from "@/data/siteData";
import {
  Clock,
  ArrowRight,
  BookOpen,
  Search,
  CheckCircle,
  X,
  PhoneCall,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Lock body scroll when article modal is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticle]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const categories = [
    "All",
    "Global Commerce",
    "SaaS & Tech",
    "Product Engineering",
    "Growth & Strategy",
  ];

  const filteredArticles = INSIGHTS_ARTICLES.filter((art) => {
    const matchesCat =
      selectedCategory === "All" || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden bg-[#0b0f19] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-blue-400 font-semibold">Insights</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            Perspectives & Analysis
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Ideas for the Modern Economy
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal pt-1">
            Perspectives and operational analyses from Ever Legit covering global commerce logistics, SaaS unit economics, cross-border sourcing, and scalable software systems.
          </p>
        </div>

        {/* Filter & Search Bar (Touch-Friendly) */}
        <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search research briefs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#111726] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div className="space-y-3.5">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 font-semibold text-[11px] border border-blue-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer py-1"
                >
                  <span>Read Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 text-slate-400 space-y-1">
            <p className="text-sm font-semibold text-white">No articles match your search.</p>
            <p className="text-xs">Try selecting a different category or clearing your search query.</p>
          </div>
        )}

        {/* Bottom Consultation Desk */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-[#111726] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Have questions or want to collaborate on research?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Connect with our operational group for direct consultation or technology discussions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all active:scale-95 shadow-md shadow-blue-900/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <button
              onClick={() => copyToClipboard(COMPANY_CONTACT.email, "email")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-slate-200 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              {copiedType === "email" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Mail className="w-3.5 h-3.5 text-blue-400" />
              )}
              <span>{copiedType === "email" ? "Email Copied" : COMPANY_CONTACT.email}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          {/* Backdrop click to close */}
          <div
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0"
            aria-hidden="true"
          />

          <div className="bg-[#111726] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 font-sans text-white animate-slideUp">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-xs border border-blue-500/20">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {activeArticle.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                <span className="text-slate-200 font-semibold">{activeArticle.author.name}</span>
                <span>—</span>
                <span>{activeArticle.author.role}</span>
              </div>
            </div>

            <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-b border-white/10 py-5 font-normal">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <h4 className="text-[11px] uppercase tracking-wider text-blue-400 font-bold">
                Strategic Key Takeaways
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
