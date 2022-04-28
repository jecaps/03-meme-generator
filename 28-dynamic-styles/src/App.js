import { useState } from "react";
import boxes from "./boxes";

export default function App(props) {
  const [squares, setSquares] = useState(boxes);

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  };

  const squareEl = squares.map((square) => (
    <div key={square.id} className="box" styles={styles}></div>
  ));

  return <main>{squareEl}</main>;
}
