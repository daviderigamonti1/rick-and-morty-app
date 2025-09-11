import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to={"/characters"} className="nav-link">Personaggi</NavLink>
            </nav>
        </header>
    )
}