import { useState, useEffect } from 'react';

export default function useEpisodes() {

    const [episodes, setEpisodes] = useState([]);
    const [episodesInfo, setEpisodesInfo] = useState({});

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/episode`);
                const data = await res.json();
                setEpisodes(data.results);
                setEpisodesInfo(data.info);
            } catch (err) {
                console.error(err);
            }
        }
        fetchEpisodes();
    }, []);

    return { episodes, episodesInfo };
}