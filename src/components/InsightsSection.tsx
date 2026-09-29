"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { INSIGHTS_ARTICLES, InsightArticle } from "@/data/siteData";
import {
  Clock,
  ArrowRight,
  BookOpen,
  X,
  CheckCircle,
} from "lucide-react";

export default function InsightsSection() {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

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

  return (
    <section className="py-20 sm:py-28 bg-[#0b0f19] border-t border-b border-white/[0.06] font-sans" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            Perspectives & Research
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ideas for the Modern Economy
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Operational research covering international commerce, software architecture, supply logistics, and sustainable growth.
          </p>
        </div>

        {/* Articles Grid (Responsive 1 or 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
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

        {/* View All Articles Link */}
        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all active:scale-95"
          >
            <span>View All Insights & Research Papers</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
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
                Executive Takeaways
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
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
