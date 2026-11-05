"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Page wrapper that owns the entrance and scroll motion. Content is rendered
 * by the server and stays fully visible without JS or under reduced motion.
 */
export function MuralMotion({ children }: { children: React.ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const name = page.querySelector<HTMLElement>(".mu-name");
    const stops: Array<() => void> = [];

    const context = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          name,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power3.inOut", clearProps: "clipPath" },
        )
        .from(
          ".mu-intro > *",
          { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "all" },
          "-=0.5",
        );

      gsap.to(name, {
        "--wall-scroll": "90px",
        ease: "none",
        scrollTrigger: { trigger: ".mu-hero", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.utils.toArray<HTMLElement>(".mu-reveal").forEach((element) => {
        gsap.from(element, {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: element, start: "clamp(top 90%)", once: true },
        });
      });
    }, page);
    stops.push(() => context.revert());

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const onMove = (event: PointerEvent) => {
        gsap.to(name, {
          "--wall-x": `${(event.clientX / window.innerWidth - 0.5) * -40}px`,
          "--wall-y": `${(event.clientY / window.innerHeight - 0.5) * -24}px`,
          duration: 0.9,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      window.addEventListener("pointermove", onMove);
      stops.push(() => window.removeEventListener("pointermove", onMove));
    }

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    stops.push(() => {
      cancelled = true;
    });

    return () => stops.reverse().forEach((stop) => stop());
  }, []);

  return (
    <div id="inicio" ref={pageRef} className="mu-page">
      {children}
    </div>
  );
}
