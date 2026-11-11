type StackGroup = {
  area: string;
  tools: string[];
};

const stack: StackGroup[] = [
  { area: "Frontend", tools: ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS"] },
  { area: "Mobile", tools: ["React Native", "Expo", "Electron", "Kotlin y Swift nativo"] },
  { area: "Backend", tools: ["NestJS", "Node.js", "PostgreSQL", "Supabase"] },
  { area: "Cloud y calidad", tools: ["Google Cloud", "Firebase", "Docker", "Jest"] },
];

export function Stack() {
  return (
    <section id="stack" className="mu-section mu-section-paper" aria-labelledby="stack-t">
      <h2 id="stack-t" className="mu-label">
        Con qué construyo
      </h2>
      <dl className="mu-stack mu-reveal">
        {stack.map((group) => (
          <div key={group.area} className="mu-stack-row">
            <dt className="mu-stack-area">{group.area}</dt>
            <dd className="mu-stack-tools">{group.tools.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
