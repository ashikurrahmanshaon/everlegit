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
    sm: "w-8 h-8 rounded-lg",
    md: "w-10 h-10 rounded-xl",
    lg: "w-12 h-12 rounded-2xl",
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg sm:text-xl tracking-tight",
    lg: "text-2xl sm:text-3xl tracking-tight",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-all active:scale-[0.98] ${className}`}
      id="brand-logo-link"
      aria-label="Ever Legit Home"
    >
      {/* Precision Engineered Luxury Enterprise Emblem */}
      <div
        className={`${iconDimensions[size]} relative shrink-0 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/35 border border-blue-400/30 transition-all duration-300 flex items-center justify-center overflow-hidden`}
      >
        {/* Subtle dynamic ambient light reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none" />

        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Architectural Minimalist E-L Precision Monogram */}
          <path
            d="M7 6C7 4.89543 7.89543 4 9 4H23C24.1046 4 25 4.89543 25 6V8C25 9.10457 24.1046 10 23 10H14V13H20C21.1046 13 22 13.8954 22 15V17C22 18.1046 21.1046 19 20 19H14V22H23C24.1046 22 25 22.8954 25 24V26C25 27.1046 24.1046 28 23 28H9C7.89543 28 7 27.1046 7 26V6Z"
            fill="currentColor"
          />
          {/* Forward Precision Cyan Accent */}
          <path
            d="M20 13H25C26.1046 13 27 13.8954 27 15V17C27 18.1046 26.1046 19 25 19H20V13Z"
            fill="#38BDF8"
          />
        </svg>
      </div>

      {/* Modern High-End Typography */}
      <div className="flex flex-col justify-center select-none">
        <div className={`font-sans font-bold tracking-tight text-slate-900 leading-none flex items-center gap-1.5 ${textSizes[size]}`}>
          <span className="text-slate-900 group-hover:text-blue-600 transition-colors">EVER</span>
          <span className="text-blue-600 font-extrabold group-hover:text-blue-700 transition-colors">
            LEGIT
          </span>
        </div>
        {showTagline && (
          <span className="hidden sm:block text-[9px] font-sans uppercase tracking-[0.16em] text-slate-400 group-hover:text-slate-600 mt-1 font-semibold leading-none transition-colors">
            Global Commerce & Technology
          </span>
        )}
      </div>
    </Link>
  );
}
