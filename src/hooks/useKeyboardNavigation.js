import { useEffect } from "react";

export function useKeyboardNavigation(ref, callback) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab" || e.key === "ArrowDown" || e.key === "ArrowUp") {
        callback(e);
      }
    };
    const node = ref.current;
    if (node) {
      node.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (node) {
        node.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [ref, callback]);
}
