import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to={"/"}><img src="/rick&morty-logo.jpg" alt="logo" /></NavLink>
                <NavLink to={"/characters"} className="nav-link">Personaggi</NavLink>
                <NavLink to={"/episodes"} className="nav-link">Episodi</NavLink>
                <NavLink to={"/locations"} className="nav-link">Luoghi</NavLink>
                <NavLink to={"/favorites"} className="nav-link">Preferiti</NavLink>
            </nav>
        </header>
    )
}