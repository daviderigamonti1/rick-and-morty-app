import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { FaStar, FaRegStar } from "react-icons/fa";

export default function FavoritesPage() {
    const { favoriteCharacters, setFavoriteCharacters, favoriteEpisodes, setFavoriteEpisodes, favoriteLocations, setFavoriteLocations, isFavorite, toggleFavorite } = useContext(GlobalContext);

    const navigate = useNavigate();

    if (favoriteCharacters.length === 0 && favoriteEpisodes.length === 0 && favoriteLocations.length === 0) {
        return <p>Nessun preferito per ora... Morty, trova qualcosa che ti piaccia!</p>
    }

    return (
        <div className="favorites-page">

            {/* PERSONAGGI */}
            <section className="favorites-section">
            <h1>Personaggi preferiti</h1>
                {favoriteCharacters.length === 0 ? <p>Morty… non hai ancora salvato personaggi, sembra che siano fuggiti nel multiverso!</p> : (
                    <ul className="favorites-character-list">
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
                )}
            </section>

            {/* EPISODI */}
            <section className="favorites-section">
            <h1>Episodi preferiti</h1>
                {favoriteEpisodes.length === 0 ? <p>Whoa, Morty… sembra che non ci siano episodi salvati nel tuo multiverso personale!</p> : (
                    <ul className="favorites-episode-list">
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
                )}
            </section>

            {/* LUOGHI */}
            <section className="favorites-section">
            <h1>Luoghi preferiti</h1>
                {favoriteLocations.length === 0 ? <p>Morty, sembra che il tuo multiverso non abbia ancora posti preferiti… tutto deserto!</p> : (
                    <ul className="favorites-location-list">
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
                )}
            </section>
        </div>
    )
}