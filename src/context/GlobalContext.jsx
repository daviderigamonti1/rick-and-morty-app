import { createContext } from 'react';

import useCharacters from '../hooks/useCharacters';
import useEpisodes from '../hooks/useEpisodes';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const { characters } = useCharacters();
    const { episodes, episodesInfo } = useEpisodes()

    return (
        <GlobalContext.Provider value={{ characters, episodes, episodesInfo }}>
            {children}
        </ GlobalContext.Provider>
    )
}