import { useEffect, useRef } from "react";

export function useFocusOnMount() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  return ref;
}
