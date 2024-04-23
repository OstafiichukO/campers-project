import { useGetVehiclesQuery } from "../../redux/vehicles";
import { useStateContext } from "../../context/StateContext";
import VehicleCard from "./VehicleCard";
import Loader from "components/UI/Loader";
import Pagination from "components/UI/Pagination";
import cl from "./VehiclesList.module.scss";

const VehiclesList = function () {
  const { searchParams } = useStateContext();
  const params = Object.fromEntries(searchParams.entries());

  const { data, error, isFetching, isError, isSuccess } =
    useGetVehiclesQuery(params);

  if (isFetching) {
    return (
      <ul className={cl["vehicles-list"]}>
        <Loader />
      </ul>
    );
  }

  if (isSuccess) {
    const hasMoreVehicles = data?.vehicles.length < data?.total;

    return (
      <>
        <ul className={cl["vehicles-list"]}>
          {data?.vehicles.length ? (
            data?.vehicles?.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))
          ) : (
            <p>No matches found</p>
          )}

          {!hasMoreVehicles ? null : <Pagination total={data?.total} />}
        </ul>
      </>
    );
  }

  if (isError) {
    return (
      <ul className={cl["vehicles-list"]}>
        <p>{error.error}</p>
      </ul>
    );
  }
};

export default VehiclesList;
