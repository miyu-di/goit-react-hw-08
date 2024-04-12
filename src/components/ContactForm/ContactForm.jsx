import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Your contact has been added successfully!");

export const ContactForm = () => {
  const dispatch = useDispatch();

   const handleSubmit = async (values, actions) => {
     const newContact = {
       id: nanoid(),
       ...values,
     };
     await dispatch(addContact(newContact));
     actions.resetForm();
     notify();
   };

  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={numberFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.container}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </Form>
    </Formik>
  );
};
