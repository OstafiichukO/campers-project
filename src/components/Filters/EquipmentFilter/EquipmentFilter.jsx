import { useState } from 'react';
import Icon from 'components/UI/Icon';
import cl from './EquipmentFilter.module.scss';
import { EQYIPMENT } from 'assets/constants';

const EquipmentFilter = ({ onChange, selectedFilters }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${cl['equipment-container']} ${
        isCollapsed ? cl.collapsed : ''
      }`}
    >
      <h2 className={cl.title}>
        <span>Vehicle equipment</span>
        <button className={cl['collapse-btn']} onClick={handleToggleCollapse}>
          <Icon id={isCollapsed ? 'arrow-down' : 'arrow-up'} />
        </button>
      </h2>
      <fieldset
        className={`${cl['field-set']} ${isCollapsed ? cl.hidden : ''}`}
      >
        {EQYIPMENT.map(({ key, value, text }) => {
          return (
            <div className={cl['input-wrap']} key={key}>
              <input
                type="checkbox"
                data-equipment
                name={key}
                value={value}
                checked={selectedFilters[key] === value}
                onChange={({ target }) => onChange(target)}
              />
              <div className={cl['check-box']}>
                <Icon id={key} /> {text}
              </div>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

export default EquipmentFilter;
