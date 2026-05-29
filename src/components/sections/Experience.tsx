"use client";

import { useState } from "react";
import { TerminalWindow, ShieldCheck, Code } from "@phosphor-icons/react";

interface Job {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  techStack: string[];
  systemLog: string;
  tag: string;
}

export function Experience() {
  const [activeJobId, setActiveJobId] = useState<string>("deciderider");

  const jobs: Job[] = [
    {
      id: "deciderider",
      period: "2026 — PRESENTE",
      role: "CEO & Founder & Lead Architect",
      company: "DecideRider",
      location: "Santiago, CL",
      highlights: [
        "Fundación y arquitectura técnica integral de la plataforma de movilidad y asistentes inteligentes para conductores.",
        "Diseño e integración de asistentes de IA por voz y overlays flotantes inteligentes sobre aplicaciones de movilidad.",
        "Cálculo automático de rentabilidad (tarifa por km/hora, combustible) leyendo ofertas en tiempo real."
      ],
      techStack: ["React Native", "Expo", "Kotlin", "Android Automation", "Zustand", "Google Maps API", "AI Speech API"],
      systemLog: "deciderider --init --verbose --port=8080 STATUS: ONLINE",
      tag: "FOUNDER"
    },
    {
      id: "flexit",
      period: "2025 — PRESENTE",
      role: "Frontend Web Developer",
      company: "Flexit",
      location: "Santiago, CL",
      highlights: [
        "Desarrollo de aplicaciones web empresariales para gestión de recursos humanos con Next.js (App Router) y TypeScript.",
        "Creación de reportes avanzados de asistencia y turnos con filtros complejos, TanStack Table y exportación multiformato.",
        "Integración de autenticación NextAuth.js, JWT, protección de rutas y formularios multi-paso complejos con Formik y Yup."
      ],
      techStack: ["Next.js", "React", "TypeScript", "MUI", "TailwindCSS", "TanStack Table", "NextAuth.js", "Jest"],
      systemLog: "flexit-app --next-auth --tanstack-table STATUS: RUNNING",
      tag: "DEVELOPER"
    },
    {
      id: "zeroq",
      period: "2025",
      role: "Frontend Web Developer",
      company: "ZeroQ",
      location: "Santiago, CL",
      highlights: [
        "Desarrollo de interfaces responsivas e intuitivas utilizando ReactJS y Tailwind CSS para sistemas web de atención.",
        "Arquitectura de gestión de estado global y optimización con Zustand, asegurando coherencia y fluidez de datos.",
        "Desarrollo de aplicaciones de escritorio híbridas utilizando Electron, combinando capacidades nativas con tecnologías web."
      ],
      techStack: ["React.js", "Zustand", "Electron.js", "TailwindCSS", "TypeScript", "PostgreSQL"],
      systemLog: "zeroq-app --electron --zustand --db=connected STATUS: LIVE",
      tag: "DEVELOPER"
    },
    {
      id: "medios-regionales",
      period: "2019 — 2024",
      role: "Frontend Web Developer",
      company: "Medios Regionales",
      location: "Santiago & Valparaíso, CL",
      highlights: [
        "Arquitectura del sitio Mercurio Valparaíso utilizando Next.js, TS, Zustand y Tailwind; optimizando SSR y logrando +40% en PageSpeed.",
        "Desarrollo de plataforma de música con Vue.js (Composition API), Pinia y Elasticsearch para streaming, playlists y rankings.",
        "Desarrollo y optimización masiva de Core Web Vitals en Soychile.cl utilizando Nuxt.js, Option API y Vuex."
      ],
      techStack: ["Next.js", "Nuxt.js", "Vue.js", "Zustand", "Pinia", "Elasticsearch", "Bootstrap", "SASS"],
      systemLog: "soychile-portal --vitals=check LCP=1.1s CLS=0.01 STATUS: PASS",
      tag: "ARCHITECT"
    },
    {
      id: "byc-comunicaciones",
      period: "2018 — 2019",
      role: "Frontend Web Developer",
      company: "B y C Comunicaciones",
      location: "Santiago, CL",
      highlights: [
        "Desarrollo de portales temáticos de nicho de alto tráfico (Platos y Copas, Mamá y Bebé).",
        "Consumo e integración de Rest APIs para la gestión automatizada de posts y contenidos dinámicos.",
        "Desarrollo de plugins a medida y soporte constante para CMS WordPress."
      ],
      techStack: ["WordPress", "PHP", "JavaScript", "REST API", "CSS3", "HTML5"],
      systemLog: "byc-wp-engine --niche-sites --portals=active STATUS: STABLE",
      tag: "DEVELOPER"
    },
    {
      id: "redon-publicidad",
      period: "2018",
      role: "Frontend Web Developer",
      company: "Redon Publicidad",
      location: "Santiago, CL",
      highlights: [
        "Desarrollo y maquetación de landing pages y sitios web premium para marcas líderes (Kunstmann, VinoGato, Absolut, etc.).",
        "Configuración y auditoría SEO on-page para múltiples portales web.",
        "Maquetado de plantillas y campañas de email marketing responsivas."
      ],
      techStack: ["HTML5", "CSS3", "SASS", "JavaScript", "SEO On-Page", "Email Templates"],
      systemLog: "redon-adserver --campaigns=live --seo=optimized STATUS: PASS",
      tag: "DEVELOPER"
    },
    {
      id: "digevo-group",
      period: "2016 — 2018",
      role: "Junior Frontend Developer",
      company: "Digevo Group",
      location: "Santiago, CL",
      highlights: [
        "Diseño, maquetación y administración web de productos digitales para operadores móviles líderes en LATAM.",
        "Creación de landing pages optimizadas para alta conversión en campañas móviles en la región.",
        "Mantenimiento continuo y soporte operativo de los productos entregados."
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "Mobile Landing Pages", "Telecom APIs"],
      systemLog: "digevo-product --telecom-latam --status=active STATUS: READY",
      tag: "JUNIOR"
    }
  ];

  const activeJob = jobs.find((job) => job.id === activeJobId) || jobs[0];

  return (
    <section
      id="experience"
      className="relative w-full bg-bg-base max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-text-tertiary/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Terminal & Timeline Interactive UI */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-accent-sage uppercase block mb-2">
              — CAREER TRACK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              experience <span className="text-stroke">log</span>
            </h2>
          </div>

          <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-[40ch]">
            Trayectoria enfocada en liderar equipos técnicos, estructurar software escalable de alto impacto y resolver performance a escala.
          </p>

          {/* Interactive Technical Terminal */}
          <div className="w-full bg-bg-surface border border-text-tertiary/15 rounded-xl overflow-hidden font-mono text-[10px] shadow-2xl">
            {/* Header Terminal Bar */}
            <div className="bg-bg-base/80 border-b border-text-tertiary/15 px-4 py-3 flex justify-between items-center text-text-secondary">
              <div className="flex items-center gap-1.5">
                <TerminalWindow size={13} className="text-accent-sage" />
                <span>bash &middot; palencia-core</span>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex flex-col gap-4">
              <div className="text-text-tertiary">// SELECCIONA EL NODO DEL TIMELINE A CONSULTAR</div>

              {/* Terminal Options / Tabs */}
              <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto pr-1">
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setActiveJobId(job.id)}
                    className={`w-full flex items-center justify-between p-3 rounded border text-left cursor-pointer transition-all duration-300 ${
                      activeJobId === job.id
                        ? "border-accent-sage bg-accent-sage/5 text-accent-sage"
                        : "border-text-tertiary/10 bg-bg-base/30 text-text-secondary hover:border-text-tertiary/30"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="opacity-50 font-bold text-[9px] w-[50px]">
                        {job.period.split(" ")[0]}
                      </span>
                      <span className="font-bold text-text-primary text-[10px] truncate max-w-[120px]">
                        {job.company}
                      </span>
                    </div>
                    <span className="text-[8px] tracking-wider bg-text-tertiary/10 px-1.5 py-0.5 rounded text-text-secondary">
                      {job.tag}
                    </span>
                  </button>
                ))}
              </div>

              {/* Status Output Console */}
              <div className="bg-bg-base border border-text-tertiary/10 p-3 rounded text-[9px] text-text-secondary leading-relaxed">
                <div className="flex items-center gap-1 text-accent-sage">
                  <span>$</span>
                  <span className="font-bold">{activeJob.systemLog}</span>
                </div>
                <div className="text-text-tertiary mt-1">LOCATION: {activeJob.location}</div>
                <div className="text-text-tertiary">ROLE: {activeJob.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Impact & Details */}
        <div className="lg:col-span-7 lg:pl-8 flex flex-col gap-6 pt-4 lg:pt-12">
          <div className="border-b border-text-tertiary/10 pb-4">
            <span className="font-mono text-[9px] text-accent-sage uppercase block mb-1">
              {activeJob.period} // {activeJob.location}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-text-primary">
              {activeJob.role}
            </h3>
            <p className="text-sm font-semibold text-accent-beige mt-1">
              {activeJob.company}
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-4 text-xs md:text-sm text-text-secondary">
            <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-accent-sage" /> PRINCIPALES HITOS Y APORTES
            </span>
            <ul className="flex flex-col gap-4 leading-relaxed">
              {activeJob.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3">
                  <span className="font-mono text-[10px] text-accent-sage select-none mt-0.5">
                    0{index + 1}.
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack used */}
          <div className="flex flex-col gap-3 pt-4 border-t border-text-tertiary/10">
            <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-wider flex items-center gap-1.5">
              <Code size={12} /> ENTRAMADO TECNOLÓGICO DE ARQUITECTURA
            </span>
            <div className="flex flex-wrap gap-2">
              {activeJob.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] text-text-secondary bg-bg-surface border border-text-tertiary/15 px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
