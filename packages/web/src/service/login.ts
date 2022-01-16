import axios from "axios";

export async function signUp(email: string, password: string) {
  const result = await axios.post("http://localhost:3100/signup", {
    email,
    password,
  });

  return result;
}

export async function signIn(email: string, password: string) {
  const result = await axios.post("http://localhost:3100/signin", {
    email,
    password,
  });

  return result;
}
