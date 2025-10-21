import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";

export default function LocationDetailsPage() {

    const { id } = useParams();
    const [locationDetails, setLocationDetails] = useState();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLocationDetails() {
            try {
                setLoading(true);
                const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
                const data = await res.json();
                setLocationDetails(data);
                const characterResponses = data.residents.map((url) => fetch(url).then(res => res.json()));
                const charactersData = await Promise.all(characterResponses);
                setCharacters(charactersData);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchLocationDetails();
    }, [id]);

    if (loading) {
        return <Loader />
    }

    if (!locationDetails) {
        return <h2>Morty, sembra che Rick abbia cancellato questo posto… ops!</h2>
    }

    return (
        <>
            <h2>{locationDetails.name} <span>({locationDetails.type})</span></h2>
            <div className="location-details">
                <p>Tipo: {locationDetails.type}</p>
                <p>Dimensione: {locationDetails.dimension}</p>
                <p>Residenti:</p>
                {characters.length === 0 ? (
                    <p>Questa location è deserta... forse Rick l'ha distrutta</p>
                ) : (<ul>
                    {characters.map((c) => (
                        <li key={c.id} className="card" onClick={() => navigate(`/characters/${c.id}`)}>
                            <img src={c.image} alt={c.name} />
                            <p>{c.name}</p>
                        </li>
                    ))}
                </ul>
                <BackButton />
            </div>
        </>
    )
}