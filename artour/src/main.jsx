import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./site/pages/HomePage.jsx";
import LoginPage from "./site/pages/LoginPage.jsx";
import SearchPage from "./site/pages/SearchPage.jsx";
import ErrorPage from "./site/pages/ErrorPage.jsx";
import EstablishmentPage from "./site/pages/EstablishmentPage.jsx";
import PainelPage from "./painel/pages/PainelPage.jsx";
import UserListPage from "./painel/pages/UserListPage.jsx";
import UserRegisterPage from "./painel/pages/UserRegisterPage.jsx";
import UserEditPage from "./painel/pages/UserEditPage.jsx";
import UserViewPage from "./painel/pages/UserViewPage.jsx";

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
      {
        path: "/painel",
        element: <PainelPage />
      },
      {
        path: "/painel/usuario",
        element: <UserListPage />
      },
      // Rota dinâmica
      {
        path: "/estabelecimento/:id",
        element: <EstablishmentPage/>
      },
      {
        path: "/painel/usuario/cadastro",
        element: <UserRegisterPage />
      },
      {
        path: "/painel/usuario/:id/editar",
        element: <UserEditPage />
      },
      {
        path: "/painel/usuario/:id/visualizar",
        element: <UserViewPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
