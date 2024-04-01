import { useEffect, useState } from "react";
import { instance } from "../utils/axiosInstance";
import { useParams } from "react-router-dom";

export function Tasks() {
  const [tasks, setTasks] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await instance.get(`tasks/${id}`);
      setTasks(response.data);
    })();
  }, [id]);

  return (
    <>{tasks && tasks.map((task) => <h1 key={task.id}>{task.name}</h1>)}</>
  );
}
