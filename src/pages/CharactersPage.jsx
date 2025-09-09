import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function CharactersPage() {
    const { characters } = useContext(GlobalContext);

    const navigate = useNavigate();

    if (!characters || characters.length === 0) {
        return <p>No characters found...</p>;
    }

    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id} className="card" onClick={() => navigate(`/characters/${character.id}`)}>
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                </li>
            ))}
        </ul>
    )
}