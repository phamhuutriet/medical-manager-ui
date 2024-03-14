import React, { useState } from "react";
import { AppContent } from "./AppContent";
import { AuthenticationPage } from "./login/AuthenticationPage";
import { ErrorBoundary } from "./error/ErrorBoundary";
import "./app.css";
import { getAccessToken } from "./utils/auth";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(getAccessToken() !== null);

  return (
    <ErrorBoundary>
      {!isSignedIn ? (
        <AuthenticationPage setIsSignedIn={setIsSignedIn} />
      ) : (
        <AppContent isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      )}
    </ErrorBoundary>
  );
}

export default App;
