"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ShoppingBag,
  Ship,
  Code2,
  BarChart3,
  Mail,
  PhoneCall,
  ShieldCheck,
  Search,
} from "lucide-react";
import { COMPANY_CONTACT } from "@/data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesExpanded(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceSubItems = [
    {
      name: "E-Commerce",
      href: "/services/ecommerce",
      desc: "Digital stores & international commerce operations",
      icon: ShoppingBag,
    },
    {
      name: "Import & Export",
      href: "/services/import-export",
      desc: "Cross-border sourcing & global trade execution",
      icon: Ship,
    },
    {
      name: "SaaS & Software",
      href: "/services/saas-software",
      desc: "Cloud applications & enterprise digital tools",
      icon: Code2,
    },
    {
      name: "Digital Marketing",
      href: "/services/digital-marketing",
      desc: "Performance growth & conversion scaling",
      icon: BarChart3,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300">
      <div
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-sm py-2.5 sm:py-3"
            : "bg-white/80 backdrop-blur-md border-slate-200/60 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Brand Logo */}
            <div className="shrink-0">
              <BrandLogo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`px-3.5 py-2 text-sm font-medium rounded-xl flex items-center gap-1.5 transition-all ${
                          isActive
                            ? "text-blue-600 bg-blue-50/80 border border-blue-200/80 font-semibold"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 transition-all animate-fadeIn">
                          <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xl space-y-1">
                            <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 border-b border-slate-100 uppercase tracking-wider mb-1 flex items-center justify-between">
                              <span>Disciplines</span>
                              <span className="text-[10px] text-blue-600 font-semibold">All 4 Sectors</span>
                            </div>
                            {serviceSubItems.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 truncate">
                                      {sub.name}
                                    </div>
                                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                      {sub.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all ${
                      isActive
                        ? "text-blue-600 bg-blue-50/80 border border-blue-200/80 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Quick Actions */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-command-search"))}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
                title="Search site (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden xl:inline text-slate-500">Search...</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] text-slate-500 font-mono border border-slate-200">⌘K</kbd>
              </button>

              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                title={`Call ${COMPANY_CONTACT.phoneDisplay}`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs">{COMPANY_CONTACT.phoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white transition-all shadow-md shadow-blue-500/20 active:scale-95"
                id="header-cta-lets-talk"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: Clean, Uncrowded (Direct CTA + Search + Menu Toggle) */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-command-search"))}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 transition-colors active:scale-95"
                aria-label="Search"
                title="Search"
              >
                <Search className="w-4 h-4 text-blue-600" />
              </button>

              <Link
                href="/contact"
                className="px-3 py-2 rounded-xl bg-blue-600 text-xs font-semibold text-white active:scale-95 shadow-sm transition-all"
              >
                Let's Talk
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 transition-colors active:scale-95"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Smooth Full Screen / Sheet Overlay) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white/98 backdrop-blur-2xl z-40 flex flex-col justify-between overflow-y-auto px-5 py-6 font-sans animate-slideDown shadow-2xl">
          {/* Top: Nav Links */}
          <div className="space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-command-search"));
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 mb-3"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-blue-600" />
                <span>Search services, portfolio, briefs...</span>
              </span>
              <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] font-mono border border-slate-200">⌘K</kbd>
            </button>

            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Menu Navigation
            </div>

            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/80">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 px-4 py-3 text-base font-medium ${
                          isActive ? "text-blue-600 font-bold" : "text-slate-800"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                        className="px-4 py-3 text-slate-500 hover:text-slate-900"
                        aria-label="Toggle services list"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileServicesExpanded ? "rotate-180 text-blue-600" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable Services Accordion */}
                    {mobileServicesExpanded && (
                      <div className="pl-3 pr-2 py-2 space-y-1.5 border-l-2 border-blue-500 ml-4 animate-fadeIn">
                        {serviceSubItems.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-lg text-xs text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                            >
                              <div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
                                <SubIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-medium">{sub.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-bold border border-blue-200"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Bottom: Direct One-Tap Communication Card */}
          <div className="mt-8 pt-5 border-t border-slate-200 space-y-3 pb-safe">
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span className="font-semibold text-slate-800">Executive Contact Desk</span>
              <span className="flex items-center gap-1 text-emerald-600 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Online</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs active:scale-95 shadow-md shadow-blue-500/20"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Direct</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Email Desk</span>
              </a>
            </div>

            <div className="text-[11px] text-center text-slate-500 pt-1 font-mono">
              {COMPANY_CONTACT.phoneDisplay} • {COMPANY_CONTACT.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
