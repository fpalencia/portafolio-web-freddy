"use client";

import { Wind, PaintBrush, ChartLineUp } from "@phosphor-icons/react";


interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

export function Philosophy() {
  const pillars: Pillar[] = [
    {
      number: "I // CRITICAL PERFORMANCE",
      title: "Performance & SEO Matemático",
      tagline: "El DOM no debe ser un depósito, es una estructura de precisión.",
      description:
        "La optimización de Core Web Vitals no es un extra al final del proyecto; es la base del SEO masivo y la retención del usuario. Cada nodo del DOM innecesario eliminado y cada recurso cargado de forma asíncrona es dinero retenido.",
      icon: <Wind size={20} className="text-accent-sage" />
    },
    {
      number: "II // FUNCTIONAL INTERACTION",
      title: "Diseño Físico & UX Preciso",
      tagline: "El movimiento debe tener motivación, física e inercia.",
      description:
        "Evito las animaciones genéricas decorativas. El movimiento cinemático debe guiar la mirada, comunicar cambios de estado, y emular la inercia del mundo real. Si una microinteracción no explica la jerarquía, se elimina.",
      icon: <PaintBrush size={20} className="text-accent-beige" />
    },
    {
      number: "III // CODE AND BUSINESS",
      title: "Growth & Product Engineering",
      tagline: "El código de excelencia debe multiplicar las métricas de negocio.",
      description:
        "Un gran frontend no sirve de nada si el producto no adquiere y retiene usuarios. Desarrollo software escalable e inteligente (AI integration, automatizaciones móviles) alineando la arquitectura al negocio y al growth de startups.",
      icon: <ChartLineUp size={20} className="text-text-secondary" />
    }
  ];

  return (
    <section
      id="philosophy"
      className="relative w-full bg-bg-base max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-text-tertiary/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Asymmetric Editorial Title */}
        <div className="lg:col-span-4 sticky top-24">
          <span className="font-mono text-[9px] tracking-[0.25em] text-accent-sage uppercase block mb-2">
            — ARCHITECT MANIFESTO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
            engineering <br />
            <span className="text-stroke">convictions</span>
          </h2>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed mt-4 max-w-[28ch] md:block hidden">
            Fundamentos técnicos innegociables para construir productos que escalan y generan impacto de mercado.
          </p>
        </div>

        {/* Right Column: Editorial Pillars */}
        <div className="lg:col-span-8 flex flex-col gap-16 lg:pl-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-b border-text-tertiary/10 pb-12 last:border-b-0 last:pb-0 group"
            >
              {/* Metadato del Pilar */}
              <div className="flex items-center gap-3 font-mono text-[9px] text-text-secondary">
                <div className="p-2 bg-bg-surface border border-text-tertiary/15 rounded-lg group-hover:border-accent-sage/30 transition-colors duration-300">
                  {pillar.icon}
                </div>
                <span>{pillar.number}</span>
              </div>

              {/* Título y Tagline */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary">
                  {pillar.title}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-accent-beige mt-1">
                  {pillar.tagline}
                </p>
              </div>

              {/* Explicación Técnica */}
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-[65ch]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
