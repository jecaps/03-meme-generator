export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "",
  };

  return (
    <div
      className="box"
      style={styles}
      onClick={() => props.toggleHandler(props.id)}
    ></div>
  );
}
