import React from "react";
import { Navigate } from "react-router-dom/NavLink";
import DashboardLayout from "./Components/Layouts/DashBoard";
import Account from "./Pages/Account/Index";
import Customer from "./Pages/Customer";
import DashboardView from "./Components/Layouts/DashBoard";
import SettingsView from "./Pages/Settings";
import Products from "./Pages/Products";
import MainLayout from "./Components/Layouts/MainLayout";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    childern: [
      { path: "accounts", elements: <Account /> },
      { path: "customers", element: <Customer /> },
      { path: "dashboard", element: <DashboardView /> },
      { path: "products", element: <Products /> },
      { path: "settings", element: <SettingsView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
   // { path: "login", element: <LoginView /> },
     // { path: "register", element: <RegisterView /> },
      //{ path: "404", element: <NotFoundView /> },
     // { path: "/", element: <Navigate to="/app/dashboard" /> },
     // { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
