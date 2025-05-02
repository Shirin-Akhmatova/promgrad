import { create } from "zustand";

interface State {
  expanded: boolean;
  toggleAll: () => void;
}

export const useDescriptionToggle = create<State>((set) => ({
  expanded: false,
  toggleAll: () =>
    set((state) => ({
      expanded: !state.expanded,
    })),
}));
