import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetail() {

    const { id } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        async function fetchCharacter() {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await res.json();
            setCharacter(data);
        }
        fetchCharacter();
    }, [id]);

    if (!character) {
        return <h2>Caricamento personaggio...</h2>
    }

    return (
        <div className="character-detail">
            <img src={character.image} alt={character.name} />
            <div>
                <div className="character-content"><span>Nome:</span> <h2>{character.name}</h2></div>
                <div className="character-content">Stato: <h2>{character.status}</h2></div>
                <div className="character-content">Specie: <h2>{character.species}</h2></div>
                <div className="character-content">Genere: <h2>{character.gender}</h2></div>
            </div>
        </div>
    )
}