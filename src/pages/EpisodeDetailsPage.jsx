import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EpisodeDetailsPage() {

    const { id } = useParams();
    const [episode, setEpisode] = useState();
    const [characters, setCharacters] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchEpisodeDetails() {
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
                const data = await res.json();
                setEpisode(data);
                const characterResponses = data.characters.map((url) => fetch(url).then(res => res.json()));
                const charactersData = await Promise.all(characterResponses);
                setCharacters(charactersData);
            } catch (err) {
                console.error(err);
            }
        }
        fetchEpisodeDetails();
    }, [id]);

    if (!episode) {
        return <h2>Caricamento episodio...</h2>
    }

    return (
        <>
            <h2>Dettagli episodio</h2>
            <div className="episode-details">
                <p>Nome: {episode.name}</p>
                <p>Data uscita: {episode.air_date}</p>
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