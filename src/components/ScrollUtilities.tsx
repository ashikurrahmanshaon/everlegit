"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollUtilities() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;

      setScrollProgress(Number(scroll));
      setShowBackToTop(totalScroll > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40 w-10 h-10 rounded-full bg-white hover:bg-blue-600 text-slate-600 hover:text-white border border-slate-200 shadow-md flex items-center justify-center transition-all duration-150 active:scale-95 animate-fadeIn"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2]" />
        </button>
      )}
    </>
  );
}
