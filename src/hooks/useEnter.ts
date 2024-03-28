import { useEffect } from "react";

export const useSubscribeEnter = (id: string, onEnter: any) => {
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        onEnter();
      }
    };

    if (id && document.getElementById(id)) {
      (document.getElementById(id) as any).addEventListener(
        "keydown",
        handleKeyPress
      );
    }

    return () => {
      if (id && document.getElementById(id)) {
        (document.getElementById(id) as any).removeEventListener(
          "keydown",
          handleKeyPress
        );
      }
    };
  }, [id, onEnter]);
};
