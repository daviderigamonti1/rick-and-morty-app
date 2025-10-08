import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { FaStar, FaRegStar } from "react-icons/fa";

export default function favoritesPage() {
    const { favorites, isFavorite, toggleFavorite } = useContext(GlobalContext);

    if (favorites.length === 0) {
        return <p>Nessun personaggio preferito...</p>
    }

    return (
        <ul>
            {favorites.map((character) => (
                <li
                    key={character.id}
                    className="card"
                    onClick={() => navigate(`/characters/${character.id}`)}
                >
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(character);
                    }}>
                        {isFavorite(character) ? <FaStar color="gold" /> : <FaRegStar />}
                    </button>
                </li>
            ))}
        </ul>
    )
}