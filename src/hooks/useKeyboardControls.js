import { useEffect, useState } from "react";

function useKeyboardControls() {
  const [keys, setKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeys((prev) => ({
        ...prev,
        [event.key.toLowerCase()]: true,
      }));
    };

    const handleKeyUp = (event) => {
      setKeys((prev) => ({
        ...prev,
        [event.key.toLowerCase()]: false,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keys;
}

export default useKeyboardControls;