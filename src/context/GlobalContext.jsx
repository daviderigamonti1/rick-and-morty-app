import { createContext, useState, useEffect } from 'react';

import useCharacters from '../hooks/useCharacters';
import useEpisodes from '../hooks/useEpisodes';
import useLocations from '../hooks/useLocations';

export const GlobalContext = createContext();

const savedCharacters = localStorage.getItem('favoriteCharacters');
const savedEpisodes = localStorage.getItem('favoriteEpisodes');
const savedLocations = localStorage.getItem('favoriteLocations');

export default function GlobalProvider({ children }) {

    const [favoriteCharacters, setFavoriteCharacters] = useState(savedCharacters ? JSON.parse(savedCharacters) : []);
    const [favoriteEpisodes, setFavoriteEpisodes] = useState(savedEpisodes ? JSON.parse(savedEpisodes) : []);
    const [favoriteLocations, setFavoriteLocations] = useState(savedLocations ? JSON.parse(savedLocations) : []);

    useEffect(() => {
        localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
    }, [favoriteCharacters]);

    useEffect(() => {
        localStorage.setItem('favoriteEpisodes', JSON.stringify(favoriteEpisodes));
    }, [favoriteEpisodes]);

    useEffect(() => {
        localStorage.setItem('favoriteLocations', JSON.stringify(favoriteLocations));
    }, [favoriteLocations]);

    const isFavorite = (item, favorites) => {
        return favorites.some(fav => fav.id === item.id);
    };

    const toggleFavorite = (item, favorites, setFavorites) => {
        if (isFavorite(item, favorites)) {
            setFavorites(favorites.filter(fav => fav.id !== item.id));
        } else {
            setFavorites([...favorites, item]);
        }
    }

    const { characters, charactersLoading } = useCharacters();
    const { episodes, episodesLoading } = useEpisodes();
    const { locations, locationsLoading } = useLocations();

    return (
        <GlobalContext.Provider value={{ characters, charactersLoading, favoriteCharacters, setFavoriteCharacters, episodes, episodesLoading, favoriteEpisodes, setFavoriteEpisodes, locations, locationsLoading, favoriteLocations, setFavoriteLocations, isFavorite, toggleFavorite }}>
            {children}
        </ GlobalContext.Provider>
    )
}