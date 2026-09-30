import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Products & Enterprise Software Engineering — Ever Legit",
  description:
    "Design and development of cloud SaaS platforms, web applications, and enterprise automation APIs built on modern, resilient TypeScript architecture.",
  keywords: [
    "SaaS product development",
    "enterprise software engineering",
    "cloud application development",
    "API automation",
    "TypeScript web apps",
    "Ever Legit software",
  ],
};

export default function SaasSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
