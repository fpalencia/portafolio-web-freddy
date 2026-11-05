import Image from "next/image";

export function Hero() {
  return (
    <section className="mu-hero">
      <h1 className="mu-name">
        Freddy
        <br />
        Palencia
      </h1>
      <Image
        className="mu-hero-photo"
        src="/freddy-portrait.png"
        width={899}
        height={1599}
        sizes="(orientation: portrait) and (max-width: 1100px) 100vw, 1px"
        alt="Freddy Palencia con chaqueta de jean, apoyado en un muro con graffiti"
      />
      <div className="mu-intro">
        <p className="mu-role">Full Stack Developer</p>
        <p className="mu-place">Santiago, Chile</p>
      </div>
    </section>
  );
}
