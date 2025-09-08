import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function CharactersPage() {
    const { characters } = useContext(GlobalContext);

    if (!characters || characters.length === 0) {
        return <p>No characters found...</p>;
    }

    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id} className="card">{character.name}</li>
            ))}
        </ul>
    )
}