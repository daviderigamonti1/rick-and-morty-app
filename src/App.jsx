import GlobalProvider from "./context/GlobalContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout.jsx";

import Homepage from "./pages/Homepage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage.jsx";
import EpisodePage from "./pages/EpisodePage.jsx";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import LocationDetailsPage from "./pages/LocationDetailsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import EpisodeTimelinePage from "./pages/EpisodeTimelinePage.jsx";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route element={<Layout />}>
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:id" element={<CharacterDetailsPage />} />
            <Route path="/episode" element={<EpisodePage />} />
            <Route path="/episode/:id" element={<EpisodeDetailsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:id" element={<LocationDetailsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/timeline" element={<EpisodeTimelinePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;