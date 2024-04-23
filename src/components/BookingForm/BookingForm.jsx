import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "components/UI/Button";
import DatePicker from "./DatePicker";
import cl from "./BookingForm.module.scss";

const INITIAL_STATE = {
  name: "",
  email: "",
  booking_date: "",
  comment: "",
};

export const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    booking_date: Yup.string().required("Booking date is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (values.name && values.email && values.booking_date) {
      console.log(values);
      resetForm();
    }
  };

  return (
    <div className={cl["form-container"]}>
      <div className={cl["form-heading"]}>
        <h2 className={cl["form-title"]}>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={cl.form}>
            <div className={cl["form-group"]}>
              <Field
                className={`${cl.input} ${
                  errors.name && touched.name ? cl["error-border"] : ""
                }`}
                type="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={cl["error-message"]}
              />
            </div>
            <div className={cl["form-group"]}>
              <Field
                className={`${cl.input} ${
                  errors.email && touched.email ? cl["error-border"] : ""
                }`}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={cl["error-message"]}
              />
            </div>
            <div className={cl["form-group"]}>
              <DatePicker
                name="booking_date"
                className={`${cl.input} ${
                  errors.booking_date && touched.booking_date
                    ? cl["error-border"]
                    : ""
                }`}
              />
              <ErrorMessage
                name="booking_date"
                component="div"
                className={cl["error-message"]}
              />
            </div>
            <div className={cl["form-group"]}>
              <Field
                type="text"
                name="comment"
                className={cl.input}
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={cl["error-message"]}
              />
            </div>
            <Button type="submit" tag="button" className="btn-submit">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
