import React, { useState } from "react";
import { AppContent } from "./AppContent";
import "./app.css";
import { AuthenticationPage } from "./login/AuthenticationPage";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return !isSignedIn ? (
    <AuthenticationPage setIsSignedIn={setIsSignedIn} />
  ) : (
    <AppContent />
  );
}

export default App;
