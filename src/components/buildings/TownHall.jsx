export default function TownHall() {
  return (
    <group position={[0, 0, -22]}>
      {/* Foundation */}
      <mesh
        receiveShadow
        position={[0, 0.5, 0]}
      >
        <boxGeometry args={[14, 1, 10]} />
        <meshStandardMaterial color="#8a8a8a" />
      </mesh>

      {/* Main Building */}

<mesh
    castShadow
    receiveShadow
    position={[0,3,0]}
>
    <boxGeometry args={[10,5,7]} />
    <meshStandardMaterial color="#ece8df" />
</mesh>

<mesh
    castShadow
    position={[0,6.2,0]}
>
    <coneGeometry
        args={[6,2,4]}
    />
    <meshStandardMaterial
        color="#8b0000"
    />
</mesh>

<mesh position={[0,0.2,4.8]}>
    <boxGeometry args={[4,0.4,1]} />
    <meshStandardMaterial color="#bdbdbd" />
</mesh>

<mesh position={[0,0.6,4]}>
     <boxGeometry args={[4,0.4,1]} />
    <meshStandardMaterial color="#bdbdbd" />
</mesh>

<mesh position={[0,1,3.2]}>
     <boxGeometry args={[4,0.4,1]} />
    <meshStandardMaterial color="#bdbdbd" />
</mesh>

<mesh position={[0,1.8,3.56]}>
    <boxGeometry args={[2,3,0.2]} />
    <meshStandardMaterial color="#5d4037" />
</mesh>

<mesh position={[-3,3,3.55]}></mesh>
<mesh position={[3,3,3.55]}></mesh>
<boxGeometry args={[1.3,1.3,0.15]}/>
<cylinderGeometry args={[0.25,0.25,4]}/>
<cylinderGeometry args={[0.08,0.08,4]}/>
<planeGeometry args={[1.2,0.8]}/>

    </group>
  );
}