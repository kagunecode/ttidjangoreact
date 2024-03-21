import { useForm } from "react-hook-form";
import { useStore } from "../store";
import { ProjectForm } from "./ProjectForm";
import { addProject } from "../utils/addProject";

export function AddProject() {
  const [tokenData, projectModal, setProjectModal, setRefreshProjects] =
    useStore((state) => [
      state.tokenData,
      state.projectModal,
      state.setProjectModal,
      state.setRefreshProjects,
    ]);
  const { register, handleSubmit, reset } = useForm();
  const handleAddProject = async (formData) => {
    await addProject(formData, setProjectModal, setRefreshProjects, tokenData);
    reset();
  };
  return (
    <section
      style={{ display: projectModal ? "flex" : "none" }}
      className="h-full w-full items-center justify-center absolute bg-black/40 backdrop-blur-sm"
    >
      <ProjectForm
        register={register}
        handleSubmit={handleSubmit}
        setProjectModal={setProjectModal}
        addProject={handleAddProject}
      />
    </section>
  );
}
