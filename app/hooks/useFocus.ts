import { useState } from "react";

export const useFocus = () => {
  const [isFocused, setFocus] = useState(false);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  return { isFocused, methods: { onFocus, onBlur } };
};
