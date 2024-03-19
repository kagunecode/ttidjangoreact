import { useEffect } from "react";
import { useStore } from "../store";
import { instance } from "../utils/axiosInstance";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Nabvar";

// TODO: Reset headers since a long exp token will persist until reload or until the time has passed

export function Home() {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <h1 className="text-7xl">Tasks</h1>
      </div>
    </div>
  );
}
