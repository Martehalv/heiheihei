export default function Layout() {
    return (
        <header>
            <nav>
                <Link to="/" id="logo"></Link>
                <ul>
                    <li>
                        <Link to="login"></Link>
                    </li>
                    <li>
                        <Link to="signup"></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}