import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "routes";
import useIsAuthenticated from "hooks/useIsAuthenticated";

type Props = {
  children: ReactElement;
};

function AuthRoutes({ children }: Props) {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={ROUTES.SIGN_IN} replace={true} />
  );
}

export default AuthRoutes;
