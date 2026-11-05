import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import Script from "next/script";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Freddy Palencia — Full Stack Developer";

export const metadata: Metadata = {
  title,
  description:
    "Full Stack Developer en Santiago, Chile. Portafolio con DecideRider, una app publicada en Google Play y App Store para conductores de transporte y delivery, y mi recorrido desde 2016 con Next.js, NestJS, React Native y React.",
  keywords: [
    "Freddy Palencia",
    "Full Stack Developer",
    "DecideRider",
    "Santiago de Chile",
    "React",
    "Next.js",
    "NestJS",
    "React Native",
  ],
  authors: [{ name: "Freddy Palencia" }],
  openGraph: {
    title,
    description:
      "Full Stack Developer en Santiago, Chile. DecideRider, una app para conductores de transporte y delivery publicada en Google Play y App Store.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Freddy Daniel Palencia Padrón",
    "url": "https://freddypalencia.cl",
    "image": "https://freddypalencia.cl/backgroundfreddy.png",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://www.linkedin.com/in/freddy-daniel-palencia-padr%C3%B3n-6ab690111/"
    ]
  };

  return (
    <html lang="es" className={`${anton.variable} ${archivo.variable}`}>
      <body>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7J3DFS1TER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7J3DFS1TER');
          `}
        </Script>

        {/* Structured Data (JSON-LD) para SEO Avanzado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Scroll inercial (Lenis) */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
