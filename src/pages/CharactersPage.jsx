import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function CharactersPage() {
    const { characters } = useContext(GlobalContext);

    const [searchTitle, setSearchTitle] = useState("");

    const navigate = useNavigate();

    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(searchTitle.toLowerCase());
    })

    if (!characters || characters.length === 0) {
        return <p>No characters found...</p>;
    }

    return (
        <>
            <input
                type="text"
                placeholder="Cerca un personaggio..."
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <ul>
                {filteredCharacters.map((character) => (
                    <li key={character.id} className="card" onClick={() => navigate(`/characters/${character.id}`)}>
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                    </li>
                ))}
            </ul>
        </>
    )
}