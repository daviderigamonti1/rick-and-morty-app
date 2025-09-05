import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CharactersPage from "./pages/CharactersPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </BrowserRouter>)
}

export default App;
