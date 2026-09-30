import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Commercial Operations Desk — Ever Legit",
  description:
    "Direct contact desks for business inquiries, venture consultations, trade scoping, and technical RFP submissions. Guaranteed executive response within 24 hours.",
  keywords: [
    "contact Ever Legit",
    "Ever Legit phone number",
    "Ever Legit email",
    "Ever Legit Cheyenne Wyoming",
    "commercial inquiry desk",
    "request project consultation",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
