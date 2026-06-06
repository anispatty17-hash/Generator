// placeholder
"use client";

import {
  useEffect
} from "react";

export default function usePolling(
  callback: () => void,
  interval = 10000
) {
  useEffect(() => {

    callback();

    const timer =
      setInterval(
        callback,
        interval
      );

    return () =>
      clearInterval(timer);

  }, []);
}