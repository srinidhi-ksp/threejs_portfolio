export default function TestCube() {
  return (
    <mesh
      position={[0, 2, 0]}
      castShadow
    >
      <boxGeometry args={[4,4,4]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}