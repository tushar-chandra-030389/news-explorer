import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "state/store";
import { ROUTES } from "routes";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Layout from "templates/Layout";
import Login from "pages/Login";
import News from "pages/News";

import AuthRoutes from "organisms/AuthRoutes";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path={ROUTES.SIGN_IN} element={<Login />} />
              <Route path={ROUTES.SIGN_UP} element={<Login />} />
              <Route
                path={ROUTES.NEWS}
                element={
                  <AuthRoutes>
                    <News />
                  </AuthRoutes>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
