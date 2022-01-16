import type { RootState } from "state/store";

const getApp = (state: RootState) => state.app;

export const getJwt = (state: RootState) => getApp(state).jwt;

export const isSignedIn = (state: RootState) => getApp(state).isSignedIn;
