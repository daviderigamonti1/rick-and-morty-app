import { createContext, useState } from 'react';

import useCharacters from '../hooks/useCharacters';
import useEpisodes from '../hooks/useEpisodes';
import useLocations from '../hooks/useLocations';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {

    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
    const [favoriteLocations, setFavoriteLocations] = useState([]);

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