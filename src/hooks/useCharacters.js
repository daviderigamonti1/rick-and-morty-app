import { useState, useEffect } from 'react';

export default function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const [charactersLoading, setCharactersLoading] = useState(true);

    useEffect(() => {
        const fetchAllCharacters = async () => {
            try {
                setCharactersLoading(true);
                const firstRes = await fetch(`https://rickandmortyapi.com/api/character`);
                const firstData = await firstRes.json();
                const totalPages = firstData.info.pages;

                let promises = [];
                for (let i = 1; i <= totalPages; i++) {
                    promises.push(fetch(`https://rickandmortyapi.com/api/character?page=${i}`).then(res => res.json()));
                }

                const allData = await Promise.all(promises);
                const mergedData = allData.flatMap((data) => data.results);
                setCharacters(mergedData);
            } catch (err) {
                console.error(err);
            } finally {
                setCharactersLoading(false);
            }
        }
        fetchAllCharacters();
    }, []);

    return { characters, charactersLoading };
}
