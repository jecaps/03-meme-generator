import { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      console.log("Setting up...");
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", watchWidth);

    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
