"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, MapPin, Globe } from "@phosphor-icons/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animación de revelado por máscara en el título principal
      const titleChars = titleRef.current?.querySelectorAll(".char");
      if (titleChars && titleChars.length > 0) {
        gsap.fromTo(
          titleChars,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      } else {
        // Fallback en caso de que no se carguen los caracteres individuales
        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
        );
      }

      // 2. Animación de la foto con revelado inercial y escala suave
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, scale: 0.95, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.6,
          ease: "power4.out",
          delay: 0.5,
        }
      );

      // 3. Animación del subtítulo y metadatos con física inercial
      gsap.fromTo(
        [subtitleRef.current, metaRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.7,
        }
      );

      // 4. Revelar la barra de navegación
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // SplitText helper manual para separar las letras y lograr el efecto de revelado por máscara
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`inline-block char ${char === " " ? "w-[0.25em]" : ""}`}
        style={{ display: "inline-block" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-dvh flex flex-col justify-between px-6 py-8 md:px-12 md:py-10 max-w-[1400px] mx-auto w-full overflow-hidden"
    >
      {/* 1. Header / Navigation */}
      <header
        ref={navRef}
        className="w-full flex items-center justify-between border-b border-text-tertiary/10 pb-6 opacity-0"
      >
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Freddy Palencia Logo"
            className="w-8 h-8 object-contain filter invert-0 dark:invert-0 [.light_&]:invert transition-all duration-300 select-none"
          />
          <span className="font-mono text-[10px] tracking-widest text-text-secondary select-none">
            FREDDY PALENCIA
          </span>
        </div>

        {/* Navigation links (Banned dual duplicate CTAs - only navigation metadata) */}
        <div className="flex items-center gap-6 font-mono text-[10px]">
          <span className="text-text-secondary md:flex hidden items-center gap-1.5 select-none">
            <MapPin size={12} className="text-accent-sage animate-pulse" /> SANTIAGO, CHILE
          </span>
          <span className="text-text-tertiary">|</span>
          <a
            href="#contact"
            className="text-text-secondary hover:text-accent-sage transition-all duration-300 relative group"
          >
            SISTEMAS.CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-sage transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </header>

      {/* 2. Main Hero Title and Statement */}
      <main className="flex-1 flex flex-col justify-center my-12 md:my-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-end">
          {/* Asymmetrical massive typography */}
          <div className="md:col-span-8">
            <span className="font-mono text-[10px] tracking-[0.25em] text-accent-sage uppercase block mb-3 select-none">
              — ARCHITECT / ENGINEER
            </span>
            <h1
              ref={titleRef}
              className="text-[3.8rem] md:text-[6.8rem] font-bold tracking-tighter leading-[0.85] text-text-primary mask-text-reveal"
            >
              <span className="block">{splitText("freddy")}</span>
              <span className="block text-stroke mt-1">{splitText("palencia")}</span>
            </h1>
          </div>

          {/* Technical subtext col */}
          <div className="md:col-span-4 md:pl-6 pb-2 flex flex-col justify-end">
            {/* Foto del Autor con estética Editorial Blueprint */}
            <div
              ref={photoRef}
              className="relative group overflow-hidden border border-text-tertiary/15 rounded-xl bg-bg-surface p-2 mb-5 transition-colors duration-300 hover:border-accent-sage/30 opacity-0"
            >
              {/* Cruces de calibración en las esquinas */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-accent-sage/40" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-accent-sage/40" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-accent-sage/40" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-accent-sage/40" />
              
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-bg-base">
                <img
                  src="/backgroundfreddy.png"
                  alt="Freddy Palencia"
                  className="w-full h-full object-cover filter grayscale contrast-110 opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/50 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Telemetría técnica micro */}
              <div className="flex justify-between items-center mt-2 px-1 font-mono text-[8px] text-text-secondary select-none">
                <span>VIEWPORT // PROFILE_PHOTO</span>
                <span className="text-accent-sage font-bold">FP_SYS_v2.0</span>
              </div>
            </div>

            <p
              ref={subtitleRef}
              className="text-sm md:text-base text-text-secondary leading-relaxed max-w-[32ch] opacity-0"
            >
              Construyo productos digitales escalables con obsesión por la
              <span className="text-text-primary font-semibold"> experiencia</span>, la
              <span className="text-text-primary font-semibold"> performance</span> y el detalle técnico.
            </p>
          </div>
        </div>
      </main>

      {/* 3. Hero Footer / Telemetry Bar */}
      <footer
        ref={metaRef}
        className="w-full flex md:flex-row flex-col gap-4 justify-between items-start md:items-end border-t border-text-tertiary/10 pt-6 opacity-0"
      >
        {/* Technical specs of the profile */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[9px] text-text-secondary">
          <div className="flex items-center gap-1.5">
            <Globe size={11} className="text-text-tertiary" />
            <span>ROLE // FOUNDER & CEO</span>
          </div>
          <div>
            <span>TECH // REACT.JS &middot; NEXT.JS &middot; GSAP</span>
          </div>
          <div>
            <span>METRIC // LCP &lt; 1.2s &middot; SEO 100%</span>
          </div>
        </div>

        {/* Inertial Scroll Anchor */}
        <a
          href="#selected-systems"
          className="flex items-center gap-2 group font-mono text-[10px] text-accent-sage hover:text-accent-beige transition-colors duration-300 select-none cursor-pointer"
        >
          <span>SELECTED SYSTEMS</span>
          <div className="p-1 rounded-full border border-accent-sage/30 group-hover:border-accent-beige/40 transition-colors duration-300">
            <ArrowDown size={10} className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
        </a>
      </footer>
    </div>
  );
}
