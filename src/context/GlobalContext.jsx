import { createContext } from 'react';

import useCharacters from '../hooks/useCharacters';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const { characters } = useCharacters();

    return (
        <GlobalContext.Provider value={{ characters }}>
            {children}
        </ GlobalContext.Provider>
    )
}