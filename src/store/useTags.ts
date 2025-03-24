import { create } from "zustand";
import axios from "axios";

type Tag = {
  id: number;
  title: string;
  primary: boolean;
};

type TagStore = {
  tags: Tag[];
  loading: boolean;
  error: string | null;
  fetchTags: () => Promise<void>;
};

export const useTags = create<TagStore>((set) => ({
  tags: [],
  loading: false,
  error: null,

  fetchTags: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://promgrad.kipoha.fun/api/tags/");
      set({ tags: response.data, loading: false });
    } catch (error) {
      set({
        loading: false,
        error: error instanceof Error ? error.message : "Failed to fetch tags",
      });
    }
  },
}));
