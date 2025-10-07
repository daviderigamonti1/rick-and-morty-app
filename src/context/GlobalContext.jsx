import { createContext } from 'react';

import useCharacters from '../hooks/useCharacters';
import useEpisodes from '../hooks/useEpisodes';
import useLocations from '../hooks/useLocations';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const { characters, charactersLoading } = useCharacters();
    const { episodes, episodesLoading } = useEpisodes();
    const { locations, locationsLoading } = useLocations();

    return (
        <GlobalContext.Provider value={{ characters, charactersLoading, episodes, episodesLoading, locations, locationsLoading }}>
            {children}
        </ GlobalContext.Provider>
    )
}