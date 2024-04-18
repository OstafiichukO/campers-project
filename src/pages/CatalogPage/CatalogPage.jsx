import { Outlet } from 'react-router';
import Filters from 'components/Filters';
import VehiclesList from 'components/VehiclesList';
import cl from './CatalogPage.module.scss';

const CatalogPage = function () {
  return (
    <div className={cl['catalog-container']}>
      <Filters />
      <VehiclesList />

      <Outlet />
    </div>
  );
};

export default CatalogPage;
