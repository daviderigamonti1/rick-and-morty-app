import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import ItemCard from "../components/ItemCard";

export default function FavoritesPage() {
    const { favoriteCharacters, setFavoriteCharacters, favoriteEpisodes, setFavoriteEpisodes, favoriteLocations, setFavoriteLocations } = useContext(GlobalContext);

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
                        {favoriteCharacters.map((c) => (
                            <ItemCard
                                key={c.id}
                                item={c}
                                favoriteItems={favoriteCharacters}
                                setFavoriteItems={setFavoriteCharacters}
                                mediaType={"characters"}
                                favoriteView={true}
                            />
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
                                favoriteView={true}
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
                                favoriteView={true}
                            />
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}