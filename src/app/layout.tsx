import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitcontracting.com"),
  title: {
    default: "Rohit Contracting L.L.C | Premier Villa Construction in Dubai",
    template: "%s | Rohit Contracting L.L.C"
  },    description:
    "Rohit Contracting L.L.C is a premier Dubai-based construction company specializing in high-end villa construction and turnkey contracting across Dubai.",
  keywords: [
    "villa construction dubai",
    "turnkey contracting dubai",
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
    title: "Rohit Contracting L.L.C | Building Excellence Across Dubai",
    description:
      "Premier villa construction and turnkey contracting in Dubai. Delivering excellence through precision and reliability.",
    url: "https://rohitcontracting.com",
    siteName: "Rohit Contracting L.L.C",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rohit Contracting L.L.C | Dubai Construction Excellence",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Contracting L.L.C | Dubai Construction Excellence",
    description: "Premier villa construction and turnkey contracting in Dubai.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
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
  other: {
    "theme-color": "#FAF7F2",
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
      className={cn(plusJakartaSans.variable, cormorantGaramond.variable, "font-sans")}
    >
      <body className="bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-foreground">
        {/* JSON-LD LocalBusiness structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rohit Contracting L.L.C",
              "image": "https://rohitcontracting.com/logo.png",
              "description":
                "Rohit Contracting L.L.C is a premier Dubai-based construction company specializing in villa construction and turnkey contracting.",
              "@id": "https://rohitcontracting.com",
              "url": "https://rohitcontracting.com",
              "telephone": "+971559239581",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sky Business Centre, #109 Office, Nad Al Hamar Road, Al Kheeran",
                "addressLocality": "Dubai Festival City",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.2227,
                "longitude": 55.3588
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "07:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/rohit-contracting-l-l-c"
              ]
            }),
          }}
        />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <WebVitalsReporter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
