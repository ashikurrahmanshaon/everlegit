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
    md: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl",
    lg: "w-11 h-11 sm:w-12 sm:h-12 rounded-2xl",
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl tracking-tight",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 sm:gap-3 text-white transition-transform active:scale-[0.98] ${className}`}
      id="brand-logo-link"
    >
      {/* Iconic Geometric Venture Emblem */}
      <div
        className={`${iconDimensions[size]} relative shrink-0 bg-gradient-to-br from-[#121829] via-[#0c1220] to-[#080d17] p-2 border border-blue-500/25 group-hover:border-blue-400/50 shadow-lg shadow-blue-950/50 transition-all duration-300 flex items-center justify-center overflow-hidden`}
      >
        {/* Subtle inner radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.35),transparent_70%)] pointer-events-none" />

        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10"
        >
          <defs>
            <linearGradient id="primaryBeam" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="secondaryBeam" x1="34" y1="6" x2="6" y2="34" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>

          {/* Interlocking Infinite Precision Ribbon: Dynamic 'E' & 'L' Apex */}
          {/* Top Forward Wing */}
          <path
            d="M8 12C8 9.79086 9.79086 8 12 8H28C29.6569 8 31 9.34315 31 11C31 12.6569 29.6569 14 28 14H14V17H25C26.6569 17 28 18.3431 28 20C28 21.6569 26.6569 23 25 23H14V26H28C29.6569 26 31 27.3431 31 29C31 30.6569 29.6569 32 28 32H12C9.79086 32 8 30.2091 8 28V12Z"
            fill="url(#primaryBeam)"
          />

          {/* Precision Forward Apex Node */}
          <circle cx="31" cy="11" r="2.5" fill="#38BDF8" />
          <circle cx="31" cy="20" r="2" fill="#60A5FA" />
          <circle cx="31" cy="29" r="2.5" fill="#2563EB" />
        </svg>
      </div>

      {/* Modern High-End Corporate Typography */}
      <div className="flex flex-col justify-center select-none">
        <div className={`font-sans font-black uppercase text-white leading-none flex items-center gap-1.5 ${textSizes[size]}`}>
          <span>EVER</span>
          <span className="text-blue-400 font-extrabold">LEGIT</span>
        </div>
        {showTagline && (
          <span className="hidden sm:block text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.18em] text-slate-400 mt-1 font-medium leading-none">
            Global Commerce & Technology
          </span>
        )}
      </div>
    </Link>
  );
}
