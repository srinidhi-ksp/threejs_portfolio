import Ground from "../components/environment/Ground";
import Road from "../components/environment/Road";
import TestCube from "../components/environment/TestCube";
import SkyBox from "../components/environment/SkyBox";
import Fog from "../components/effects/Fog";
import Trees from "../components/environment/Trees";
import TownHall from "../components/buildings/TownHall";

export default function CityScene() {
  return (
    <>
      <SkyBox />
      <Fog />
      <Ground />

      {/* Main Roads */}
      <Road position={[0, 0.05, 0]} width={8} length={120} />
      <Road position={[0, 0.05, 0]} width={120} length={8} />

      {/* Left Side */}
      <Road position={[-35, 0.05, 0]} width={4} length={50} />

      {/* Right Side */}
      <Road position={[35, 0.05, 0]} width={4} length={50} />

      {/* Top Side */}
      <Road position={[0, 0.05, -35]} width={50} length={4} />

      {/* Bottom Side */}
      <Road position={[0, 0.05, 35]} width={50} length={4} />
      
      <Trees />

      <TownHall/>

    </>

    
  );
}