import { useField, useFormikContext } from "formik";
import { format } from "date-fns";

const DatePicker = ({ label, className, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(field.name, value);
  };

  const formattedValue = field.value
    ? format(new Date(field.value), "yyyy-MM-dd")
    : "";

  return (
    <input
      type="date"
      placeholder="Booking date"
      id={props.id || props.name}
      name={field.name}
      value={formattedValue}
      onChange={handleChange}
      className={className}
      {...props}
    />
  );
};

export default DatePicker;
