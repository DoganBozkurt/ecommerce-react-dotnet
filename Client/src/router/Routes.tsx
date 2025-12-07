import { createBrowserRouter } from "react-router";
import App from "../components/App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import CatalogDetailPage from "../pages/catalog/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "home",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "catalog",
        element: <CatalogPage></CatalogPage>,
      },
      {
        path: "catalog/:id",
        element: <CatalogDetailPage></CatalogDetailPage>,
      },
    ],
  },
]);
