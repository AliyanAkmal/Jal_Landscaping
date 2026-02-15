import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts";
import Home from "../pages/home";
import Services from "../pages/services";
import AboutUs from "../pages/aboutUs/index";
import Contact from "../pages/contact";
import GalleryPage from "../pages/gallery";
import Hardscape from "../pages/hardscape";
import Maintenance from "../pages/maintenance";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "hardscape",
        element: <Hardscape />,
      },
      {
        path: "maintenance",
        element: <Maintenance />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);
