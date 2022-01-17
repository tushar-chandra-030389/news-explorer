import { useNavigate } from "react-router-dom";

import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import { ROUTES } from "routes";
import { useAppDispatch } from "hooks/redux";
import { triggerSignUp } from "state/slices/app";
import useFormValues from "hooks/useFormValues";

const formFields = {
  email: "",
  password: "",
  repassword: "",
};

export default function SignUpForm() {
  const [formValues, updateFieldValue] = useFormValues(formFields);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToSignIn = () => {
    navigate(ROUTES.SIGN_IN);
  };

  const handleSignUp = async () => {
    const result = await dispatch(
      triggerSignUp({
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
      <div className="w-4/5 mt-2">
        <TextInput
          label="Re-enter Password"
          type="password"
          name="repassword"
          value={formValues["repassword"] as string}
          onChange={updateFieldValue}
        />
      </div>
      <div className="flex justify-center	items-center flex-row w-full mt-10">
        <div className="mr-2">
          <Button label="Sign Up" onClick={handleSignUp} />
        </div>
        <div className="ml-2">
          <Button label="Login" secondary onClick={navigateToSignIn} />
        </div>
      </div>
    </div>
  );
}
