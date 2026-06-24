import Building from "../components/Building";
import buildings from "../data/buildings";
import TownHall from "../components/TownHall";
import KeyboardTester from "../components/KeyboardTester";
import ThreeBasics from "./ThreeBasics";
import City from "./City";

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold p-4">
        Welcome to SriVerse
      </h1>
       <KeyboardTester />

      <div className="max-w-md mx-auto my-6">
        <TownHall />
      </div>

      <div className="w-full h-[400px] border border-slate-700 rounded-lg overflow-hidden my-6 bg-black">
        <ThreeBasics />
      </div>

      <div className="w-full h-[800px] border border-slate-700 rounded-lg overflow-hidden my-6 bg-black">
        <City />
      </div>

      <hr className="border-slate-700 my-6" />

      {buildings.map((building) => (
        <Building
          key={building.id}
          name={building.name}
          description={building.description}
        />
      ))}
    </div>
  );
}

export default Home;