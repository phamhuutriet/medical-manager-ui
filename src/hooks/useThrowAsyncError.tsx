import { useState } from "react";

export const useThrowAsyncError = () => {
  const [state, setState] = useState();

  return (error: Error) => {
    setState(() => {
      throw error;
    });
  };
};
