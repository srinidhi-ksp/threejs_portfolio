import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import CityScene from "./scenes/CityScene";


export default function App() {
  return (
    <Canvas
      shadows
      camera={{
        position: [35, 30, 35],
        fov: 50,
      }}

      onCreated={({ scene }) => {
  scene.background = new THREE.Color("#b9e8ff");
}}
    >
      <ambientLight intensity={0.4} />

<directionalLight
  position={[40, 50, 20]}
  intensity={2}
  castShadow
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
  shadow-camera-left={-80}
  shadow-camera-right={80}
  shadow-camera-top={80}
  shadow-camera-bottom={-80}
/>

      <OrbitControls
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI / 2.2}
      />
      
      <CityScene />
    </Canvas>
  );
}