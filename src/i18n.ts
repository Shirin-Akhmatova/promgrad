// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Для загрузки файлов
import LanguageDetector from "i18next-browser-languagedetector"; // Для определения языка

i18n
  .use(Backend) // Используем backend для загрузки файлов
  .use(LanguageDetector) // Используем детектор языка
  .use(initReactI18next) // Инициализация для React
  .init({
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Путь к файлам локализаций
    },
  });

export default i18n;
