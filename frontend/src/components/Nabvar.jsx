import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex gap-5 h-10 justify-end text-gray-400 px-4 items-center">
      <Link to="/app">Home</Link>
    </nav>
  );
}
