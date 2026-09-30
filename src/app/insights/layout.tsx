import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Perspectives on the Global Economy — Ever Legit",
  description:
    "Operational research, whitepapers, and technical analysis on global trade dynamics, SaaS unit economics, cross-border sourcing, and modern software architectures.",
  keywords: [
    "global commerce insights",
    "SaaS unit economics research",
    "cross-border sourcing strategies",
    "software architecture analysis",
    "Ever Legit research briefs",
  ],
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
