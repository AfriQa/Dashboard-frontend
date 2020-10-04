import React from "react";
import { Navigate } from "react-router-dom/NavLink";
import DashboardLayout from "./Components/Layouts/DashBoard";
import Account from "./Pages/Account/Index";
import CustomerListView from "src/views/customer/CustomerListView";
import DashboardView from "src/views/reports/DashboardView";
import SettingsView from "src/views/settings/SettingsView";
import ProductListView from "src/views/product/ProductListView";
const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    childern: [
      { path: "accounts", elements: <Account /> },
      // { path: "customers", element: <CustomerListView /> },
      { path: "dashboard", element: <DashboardView /> },
      //   { path: "products", element: <ProductListView /> },
      { path: "settings", element: <SettingsView /> },
      //{ path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
