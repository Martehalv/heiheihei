import { Link } from "react-router-dom";
import "../styles/layout.scss";

export default function Layout({ children, signedIn, setSignedIn }) {
  const handleLogout = () => {
    sessionStorage.setItem("login", false);
    setSignedIn(false);
  };
  return (
    <>
      <header>
        <nav>
          <Link to="/" id="Logo">
            Connectis
          </Link>
          <ul>
            {signedIn ? (
              <>
                <li>Username</li>
                <li>
                  <button onClick={handleLogout}>Logg ut</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="Login">Login</Link>
                </li>
                <li>
                  <Link to="Signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      {children}
      <footer>Connectis 2025</footer>
    </>
  );
}
