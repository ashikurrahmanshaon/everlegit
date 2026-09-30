"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function BrandLogo({
  className = "",
  size = "md",
  showTagline = true,
}: BrandLogoProps) {
  const iconDimensions = {
    sm: "w-8 h-8 rounded-xl",
    md: "w-10 h-10 sm:w-11 sm:h-11 rounded-2xl",
    lg: "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl",
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 text-white transition-all active:scale-[0.98] ${className}`}
      id="brand-logo-link"
      aria-label="Ever Legit Home"
    >
      {/* Precision Engineered Luxury Emblem */}
      <div
        className={`${iconDimensions[size]} relative shrink-0 bg-gradient-to-br from-[#12192e] via-[#0d1322] to-[#070b14] p-2 sm:p-2.5 border border-blue-500/30 group-hover:border-cyan-400/60 shadow-xl shadow-blue-950/60 group-hover:shadow-cyan-900/30 transition-all duration-300 flex items-center justify-center overflow-hidden`}
      >
        {/* Subtle dynamic ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(56,189,248,0.35),transparent_70%)] group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_8px_rgba(56,189,248,0.4)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Primary Diamond Facet Gradient */}
            <linearGradient id="facetPrimary" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#7DD3FC" />
              <stop offset="70%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            {/* Counter-Intersecting Facet */}
            <linearGradient id="facetSecondary" x1="40" y1="4" x2="4" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Glowing Core Reflection */}
            <linearGradient id="coreGlow" x1="12" y1="12" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Interlocking Infinite Horizon Apex: Dynamic E & L Monogram */}
          {/* Top Precision Horizontal Beam */}
          <path
            d="M8 12C8 9.79086 9.79086 8 12 8H32C33.6569 8 35 9.34315 35 11C35 12.6569 33.6569 14 32 14H15V17H28C29.6569 17 31 18.3431 31 20C31 21.6569 29.6569 23 28 23H15V26H32C33.6569 26 35 27.3431 35 29C35 30.6569 33.6569 32 32 32H12C9.79086 32 8 30.2091 8 28V12Z"
            fill="url(#facetPrimary)"
          />

          {/* Precision Forward Vector Chevron Arrow */}
          <path
            d="M26 8L36 18L32 22L22 12H26Z"
            fill="url(#coreGlow)"
            opacity="0.85"
          />

          {/* High-Tech Anchor Nodes */}
          <circle cx="35" cy="11" r="2.5" fill="#FFFFFF" />
          <circle cx="31" cy="20" r="2" fill="#7DD3FC" />
          <circle cx="35" cy="29" r="2.5" fill="#38BDF8" />
        </svg>
      </div>

      {/* Modern High-End Enterprise Typography */}
      <div className="flex flex-col justify-center select-none">
        <div className={`font-sans font-black tracking-tight text-white leading-none flex items-center gap-1.5 ${textSizes[size]}`}>
          <span className="text-white group-hover:text-slate-100 transition-colors">EVER</span>
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent font-extrabold group-hover:from-sky-300 group-hover:to-cyan-200 transition-all">
            LEGIT
          </span>
        </div>
        {showTagline && (
          <span className="hidden sm:block text-[9px] font-sans uppercase tracking-[0.22em] text-slate-400 group-hover:text-slate-300 mt-1.5 font-semibold leading-none transition-colors">
            Global Commerce & Technology
          </span>
        )}
      </div>
    </Link>
  );
}
