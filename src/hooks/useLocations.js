import { useState, useEffect } from "react";

export default function useLocations() {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        async function fetchLocations() {
            try {
                const firstRes = await fetch("https://rickandmortyapi.com/api/location");
                const firstData = await firstRes.json();
                const totalPages = firstData.info.pages;

                let promises = [];
                for (let i = 1; i <= totalPages; i++) {
                    promises.push(fetch(`https://rickandmortyapi.com/api/location?page=${i}`).then(res => res.json()));
                }
                const allData = await Promise.all(promises);
                const mergedData = allData.flatMap((data) => data.results);
                setLocations(mergedData);
            } catch (err) {
                console.error(err);
            }
        }
        fetchLocations();
    })
    return { locations };
}