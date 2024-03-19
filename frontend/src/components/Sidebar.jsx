import { useEffect, useState } from "react";
import { useStore } from "../store";
import { instance } from "../utils/axiosInstance";

export function Sidebar() {
  const [projects, setProjects] = useState([]);
  const [setTokenData, setLocalToken, setUserData] = useStore((state) => [
    state.setTokenData,
    state.setLocalToken,
    state.setUserData,
  ]);
  const tokenData = useStore((state) => state.tokenData);

  const handleLogout = () => {
    localStorage.removeItem("authTokens");
    setTokenData("");
    setLocalToken(null);
    setUserData([]);
    window.location.reload();
  };
  useEffect(() => {
    (async () => {
      const response = await instance.get("projects/");
      setProjects(response.data);
    })();
  }, []);
  return (
    <nav className="bg-zinc-50 p-4 min-w-[280px]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Hello {tokenData?.name}</h1>
        {tokenData && (
          <button
            onClick={handleLogout}
            className="hover:text-red-400 duration-150"
          >
            Logout
          </button>
        )}
      </div>
      <div>
        <h2 className="text-gray-500">Your projects</h2>
        {projects &&
          projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between hover:bg-blue-200 cursor-pointer px-2 duration-150 py-1 rounded-sm"
            >
              <h1>
                <span style={{ color: project.colour }}>• </span>
                {project.name}
              </h1>
            </div>
          ))}
      </div>
    </nav>
  );
}
