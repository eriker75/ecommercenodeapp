import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import Customers from "./pages/customers/Customers";
import Coupons from "./pages/marketing/Coupons";
import Promotions from "./pages/marketing/Promotions";
import AllOrders from "./pages/orders/AllOrders";
import Refunds from "./pages/orders/Refunds";
import Shipments from "./pages/orders/Shipments";
import AddNewProduct from "./pages/products/AddNewProduct";
import AllProducts from "./pages/products/AllProducts";
import Categories from "./pages/products/Categories";
import Tags from "./pages/products/Tags";
import GeneralSettings from "./pages/settings/GeneralSettings";
import Integrations from "./pages/settings/Integrations";
import Shipping from "./pages/settings/Shipping";
import Marketing from "./pages/marketing/Marketing";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import Settings from "./pages/settings/Settings";
import Reviews from "./pages/products/Reviews";
import Dashboard from "./pages/Dashboard";
import Payments from "./pages/settings/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "products",
        element: <Products />,
        children: [
          { path: "all", element: <AllProducts /> },
          { path: "new", element: <AddNewProduct /> },
          { path: "categories", element: <Categories /> },
          { path: "tags", element: <Tags /> },
          { path: "reviews", element: <Reviews /> },
        ],
      },
      {
        path: "orders",
        element: <Orders />,
        children: [
          { path: "all", element: <AllOrders /> },
          { path: "shipments", element: <Shipments /> },
          { path: "refunds", element: <Refunds /> },
        ],
      },
      { path: "customers", element: <Customers /> },
      {
        path: "marketing",
        element: <Marketing />,
        children: [
          { path: "coupons", element: <Coupons /> },
          { path: "promotions", element: <Promotions /> },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          { path: "general", element: <GeneralSettings /> },
          { path: "payments", element: <Payments /> },
          { path: "shipping", element: <Shipping /> },
          { path: "integrations", element: <Integrations /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
