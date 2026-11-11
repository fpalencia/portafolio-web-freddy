const email = "freddypalencia125@gmail.com";

export function Closing() {
  return (
    <footer id="escribeme" className="mu-final" aria-labelledby="escribeme-t">
      <div className="mu-reveal">
        <h2 id="escribeme-t" className="mu-final-title">
          ¿Tienes un proyecto en mente?
        </h2>
        <div className="mu-final-row">
          <a className="mu-close-mail" href={`mailto:${email}`}>
            <span className="mu-close-mail-text">{email}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" width="0.9em" height="0.9em">
              <path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" />
            </svg>
          </a>
          <ul className="mu-close-links">
            <li>
              <a
                href="https://www.linkedin.com/in/freddy-daniel-palencia-padr%C3%B3n-6ab690111/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mu-close-bottom">
        <span>© {new Date().getFullYear()} Freddy Palencia</span>
        <span>Santiago, Chile</span>
      </div>
    </footer>
  );
}
