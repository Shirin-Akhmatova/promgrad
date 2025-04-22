import axios from "axios";
import { useEffect, useState } from "react";

export interface Specialist {
  id: number;
  photo: string;
  name_and_surname: string;
  position: string;
  description: string;
}

export const useSpecialists = () => {
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = import.meta.env.VITE_SPECIALISTS_API_URL;
        const response = await axios.get<Specialist[]>(API_URL);
        setSpecialists(response.data);
      } catch (err: any) {
        setError(err.message || "Ошибка загрузки специалистов");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { specialists, loading, error };
};
