import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function EpisodePage() {

    const { episodes, info } = useContext(GlobalContext);

    if (!episodes || episodes.length === 0) {
        return <p>No episodes found...</p>
    }

    return (
        <>
            <h1>Lista episodi</h1>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.id}>
                        <h3>{episode.episode} - {episode.name}</h3>
                    </li>
                ))}
            </ul>
        </>
    )
}