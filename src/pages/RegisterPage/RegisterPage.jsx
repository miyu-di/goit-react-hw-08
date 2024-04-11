import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
    return (
      <div>
        <h2>Register page</h2>
        <RegisterForm />
        
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    );
}