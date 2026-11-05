import Image from "next/image";

export function Closing() {
  return (
    <footer id="escribeme" className="mu-section mu-close">
      <Image
        className="mu-photo mu-reveal"
        src="/freddy-portrait.png"
        width={899}
        height={1599}
        sizes="(max-width: 760px) 100vw, 200px"
        alt="Freddy Palencia de pie, apoyado en un muro con graffiti"
      />
      <div className="mu-contact mu-reveal">
        <p className="mu-statement">Si tienes un proyecto en mente, escríbeme.</p>
        <div className="mu-links">
          <a className="mu-mail" href="mailto:freddypalencia125@gmail.com">
            freddypalencia125@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/freddy-daniel-palencia-padr%C3%B3n-6ab690111/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
