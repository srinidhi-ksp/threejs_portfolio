import Road from "./Road";

export default function Roads() {
  return (
    <>
      <Road position={[0, 0.05, 0]} width={8} length={120} />
      <Road position={[0, 0.05, 0]} width={120} length={8} />

      <Road position={[-35, 0.05, 0]} width={4} length={50} />
      <Road position={[35, 0.05, 0]} width={4} length={50} />

      <Road position={[0, 0.05, -35]} width={50} length={4} />
      <Road position={[0, 0.05, 35]} width={50} length={4} />
    </>
  );
}