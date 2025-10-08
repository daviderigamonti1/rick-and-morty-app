import { createContext, useState } from 'react';

import useCharacters from '../hooks/useCharacters';
import useEpisodes from '../hooks/useEpisodes';
import useLocations from '../hooks/useLocations';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {

    const [favorites, setFavorites] = useState([]);

    const isFavorite = (character) => {
        return favorites.some(fav => fav.id === character.id);
    }

    const toggleFavorite = (character) => {
        if (isFavorite(character)) {
            setFavorites(favorites.filter(fav => fav.id !== character.id));
        } else {
            setFavorites([...favorites, character]);
        }
    }

    const { characters, charactersLoading } = useCharacters();
    const { episodes, episodesLoading } = useEpisodes();
    const { locations, locationsLoading } = useLocations();

    return (
        <GlobalContext.Provider value={{ characters, charactersLoading, episodes, episodesLoading, locations, locationsLoading, favorites, setFavorites, isFavorite, toggleFavorite }}>
            {children}
        </ GlobalContext.Provider>
    )
}