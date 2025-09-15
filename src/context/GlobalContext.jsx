import { createContext } from 'react';

import useCharacters from '../hooks/useCharacters';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const { characters, info, page, nextPage, prevPage } = useCharacters();
    return (
        <GlobalContext.Provider value={{ characters, info, page, nextPage, prevPage }}>
            {children}
        </ GlobalContext.Provider>
    )
}