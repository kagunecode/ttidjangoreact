import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

export const useStore = create((set) => ({
  tokenData: localStorage.getItem("authTokens")
    ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access)
    : "",
  localToken: localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null,
  setTokenData: (data) => set(() => ({ tokenData: data })),
  setLocalToken: (data) => set(() => ({ localToken: data })),
}));
