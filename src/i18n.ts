// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your language files
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language in case the selected language file is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
