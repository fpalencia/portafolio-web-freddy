export function WhatIDo() {
  return (
    <section id="hago" className="mu-section" aria-labelledby="hago-t">
      <h2 id="hago-t" className="mu-label">
        Lo que hago
      </h2>
      <div className="mu-reveal" style={{ minWidth: 0 }}>
        <h3 className="mu-project">DecideRider</h3>
        <p className="mu-place" style={{ marginTop: 4 }}>
          App publicada en Google Play y App Store
        </p>
        <p className="mu-text">
          Una app para que conductores de transporte y delivery sepan si un viaje les conviene.
        </p>
        <ul className="mu-list">
          <li>Recomienda según tarifa, distancia y costo de combustible.</li>
          <li>Lee los datos del viaje con reconocimiento de texto en el teléfono.</li>
          <li>Procesa la información en tiempo real.</li>
        </ul>
        <div className="mu-actions">
          <a
            className="mu-btn"
            href="https://play.google.com/store/apps/details?id=com.deciderider.app"
            target="_blank"
            rel="noreferrer"
          >
            Descargar en Google Play
          </a>
          <a
            className="mu-btn"
            href="https://apps.apple.com/cl/app/deciderider/id6786428143"
            target="_blank"
            rel="noreferrer"
          >
            Descargar en App Store
          </a>
        </div>
      </div>
    </section>
  );
}
