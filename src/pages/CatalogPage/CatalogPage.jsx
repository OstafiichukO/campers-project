import { Outlet } from "react-router";
import Filters from "components/Filters";
import VehiclesList from "components/VehiclesList";
import cl from "./CatalogPage.module.scss";

const CatalogPage = function () {
  return (
    <section className={cl.section}>
      <div className={cl["catalog-container"]}>
        <Filters />
        <VehiclesList />

        <Outlet />
      </div>
    </section>
  );
};

export default CatalogPage;
