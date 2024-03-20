import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Nabvar";
import { Routes, Route } from "react-router-dom";
import { Project } from "../components/Project";
import { AddProject } from "../components/AddProject";

// TODO: Reset headers since a long exp token will persist until reload or until the time has passed

export function Home() {
  return (
    <div className="h-full relative flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Navbar />
        <Routes>
          <Route path="project/:id" Component={Project} />
        </Routes>
      </div>
      <AddProject />
    </div>
  );
}
