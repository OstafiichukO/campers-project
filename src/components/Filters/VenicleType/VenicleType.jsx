import { useState } from "react";
import Icon from "../../UI/Icon";
import { TYPES } from "assets/constants";
import cl from "./VenicleType.module.scss";

const VenicleType = ({ onChange, selectedFilters }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${cl["vehicle-filters"]} ${isCollapsed ? cl.collapsed : ""}`}
    >
      <h2 className={cl.title}>
        <span>Vehicle type</span>
        <button className={cl["collapse-btn"]} onClick={handleToggleCollapse}>
          <Icon id={isCollapsed ? "arrow-down" : "arrow-up"} />
        </button>
      </h2>

      <fieldset className={cl["field-set"]}>
        {TYPES.map(({ value, text }) => (
          <div className={cl["input-wrap"]} key={value}>
            <input
              type="radio"
              name="type"
              value={value}
              checked={selectedFilters.form === value}
              onChange={({ target }) => onChange(target)}
            />
            <div className={cl["radio-btn"]}>
              <Icon id={value} /> {text}
            </div>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default VenicleType;
