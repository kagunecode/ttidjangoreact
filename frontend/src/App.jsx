import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignUp } from "./pages/SingUp";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Nabvar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} index />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={Login} />
      </Routes>
    </>
  );
}
