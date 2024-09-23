import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu.jsx";
import Order from "../Pages/Order/Order.jsx";
import Loing from "../Pages/Login/Loing.jsx";
import Register from "../Pages/Register/Register.jsx";
import PrivateRoute from "./PrivetRouter/PrivateRoute.jsx";
import GetUser from "../Pages/Shared/GetUser/GetUser.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import Cart from "../Pages/DashBoard/Cart.jsx/Cart.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Loing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <GetUser></GetUser>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
