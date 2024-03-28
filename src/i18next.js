import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./assets/i18n/en.json";
import ar from "./assets/i18n/ar.json";

export const languageResource = {
  en: { translation: en },
  ar: { translation: ar },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: languageResource,
});

export default i18next;
