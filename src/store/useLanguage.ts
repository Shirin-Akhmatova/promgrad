import { create } from "zustand";

type LanguageStore = {
  language: string;
  setLanguage: (lang: string) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: localStorage.getItem("language") || "RU",
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));
