import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./Layout/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Layout>
    <App />
  </Layout>
);
