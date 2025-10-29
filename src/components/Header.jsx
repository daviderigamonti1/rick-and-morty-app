import { NavLink } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <section className="jumbotron">
                <div className="jumbotron-image">
                    <img src="/jumbotron.png" alt="jumbotron" />
                </div>
                <a href="#navbar">
                    <img
                        src="/morty-static.png"
                        onMouseEnter={e => (e.currentTarget.src = '/morty-hover.gif')}
                        onMouseLeave={e => (e.currentTarget.src = '/morty-static.png')}
                        alt="morty" />
                </a>
            </section>
            <section id="navbar">
                <nav>
                    <NavLink to={"/"}><img src="/rick&morty-logo.jpg" alt="logo" /></NavLink>
                    <NavLink to={"/characters"} className="nav-link">Personaggi</NavLink>
                    <NavLink to={"/episodes"} className="nav-link">Episodi</NavLink>
                    <NavLink to={"/locations"} className="nav-link">Luoghi</NavLink>
                    <NavLink to={"/favorites"} className="nav-link">Preferiti</NavLink>
                </nav>
            </section>
        </header>
    )
}