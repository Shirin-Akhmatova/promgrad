import { create } from "zustand";
import axios from "axios";

interface FeedbackFormData {
  name: string;
  phone_number: string;
}

interface FeedbackState {
  loading: boolean;
  error: string | null;
  success: boolean;
  sendFeedback: (formData: FeedbackFormData) => Promise<void>;
}

export const useFeedback = create<FeedbackState>((set) => ({
  loading: false,
  error: null,
  success: false,

  sendFeedback: async ({ name, phone_number }) => {
    set({ loading: true, error: null, success: false });

    try {
      const payload = {
        name,
        phone_number,
      };

      const response = await axios.post(
        import.meta.env.VITE_CREATE_API_URL,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        set({ success: true, loading: false });
        console.log("Заявка успешно отправлена!");
      } else {
        set({
          error: `Ошибка при отправке данных. Статус: ${response.status}`,
          loading: false,
        });
      }
    } catch (err) {
      let errorMessage = "Не удалось отправить заявку";

      if (axios.isAxiosError(err)) {
        errorMessage =
          err.response?.data?.message ||
          err.message ||
          "Неизвестная ошибка от сервера";
        console.error("Axios error:", errorMessage);
      } else {
        console.error("General error:", err);
      }

      set({ error: errorMessage, loading: false });
    }
  },
}));
