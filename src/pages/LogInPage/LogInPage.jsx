import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
    return (
        <div>
            <h2>Log in page</h2>
            <LoginForm />
            
            <p>Not a member? <Link to="/register">Register now</Link></p>
        </div>
    )
}