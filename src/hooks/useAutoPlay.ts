import { useEffect } from "react";

export function useAutoPlay(callback: () => void, active: boolean, interval: number = 4000) {
  useEffect(() => {
    if (!active) return;
    const id = setInterval(callback, interval);
    return () => clearInterval(id);
  }, [active, interval, callback]);
}
