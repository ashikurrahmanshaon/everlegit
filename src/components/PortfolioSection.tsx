"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "@/data/siteData";
import {
  ExternalLink,
  ArrowRight,
  X,
  CheckCircle2,
  FolderGit2,
  Search,
  Filter,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export default function PortfolioSection() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;

      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleInquireProject = (project: PortfolioItem) => {
    setActiveProject(null);
    let sectorParam = "E-Commerce";
    if (project.category.includes("SaaS")) sectorParam = "Software & Cloud";
    if (project.category.includes("Import")) sectorParam = "Import & Export";
    if (project.category.includes("Marketing")) sectorParam = "Digital Marketing";

    router.push(
      `/contact?interest=${encodeURIComponent(sectorParam)}&project=${encodeURIComponent(
        project.title
      )}`
    );
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-b border-slate-200/80 font-sans" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block shadow-xs">
            Selected Work & Ventures
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Our Portfolio & Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            A curated overview of software platforms, digital commerce businesses, and international trade infrastructure built by Ever Legit.
          </p>
        </div>

        {/* Filter & Live Search Toolbar */}
        <div className="mt-10 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-xs">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 px-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 active:scale-95 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                    : "bg-white text-slate-700 hover:text-blue-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Keyword Search Input */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 md:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, stack, title..."
                className="w-full pl-9 pr-7 py-1.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                title="Reset filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Counter & Status indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-900">{filteredProjects.length}</strong> of {PORTFOLIO_PROJECTS.length} platform ventures
          </span>
          {selectedCategory !== "All" && (
            <span className="text-blue-600 font-semibold">Filtered by: {selectedCategory}</span>
          )}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all shadow-xs group"
            >
              {/* Card Visual Preview Banner */}
              <div
                className={`relative w-full h-44 sm:h-48 bg-gradient-to-br ${project.previewGradient} p-5 flex flex-col justify-between border-b border-slate-100`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] text-slate-800 font-semibold border border-slate-200/60 shadow-xs">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-700 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Concept Banner */}
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{project.title}</span>
                    <span className="text-emerald-600 font-semibold text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Active</span>
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
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
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer py-1"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleInquireProject(project)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[11px] font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
                  >
                    Request Similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-slate-500 space-y-2">
            <Search className="w-8 h-8 mx-auto text-slate-400 opacity-60" />
            <p className="text-sm font-semibold text-slate-900">No projects found matching your criteria</p>
            <p className="text-xs text-slate-500">
              Try clearing your search query or selecting "All" categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Projects / Estimator Shortcut Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/services#estimator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all active:scale-95 shadow-sm shadow-blue-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Estimate Custom Project Scope</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all active:scale-95 shadow-xs"
          >
            <span>Consult Operations Desk</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop Click to close */}
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0"
            aria-hidden="true"
          />

          <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 font-sans text-slate-900 animate-slideUp">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3.5 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-blue-700">
                  {activeProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              {activeProject.fullDesc}
            </p>

            {/* Tech Stack */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Deliverables & Features
              </span>
              <ul className="space-y-2">
                {activeProject.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => handleInquireProject(activeProject)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm cursor-pointer flex items-center gap-1.5"
              >
                <span>Request Similar Venture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
