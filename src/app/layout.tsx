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
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#f8fafc",
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
    "Ever Legit is an institutional multi-discipline enterprise operating across global e-commerce, audited cross-border trade sourcing, scalable cloud software platforms, and performance marketing.",
  keywords: [
    "Ever Legit",
    "Ever Legit LLC",
    "Ever Legit company",
    "global e-commerce company",
    "cross-border trade sourcing",
    "SaaS software development",
    "enterprise cloud platforms",
    "performance marketing agency",
    "international trade logistics",
    "business technology",
    "Wyoming holding company",
  ],
  authors: [{ name: "Ever Legit Corporate Operations" }],
  creator: "Ever Legit",
  publisher: "Ever Legit",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://everlegit.com",
    title: "Ever Legit — Building Businesses That Move the World Forward",
    description:
      "Ever Legit operates at the intersection of global commerce, cross-border sourcing, enterprise cloud software, and performance marketing.",
    siteName: "Ever Legit",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Ever Legit Corporate Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ever Legit — Building Businesses That Move the World Forward",
    description:
      "Ever Legit operates at the intersection of global commerce, cross-border sourcing, enterprise cloud software, and performance marketing.",
    images: ["/icon.svg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://everlegit.com/#organization",
      name: "Ever Legit",
      url: "https://everlegit.com",
      logo: {
        "@type": "ImageObject",
        url: "https://everlegit.com/icon.svg",
        caption: "Ever Legit Corporate Logo",
      },
      description:
        "Ever Legit is an institutional multi-discipline enterprise operating across global e-commerce, audited cross-border trade sourcing, scalable cloud software platforms, and performance marketing.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cheyenne",
        addressRegion: "WY",
        addressCountry: "US",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-307-218-3120",
          contactType: "corporate sales and customer service",
          email: "info@everlegit.com",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://everlegit.com/#website",
      url: "https://everlegit.com",
      name: "Ever Legit",
      publisher: {
        "@id": "https://everlegit.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://everlegit.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
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
