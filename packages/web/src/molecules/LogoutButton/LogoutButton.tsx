import { useAppDispatch } from "hooks/redux";
import { logout } from "state/slices/app";

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <div onClick={handleLogout}>Logout</div>;
}
