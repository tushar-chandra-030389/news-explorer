import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import { useAppDispatch } from "hooks/redux";
import { ROUTES } from "routes";
import { triggerSignIn, logout } from "state/slices/app";

export default function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  };

  const handleEmailChange = useCallback(
    (e) => setEmail(e.target.value),
    [setEmail]
  );

  const handlePasswordChange = useCallback(
    (e) => setPassword(e.target.value),
    [setPassword]
  );

  const handleSignIn = async () => {
    const result = await dispatch(triggerSignIn({ email, password }));
    if (result.payload) {
      navigate(ROUTES.NEWS);
    } else {
      console.log("Fail");
    }
  };

  return (
    <div className="flex justify-center	items-center flex-col h-full">
      <div className="w-4/5 mt-2">
        <TextInput label="Email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="w-4/5 mt-2">
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
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
