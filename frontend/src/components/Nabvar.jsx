import { Link } from "react-router-dom";
import { useStore } from "../store";

export function Navbar() {
  const localToken = useStore((state) => state.localToken);
  return (
    <nav className="flex gap-5 h-10 justify-end text-gray-400 px-4 items-center">
      {localToken && <Link to="/">Home</Link>}
      {!localToken && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
