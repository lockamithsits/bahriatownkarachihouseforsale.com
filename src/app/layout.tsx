import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import "./globals.css";
import "./article.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "Bahria Town Karachi House For Sale | Buying Guide",
  description:
    "Buying guidance for houses, villas, apartments and flats in Bahria Town Karachi. Call or message us for current availability and prices.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_PK",
    images: [{ url: "/og-image.svg", alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.svg"] },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6 md:pb-12">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
