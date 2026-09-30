"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  ShoppingBag,
  Ship,
  Code2,
  BarChart3,
  BookOpen,
  FolderGit2,
  PhoneCall,
  Mail,
  Calculator,
  Clock,
  Sparkles,
  Command,
} from "lucide-react";
import { SERVICES, PORTFOLIO_PROJECTS, INSIGHTS_ARTICLES, COMPANY_CONTACT } from "@/data/siteData";

interface SearchResultItem {
  id: string;
  title: string;
  category: "Service" | "Portfolio" | "Insight" | "Direct Contact" | "Tool";
  description: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

export default function CommandSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Listen for Cmd+K / Ctrl+K and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOpenEvent = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-search", handleOpenEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-search", handleOpenEvent);
    };
  }, []);

  // Lock body scroll and focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Aggregate all searchable items
  const allItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [
      // Quick Tools & Actions
      {
        id: "tool-calc",
        title: "Project Scope & Estimator Calculator",
        category: "Tool",
        description: "Interactive scope, milestone, and timeline estimator for businesses.",
        href: "/services#estimator",
        icon: Calculator,
        badge: "Interactive Tool",
      },
      {
        id: "contact-voice",
        title: `Call Direct Operations Desk (${COMPANY_CONTACT.phoneDisplay})`,
        category: "Direct Contact",
        description: "Direct line for rapid voice briefings and commercial inquiries.",
        href: `tel:${COMPANY_CONTACT.phoneRaw}`,
        icon: PhoneCall,
        badge: "Direct Dial",
      },
      {
        id: "contact-email",
        title: `Email Strategic Inquiries (${COMPANY_CONTACT.email})`,
        category: "Direct Contact",
        description: "Guaranteed executive review and 24-hour turnaround.",
        href: "mailto:info@everlegit.com",
        icon: Mail,
        badge: "Direct Mail",
      },
    ];

    // Services
    SERVICES.forEach((s) => {
      let icon = Code2;
      if (s.id === "ecommerce") icon = ShoppingBag;
      if (s.id === "import-export") icon = Ship;
      if (s.id === "digital-marketing") icon = BarChart3;

      items.push({
        id: `service-${s.id}`,
        title: s.title,
        category: "Service",
        description: s.shortDesc,
        href: s.ctaLink,
        icon: icon,
        badge: "Core Discipline",
      });
    });

    // Portfolio
    PORTFOLIO_PROJECTS.forEach((p) => {
      items.push({
        id: `portfolio-${p.id}`,
        title: `${p.title} (${p.category})`,
        category: "Portfolio",
        description: p.shortDesc,
        href: `/portfolio#${p.id}`,
        icon: FolderGit2,
        badge: p.status,
      });
    });

    // Insights
    INSIGHTS_ARTICLES.forEach((a) => {
      items.push({
        id: `insight-${a.id}`,
        title: a.title,
        category: "Insight",
        description: a.summary,
        href: `/insights`,
        icon: BookOpen,
        badge: a.category,
      });
    });

    return items;
  }, []);

  // Filter items based on query
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Show curated highlights
      return allItems.slice(0, 8);
    }
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  // Handle keyboard navigation inside the list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredResults.length - 1
      );
    } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredResults[selectedIndex]);
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    setIsOpen(false);
    if (item.href.startsWith("tel:") || item.href.startsWith("mailto:")) {
      window.location.href = item.href;
    } else {
      router.push(item.href);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans"
    >
      {/* Backdrop click to dismiss */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0"
        aria-hidden="true"
      />

      <div
        onKeyDown={handleKeyDown}
        className="relative z-10 w-full max-w-2xl bg-[#111726] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-slideDown"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-blue-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search services, portfolio, research briefs, or contact desk..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-white p-1"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 ml-2 px-2 py-1 rounded bg-white/10 text-[10px] text-slate-300 font-mono">
            <span>ESC</span>
          </div>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto flex-1 p-2 space-y-1 divide-y divide-white/[0.04]">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-start gap-3.5 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-blue-600/20 border border-blue-500/40 text-white"
                      : "hover:bg-white/[0.04] text-slate-200 border border-transparent"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm font-semibold truncate text-white">
                        {item.title}
                      </div>
                      {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-blue-300 shrink-0 font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform mt-1 ${
                      isSelected
                        ? "text-blue-400 translate-x-0.5"
                        : "text-slate-600"
                    }`}
                  />
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-500 opacity-60" />
              <p className="text-sm font-semibold text-white">No results found for "{query}"</p>
              <p className="text-xs text-slate-400">
                Try searching for "ecommerce", "import", "SaaS", "marketing", or "estimator".
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Hotkey Guide */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px] text-slate-300">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px] text-slate-300">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px] text-slate-300">↵</kbd>
              <span>to select</span>
            </span>
          </div>
          <span className="text-slate-400">Ever Legit Global Index</span>
        </div>
      </div>
    </div>
  );
}
