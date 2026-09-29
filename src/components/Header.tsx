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
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0f19]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-2.5 sm:py-3"
            : "bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/[0.06] py-3.5 sm:py-4"
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
                        className={`px-3.5 py-2 text-sm font-medium rounded-lg flex items-center gap-1.5 transition-colors ${
                          isActive
                            ? "text-white bg-white/10"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 transition-all animate-fadeIn">
                          <div className="bg-[#111726]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl space-y-1">
                            <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 border-b border-white/5 uppercase tracking-wider mb-1 flex items-center justify-between">
                              <span>Disciplines</span>
                              <span className="text-[10px] text-blue-400 font-normal">All 4 Sectors</span>
                            </div>
                            {serviceSubItems.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                                >
                                  <div className="p-2 rounded-lg bg-white/5 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-600/15 transition-colors">
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-sm font-semibold text-slate-200 group-hover:text-white truncate">
                                      {sub.name}
                                    </div>
                                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
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
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Quick Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                title={`Call ${COMPANY_CONTACT.phoneDisplay}`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <span>{COMPANY_CONTACT.phoneDisplay}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-sm active:scale-95"
                id="header-cta-lets-talk"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: Clean, Uncrowded (Direct CTA + Menu Toggle) */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-xl bg-blue-600 text-xs font-semibold text-white active:scale-95 shadow-sm transition-all"
              >
                Let's Talk
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-slate-200 hover:text-white transition-colors active:scale-95"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Smooth Full Screen / Sheet Overlay) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-[#0b0f19]/98 backdrop-blur-2xl z-40 flex flex-col justify-between overflow-y-auto px-5 py-6 font-sans animate-slideDown">
          {/* Top: Nav Links */}
          <div className="space-y-2">
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
                    <div className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-white/5">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 px-4 py-3 text-base font-medium ${
                          isActive ? "text-blue-400 font-semibold" : "text-slate-200"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                        className="px-4 py-3 text-slate-400 hover:text-white"
                        aria-label="Toggle services list"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileServicesExpanded ? "rotate-180 text-blue-400" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable Services Accordion */}
                    {mobileServicesExpanded && (
                      <div className="pl-3 pr-2 py-2 space-y-1.5 border-l-2 border-blue-500/30 ml-4 animate-fadeIn">
                        {serviceSubItems.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              <div className="p-1.5 rounded-md bg-white/5 text-blue-400">
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
                      ? "bg-blue-600/15 text-blue-400 font-semibold border border-blue-500/25"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Bottom: Direct One-Tap Communication Card */}
          <div className="mt-8 pt-5 border-t border-white/10 space-y-3 pb-safe">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span className="font-semibold text-slate-300">Executive Contact Desk</span>
              <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Online</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs active:scale-95 shadow-md shadow-blue-900/30"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Direct</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-xs border border-white/10 active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Email Desk</span>
              </a>
            </div>

            <div className="text-[11px] text-center text-slate-400 pt-1">
              {COMPANY_CONTACT.phoneDisplay} • {COMPANY_CONTACT.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
