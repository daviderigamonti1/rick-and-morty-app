import { createContext } from 'react';

import useCharacters from '../hooks/useCharacters';
import useEpisodes from '../hooks/useEpisodes';
import useLocations from '../hooks/useLocations';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const { characters } = useCharacters();
    const { episodes } = useEpisodes();
    const { locations } = useLocations();

    return (
        <GlobalContext.Provider value={{ characters, episodes, locations }}>
            {children}
        </ GlobalContext.Provider>
    )
}