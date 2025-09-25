import GlobalProvider from "./context/GlobalContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Header from "./components/Header.jsx";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetail from "./pages/CharacterDetail.jsx";
import EpisodePage from "./pages/EpisodePage.jsx";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/characters"
            element={
              <>
                <Header />
                <CharactersPage />
              </>
            }
          />
          <Route
            path="/characters/:id"
            element={
              <>
                <Header />
                <CharacterDetail />
              </>
            }
          />
          <Route
            path="/episode"
            element={
              <>
                <Header />
                <EpisodePage />
              </>
            }
          />
          <Route
            path="/episode/:id"
            element={
              <>
                <Header />
                <EpisodeDetailsPage />
              </>
            }
          />
          <Route
            path="/locations"
            element={
              <>
                <Header />
                <LocationsPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;
