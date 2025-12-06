import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListarProductos from "./pages/ListarProductos";
import "./styles/global.css";
import ProductDetail from "./pages/ProductDetail";
import AuthUser from "./pages/AuthUser";
import CreateAccount from "./pages/CreateAccount";
import Carrito from "./pages/Carrito";
import Profile from "./pages/Profile";
import ProfileDirections from "./components/ProfileDirections";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListarProductos />,
  },
  { path: "/detail/:id", element: <ProductDetail /> },
  {
    path: "/iniciar-sesion",
    element: <AuthUser />,
  },
  {
    path: "/crear-cuenta",
    element: <CreateAccount />,
  },
  {
    path: "/cart",
    element: <Carrito />,
  },
  {
    path: "/perfil",
    element: <Profile />,
  },
  {
    path: "/perfil/mis-direcciones",
    element: <ProfileDirections />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
