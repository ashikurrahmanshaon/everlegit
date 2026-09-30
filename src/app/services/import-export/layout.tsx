import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Import & Export Sourcing & Global Trade — Ever Legit",
  description:
    "Compliant cross-border trade solutions: factory auditing, quality verification, customs clearance, and multi-modal freight logistics across global trade corridors.",
  keywords: [
    "import export business",
    "global trade sourcing",
    "factory auditing Asia",
    "customs clearance compliance",
    "cross-border freight logistics",
    "Ever Legit trade solutions",
  ],
};

export default function ImportExportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
