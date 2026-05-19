import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Cormorant_Garamond, Geist_Mono } from "next/font/google";
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
  title: "Rohit Contracting L.L.C — Building Excellence Across Dubai",
  description:
    "Rohit Contracting L.L.C is a Dubai-based construction and building materials company delivering end-to-end contracting, reliable material supply, and project management across Dubai.",
  keywords: [
    "construction dubai",
    "building materials uae",
    "contracting company",
    "construction management",
    "industrial procurement",
    "uae construction",
    "rohit contracting",
    "dubai contractor",
  ],
  openGraph: {
    title: "Rohit Contracting L.L.C — Building Excellence Across Dubai",
    description:
      "Rohit Contracting L.L.C delivers end-to-end contracting, material supply and project management services across Dubai.",
    type: "website",
    locale: "en_US",
    siteName: "Rohit Contracting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} ${geistMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-foreground">
        {/* Safety net: dismiss loading screen if React hydration fails */}
        {/* JSON-LD LocalBusiness structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rohit Contracting L.L.C",
              description:
                "End-to-end contracting and building materials supplier based in Dubai, serving commercial, industrial and infrastructure clients across Dubai.",
              url: "https://example.com",
              telephone: "+971501234567",
              email: "info@rohitcontracting.ae",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sky Business Center, Floor 1–109 Office, Nadd Al Hamar Road, Dubai Festival City (Al Kheeran 1)",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "United Arab Emirates"],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function(){
                var el=document.getElementById('rc-loading-screen');
                if(el&&el.style.display!=='none'){
                  el.style.opacity='0';
                  el.style.pointerEvents='none';
                  setTimeout(function(){el.style.display='none'},500);
                }
              },6000);
            `,
          }}
        />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
