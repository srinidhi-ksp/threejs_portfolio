import { useState } from "react";

function TownHall() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">

      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Enter Town Hall
      </button>

      {isOpen && (
        <div className="mt-4 border p-4">

          <h2>About Me</h2>

          <p>
            Welcome to SriVerse!
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
          >
            Close
          </button>

        </div>
      )}

    </div>
  );
}

export default TownHall;