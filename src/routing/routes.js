import React from "react";
import About from "../pages/About";
import Homepage from "../pages/Homepage";
import PageExample from "../pages/PageExample";

const pagesRoutes = [
  {
    name: "homepage",
    link: "/",
    component: Homepage,
  },
  {
    name: "about",
    link: "/about",
    component: About,
  },
  {
    name: "pageExample",
    link: "/page",
    component: PageExample,
  },
];
export default pagesRoutes;
