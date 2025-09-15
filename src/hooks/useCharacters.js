import { useState, useEffect } from 'react';

export default function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
                const data = await res.json();
                setCharacters(data.results);
                setInfo(data.info);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchCharacters();
    }, [page]);

    return {
        characters,
        info,
        page,
        nextPage: () => { setPage((p) => p + 1) },
        prevPage: () => { setPage((p) => p - 1) }
    };
}
