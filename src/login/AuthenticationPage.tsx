import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "../data/routeEnum";
import { SignUpPage } from "./SignUpPage";
import { SignInPage } from "./SignInPage";

export const AuthenticationPage = ({
  setIsSignedIn,
}: {
  setIsSignedIn: Function;
}) => {
  return (
    <Router>
      <Routes>
        <Route path={RouteEnum.SIGN_UP} element={<SignUpPage />} />
        <Route path={"*"} element={<SignInPage />} />
      </Routes>
    </Router>
  );
};
