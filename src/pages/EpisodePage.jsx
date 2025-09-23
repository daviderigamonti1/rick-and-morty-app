import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function EpisodePage() {

    const { episodes, info } = useContext(GlobalContext);
    const [season, setSeason] = useState("1");


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
                                </li>
                            ))
                    )
                }
            </ul>
        </>
    )
}