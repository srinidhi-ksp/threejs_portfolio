import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-800 text-white">

      <Link to="/">Home</Link>

      <Link to="/about">About</Link>

      <Link to="/projects">Projects</Link>

      <Link to="/contact">Contact</Link>

    </nav>
  );
}

export default Navbar;