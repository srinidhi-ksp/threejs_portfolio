function Factory3D() {
  return (
    <mesh position={[5,1,0]}>

      <boxGeometry args={[2,2,2]} />

      <meshStandardMaterial
        color="orange"
      />

    </mesh>
  );
}

export default Factory3D;