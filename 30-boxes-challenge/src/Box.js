import { useState } from "react";

export default function Box(props) {
  /**
   * Challenge: Create state controlling whether
   * this box is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   *
   * Create an event listener so when the box is clicked,
   * it toggles from "on" to "off".
   *
   * Goal: clicking each box should toggle it on and off.
   */

  const [isOn, setIsOn] = useState(props.on);

  const styles = {
    backgroundColor: isOn ? "#222222" : "",
  };

  const toggleHandler = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return <div className="box" style={styles} onClick={toggleHandler}></div>;
}
