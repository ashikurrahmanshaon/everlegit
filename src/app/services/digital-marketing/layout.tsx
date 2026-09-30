import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Digital Marketing & Growth Scaling — Ever Legit",
  description:
    "Data-driven customer acquisition: multi-network paid advertising, server-side conversion tracking, and conversion rate optimization engineered for high-growth brands.",
  keywords: [
    "performance marketing agency",
    "customer acquisition funnels",
    "server-side attribution CAPI",
    "conversion rate optimization CRO",
    "paid advertising media buying",
    "Ever Legit digital marketing",
  ],
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
