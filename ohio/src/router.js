import React from "react";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Blog from "../src/Components/Pages/Blog/Blog";
import Portfolio from "../src/Components/Pages/Portfolio/Portfolio";
import Products from "../src/Components/Pages/Products/Products";
import Error from "../src/Components/Pages/Error/Error";
const Router = [
  {
    id: 1,
    path: "/",
    exact: "true",
    component: <Home />,
    fallback: <Home />,
  },

  {
    path: "/contact",
    exact: "true",
    component: <Contact />,
  },
  {
    path: "/blog",
    exact: "true",
    component: <Blog />,
  },
  {
    path: "/portfolio",
    exact: "true",
    component: <Portfolio />,
  },
  {
    path: "/products",
    exact: "true",
    component: <Products />,
  },
  {
    path: "/*",
    exact: "true",
    component: <Error />,
  },
];

export default Router;
