import { create } from "zustand";

export const useMusicStore = create((set) => {
  return {
    music: [],
    // removeAllMusic: () => set((state) => ({ musics: [] })),
    setMusic: (newMusic) => set((state) => ({ music: [...newMusic] })),
    removeMusic: () => set((state) => ({ music: [] })),
  };
});
