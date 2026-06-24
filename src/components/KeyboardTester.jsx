import useKeyboardControls from "../hooks/useKeyboardControls";

function KeyboardTester() {
  const keys = useKeyboardControls();
  return (
    <div className="p-4">
      <h2>Keyboard Tester</h2>

      <p>W: {keys.w ? "Pressed" : "Not Pressed"}</p>

      <p>A: {keys.a ? "Pressed" : "Not Pressed"}</p>

      <p>S: {keys.s ? "Pressed" : "Not Pressed"}</p>

      <p>D: {keys.d ? "Pressed" : "Not Pressed"}</p>
    </div>
  );
}

export default KeyboardTester;