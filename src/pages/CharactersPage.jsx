import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function CharactersPage() {
    const { characters } = useContext(GlobalContext);

    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const filteredCharacters = characters.filter((character) => {
        return character.name.toLowerCase().includes(searchTitle.toLowerCase());
    })

    if (!characters || characters.length === 0) {
        return <p>No characters found...</p>;
    }

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
            <ul>
                {currentCharacters.map((character) => (
                    <li key={character.id} className="card" onClick={() => navigate(`/characters/${character.id}`)}>
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