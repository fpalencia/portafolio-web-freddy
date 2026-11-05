"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Capture phase so Lenis, not the browser, performs in-page jumps.
    const onAnchor = (event: MouseEvent) => {
      // Leave open-in-new-tab and similar gestures to the browser.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash.length < 2) return;
      let target: Element | null = null;
      try {
        target = document.querySelector(hash);
      } catch {
        return;
      }
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      if (lenis.limit > 0) {
        const menu = document.querySelector<HTMLElement>(".mu-top");
        lenis.scrollTo(target as HTMLElement, { offset: -(menu?.offsetHeight ?? 0) });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onAnchor, true);

    return () => {
      document.removeEventListener("click", onAnchor, true);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
