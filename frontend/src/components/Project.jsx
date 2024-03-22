import { instance } from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="flex flex-col h-full p-8 items-center">
      <h1 className="text-7xl font-semibold">{projectData?.name}</h1>
    </div>
  );
}
