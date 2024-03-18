import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store";

export function Navbar() {
  const navigate = useNavigate();
  const localToken = useStore((state) => state.localToken);
  const [setTokenData, setLocalToken] = useStore((state) => [
    state.setTokenData,
    state.setLocalToken,
  ]);
  const handleLogout = () => {
    localStorage.removeItem("authTokens");
    setTokenData("");
    setLocalToken(null);
    navigate("/login");
  };
  return (
    <nav className="flex gap-5">
      <Link to="/">Home</Link>
      {localToken && (
        <a className="cursor-pointer" onClick={handleLogout}>
          Logout
        </a>
      )}
      {!localToken && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
