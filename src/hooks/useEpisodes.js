import { useState, useEffect } from 'react';

export default function useEpisodes() {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const firstRes = await fetch(`https://rickandmortyapi.com/api/episode`);
                const firstData = await firstRes.json();
                const totalPages = firstData.info.pages;

                let promises = [];
                for (let i = 1; i <= totalPages; i++) {
                    promises.push(fetch(`https://rickandmortyapi.com/api/episode?page=${i}`).then(res => res.json()));
                }
                const allData = await Promise.all(promises);
                const mergedData = allData.flatMap((data) => data.results);
                setEpisodes(mergedData);
            } catch (err) {
                console.error(err);
            }
        }
        fetchEpisodes();
    }, []);

    return { episodes };
}