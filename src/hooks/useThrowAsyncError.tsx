import { useState } from "react";

/**
 * This Hook use to throw error during rerenders to trigger ErrorBoundary
 */
export const useThrowAsyncError = () => {
  const [state, setState] = useState();

  return (error: Error) => {
    setState(() => {
      throw error;
    });
  };
};
