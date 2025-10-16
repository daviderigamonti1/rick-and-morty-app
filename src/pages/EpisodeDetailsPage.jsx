import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../components/Loader";

export default function EpisodeDetailsPage() {

    const { id } = useParams();
    const [episode, setEpisode] = useState();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchEpisodeDetails() {
            try {
                setLoading(true);
                const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
                const data = await res.json();
                setEpisode(data);
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
        return <h2>Caricamento episodio...</h2>
    }

    return (
        <>
            <h2>Dettagli episodio</h2>
            <div className="episode-details">
                <div className="episode-image">
                    <img src={`/episodes/${id}.webp`} alt={episodeDetails.name} />
                </div>
                <p>Nome: {episodeDetails.name}</p>
                <p>Data uscita: {episodeDetails.air_date}</p>
                <p>Personaggi:</p>
                <ul>
                    {characters.map((c) => (
                        <li key={c.id} className="card">
                            <img src={c.image} alt={c.name} />
                            <p>{c.name}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={() => navigate(-1)}>Torna indietro</button>
            </div>
        </>
    )
}