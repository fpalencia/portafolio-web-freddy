"use client";

import { LinkedinLogo, Envelope } from "@phosphor-icons/react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-bg-base max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-text-tertiary/10"
    >
      <div className="flex flex-col items-start gap-8 max-w-[650px] py-12">
        <div>
          <span className="font-mono text-[9px] tracking-[0.25em] text-accent-sage uppercase block mb-2 select-none">
            — CONNECT
          </span>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-text-primary">
            ¿tienes un <span className="text-stroke">sistema</span> en mente?
          </h2>
        </div>

        <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-[45ch]">
          Si buscás construir un producto digital escalable, resolver problemas complejos de performance o necesitás un liderazgo técnico de alto impacto, pongámonos en contacto de forma directa.
        </p>

        {/* Direct Technical Communication */}
        <div className="flex flex-col gap-4 mt-6">
          <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-wider block select-none">
            CANAL DIRECTO DE COMUNICACIÓN
          </span>
          
          <a
            href="mailto:freddypalencia125@gmail.com"
            className="group flex flex-col gap-2 w-fit cursor-pointer"
          >
            <div className="flex items-center gap-2 text-text-secondary group-hover:text-accent-sage transition-colors duration-300 font-mono text-[10px]">
              <Envelope size={14} className="text-accent-sage" />
              <span>CORREO DIRECTO // SECURE_LINK</span>
            </div>
            <span className="text-xl md:text-3xl font-bold text-text-primary group-hover:text-accent-sage transition-all duration-300 border-b border-text-tertiary/10 pb-1">
              freddypalencia125@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/freddy-daniel-palencia-padr%C3%B3n-6ab690111/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-sage transition-colors duration-300 font-mono text-[10px] text-text-secondary cursor-pointer"
            >
              <LinkedinLogo size={14} />
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>
      </div>

      {/* Final Editorial Technical Footer */}
      <footer className="w-full flex md:flex-row flex-col justify-between items-start md:items-end border-t border-text-tertiary/10 pt-8 mt-24 font-mono text-[8px] text-text-tertiary gap-4">
        <div className="flex flex-col gap-1">
          <span>PORTFOLIO v3.1_SYSTEM // ARCHITECTED BY FREDDY PALENCIA</span>
          <span>&copy; {new Date().getFullYear()} &middot; SANTIAGO DE CHILE</span>
        </div>
        <div className="flex items-center gap-3 select-none">
          <span>NEXT.JS 16</span>
          <span>&middot;</span>
          <span>TAILWIND v4</span>
          <span>&middot;</span>
          <span>GSAP + LENIS</span>
          <span>&middot;</span>
          <span className="text-accent-sage">PASS LCP 1.1s</span>
        </div>
      </footer>
    </section>
  );
}
