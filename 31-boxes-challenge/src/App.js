import { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
   */

  const toggle = (id) => {
    console.log(id);
  };

  const squareEl = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggleHandler={toggle} />
  ));

  return <main>{squareEl}</main>;
}
