import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickConnectDock from "@/components/QuickConnectDock";
import CommandSearchModal from "@/components/CommandSearchModal";
import ScrollUtilities from "@/components/ScrollUtilities";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://everlegit.com"),
  title: {
    default: "Ever Legit — Building Businesses That Move the World Forward",
    template: "%s | Ever Legit",
  },
  description:
    "Ever Legit is a modern global business company operating across E-commerce, Import & Export, SaaS Products, Software Development, and Digital Marketing.",
  keywords: [
    "Ever Legit",
    "Ever Legit company",
    "Ever Legit business",
    "global e-commerce company",
    "e-commerce solutions",
    "import export business",
    "SaaS development",
    "software development company",
    "digital marketing services",
    "global commerce",
    "business technology",
  ],
  authors: [{ name: "Ever Legit Corporate Operations" }],
  creator: "Ever Legit",
  publisher: "Ever Legit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://everlegit.com",
    title: "Ever Legit — Building Businesses That Move the World Forward",
    description:
      "Ever Legit operates at the intersection of global commerce, technology, software, and digital growth.",
    siteName: "Ever Legit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ever Legit — Building Businesses That Move the World Forward",
    description:
      "Ever Legit operates at the intersection of global commerce, technology, software, and digital growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white">
        <ScrollUtilities />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickConnectDock />
        <CommandSearchModal />
      </body>
    </html>
  );
}

