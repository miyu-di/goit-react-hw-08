import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css"

export default function RegisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        actions.resetForm()
    } 

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }} onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Username
          <Field className={css.field} type="text" name="name" />
        </label>
        <label>
          Email
          <Field className={css.field} type="email" name="email" />
        </label>
        <label>
          Password
          <Field className={css.field} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
