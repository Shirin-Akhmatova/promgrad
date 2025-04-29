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

// export const useSpecialists = () => {
//   const [specialists, setSpecialists] = useState<Specialist[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchData = async (page: number) => {
//     try {
//       setLoading(true);
//       const API_URL = import.meta.env.VITE_SPECIALISTS_API_URL;
//       const response = await axios.get<Specialist[]>(
//         `${API_URL}?page=${page}&limit=10`
//       );
//       if (response.data.length === 0) {
//         setHasMore(false);
//       } else {
//         setSpecialists((prev) => [...prev, ...response.data]);
//       }
//     } catch (err: any) {
//       setError(err.message || "Ошибка загрузки специалистов");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   const loadMore = () => {
//     if (hasMore && !loading) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   return { specialists, loading, error, loadMore, hasMore };
// };
