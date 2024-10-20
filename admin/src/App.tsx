import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  InventoryOutlined,
  PeopleOutlined,
  ReceiptOutlined,
  SettingsOutlined,
  LocalOfferOutlined,
  CategoryOutlined,
  ReviewsOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
  ExtensionOutlined,
} from "@mui/icons-material";
import HeaderMenu from "./components/HeaderMenu";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSidebarToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { icon: <DashboardOutlined />, text: "Dashboard", link: "/dashboard" },
    {
      icon: <ShoppingCartOutlined />,
      text: "Products",
      link: "/products",
      subItems: [
        { icon: <InventoryOutlined />, text: "All Products", link: "/products/all" },
        { icon: <LocalOfferOutlined />, text: "Add New", link: "/products/new" },
        { icon: <CategoryOutlined />, text: "Categories", link: "/products/categories" },
        { icon: <LocalOfferOutlined />, text: "Tags", link: "/products/tags" },
        { icon: <ReviewsOutlined />, text: "Reviews", link: "/products/reviews" },
      ],
    },
    {
      icon: <ReceiptOutlined />,
      text: "Orders",
      link: "/orders",
      subItems: [
        { icon: <ReceiptOutlined />, text: "All Orders", link: "/orders/all" },
        { icon: <LocalShippingOutlined />, text: "Shipments", link: "/orders/shipments" },
        { icon: <PaymentOutlined />, text: "Refunds", link: "/orders/refunds" },
      ],
    },
    { icon: <PeopleOutlined />, text: "Customers", link: "/customers" },
    {
      icon: <LocalOfferOutlined />,
      text: "Marketing",
      link: "/marketing",
      subItems: [
        { icon: <LocalOfferOutlined />, text: "Coupons", link: "/marketing/coupons" },
        { icon: <LocalOfferOutlined />, text: "Promotions", link: "/marketing/promotions" },
      ],
    },
    {
      icon: <SettingsOutlined />,
      text: "Settings",
      link: "/settings",
      subItems: [
        { icon: <SettingsOutlined />, text: "General", link: "/settings/general" },
        { icon: <PaymentOutlined />, text: "Payments", link: "/settings/payments" },
        { icon: <LocalShippingOutlined />, text: "Shipping", link: "/settings/shipping" },
        { icon: <ExtensionOutlined />, text: "Integrations", link: "/settings/integrations" },
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        menuItems={menuItems}
        isExpanded={isExpanded}
        onToggle={handleSidebarToggle}
      />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-white shadow-md" style={{ height: "52px" }}>
          <div className="flex items-center h-full">
            <HeaderMenu />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 bg-slate-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
