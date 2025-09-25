import { useState, useEffect } from "react";

export default function useLocations() {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        async function fetchLocations() {
            try {
                const res = await fetch("https://rickandmortyapi.com/api/location");
                const data = await res.json();
                setLocations(data.results);
            } catch (err) {
                console.error(err);
            }
        }
        fetchLocations();
    })
    return { locations };
}