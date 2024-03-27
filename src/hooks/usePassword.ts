import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const usePassword = () => {
  const [isRememberPassword, setIsRememberPassword] = useLocalStorage(
    "isRememberPassword",
    false
  );

  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isRememberPassword) {
      setPassword(localStorage.getItem("password") || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isRememberPassword && password) {
      localStorage.setItem("password", password);
    }
  }, [isRememberPassword, password]);

  return [password, setPassword, isRememberPassword, setIsRememberPassword];
};
