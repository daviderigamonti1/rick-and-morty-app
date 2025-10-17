import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

export default function CharacterDetailsPage() {

    const { id } = useParams();
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCharacter() {
            try {
                setLoading(true);
                const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await res.json();
                setCharacter(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchCharacter();
    }, [id]);

    if (loading) {
        return <Loader />
    }

    if (!character) {
        return <h2>Caricamento personaggio...</h2>
    }

    return (
        <div className="character-detail">
            <div>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p className="character-content">🧬 Specie: <strong>{character.species}</strong></p>
                <p className="character-content">⚖️ Stato: <strong>{character.status}</strong></p>
                <p className="character-content">🚻 Genere: <strong>{character.gender}</strong></p>
                <p className="character-content">Origine: <strong>{character.origin.name}</strong></p>
                <p className="character-content">Ultima posizione conosciuta: <strong>{character.location.name}</strong></p>
            </div>
            <BackButton />
        </div>
    )
}