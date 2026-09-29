import React from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-32 pb-24 relative overflow-hidden bg-grid-pattern font-sans selection:bg-blue-600/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 text-center space-y-6 relative z-10">
        <div className="luxury-card p-10 sm:p-12 space-y-6 border border-white/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Page Not Found
          </div>

          <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter metallic-text-blue">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-white">
            We couldn't find that page
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-md mx-auto">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white luxury-btn-primary text-xs tracking-wide active:scale-95"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-slate-200 luxury-btn-secondary text-xs tracking-wide active:scale-95"
            >
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
