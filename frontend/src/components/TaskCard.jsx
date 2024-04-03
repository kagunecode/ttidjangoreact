import { IconPen } from "../icons/IconPen";
import { IconTrash } from "../icons/IconTrash";

export function TaskCard({ task }) {
  return (
    <article className="h-20 border-b border-gray-600 flex justify-between p-4 items-center w-full">
      <div className="flex items-center gap-4">
        <button className="w-6 h-6 border border-black rounded-full"></button>
        <div>
          <h1 className="font-bold">{task.name}</h1>
          <p>{task.description}</p>
          <p className="text-sm text-gray-600">Date</p>
        </div>
      </div>
      <div className="flex gap-4">
        <IconPen className="h-6 w-6" />
        <IconTrash className="h-6 w-6" />
      </div>
    </article>
  );
}
