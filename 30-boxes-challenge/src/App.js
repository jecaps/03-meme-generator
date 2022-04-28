import { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  const squareEl = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return <main>{squareEl}</main>;
}
