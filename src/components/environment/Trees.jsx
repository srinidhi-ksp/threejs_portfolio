import Tree from "./Tree";

export default function Trees() {
  return (
    <>
      {/* Left Side */}
      <Tree position={[-20, 0, -20]} />
      <Tree position={[-28, 0, -10]} />
      <Tree position={[-25, 0, 15]} />
      <Tree position={[-18, 0, 25]} />

      {/* Right Side */}
      <Tree position={[20, 0, -20]} />
      <Tree position={[28, 0, -8]} />
      <Tree position={[25, 0, 15]} />
      <Tree position={[18, 0, 25]} />

      {/* Top */}
      <Tree position={[0, 0, -50]} scale={1.3} />

      {/* Bottom */}
      <Tree position={[0, 0, 50]} scale={1.5} />
    </>
  );
}