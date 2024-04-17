import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FavouritesPages } from "./pages/FavouritesPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPages />} />
        <Route path="/*" element={<h1>No page</h1>} />
      </Routes>
    </>
  );
}

export default App;
