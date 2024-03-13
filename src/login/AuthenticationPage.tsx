import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteEnum } from "../data/routeEnum";
import { SignUpPage } from "./SignUpPage";
import { SignInPage } from "./SignInPage";
import { VerificationPage } from "./VerificationPage";

export const AuthenticationPage = ({
  setIsSignedIn,
}: {
  setIsSignedIn: Function;
}) => {
  return (
    <Router>
      <Routes>
        <Route path={RouteEnum.SIGN_UP} element={<SignUpPage />} />
        <Route
          path={RouteEnum.VERIFICATION_PAGE}
          element={<VerificationPage />}
        />
        <Route
          path={"*"} // Change this to only accept defined path -> when go to defined path but not signed in
          // set next to redirect to that after sign in successfully
          element={<SignInPage setIsSignedIn={setIsSignedIn} />}
        />
      </Routes>
    </Router>
  );
};
