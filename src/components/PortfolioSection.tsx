"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "@/data/siteData";
import {
  ExternalLink,
  ArrowRight,
  X,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = [
    "All",
    "SaaS / FinTech",
    "E-commerce",
    "Commerce / Import & Export",
    "Marketing / Growth",
  ];

  // Lock body scroll when project modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 sm:py-28 bg-[#0b0f19] border-t border-b border-white/[0.06] font-sans" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            Selected Work & Ventures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Portfolio & Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            A curated overview of software platforms, digital commerce businesses, and international trade infrastructure built by Ever Legit.
          </p>
        </div>

        {/* Category Filters (Mobile Touch Scrollable) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mt-10 overflow-x-auto no-scrollbar pb-2 px-1">
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#111726] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all shadow-md group"
            >
              {/* Card Visual Preview Banner */}
              <div
                className={`relative w-full h-44 sm:h-48 bg-gradient-to-br ${project.previewGradient} p-5 flex flex-col justify-between border-b border-white/10`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white font-medium border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-200 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Concept Banner */}
                <div className="bg-[#0e1422]/90 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{project.title}</span>
                    <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Active</span>
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer py-1"
                  >
                    <span>View Project Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs text-slate-400">
                    Case Study
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects in Portfolio Page */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all active:scale-95"
          >
            <span>Explore All Projects & Ventures</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          {/* Backdrop Click to close */}
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0"
            aria-hidden="true"
          />

          <div className="bg-[#111726] border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 font-sans text-white animate-slideUp">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3.5 border-b border-white/10">
              <div>
                <span className="text-xs font-semibold text-blue-400">
                  {activeProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              {activeProject.fullDesc}
            </p>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Deliverables & Features
              </span>
              <ul className="space-y-2">
                {activeProject.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm"
              >
                Inquire About This Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
