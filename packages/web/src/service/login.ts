import axios from "axios";

import CONFIG from "config";

export async function signUp(email: string, password: string) {
  const result = await axios.post(`${CONFIG.API_URL}/signup`, {
    email,
    password,
  });

  return result;
}

export async function signIn(email: string, password: string) {
  const result = await axios.post(`${CONFIG.API_URL}/signin`, {
    email,
    password,
  });

  return result;
}
