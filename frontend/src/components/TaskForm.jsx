import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { instance } from "../utils/axiosInstance";
import { useStore } from "../store";

export function TaskForm() {
  const { id } = useParams();
  const tokenData = useStore((status) => status.tokenData);
  const { handleSubmit, register } = useForm();
  const addTask = async (formData) => {
    const response = await instance.post("tasks/", {
      name: formData.name,
      description: formData.description,
      status: formData.status,
      user: tokenData.user_id,
      project: id,
    });
  };
  return (
    <div className="bg-white gap-3 p-6 w-full h-full rounded border drop-shadow-sm justify-start flex flex-col">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Add task</h1>
        <hr />
      </div>
      <form
        onSubmit={handleSubmit(addTask)}
        className="w-full flex flex-col gap-3 justify-around h-full mt-2"
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        <input
          {...register("description")}
          type="text"
          placeholder="Description"
          className="border p-2 rounded w-full"
        />
        <div className="flex items-center gap-2 justify-start">
          <input
            {...register("status")}
            type="checkbox"
            className="border h-4 w-4 rounded accent-orange-400"
          />
          <h1>Completed?</h1>
        </div>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="bg-gray-400 cursor-pointer hover:bg-orange-400 duration-150 text-white p-2 w-20 rounded"
          >
            Cancel
          </button>
          <input
            className="bg-orange-300 cursor-pointer hover:bg-orange-400 duration-150 text-white p-2 w-20 rounded"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
}
