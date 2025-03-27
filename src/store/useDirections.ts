import { create } from "zustand";
import axios from "axios";

interface Direction {
  id: number;
  title: string;
}

interface DirectionsState {
  directions: Direction[];
  loading: boolean;
  error: string | null;
  fetchDirections: (language: string) => void;
}

export const useDirections = create<DirectionsState>((set) => ({
  directions: [],
  loading: false,
  error: null,
  fetchDirections: async (language: string) => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get<Direction[]>(
        import.meta.env.VITE_ORGANIZATION_API_URL,
        {
          headers: {
            "Accept-Language": language,
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        set({ directions: data, loading: false });
      } else {
        set({ error: "Ошибка загрузки направлений", loading: false });
      }
    } catch (err) {
      set({ error: "Не удалось загрузить направления", loading: false });
    }
  },
}));
