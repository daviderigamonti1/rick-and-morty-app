import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext.jsx";

import Homepage from "./pages/Homepage";
import CharactersPage from "./pages/CharactersPage";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;
