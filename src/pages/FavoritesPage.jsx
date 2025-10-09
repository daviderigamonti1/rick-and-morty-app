import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { FaStar, FaRegStar } from "react-icons/fa";

export default function favoritesPage() {
    const { favoriteCharacters, setFavoriteCharacters, favoriteEpisodes, setFavoriteEpisodes, favoriteLocations, setFavoriteLocations, isFavorite, toggleFavorite } = useContext(GlobalContext);

    if (favoriteCharacters.length === 0) {
        return <p>Nessun personaggio preferito...</p>
    }

    return (
        <>
            {/* PERSONAGGI */}
            <h1>Personaggi preferiti</h1>
            <ul>
                {favoriteCharacters.map((character) => (
                    <li
                        key={character.id}
                        className="card"
                        onClick={() => navigate(`/characters/${character.id}`)}
                    >
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(character, favoriteCharacters, setFavoriteCharacters);
                        }}>
                            {isFavorite(character, favoriteCharacters) ? <FaStar color="gold" /> : <FaRegStar />}
                        </button>
                    </li>
                ))}
            </ul>

            {/* EPISODI */}
            <h1>Episodi preferiti</h1>
            <ul className="episode-list">
                {favoriteEpisodes.map((e) => (
                    < li key={e.id} >
                        <h3>{e.episode}</h3>
                        <p>{e.name}</p>
                        <button onClick={() => navigate(`/episode/${e.id}`)}>Vedi dettagli</button>
                        <button onClick={() => toggleFavorite(e, favoriteEpisodes, setFavoriteEpisodes)}>
                            {isFavorite(e, favoriteEpisodes) ? <FaStar color="gold" /> : <FaRegStar />}
                        </button>
                    </li>
                ))}
            </ul>

            {/* LUOGHI */}
            <h1>Luoghi preferiti</h1>
            <ul className="locations-list">
                {favoriteLocations.map((l) => (
                    <li key={l.id}>
                        <p>{l.name}</p>
                        <button onClick={() => navigate(`/locations/${l.id}`)}>Vedi dettagli</button>
                        <button onClick={() => toggleFavorite(l, favoriteLocations, setFavoriteLocations)}>
                            {isFavorite(l, favoriteLocations) ? <FaStar color="gold" /> : <FaRegStar />}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}