import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Architecture & Global Storefronts — Ever Legit",
  description:
    "Build, operate, and scale international digital commerce businesses. High-speed storefronts, multi-currency checkout, and synchronized global fulfillment.",
  keywords: [
    "e-commerce architecture",
    "global digital storefronts",
    "cross-border checkout",
    "multi-currency ecommerce",
    "online retail operations",
    "Ever Legit e-commerce",
  ],
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
