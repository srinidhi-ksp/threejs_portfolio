import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

export default function Ground() {
  const texture = useLoader(TextureLoader, "/textures/grass.jpg");

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;

  texture.repeat.set(40, 40);

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[250, 250]} />
      <meshStandardMaterial
    map={texture}
    roughness={1}
    metalness={0}
/>
    </mesh>
  );
}