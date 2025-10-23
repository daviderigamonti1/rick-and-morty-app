import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import ItemCard from "../components/ItemCard";

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
                                className="favorites-card"
                                onClick={() => navigate(`/characters/${character.id}`)}
                            >
                                <div className="favorites-character-image">
                                    <img src={character.image} alt={character.name} />
                                </div>
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
                            <ItemCard
                                key={e.id}
                                item={e}
                                favoriteItems={favoriteEpisodes}
                                setFavoriteItems={setFavoriteEpisodes}
                                mediaType={"episodes"}
                            />
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
                            <ItemCard
                                key={l.id}
                                item={l}
                                favoriteItems={favoriteLocations}
                                setFavoriteItems={setFavoriteLocations}
                                mediaType={"locations"}
                            />
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}