import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
const [activeLink, setActiveLink] = useState("/");

const handleSetActiveLink = (to) => {
    setActiveLink(to);
};

return (
    <nav className="#212121 grey darken-4">
        <div className="container">
            <div className="nav-wrapper">
                <a className="brand-logo">Meals Band</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link
                            to="/"
                            className={activeLink === "/" ? "active" : ""}
                            onClick={() => handleSetActiveLink("/")}
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={activeLink === "/contact" ? "active" : ""}
                            onClick={() => handleSetActiveLink("/contact")}
                        >
                        Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={activeLink === "/about" ? "active" : ""}
                            onClick={() => handleSetActiveLink("/about")}
                        >
                        About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export { Header };