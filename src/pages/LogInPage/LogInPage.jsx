import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css"

export default function LoginPage() {
    return (
      <div className={css.container}>
        <h2>Log in Form</h2>
        <LoginForm />

        <p>
          Not a member? <Link to="/register">Register now</Link>
        </p>
      </div>
    );
}