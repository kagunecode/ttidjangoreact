import { useEffect, useState } from "react";
import { useStore } from "../store";
import { instance } from "../utils/axiosInstance";
import { Link } from "react-router-dom";

import { IconPlus } from "../icons/IconPlus";
import { IconLogout } from "../icons/IconLogout";

export function Sidebar() {
  const [projects, setProjects] = useState([]);
  const [
    setTokenData,
    setLocalToken,
    setUserData,
    setProjectModal,
    setRefreshProjects,
  ] = useStore((state) => [
    state.setTokenData,
    state.setLocalToken,
    state.setUserData,
    state.setProjectModal,
    state.setRefreshProjects,
  ]);
  const [tokenData, refreshProjects] = useStore((state) => [
    state.tokenData,
    state.refreshProjects,
  ]);

  const handleLogout = () => {
    localStorage.removeItem("authTokens");
    setTokenData("");
    setLocalToken(null);
    setUserData([]);
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      if (refreshProjects) {
        const response = await instance.get("projects/");
        setProjects(response.data);
        setRefreshProjects(false);
      }
    })();
  }, [refreshProjects]);
  return (
    <nav className="bg-zinc-50 p-4 min-w-[280px]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Hello {tokenData?.name}</h1>
        <button
          onClick={handleLogout}
          className="hover:text-red-400 duration-150"
        >
          <IconLogout />
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center text-gray-500 my-2">
          <h2>Your projects</h2>
          <div
            className="cursor-pointer hover:text-orange-400 duration-150"
            onClick={() => setProjectModal(true)}
          >
            <IconPlus />
          </div>
        </div>
        {projects &&
          projects.map((project) => (
            <Link
              to={`/app/project/${project.id}`}
              key={project.id}
              className="flex items-center justify-between hover:bg-orange-200 cursor-pointer px-2 duration-150 py-1 rounded-sm"
            >
              <h1>
                <span style={{ color: project.colour }}>• </span>
                {project.name}
              </h1>
            </Link>
          ))}
      </div>
    </nav>
  );
}
