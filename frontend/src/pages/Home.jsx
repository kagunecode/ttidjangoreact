import { useEffect } from "react";
import { useStore } from "../store";
import { instance } from "../utils/axiosInstance";

// TODO: Reset headers since a long exp token will persist until reload or until the time has passed

export function Home() {
  const [user, setUserData] = useStore((state) => [
    state.userData,
    state.setUserData,
  ]);
  const [tokenData, localToken] = useStore((state) => [
    state.tokenData,
    state.localToken,
  ]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await instance.get("projects/");
    console.log(response);
    setUserData(response.data);
  };

  const projectRender = user.map((project) => (
    <h1 key={project.id} style={{ background: project.colour }}>
      {project.name}
    </h1>
  ));
  return (
    <div>
      {localToken && <h1 className="text-3xl">Welcome {tokenData.name}</h1>}
      <h1 className="text-7xl">Your Projects</h1>
      {projectRender}
    </div>
  );
}
