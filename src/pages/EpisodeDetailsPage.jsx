import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

export default function EpisodeDetailsPage() {

    const { id } = useParams();
    const [episodeDetails, setEpisodeDetails] = useState();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchEpisodeDetails() {
            try {
                setLoading(true);
                const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
                const data = await res.json();
                setEpisodeDetails(data);
                const characterResponses = data.characters.map((url) => fetch(url).then(res => res.json()));
                const charactersData = await Promise.all(characterResponses);
                setCharacters(charactersData);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchEpisodeDetails();
    }, [id]);

    if (loading) {
        return <Loader />
    }

    if (!episodeDetails) {
        return <h2>Morty... questo episodio è sparito in un altro universo!</h2>
    }

    return (
        <>
            <h2>{episodeDetails.episode} — {episodeDetails.name}</h2>
            <div className="episode-details">
                <div className="episode-image">
                    <img src={`/episodes/${id}.webp`} alt={episodeDetails.name} />
                </div>
                <p>Nome: {episodeDetails.name}</p>
                <p>Uscita: {episodeDetails.air_date}</p>
                <p>Personaggi presenti:</p>
                <ul>
                    {characters.map((c) => (
                        <CharacterCard
                            key={c.id}
                            character={c}
                        />
                    ))}
                </ul>
                <BackButton />
            </div>
        </>
    )
}