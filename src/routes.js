import React from 'react';
import { Navigate } from 'react-router-dom';
import pageRoutes from './constants/pageRoutes'
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import AccountView from './views/account/AccountView/';
import CustomerListView from './views/CustomerListView/';
import DashboardView from './views/reports/DashboardView/';
import LoginView from './views/auth/Login';
import NotFoundView from './views/errors/NotFoundView';
import ProductListView from './views/product/ProductListView/';
import RegisterView from './views/auth/RegisterView';
import SettingsView from './views/settings/SettingsView';
import OrdersListView from './views/OrdersListView/';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: pageRoutes.ACCOUNT, element: <AccountView /> },
      { path: pageRoutes.CUSTOMERS, element: <CustomerListView /> },
      { path: pageRoutes.ORDERS, element: <OrdersListView /> },
      { path: pageRoutes.DASHBOARD, element: <DashboardView /> },
      { path: pageRoutes.PRODUCTS, element: <ProductListView /> },
      { path: pageRoutes.SETTINGS, element: <SettingsView /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
    
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
