import { useEffect, useState } from "react";
import { useStore } from "../store";
import axios from "axios";

export function Home() {
  const [projects, setProjects] = useState([]);
  const [tokenData, localToken] = useStore((state) => [
    state.tokenData,
    state.localToken,
  ]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://127.0.0.1:8000/projects/", {
        headers: { Authorization: `Bearer ${localToken.access}` },
      });
      setProjects(response.data);
    })();
  }, []);

  const projectRender = projects.map((project) => (
    <h1 key={project.id} style={{ background: project.colour }}>
      {project.name}
    </h1>
  ));
  return (
    <div>
      {localToken && <h1 className="text-3xl">Welcome {tokenData.name}</h1>}
      <h1 className="text-7xl">Your Projects</h1>
      {projectRender}
    </div>
  );
}
