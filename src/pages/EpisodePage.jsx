import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import Loader from "../components/Loader.jsx";

import { FaStar, FaRegStar } from "react-icons/fa";

export default function EpisodePage() {

    const { episodes, episodesLoading, favoriteEpisodes, setFavoriteEpisodes, isFavorite, toggleFavorite } = useContext(GlobalContext);
    const [season, setSeason] = useState("S01");

    const navigate = useNavigate();

    if (episodesLoading) {
        return <Loader />
    }

    if (!episodes || episodes.length === 0) {
        return <p>No episodes found...</p>
    }

    return (
        <>
            <h1>Lista episodi</h1>
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
                {episodes
                    .filter(e => e.episode.startsWith(season))
                    .map((e) => (
                        < li key={e.id} >
                            <h3>{e.episode}</h3>
                            <p>{e.name}</p>
                            <button onClick={() => navigate(`/episode/${e.id}`)}>Vedi dettagli</button>
                            <button onClick={() => toggleFavorite(e, favoriteEpisodes, setFavoriteEpisodes)}>
                                {isFavorite(e, favoriteEpisodes) ? <FaStar color="gold" /> : <FaRegStar />}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => navigate("/timeline")}>
                Vedi timeline
            </button >
        </>
    )
}