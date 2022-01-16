import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn } from "service/login";
import type { ThunkApi } from "state/types";

type AppSlice = {
  isSignedIn: boolean;
  jwt: null | string;
};

type LoginPayload = {
  email: string;
  password: string;
};

const initialState: AppSlice = {
  isSignedIn: false,
  jwt: null,
};

export const triggerSignUp = createAsyncThunk<boolean, LoginPayload, ThunkApi>(
  "app/signup",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;

    try {
      const result = await signUp(payload.email, payload.password);

      if (result?.data?.token) {
        dispatch(setJwt(result.data.token));
        return true;
      }

      if (result?.data?.message === "Email exists") {
        return false;
      }

      return false;
    } catch {
      return false;
    }
  }
);

export const triggerSignIn = createAsyncThunk<boolean, LoginPayload, ThunkApi>(
  "app/signin",
  async (payload, thunkAPI) => {
    const { dispatch } = thunkAPI;

    try {
      const result = await signIn(payload.email, payload.password);

      if (result?.data?.token) {
        dispatch(setJwt(result.data.token));
        return true;
      }

      return false;
    } catch {
      return false;
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setJwt: (state: AppSlice, action: PayloadAction<string>) => {
      state.jwt = action.payload;
      state.isSignedIn = true;
    },
    logout: (state: AppSlice) => {
      state.jwt = null;
      state.isSignedIn = false;
    },
  },
});

export const { setJwt, logout } = appSlice.actions;

export default appSlice.reducer;
