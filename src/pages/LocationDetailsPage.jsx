import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function LocationDetailsPage() {

    const { id } = useParams();
    const [locationDetails, setLocationDetails] = useState();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchLocationDetails() {
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
                const data = await res.json();
                setLocationDetails(data);
                const characterResponses = data.residents.map((url) => fetch(url).then(res => res.json()));
                const charactersData = await Promise.all(characterResponses);
                setCharacters(charactersData);
            } catch (err) {
                console.error(err);
            }
        }
        fetchLocationDetails();
    }, [id]);

    if (!locationDetails) {
        return <h2>Caricamento luogo...</h2>
    }

    return (
        <>
            <h2>Dettagli {locationDetails.name}</h2>
            <div className="location-details">
                <p>Tipo: {locationDetails.type}</p>
                <p>Dimensione: {locationDetails.dimension}</p>
                <p>Residenti:</p>
                <ul>
                    {characters.map((c) => (
                        <li key={c.id} className="card" onClick={() => navigate(`/characters/${c.id}`)}>
                            <img src={c.image} alt={c.name} />
                            <p>{c.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}