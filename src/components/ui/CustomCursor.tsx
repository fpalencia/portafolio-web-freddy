"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Difference-blend dot for fine pointers only. Toggles `mu-cursor-on` on the
 * page wrapper so the native cursor is hidden only while the dot is active.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const page = dot?.closest<HTMLElement>(".mu-page");
    if (!dot || !page) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    const moveX = gsap.quickTo(dot, "x", { duration: 0.25, ease: "power3" });
    const moveY = gsap.quickTo(dot, "y", { duration: 0.25, ease: "power3" });

    const onMove = (event: PointerEvent) => {
      page.classList.add("mu-cursor-on");
      moveX(event.clientX);
      moveY(event.clientY);
    };
    const onOver = (event: PointerEvent) => {
      const active = (event.target as Element | null)?.closest?.("a, button");
      gsap.to(dot, { scale: active ? 3.5 : 1, duration: 0.25, overwrite: "auto" });
    };
    const onLeave = () => page.classList.remove("mu-cursor-on");

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      page.classList.remove("mu-cursor-on");
      gsap.killTweensOf(dot);
      gsap.set(dot, { clearProps: "all" });
    };
  }, []);

  return <span ref={dotRef} className="mu-cursor" aria-hidden="true" />;
}
