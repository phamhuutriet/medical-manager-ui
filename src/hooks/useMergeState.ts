import { useCallback, useState } from "react";

export const useMergeState = (data?: any) => {
  const [state, setState] = useState(data || {});

  const mergeState = useCallback((newState: any) => {
    setState((currentState: any) => ({ ...currentState, ...newState }));
  }, []);

  return [state, mergeState];
};
