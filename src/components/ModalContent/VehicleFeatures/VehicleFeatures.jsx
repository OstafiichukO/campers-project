import { useParams } from "react-router-dom";
import { useGetVehicleByIdQuery } from "../../../redux/vehicles";
import BookingForm from "components/BookingForm";
import Icon from "components/UI/Icon";
import Button from "components/UI/Button/Button";
import { VEHICLE_DETAILS } from "assets/constants";
import cl from "./VehicleFeatures.module.scss";

const VehicleFeatures = function () {
  const { id } = useParams();

  const { data: vehicleDetails } = useGetVehicleByIdQuery(id);

  return (
    <div className={cl["features-container"]}>
      <div className={cl["features-wrapper"]}>
        <ul className={cl["features-list"]}>
          {Object.entries(vehicleDetails?.details).map(
            ([key, value], index) => {
              if (value && key !== "bathroom") {
                return (
                  <Button
                    tag="li"
                    className="box-details"
                    key={`vehicle-card-details-${key}`}
                  >
                    <Icon id={key} />
                    <p>
                      <span>{value}</span>
                      <span> {key}</span>
                    </p>
                  </Button>
                );
              }

              return null;
            }
          )}
        </ul>

        <div>
          <p className={cl.title}>Vehicle details</p>
          <ul className={cl["details-list"]}>
            {VEHICLE_DETAILS.map((details) => (
              <li key={details} className={cl["details-item"]}>
                <p className={cl["details-name"]}>
                  {details.charAt(0).toUpperCase() + details.slice(1)}
                </p>
                <p className={cl["details-value"]}>
                  {vehicleDetails[details]
                    ? vehicleDetails[details]
                    : "unknown"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default VehicleFeatures;
