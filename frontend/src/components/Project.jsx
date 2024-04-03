import { instance } from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Toolbar } from "./Toolbar";
import { Tasks } from "./Tasks";

export function Project() {
  const [projectData, setProjectData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await instance.get(`projects/${id}/`);
      setProjectData(response.data);
    })();
  }, [id]);
  return (
    <div className="flex flex-col h-full p-4 items-center">
      <Toolbar />
      <h1 className="text-7xl font-semibold mb-8">{projectData?.name}</h1>
      <Tasks />
    </div>
  );
}
