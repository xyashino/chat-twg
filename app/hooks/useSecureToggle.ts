import { useEffect, useState } from "react";

export const useSecureToggle = (initalValue?: boolean) => {
  const display = !(typeof initalValue === "undefined");
  const [isSecure, setIsSecure] = useState(!!initalValue);

  useEffect(() => {
    setIsSecure(!!initalValue);
  }, [initalValue]);

  return {
    display,
    toggleMethods: {
      isSecure,
      toggleSecure: () => setIsSecure((prevState) => !prevState),
    },
  };
};
