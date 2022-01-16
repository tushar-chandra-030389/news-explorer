import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TextInput from "atoms/TextInput";
import Button from "atoms/Button";
import { ROUTES } from "routes";
import { useAppDispatch } from "hooks/redux";
import { triggerSignUp, logout } from "state/slices/app";

export default function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigateToSignIn = () => {
    navigate(ROUTES.SIGN_IN);
  };

  const handleEmailChange = useCallback(
    (e) => setEmail(e.target.value),
    [setEmail]
  );

  const handlePasswordChange = useCallback(
    (e) => setPassword(e.target.value),
    [setPassword]
  );

  const handleRePasswordChange = useCallback(
    (e) => setRePassword(e.target.value),
    [setRePassword]
  );

  const handleSignUp = async () => {
    const result = await dispatch(triggerSignUp({ email, password }));
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
      <div className="w-4/5 mt-2">
        <TextInput
          label="Re-enter Password"
          type="password"
          value={rePassword}
          onChange={handleRePasswordChange}
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
