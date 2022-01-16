import LoginTemplate from "templates/Login";
import { Navigate } from "react-router-dom";
import useIsAuthenticated from "hooks/useIsAuthenticated";
import { ROUTES } from "routes";

export default function Login() {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.NEWS} replace={true} />;
  }

  return <LoginTemplate />;
}
