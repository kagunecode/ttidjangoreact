import { Link } from "react-router-dom";
import useStore from "../store";

export function Navbar() {
  const localToken = useStore((state) => state.localToken);
  return (
    <nav className="flex gap-5">
      <Link to="/">Home</Link>
      {localToken && <Link to="/logout">Login</Link>}
      {!localToken && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
