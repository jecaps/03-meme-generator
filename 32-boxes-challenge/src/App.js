import { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  const toggle = (id) => {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareEl = squares.map((square) => (
    <Box
      key={square.id}
      on={square.on}
      toggleHandler={() => toggle(square.id)}
    />
  ));

  return <main>{squareEl}</main>;
}
