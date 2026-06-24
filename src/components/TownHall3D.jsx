function TownHall3D() {
  return (
    <mesh position={[0,1,0]}>

      <boxGeometry args={[2,2,2]} />

      <meshStandardMaterial
        color="royalblue"
      />

    </mesh>
  );
}

export default TownHall3D;