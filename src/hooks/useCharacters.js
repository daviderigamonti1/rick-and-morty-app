import { useState, useEffect } from 'react';

export default function useCharacters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await fetch("https://rickandmortyapi.com/api/character");
                const data = await res.json();
                setCharacters(data.results);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchCharacters();
    }, []);
    return characters;
}
