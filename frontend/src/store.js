import { create } from "zustand";

export const useStore = create((set) => ({
  tokenData: "",
  setTokenData: (data) => set(() => ({ tokenData: data })),
}));
