import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
}