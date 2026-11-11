type Job = {
  company: string;
  role?: string;
  text: string;
  tech?: string;
  years: string;
};

const jobs: Job[] = [
  {
    company: "Flexit · Falabella",
    role: "Desarrollador Full Stack",
    text: "Desarrollé el software de control de asistencia de una plataforma de RR.HH., conforme a la normativa de la Dirección del Trabajo, con APIs en NestJS, acceso por roles y firma digital en la app móvil.",
    tech: "Next.js · NestJS · React Native · Google Cloud",
    years: "2025 — 2026",
  },
  {
    company: "ZeroQ",
    role: "Frontend Developer",
    text: "Desarrollé el frontend de tótems de autoatención y autopago, integrando capacidades nativas del dispositivo, y construí interfaces web responsivas.",
    tech: "React · Electron · Next.js · Zustand",
    years: "2025",
  },
  {
    company: "Medios Regionales",
    role: "Frontend Developer",
    text: "Desarrollé el sitio de El Mercurio de Valparaíso con SSR y metadatos dinámicos, mantuve y evolucioné el portal SoyChile.cl y optimicé Core Web Vitals y SEO técnico.",
    tech: "Next.js · Nuxt.js · Vue 3 · Elasticsearch",
    years: "2019 — 2024",
  },
  {
    company: "Antes, agencias y telecom",
    text: "Sitios, mailings y SEO para marcas como Kunstmann y Absolut, y productos web para operadores móviles en Latinoamérica.",
    years: "2016 — 2019",
  },
];

export function WhereIWorked() {
  return (
    <section id="recorrido" className="mu-section" aria-labelledby="recorrido-t">
      <h2 id="recorrido-t" className="mu-label">
        Dónde trabajé
      </h2>
      <ul className="mu-work mu-reveal">
        {jobs.map((job) => (
          <li key={job.company}>
            <div className="mu-job">
              <h3 className="mu-company">{job.company}</h3>
              {job.role && <p className="mu-job-role">{job.role}</p>}
              <p className="mu-job-text">{job.text}</p>
              {job.tech && <p className="mu-job-tech">{job.tech}</p>}
            </div>
            <span className="mu-year">{job.years}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
