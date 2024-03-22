import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Nabvar";
import { Routes, Route } from "react-router-dom";
import { Project } from "../components/Project";
import { AddProject } from "../components/AddProject";

export function Home() {
  return (
    <div className="h-full relative flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Routes>
          <Route path="project/:id" Component={Project} />
        </Routes>
      </div>
      <AddProject />
    </div>
  );
}
