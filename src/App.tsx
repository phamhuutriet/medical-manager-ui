import React, { useState } from "react";
import { AppContent } from "./AppContent";
import { AuthenticationPage } from "./login/AuthenticationPage";
import { ErrorBoundary } from "./error/ErrorBoundary";
import { getAccessToken } from "./utils/auth";
import "./app.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(getAccessToken() !== null);

  return (
    <ErrorBoundary>
      {!isSignedIn ? (
        <AuthenticationPage setIsSignedIn={setIsSignedIn} />
      ) : (
        <AppContent setIsSignedIn={setIsSignedIn} />
      )}
    </ErrorBoundary>
  );
}

export default App;
