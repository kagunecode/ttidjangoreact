import { useEffect, useState } from "react";
import { instance } from "../utils/axiosInstance";
import { useParams } from "react-router-dom";

import { TaskCard } from "./TaskCard";

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
    <div className="w-full flex flex-col gap-2 px-40">
      {tasks && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
  );
}
