import { useLocation } from "react-router-dom";
import SignInForm from "organisms/SignInForm";
import SignUpForm from "organisms/SignUpForm";
import { ROUTES } from "routes";

export default function Login() {
  const location = useLocation();
  const isSignIn = location.pathname === ROUTES.SIGN_IN;

  return (
    <div className="flex justify-center	items-center">
      <div className="w-full sm:w-96 xl:w-96 h-96 bg-backgroundSecondary rounded-md mt-20">
        {isSignIn ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
}
