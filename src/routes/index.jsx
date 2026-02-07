import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts";
import Home from "../pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
