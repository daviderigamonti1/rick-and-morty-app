import { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function CharactersPage() {
    const { characters } = useContext(GlobalContext);

    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");

    const navigate = useNavigate();

    if (!characters || characters.length === 0) {
        return <p>No characters found...</p>;
    }

    const uniqueSpecies = characters.reduce((acc, character) => {
        if (!acc.includes(character.species)) {
            acc.push(character.species);
        }
        return acc;
    }, []);

    const filteredByStatus = status
        ? characters.filter(c => c.status === status)
        : characters;

    const filteredBySpecies = species
        ? filteredByStatus.filter(c => c.species === species)
        : filteredByStatus;

    const filteredCharacters = searchTitle
        ? filteredBySpecies.filter((c) =>
            c.name.toLowerCase().includes(searchTitle.toLowerCase())
        )
        : filteredBySpecies;

    const itemsPerPage = 20;
    const startIndex = (page - 1) * itemsPerPage;
    const currentCharacters = filteredCharacters.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <>
            <input
                type="text"
                placeholder="Cerca un personaggio..."
                onChange={(e) => {
                    setSearchTitle(e.target.value)
                    setPage(1);
                }}
            />
            <select
                id="status"
                onChange={(e) => {
                    setStatus(e.target.value)
                    setPage(1);
                }}
                value={status}
            >
                <option value="">--Seleziona--</option>
                <option value="Alive">Vivi</option>
                <option value="Dead">Morti</option>
                <option value="unknown">Sconosciuti</option>
            </select>
            <select
                id="species"
                onChange={(e) => {
                    setSpecies(e.target.value)
                    setPage(1);
                }}
                value={species}
            >
                <option value="">--Seleziona--</option>
                {uniqueSpecies.map((specie) => (
                    <option key={specie} value={specie}>
                        {specie}
                    </option>
                ))}
            </select>
            <ul>
                {currentCharacters.map((character) => (
                    <li
                        key={character.id}
                        className="card"
                        onClick={() => navigate(`/characters/${character.id}`)}
                    >
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                    </li>
                ))}
            </ul>

            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    ◀️ Pagina precedente
                </button>
                <span>
                    Pagina {page} di {Math.ceil(filteredCharacters.length / itemsPerPage)}
                </span>
                <button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(filteredCharacters.length / itemsPerPage)}>
                    Pagina successiva ▶️
                </button>
            </div>
        </>
    )
}