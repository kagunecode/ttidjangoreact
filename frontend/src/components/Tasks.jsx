import { useEffect, useState } from "react";
import { instance } from "../utils/axiosInstance";
import { useParams } from "react-router-dom";

import { TaskCard } from "./TaskCard";
import { useStore } from "../store";

export function Tasks() {
  const [tasks, setTasks] = useState(null);
  const [refreshTasks, setRefreshTasks] = useStore((status) => [
    status.refreshTasks,
    status.setRefreshTasks,
  ]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await instance.get(`tasks/${id}`);
      setTasks(response.data);
    })();
    setRefreshTasks(false);
  }, [id, refreshTasks]);

  return (
    <div className="w-full items-center flex flex-col gap-2 px-40">
      {tasks && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
  );
}
