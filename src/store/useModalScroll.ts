// import create from "zustand";

import { create } from "zustand";

interface ModalScrollState {
  isModalOpens: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalScroll = create<ModalScrollState>((set) => ({
  isModalOpens: false,
  openModal: () => set({ isModalOpens: true }),
  closeModal: () => set({ isModalOpens: false }),
}));
