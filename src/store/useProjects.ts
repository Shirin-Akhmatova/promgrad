import { create } from "zustand";
import axios from "axios";
import { useLanguageStore } from "./useLanguage";

type Project = {
  id: number;
  title: string;
  description: string;
  address: string;
  end_date: string;
  tags: { id: number; title: string }[];
  type_construction: { title: string };
  images: { image: string }[];
};

type ProjectStore = {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
};

export const useProjects = create<ProjectStore>((set) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });

    const language = useLanguageStore.getState().language;
    try {
      const response = await axios.get(
        "https://promgrad.kipoha.fun/api/projects/",
        {
          headers: {
            "Accept-Language": language,
          },
        }
      );
      set({ projects: response.data, loading: false });
    } catch (error) {
      set({
        loading: false,
        error:
          error instanceof Error ? error.message : "Failed to fetch projects",
      });
    }
  },
}));
