import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import './index.css';
import CharactersPage from './routes/characters_page';
import FilmsPage from './routes/films_page';
import PlanetsPage from './routes/planets_page';
import StarshipsPage from './routes/starships_page';

const router = createBrowserRouter([
  { path: "/films", element: <FilmsPage /> },
  { path: "/planets", element: <PlanetsPage /> },
  { path: "/characters", element: <CharactersPage /> },
  { path: "/starships", element: <StarshipsPage /> },
  { path: "/", element: <FilmsPage /> },
]);

ReactDOM.createRoot(document.getElementById("main-content")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
