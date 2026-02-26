import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <section className="left">
                <a
                    href="https://github.com/JexxyPL"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        className="portl"
                        src="https://avatars.githubusercontent.com/u/164803938"
                        alt="JexxyPL avatar"
                    />
                </a>
                <h1 id="nickname">JexxyPL</h1>
            </section>
            <section className="right">
                <nav translate="no" lang="zxx">
                    <NavLink
                        className={({ isActive }) =>
                            `nag${isActive ? " aktywny" : ""}`
                        }
                        to="/">
                        About Me
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `nag${isActive ? " aktywny" : ""}`
                        }
                        to="/projects">
                        Projects
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `nag${isActive ? " aktywny" : ""}`
                        }
                        to="/skills">
                        Skills
                    </NavLink>
                </nav>
            </section>
        </header>
    );
}

export default Header;
