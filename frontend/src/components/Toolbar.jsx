import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../store";
import { useForm } from "react-hook-form";

import { TaskForm } from "./TaskForm";
import { IconOptions } from "../icons/IconOptions";
import { IconPlus } from "../icons/IconPlus";
import { instance } from "../utils/axiosInstance";
import { IconTrash } from "../icons/IconTrash";
import { IconPen } from "../icons/IconPen";

export function Toolbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const setRefreshProjects = useStore((state) => state.setRefreshProjects);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await instance.delete(`projects/${id}/`);
    setRefreshProjects(true);
    navigate("/app");
  };

  const addTask = async () => {
    const response = await instance.post(`tasks/`, {});
  };

  const getTasks = async () => {
    const response = await instance.get(`tasks/${id}/`);
  };

  // TODO: Add animations and status for showing card

  return (
    <nav className="flex justify-end items-center w-full gap-2">
      <div>
        <IconPlus />
      </div>
      <div className="relative">
        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className="hover:bg-zinc-200 rounded p-1 cursor-pointer"
        >
          <IconOptions />
        </div>
        <div
          style={{ display: toggleMenu ? "flex" : "none" }}
          className="absolute flex flex-col text-[.9rem] w-[200px] items-start right-0 p-4 mt-2 rounded border bg-zinc-50"
        >
          <button className="gap-1 flex items-center hover:bg-zinc-200 duration-150 w-full rounded py-1 px-2">
            <span>
              <IconPen className="w-5 h-5" />
            </span>{" "}
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="hover:text-red-500 items-center gap-1 flex hover:bg-zinc-200 duration-150 w-full rounded py-1 px-2"
          >
            <span>
              <IconTrash className="w-5 h-5" />
            </span>{" "}
            Delete
          </button>
        </div>
        <div className="absolute flex flex-col text-[.9rem] w-[500px] items-start right-0 p-4 mt-2 rounded border bg-zinc-50">
          <TaskForm />
        </div>
      </div>
    </nav>
  );
}
