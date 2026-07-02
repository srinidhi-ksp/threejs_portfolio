export default function Road({
  position = [0, 0.01, 0],
  width = 8,
  length = 80,
}) {
  return (
    <mesh position={position} receiveShadow>
      <boxGeometry args={[width, 0.1, length]} />
     <meshStandardMaterial
    color="#555555"
    roughness={1}
    metalness={0}
/>
    </mesh>
  );
}