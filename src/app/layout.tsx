import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freddy Palencia — Frontend Architect & Product Engineer",
  description:
    "Frontend Architect, Product Engineer y Fundador radicado en Santiago de Chile. Especializado en arquitectura escalable, performance extrema y diseño de experiencia premium.",
  keywords: [
    "Freddy Palencia",
    "Frontend Architect",
    "Product Engineer",
    "DecideRider",
    "Santiago de Chile",
    "React",
    "Next.js",
    "TailwindCSS",
    "GSAP",
    "Performance Web",
  ],
  authors: [{ name: "Freddy Palencia" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Freddy Palencia — Frontend Architect & Product Engineer",
    description:
      "Construyo productos digitales escalables con obsesión por la experiencia de usuario, performance y el detalle técnico.",
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
    "jobTitle": "Frontend Architect & Product Engineer",
    "sameAs": [
      "https://www.linkedin.com/in/freddy-daniel-palencia-padr%C3%B3n-6ab690111/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Flexit"
    }
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${jetbrainsMono.variable} scrollbar-hide`}
    >
      <body className="bg-bg-base text-text-primary antialiased selection:bg-accent-sage/30 selection:text-text-primary">
        {/* Structured Data (JSON-LD) para SEO Avanzado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Cursor Técnico Inteligente */}
        <CustomCursor />

        {/* Capa de textura de Ruido Físico (sutil overlay de 1.5% opacidad) */}
        <div className="noise-overlay" />
        
        {/* Retícula Blueprint técnica de Fondo */}
        <div className="blueprint-grid" />

        {/* Contenedor de Scroll Inercial */}
        <SmoothScroll>
          <div className="relative z-10 min-h-dvh flex flex-col justify-between">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
