import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import Loader from "../components/Loader.jsx";

export default function LocationsPage() {
    const { locations, locationsLoading } = useContext(GlobalContext);

    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const filteredLocations = locations.filter((location) => {
        return location.name.toLowerCase().includes(searchTitle.toLowerCase())
    })

    if (locationsLoading) {
        return <Loader />
    }

    if (!locations || locations.length === 0) {
        return <p>Nessun luogo trovato</p>
    }

    const itemsPerPage = 20;
    const startIndex = (page - 1) * itemsPerPage;
    const currentLocations = filteredLocations.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <>
            <h2>Lista dei luoghi</h2>
            <input
                type="text"
                placeholder="Cerca un luogo..."
                onChange={e => {
                    setSearchTitle(e.target.value)
                    setPage(1)
                }}
            />
            <ul className="locations-list">
                {currentLocations.map((l) => (
                    <li key={l.id}>
                        <p>{l.name}</p>
                        <button onClick={() => navigate(`/locations/${l.id}`)}>Vedi dettagli</button>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    ◀️ Pagina precedente
                </button>
                <span>
                    Pagina {page} di {Math.ceil(filteredLocations.length / itemsPerPage)}
                </span>
                <button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(filteredLocations.length / itemsPerPage)}>
                    Pagina successiva ▶️
                </button>
            </div>
        </>
    )
}