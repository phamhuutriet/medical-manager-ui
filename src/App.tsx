import React, { useState } from "react";
import { AppContent } from "./AppContent";
import { AuthenticationPage } from "./login/AuthenticationPage";
import { ErrorBoundary } from "./error/ErrorBoundary";
import "./app.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <ErrorBoundary>
      {!isSignedIn ? (
        <AuthenticationPage setIsSignedIn={setIsSignedIn} />
      ) : (
        <AppContent />
      )}
    </ErrorBoundary>
  );
}

export default App;
