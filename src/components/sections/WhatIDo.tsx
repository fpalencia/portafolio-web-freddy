import Image from "next/image";

const steps = [
  {
    title: "Configuras tu tarifa",
    text: "Eliges modo de trabajo, tarifa por kilómetro y filtros. La app decide con tus reglas.",
  },
  {
    title: "Lee cada oferta",
    text: "Con reconocimiento de texto en el teléfono, lee tarifa, distancia y tiempo apenas llega el viaje.",
  },
  {
    title: "Si no conviene, rechazar",
    text: "Calcula la ganancia neta con el costo de combustible y la compara con tu tarifa en tiempo real.",
  },
  {
    title: "Si conviene, aceptar",
    text: "Ganancia neta y pesos por kilómetro a la vista, antes de tocar Aceptar.",
  },
];

// Layers are stacked in story order, so without JS the phone shows the last
// frame: an offer with the "accept" card. Screens are 720x1454 and decision
// cards are cropped from the same screenshots at their original position.
const layers = [
  { key: "home", src: "/deciderider/home.png" },
  { key: "offer", src: "/deciderider/reject-base.png" },
  { key: "reject", src: "/deciderider/reject-card.png", card: true },
  { key: "next", src: "/deciderider/accept-base.png" },
  { key: "accept", src: "/deciderider/accept-card.png", card: true },
];

export function WhatIDo() {
  return (
    <section id="hago" className="mu-section" aria-labelledby="hago-t">
      <h2 id="hago-t" className="mu-label">
        Lo que hago
      </h2>
      <div style={{ minWidth: 0 }}>
        <header className="mu-case-head mu-reveal">
          <p className="mu-eyebrow">Proyecto propio · Android e iOS</p>
          <h3 className="mu-project">DecideRider</h3>
          <p className="mu-case-lead">
            Una app para que conductores de transporte y delivery sepan si un viaje les conviene.
          </p>
          <p className="mu-case-meta">React Native · Expo · Kotlin · Swift · Supabase · Node.js</p>
        </header>

        <div className="mu-demo">
          <ol className="mu-steps">
            {steps.map((step, index) => (
              <li key={step.title} className="mu-step">
                <span className="mu-step-n">
                  {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </span>
                <h4 className="mu-step-title">{step.title}</h4>
                <p className="mu-step-text">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mu-phone-col">
            <div
              className="mu-phone"
              role="img"
              aria-label="Demo de DecideRider: una oferta de Uber recibe una tarjeta que recomienda rechazarla y otra que recomienda aceptarla"
            >
              {layers.map((layer) => (
                <Image
                  key={layer.key}
                  data-layer={layer.key}
                  className={layer.card ? "mu-phone-card" : "mu-phone-screen"}
                  src={layer.src}
                  width={layer.card ? 549 : 720}
                  height={layer.card ? 329 : 1454}
                  sizes={layer.card ? "(max-width: 760px) 160px, 260px" : "(max-width: 760px) 200px, 340px"}
                  // Layers start translated out of view; lazy loading would
                  // defer them until mid-animation.
                  loading="eager"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mu-case-cta">
          <p className="mu-eyebrow">Disponible en</p>
          <div className="mu-actions">
            <a
              className="mu-btn"
              href="https://play.google.com/store/apps/details?id=com.deciderider.app"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
            </a>
            <a
              className="mu-btn mu-btn-ghost"
              href="https://apps.apple.com/cl/app/deciderider/id6786428143"
              target="_blank"
              rel="noreferrer"
            >
              App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
