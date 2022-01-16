import { useAppSelector } from "hooks/redux";
import { isSignedIn } from "state/selectors/app";

export default function useIsAuthenticated() {
  const isAuthenticated = useAppSelector(isSignedIn);

  return isAuthenticated;
}
