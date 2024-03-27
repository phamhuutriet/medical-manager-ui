import { useEffect, useState } from "react";

const getLocalData = (key: string, defaultValue: any) => {
  const saved = localStorage.getItem(key);
  if (!saved) return defaultValue;
  return JSON.parse(saved);
};

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [state, setState] = useState(getLocalData(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
