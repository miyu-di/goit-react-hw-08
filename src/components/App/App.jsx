import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LogInPage = lazy(() => import("../../pages/LogInPage/LogInPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <div>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LogInPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
