import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { ArtistListPage } from "./pages/ArtistListPage";
import { ArtistFormPage } from "./pages/ArtistFormPage";
import { ViewArtistPage } from "./pages/ViewArtistPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ArtistListPage />} />
                <Route path="/add" element={<ArtistFormPage />} />
                <Route path="/edit/:id" element={<ArtistFormPage />} />
                <Route path="/view/:id" element={<ViewArtistPage />} />
            </Routes>
        </Router>
    );
};

export default App;
