import { useAppDispatch } from "hooks/redux";
import { logout } from "state/slices/app";
import Button from "atoms/Button";

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <Button secondary label="Logout" onClick={handleLogout} />;
}
