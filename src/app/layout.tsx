import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Playfair_Display,
  Cormorant_Garamond,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitcontracting.com"),
  title: {
    default: "Rohit Contracting L.L.C — Premier Dubai Construction & Materials",
    template: "%s | Rohit Contracting L.L.C",
  },
  description:
    "Rohit Contracting L.L.C is a premier Dubai-based construction company specializing in high-end villa construction, turnkey contracting, and building material supply across the UAE.",
  keywords: [
    "villa construction dubai",
    "turnkey contracting dubai",
    "building materials supplier uae",
    "luxury home builders dubai",
    "construction management dubai",
    "civil works dubai",
    "rohit contracting llc",
    "dubai festival city construction",
  ],
  authors: [{ name: "Rohit Contracting L.L.C" }],
  creator: "Rohit Contracting L.L.C",
  publisher: "Rohit Contracting L.L.C",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rohit Contracting L.L.C — Building Excellence Across Dubai",
    description:
      "Premier villa construction, turnkey contracting, and building material supply in Dubai. Delivering excellence through precision and reliability.",
    url: "https://rohitcontracting.com",
    siteName: "Rohit Contracting L.L.C",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rohit Contracting L.L.C — Dubai Construction Excellence",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Contracting L.L.C — Dubai Construction Excellence",
    description:
      "Premier villa construction and building material supply across Dubai and the UAE.",
    images: ["/og-image.png"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AE"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-foreground">
        {/* JSON-LD LocalBusiness structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rohit Contracting L.L.C",
              image: "https://rohitcontracting.com/logo.png",
              description:
                "Rohit Contracting L.L.C is a premier Dubai-based construction company specializing in villa construction, turnkey contracting, and building material supply.",
              "@id": "https://rohitcontracting.com",
              url: "https://rohitcontracting.com",
              telephone: "+97143986222",
              email: "info@rohitcontracting.ae",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Sky Business Center, Floor 1–109 Office, Nadd Al Hamar Road",
                addressLocality: "Dubai Festival City",
                addressRegion: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.2227,
                longitude: 55.3588,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.linkedin.com/company/rohit-contracting-l-l-c",
              ],
            }),
          }}
        />
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
