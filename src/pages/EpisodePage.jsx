import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import Loader from "../components/Loader.jsx";

export default function EpisodePage() {

    const { episodes, episodesLoading } = useContext(GlobalContext);
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
                <option value="1">Stagione 1</option>
                <option value="2">Stagione 2</option>
            </select>
            <ul className="episode-list">
                {season === "1"
                    ? (
                        episodes
                            .filter(episode => episode.episode.startsWith("S01"))
                            .map((e) => (
                                < li key={e.id} >
                                    <h3>{e.episode}</h3>
                                    <p>{e.name}</p>
                                    <button onClick={() => navigate(`/episode/${e.id}`)}>Vedi dettagli</button>
                                </li>
                            ))
                    )
                    : (
                        episodes
                            .filter(e => e.episode.startsWith("S02"))
                            .map((e) => (
                                < li key={e.id} >
                                    <h3>{e.episode}</h3>
                                    <p>{e.name}</p>
                                    <button onClick={() => navigate(`/episode/${e.id}`)}>Vedi dettagli</button>
                                </li>
                            ))
                    )
                }
            </ul>
        </>
    )
}