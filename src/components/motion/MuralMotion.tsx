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

      // DecideRider demo: the phone stays sticky while the steps scroll past.
      // The timeline is scrubbed by scroll, one unit per step: an offer rises
      // like a bottom sheet, the decision card drops on it, the next offer
      // slides in and gets its own card.
      const steps = page.querySelector<HTMLElement>(".mu-steps");
      if (steps) {
        const layer = (key: string) => page.querySelector(`[data-layer="${key}"]`);
        steps.setAttribute("data-motion", "");
        stops.push(() => steps.removeAttribute("data-motion"));

        // On narrow screens the phone sticks to the top, so the reading line
        // moves down into the visible area below it.
        const line = () => (window.matchMedia("(max-width: 760px)").matches ? "80%" : "center");
        // The steps list has trailing space so the phone stays sticky; the
        // story itself ends with the last step, not with that space.
        const lastStep = steps.lastElementChild;

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: steps,
              start: () => `top ${line()}`,
              endTrigger: lastStep,
              end: () => `bottom ${line()}`,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          })
          .from(layer("offer"), { yPercent: 100, duration: 0.5, ease: "power2.out" }, 0.75)
          .from(layer("reject"), { yPercent: -130, scale: 0.92, duration: 0.4, ease: "back.out(1.6)" }, 1.85)
          .from(layer("next"), { xPercent: 100, duration: 0.5, ease: "power2.inOut" }, 2.75)
          .from(layer("accept"), { yPercent: -130, scale: 0.92, duration: 0.4, ease: "back.out(1.6)" }, 3.3)
          .to({}, { duration: 0.3 }, 3.7);

        // 3D entrance and exit: the phone arrives tilted in perspective and
        // straightens out by the time the first step is read, then tilts
        // away once the story is over.
        const phone = page.querySelector(".mu-phone");
        const tilted = { rotationY: -28, rotationX: 10, rotationZ: -4, scale: 0.88 };
        gsap.fromTo(phone, tilted, {
          rotationY: 0,
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          ease: "sine.inOut",
          immediateRender: true,
          // Ends when the phone becomes sticky, so the tilt stays visible
          // while it travels up the screen.
          scrollTrigger: { trigger: ".mu-demo", start: "top bottom", end: "top 15%", scrub: 0.8 },
        });
        gsap.to(phone, {
          rotationY: 22,
          rotationX: -6,
          rotationZ: 3,
          scale: 0.92,
          ease: "power2.in",
          immediateRender: false,
          scrollTrigger: {
            trigger: lastStep,
            start: () => `bottom ${line()}`,
            endTrigger: ".mu-demo",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".mu-step", steps).forEach((step) => {
          // The last step stays lit while the phone is still pinned on it.
          ScrollTrigger.create({
            trigger: step,
            start: () => `top ${line()}`,
            endTrigger: step === lastStep ? steps : step,
            end: () => `bottom ${line()}`,
            toggleClass: "is-active",
          });
        });
      }

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
