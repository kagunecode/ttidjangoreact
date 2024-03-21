import { instance } from "./axiosInstance";

export async function addProject(
  formData,
  setProjectModal,
  setRefreshProjects,
  tokenData
) {
  await instance.post("projects/", {
    name: formData.name,
    colour: formData.colour,
    favourite: formData.favourite,
    user: tokenData.user_id,
  });
  setProjectModal(false);
  setRefreshProjects(true);
}
