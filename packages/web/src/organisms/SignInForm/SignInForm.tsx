import { useNavigate } from "react-router-dom";
import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import { useAppDispatch } from "hooks/redux";
import { ROUTES } from "routes";
import { triggerSignIn } from "state/slices/app";
import useFormValues from "hooks/useFormValues";

const formFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formValues, updateFieldValue] = useFormValues(formFields);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  };

  const handleSignIn = async () => {
    const result = await dispatch(
      triggerSignIn({
        email: formValues["email"] as string,
        password: formValues["password"] as string,
      })
    );
    if (result.payload) {
      navigate(ROUTES.NEWS);
    } else {
      // Handle Login failed
    }
  };

  return (
    <div className="flex justify-center	items-center flex-col h-full">
      <div className="w-4/5 mt-2">
        <TextInput
          label="Email"
          name="email"
          value={formValues["email"] as string}
          onChange={updateFieldValue}
        />
      </div>
      <div className="w-4/5 mt-2">
        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formValues["password"] as string}
          onChange={updateFieldValue}
        />
      </div>
      <div className="flex justify-center	items-center flex-row w-full mt-10">
        <div className="mr-2">
          <Button label="Login" onClick={handleSignIn} />
        </div>
        <div className="ml-2">
          <Button label="Sign Up" secondary onClick={navigateToSignUp} />
        </div>
      </div>
    </div>
  );
}
