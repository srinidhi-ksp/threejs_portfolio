import { Group } from "three";

export default function Tree({
  position = [0, 0, 0],
  scale = 1,
}) {
  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh castShadow receiveShadow position={[0, 1, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 2, 12]} />
        <meshStandardMaterial color="#6b4423" />
      </mesh>

      {/* Leaves */}
      <mesh castShadow position={[0, 3, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#2e8b57" />
      </mesh>
    </group>

  );
}