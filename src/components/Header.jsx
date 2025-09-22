import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to={"/characters"} className="nav-link">Personaggi</NavLink>
                <NavLink to={"/episode"} className="nav-link">Episodi</NavLink>
            </nav>
        </header>
    )
}