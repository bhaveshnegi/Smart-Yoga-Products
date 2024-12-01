"use client";

import Layout from "../components/Layout";
import "../../styles/admin.css";
import { useState } from "react";
import ManageProducts from "./ManageProducts";
import ManageBlogs from "./ManageBlogs";
import ManageSocial from "./ManageSocial";

export default function AdminPanel() {
  const [tab, setTab] = useState("products");

  return (
    <Layout>
      <div className="admin-panel-container">
        <h2>Admin Panel</h2>
        <div className="admin-tabs">
          <button
            className={tab === "products" ? "active" : ""}
            onClick={() => setTab("products")}
          >
            Manage Products
          </button>
          <button
            className={tab === "blogs" ? "active" : ""}
            onClick={() => setTab("blogs")}
          >
            Manage Blogs
          </button>
          <button
            className={tab === "social" ? "active" : ""}
            onClick={() => setTab("social")}
          >
            Social Media Links
          </button>
        </div>
        <div className="admin-content">
          {tab === "products" && <ManageProducts />}
          {tab === "blogs" && <ManageBlogs />}
          {tab === "social" && <ManageSocial />}
        </div>
      </div>
    </Layout>
  );
}
