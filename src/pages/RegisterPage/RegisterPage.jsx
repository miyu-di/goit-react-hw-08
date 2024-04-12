import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css"

export default function RegisterPage() {
    return (
      <div className={css.container}>
        <h2>Register Form</h2>
        <RegisterForm />
        
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    );
}