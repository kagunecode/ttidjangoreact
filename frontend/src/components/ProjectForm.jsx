export function ProjectForm({
  register,
  handleSubmit,
  addProject,
  setProjectModal,
}) {
  return (
    <div className="bg-white p-4 w-1/4 h-1/3 rounded border drop-shadow-sm justify-start flex flex-col">
      <div>
        <h1 className="text-3xl font-semibold mb-1">Add project</h1>
        <hr />
      </div>
      <form
        onSubmit={handleSubmit(addProject)}
        className="w-full flex flex-col justify-around h-full"
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        <input
          {...register("colour")}
          type="text"
          placeholder="Colour"
          className="border p-2 rounded w-full"
        />
        <div className="flex items-center gap-2 justify-start">
          <input
            {...register("favourite")}
            type="checkbox"
            className="border h-4 w-4 rounded accent-orange-400"
          />
          <h1>Add to favourites</h1>
        </div>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={() => setProjectModal(false)}
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
