"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;
    let isMouseDown = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isClickable = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      isHovering = !!isClickable;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    let animationFrameId: number;
    const render = () => {
      // Posición del punto interno (instantánea)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      // Posición del anillo externo (Lerp inercial del 15%)
      const lerpFactor = 0.15;
      ringX += (mouseX - ringX) * lerpFactor;
      ringY += (mouseY - ringY) * lerpFactor;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      // Modificadores de estado (hover o clic)
      if (isMouseDown) {
        ring.style.transform += " scale(0.65)";
        ring.style.borderColor = "var(--accent-sage)";
        ring.style.backgroundColor = "rgba(143, 168, 155, 0.1)";
      } else if (isHovering) {
        ring.style.transform += " scale(1.5)";
        ring.style.borderColor = "var(--accent-sage)";
        ring.style.backgroundColor = "rgba(143, 168, 155, 0.05)";
      } else {
        ring.style.transform += " scale(1)";
        ring.style.borderColor = "var(--text-tertiary)";
        ring.style.backgroundColor = "transparent";
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Punto central del cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent-sage rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out md:block hidden"
      />
      {/* Anillo de precisión técnica */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-text-tertiary/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[scale,border-color,background-color] duration-300 ease-out md:block hidden"
      />
    </>
  );
}
