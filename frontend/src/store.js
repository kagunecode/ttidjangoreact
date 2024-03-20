import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

export const useStore = create((set) => ({
  userData: [],
  tokenData: localStorage.getItem("authTokens")
    ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access)
    : "",
  localToken: localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null,
  projectModal: false,
  refreshProjects: true,
  setTokenData: (data) => set(() => ({ tokenData: data })),
  setLocalToken: (data) => set(() => ({ localToken: data })),
  setUserData: (data) => set(() => ({ userData: data })),
  setProjectModal: () =>
    set((state) => ({ projectModal: !state.projectModal })),
  setRefreshProjects: (value) => set(() => ({ refreshProjects: value })),
}));
