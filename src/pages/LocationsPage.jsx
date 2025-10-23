import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

import Loader from "../components/Loader.jsx";
import Pagination from "../components/Pagination.jsx";
import ItemCard from "../components/ItemCard.jsx";

export default function LocationsPage() {
    const { locations, locationsLoading, favoriteLocations, setFavoriteLocations } = useContext(GlobalContext);

    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);

    const filteredLocations = locations.filter((location) => {
        return location.name.toLowerCase().includes(searchTitle.toLowerCase())
    })

    if (locationsLoading) {
        return <Loader />
    }

    if (!locations || locations.length === 0) {
        return <p>Morty... non ci sono luoghi qui, forse sono finiti in un altro dimensione!</p>
    }

    const itemsPerPage = 20;
    const startIndex = (page - 1) * itemsPerPage;
    const currentLocations = filteredLocations.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <div className="locations-page">
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
                    <ItemCard
                        key={l.id}
                        item={l}
                        favoriteItems={favoriteLocations}
                        setFavoriteItems={setFavoriteLocations}
                        mediaType={"locations"}
                    />
                ))}
            </ul>
            <Pagination
                filteredItems={filteredLocations}
                page={page}
                setPage={setPage}
            />
        </div>
    )
}