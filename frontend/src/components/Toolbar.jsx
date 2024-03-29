import { useNavigate, useParams } from "react-router-dom";
import { IconOptions } from "../icons/IconOptions";
import { IconPlus } from "../icons/IconPlus";
import { instance } from "../utils/axiosInstance";
import { useStore } from "../store";
import { IconTrash } from "../icons/IconTrash";
import { IconPen } from "../icons/IconPen";

export function Toolbar() {
  const { id } = useParams();
  const setRefreshProjects = useStore((state) => state.setRefreshProjects);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await instance.delete(`projects/${id}/`);
    setRefreshProjects(true);
    navigate("/app");
  };

  return (
    <nav className="flex justify-end items-center w-full gap-2">
      <div>
        <IconPlus />
      </div>
      <div className="relative">
        <IconOptions />
        <div className="absolute flex flex-col text-[.9rem] w-[200px] items-start right-0 p-4 mt-2 rounded border bg-zinc-50">
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
      </div>
    </nav>
  );
}
