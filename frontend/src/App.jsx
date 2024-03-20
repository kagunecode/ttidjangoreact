import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignUp } from "./pages/SingUp";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";

export default function App() {
  return (
    <div className="flex flex-col h-full w-full">
      <Routes>
        <Route path="/" Component={Welcome} index />
        <Route path="/register" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/app/*" Component={Home} />
      </Routes>
    </div>
  );
}
