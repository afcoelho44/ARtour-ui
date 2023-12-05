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
import UserListPage from "./painel/pages/user/UserListPage.jsx";
import UserRegisterPage from "./painel/pages/user/UserRegisterPage.jsx";
import UserEditPage from "./painel/pages/user/UserEditPage.jsx";
import UserViewPage from "./painel/pages/user/UserViewPage.jsx";
import EstablishmentRegister from "./painel/pages/establishments/EstablishmentRegister.jsx";
import CurationListPage from "./painel/pages/curation/CurationListPage.jsx";
import CurationViewPage from "./painel/pages/curation/CurationViewPage.jsx";
import CurationAnalyzePage from "./painel/pages/curation/CurationAnalyzePage.jsx";
import CreateCategoriaPage from "./painel/pages/categories/CreateCategoriaPage.jsx";
import ListCategoryPage from "./painel/pages/categories/ListCategoryPage.jsx";
import CategoryEditPage from "./painel/pages/categories/CategoryEditPage.jsx";
import CategoryViewPage from "./painel/pages/categories/CategoryViewPage.jsx";
import EstablishmentListPage from "./painel/pages/establishments/EstablishmentListPage.jsx";
import EstablishmentViewPage from "./painel/pages/establishments/EstablishmentViewPage.jsx";
import EstablishmentEditPage from "./painel/pages/establishments/EstablishmentEditPage.jsx";


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
        element: <SearchPage />,
      },
      {
        path: "/painel",
        element: <PainelPage />,
      },
      {
        path: "/painel/usuario",
        element: <UserListPage />,
      },
      // Rota dinâmica
      {
        path: "/estabelecimento/:id",
        element: <EstablishmentPage />,
      },
      {
        path: "/painel/usuario/cadastro",
        element: <UserRegisterPage />,
      },
      {
        path: "/painel/usuario/:id/editar",
        element: <UserEditPage />,
      },
      {
        path: "/painel/usuario/:id/visualizar",
        element: <UserViewPage />,
      },
      {
        path: "/painel/estabelecimento/criar",
        element: <EstablishmentRegister />,
      },
      {
        path: "/painel/estabelecimento/:id/editar",
        element: <EstablishmentEditPage />,
      },
      {
        path: "/painel/estabelecimento/:id/visualizar",
        element: <EstablishmentViewPage />,
      },
      {
        path: "/painel/estabelecimento/todos",
        element: <EstablishmentListPage />,
      },
      {
        path: "/painel/curadoria",
        element: <CurationListPage />,
      },
      {
        path: "/painel/curadoria/:id/visualizar",
        element: <CurationViewPage />,
      },
      {
        path: "/painel/curadoria/:id/analise",
        element: <CurationAnalyzePage />,
      },
      {
        path: "/painel/categoria/criar",
        element: <CreateCategoriaPage/>,
      },
      {
        path: "/painel/categoria/:id/editar",
        element: <CategoryEditPage />,
      },
      {
        path: "/painel/categoria/:id/visualizar",
        element: <CategoryViewPage />,
      },
      {
        path: "/painel/categoria/",
        element: <ListCategoryPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
