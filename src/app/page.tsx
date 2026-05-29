import { PerformanceMonitor } from "@/components/widgets/PerformanceMonitor";
import { Hero } from "@/components/sections/Hero";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { Experience } from "@/components/sections/Experience";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Telemetría Técnica flotante */}
      <PerformanceMonitor />

      {/* Intro Cinemática */}
      <Hero />

      {/* Selected Systems (Sticky Stacking) */}
      <SelectedSystems />

      {/* Experience Timeline Terminal */}
      <Experience />

      {/* Convicciones / Filosofía Editorial */}
      <Philosophy />

      {/* Silent Outro / Contact */}
      <Contact />
    </>
  );
}
