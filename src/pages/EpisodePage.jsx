import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import Loader from "../components/Loader.jsx";
import ItemCard from "../components/ItemCard.jsx";

export default function EpisodePage() {

    const { episodes, episodesLoading, favoriteEpisodes, setFavoriteEpisodes } = useContext(GlobalContext);
    const [season, setSeason] = useState("S01");

    const navigate = useNavigate();

    if (episodesLoading) {
        return <Loader />
    }

    if (!episodes || episodes.length === 0) {
        return <p>Oh no! Gli episodi sono evaporati nel vuoto cosmico!</p>
    }

    return (
        <div className="episode-page">
            <h2>Lista episodi</h2>

            <div className="episode-controls">
            <select
                id="season"
                onChange={(e) => setSeason(e.target.value)}
                value={season}
            >
                <option value="S01">Stagione 1</option>
                <option value="S02">Stagione 2</option>
                <option value="S03">Stagione 3</option>
                <option value="S04">Stagione 4</option>
                <option value="S05">Stagione 5</option>
            </select>
            <ul className="episode-list">
                {filteredEpisodes
                    .filter(e => e.episode.startsWith(season))
                    .map((e) => (
                        <ItemCard
                            key={e.id}
                            item={e}
                            favoriteItems={favoriteEpisodes}
                            setFavoriteItems={setFavoriteEpisodes}
                            mediaType={"episodes"}
                        />
                    ))
                }
            </ul>
            <button onClick={() => navigate("/timeline")}>
                Vedi timeline
            </button >
        </div>
    )
}