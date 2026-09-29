import React from "react";
import Hero from "@/components/Hero";
import TrustIntro from "@/components/TrustIntro";
import ServicesSection from "@/components/ServicesSection";
import TechPlatformSection from "@/components/TechPlatformSection";
import GlobalCommerceSection from "@/components/GlobalCommerceSection";
import WhyEverLegit from "@/components/WhyEverLegit";
import PortfolioSection from "@/components/PortfolioSection";
import BusinessModelVisual from "@/components/BusinessModelVisual";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Ever Legit — Building Businesses That Move the World Forward",
  description:
    "Ever Legit operates at the intersection of global commerce, technology, software, and digital growth — helping ideas become scalable businesses.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustIntro />
      <ServicesSection />
      <TechPlatformSection />
      <GlobalCommerceSection />
      <WhyEverLegit />
      <PortfolioSection />
      <BusinessModelVisual />
      <InsightsSection />
      <CTASection />
    </div>
  );
}
