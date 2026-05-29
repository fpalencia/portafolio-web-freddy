"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Cpu, Tree, Broadcast } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

interface SystemCard {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  impact: string[];
  metrics: { label: string; value: string }[];
  accentColor: string; // Tailwind class
  accentHex: string;
  icon: React.ReactNode;
}

export function SelectedSystems() {
  const containerRef = useRef<HTMLDivElement>(null);

  const systems: SystemCard[] = [
    {
      id: "deciderider",
      number: "01 // SYSTEM",
      title: "DecideRider",
      tagline: "Asistentes inteligentes para conductores y movilidad urbana.",
      description:
        "Plataforma y ecosistema móvil de automatización basado en agentes de IA y asistentes inteligentes para optimizar la experiencia de usuario y seguridad en apps de transporte.",
      role: "CEO & Founder & Lead Architect",
      impact: [
        "Desarrollo e integración de asistentes autónomos por voz.",
        "Automatización en sistemas Android para conductores.",
        "Optimización de consumo de APIs de mapas y geolocalización."
      ],
      metrics: [
        { label: "AI DISPATCH TIME", value: "<150ms" },
        { label: "DRIVER SATISFACTION", value: "98.4%" },
        { label: "MOBILITY LATENCY", value: "-40%" }
      ],
      accentColor: "text-accent-sage border-accent-sage/20 bg-accent-sage/5",
      accentHex: "#8FA89B",
      icon: <Cpu size={24} className="text-accent-sage" />
    },
    {
      id: "kuuwu",
      number: "02 // STARTUP",
      title: "Kuuwu",
      tagline: "SaaS de digitalización y conexión en el sector construcción.",
      description:
        "Plataforma integral enfocada en digitalizar flujos de trabajo, presupuestos y control de avance de obras, conectando a profesionales técnicos directamente con clientes finales.",
      role: "Founder & Frontend Lead",
      impact: [
        "Estructura modular en Next.js (App Router) y TypeScript para renders inmediatos.",
        "Arquitectura multi-tenant para constructoras e independientes.",
        "Sistemas de presupuestación rápida en tiempo real."
      ],
      metrics: [
        { label: "PROCESS SPEEDUP", value: "12x" },
        { label: "ACTIVE PROJECTS", value: "1,200+" },
        { label: "SEO TRAFFIC GROWTH", value: "+280%" }
      ],
      accentColor: "text-accent-beige border-accent-beige/20 bg-accent-beige/5",
      accentHex: "#E6DFD3",
      icon: <Tree size={24} className="text-accent-beige" />
    },
    {
      id: "media-platforms",
      number: "03 // HIGH-TRAFFIC ARCHITECTURE",
      title: "Sistemas de Alto Tráfico",
      tagline: "Medios de comunicación digital y SaaS de suscripción.",
      description:
        "Liderazgo técnico y desarrollo frontend orientado a alta concurrencia, performance optimizada y SEO masivo para redes de diarios digitales líderes y plataformas SaaS del holding.",
      role: "Frontend Architect & Tech Lead",
      impact: [
        "Soychile.cl, Mercurio Valparaíso, Mercurio Antofagasta, Universo Radio.",
        "Optimización de métricas Core Web Vitals (LCP, INP, CLS) a nivel crítico.",
        "Arquitectura frontend resistente a picos de tráfico en tiempo real."
      ],
      metrics: [
        { label: "MONTHLY PAGEVIEWS", value: "15M+" },
        { label: "CORE WEB VITALS PASS", value: "100%" },
        { label: "FIRST INPUT DELAY", value: "<15ms" }
      ],
      accentColor: "text-text-secondary border-text-tertiary/20 bg-text-tertiary/5",
      accentHex: "#8E939E",
      icon: <Broadcast size={24} className="text-text-secondary" />
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".system-card");
      
      // Implementación del canon Sticky-Stack
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return; // La última tarjeta no se bloquea

        ScrollTrigger.create({
          trigger: card,
          start: "top top", // Fijar exactamente al inicio del viewport
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false, // Permite el apilamiento sin saltos
        });

        // Efecto cinemático de contracción (scale) y opacidad inercial al subir
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="selected-systems"
      className="relative w-full bg-bg-base"
    >
      {/* Título de Sección Asimétrico */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-12 border-t border-text-tertiary/10">
        <span className="font-mono text-[9px] tracking-[0.25em] text-accent-sage uppercase block mb-2">
          — PRODUCT PORTFOLIO
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          selected <span className="text-stroke">systems</span>
        </h2>
      </div>

      {/* Grid de Apilamiento */}
      <div className="relative">
        {systems.map((system, i) => (
          <div
            key={system.id}
            className="system-card sticky top-0 min-h-dvh flex items-center justify-center py-16 md:py-24"
          >
            {/* Contenedor Físico del Sistema (Tarjeta) */}
            <div className="w-[90%] max-w-[1200px] min-h-[75vh] p-8 md:p-12 bg-bg-surface border border-text-tertiary/15 rounded-2xl flex flex-col justify-between shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              {/* Línea decorativa técnica arriba */}
              <div
                className="absolute top-0 left-0 h-[2px] bg-accent-sage transition-all duration-500 w-0 group-hover:w-full"
                style={{ backgroundColor: system.accentHex }}
              />

              {/* Top Card Row: Metadatos */}
              <div className="flex justify-between items-start border-b border-text-tertiary/10 pb-6 w-full">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg border ${system.accentColor}`}>
                    {system.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-wider text-text-secondary block">
                      {system.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary mt-0.5">
                      {system.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-[9px] text-text-secondary">
                  <span>ACTIVE REGION // CL</span>
                </div>
              </div>

              {/* Middle Card Row: Storytelling & Métricas (Asymmetric Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8 flex-1 items-center">
                {/* Descripciones del Producto */}
                <div className="md:col-span-7 flex flex-col gap-5">
                  <div>
                    <p className="font-mono text-[10px] text-text-secondary uppercase mb-1">
                      // {system.role}
                    </p>
                    <p className="text-lg md:text-xl text-text-primary font-medium tracking-tight leading-snug">
                      {system.tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    {system.description}
                  </p>

                  <div className="flex flex-col gap-2 mt-2">
                    <span className="font-mono text-[9px] text-text-tertiary uppercase">
                      key architecture contribution
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs text-text-secondary font-mono">
                      {system.impact.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: system.accentHex }}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dashboard Técnico / Métricas */}
                <div className="md:col-span-5 flex flex-col gap-4 bg-bg-base/50 border border-text-tertiary/10 p-6 rounded-xl font-mono text-[10px]">
                  <div className="flex items-center justify-between border-b border-text-tertiary/10 pb-2.5 text-text-tertiary">
                    <span>SYSTEM METRIC DECK</span>
                    <span>LIVE STATUS</span>
                  </div>

                  {system.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 py-1">
                      <div className="flex justify-between text-text-secondary">
                        <span>{metric.label}</span>
                        <span className="text-text-primary font-bold">{metric.value}</span>
                      </div>
                      <div className="w-full bg-text-tertiary/10 h-[3px] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: "85%",
                            backgroundColor: system.accentHex,
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="mt-4 pt-3 border-t border-text-tertiary/10 flex justify-between items-center text-[9px] text-text-tertiary">
                    <span>VERIFICATION // STABLE</span>
                    <span className="text-accent-sage flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-sage animate-ping" />
                      SECURE
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Row: Action Link */}
              <div className="w-full flex justify-between items-center border-t border-text-tertiary/10 pt-6">
                <span className="font-mono text-[8px] text-text-tertiary select-none">
                  SYSTEM KEY: {system.id.toUpperCase()}_v3_2026
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
