import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./site/pages/HomePage.jsx";
import LoginPage from "./site/pages/LoginPage.jsx";
import SearchPage from "./site/pages/SearchPage.jsx";
import ErrorPage from "./site/pages/ErrorPage.jsx";
import EstablishmentPage from "./site/pages/EstablishmentPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/pesquisa",
        element: <SearchPage />
      },
      // Rota dinâmica
      {
        path: "estabelecimento/:id",
        element: <EstablishmentPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
