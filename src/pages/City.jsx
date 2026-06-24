import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Grid } from "@react-three/drei";
import TownHall3D from "../components/TownHall3d";
import Factory3D from "../components/Factory3D";

function City() {
  return (
    <div className="h-screen">

      <Canvas camera={{ position: [6, 6, 6] }}>

        <ambientLight intensity={0.6} />

        <directionalLight
          position={[10, 10, 10]}
          intensity={2}
        />

        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>

        <mesh
  rotation={[-Math.PI / 2, 0, 0]}
>

  <planeGeometry args={[20,20]} />

  <meshStandardMaterial
    color="gray"
  />

</mesh>
<Grid
  args={[20,20]}
  position={[0,0.01,0]}
/>

        <OrbitControls />
        <TownHall3D />
        <Factory3D />
      </Canvas>

    </div>
  );
}

export default City;