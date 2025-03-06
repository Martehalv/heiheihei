import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link to="/" id="Logo">
            Connectis
          </Link>
          <ul>
            <li>
              <Link to="Login">Login</Link>
            </li>
            <li>
              <Link to="Signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer>Connectis 2025</footer>
    </>
  );
}
