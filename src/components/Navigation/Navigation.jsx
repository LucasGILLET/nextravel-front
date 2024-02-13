export default function Navigation() {
    return (
      <header>
        <nav>
          <ol>
            <li>
              <a style={{ color: "red"}} href="/">Home</a>
            </li>
            <li>
              <a href="/details" style={{ color: "red"}}>Détails non fonctionnel</a>
            </li>
            <li>
              <a href="/details/1" style={{ color: "red"}}>Détails fonctionnel</a>
            </li>
            <li>
              <a href="/mentionslegales" style={{ color: "red"}}>Mentions Légales</a>
            </li>
            <li>
              <a href="/login" style={{ color: "red"}}>Se déconnecter</a>
            </li>
          </ol>
        </nav>
      </header>
    );
  }