import { lazy } from "react";
import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import Layout from "layout/Layout";
import ModalContent from "./ModalContent";

export const App = () => {
  const HomePage = lazy(() => import("../pages/HomePage"));
  const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));
  const CatalogPage = lazy(() => import("../pages/CatalogPage"));
  const VehicleFeatures = lazy(() => import("./ModalContent/VehicleFeatures"));
  const VehicleReviews = lazy(() => import("./ModalContent/VehicleReviews"));

  const location = useLocation();

  if (
    location.pathname.includes("/catalog/vehicle") ||
    location.pathname.includes("/favorites/vehicle")
  ) {
    document.body.classList.add("lock");
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />}>
          <Route path="vehicle/:id" element={<ModalContent />}>
            <Route path="features" element={<VehicleFeatures />} />
            <Route path="reviews" element={<VehicleReviews />} />
          </Route>
        </Route>
        <Route path="favorites" element={<FavoritesPage />}>
          <Route path="vehicle/:id" element={<ModalContent />}>
            <Route path="features" element={<VehicleFeatures />} />
            <Route path="reviews" element={<VehicleReviews />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
