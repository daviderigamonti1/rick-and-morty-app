import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function LocationsPage() {
    const { locations } = useContext(GlobalContext);

    if (!locations || locations.length === 0) {
        return <p>Nessun luogo trovato</p>
    }

    return (
        <>
            <h2>Lista dei luoghi</h2>
            <ul className="locations-list">
                {locations.map((l) => (
                    <li key={l.id}>
                        <p>{l.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}