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
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers.jsx";
import AdminRoute from "./AdminRoute/AdminRoute.jsx";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome.jsx";
import AddItems from "../Pages/DashBoard/AddItems/AddItems.jsx";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems.jsx";
import ManageBookins from "../Pages/DashBoard/ManageBookings/ManageBookins.jsx";
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
      // all admin route
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <AdminRoute>
            <ManageBookins />
          </AdminRoute>
        ),
      },
      {},
      // all users
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
