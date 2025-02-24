import '../styles/style.css';

export const Navbar = () => {
    return(
    <nav className="navbar">
        <div className="container">
            <a href="/" className="logo">Logo</a>
            <ul className="nav-links">
                <li><a href="/">About</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
};