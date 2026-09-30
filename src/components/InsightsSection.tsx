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
    <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-b border-slate-200/80 font-sans" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block shadow-xs">
            Perspectives & Research
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Ideas for the Modern Economy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Operational research covering international commerce, software architecture, supply logistics, and sustainable growth.
          </p>
        </div>

        {/* Articles Grid (Responsive 1 or 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div className="space-y-3.5">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-[11px] border border-blue-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer py-1"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all active:scale-95 shadow-xs"
          >
            <span>View All Insights & Research Papers</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop click to close */}
          <div
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0"
            aria-hidden="true"
          />

          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 font-sans text-slate-900 animate-slideUp">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {activeArticle.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                <span className="text-slate-800 font-semibold">{activeArticle.author.name}</span>
                <span>—</span>
                <span>{activeArticle.author.role}</span>
              </div>
            </div>

            <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-b border-slate-100 py-5 font-normal">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-[11px] uppercase tracking-wider text-blue-700 font-bold">
                Executive Takeaways
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
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
