import { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Page Rendered");
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
