import React from "react";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Blog from "../src/Components/Pages/Blog/Blog";
import Portfolio from "../src/Components/Pages/Portfolio/Portfolio";
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
];

export default Router;
