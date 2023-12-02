import { useEffect, useState } from "react";

export type ScreenSize = {
  height: number;
  width: number;
};

export const useScreenSize = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenSize>({
    height: 720,
    width: 1250,
  });

  useEffect(() => {
    setCurrentScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener("resize", () => {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      setCurrentScreen(size);
    });
  }, []);

  return currentScreen;
};
