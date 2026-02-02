import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import useLanguagesStore from '@/stores/languages';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: useLanguagesStore.getState().currentLang,
    fallbackLng: 'zh-CN',
    debug: import.meta.env.MODE === 'development',
    ns: ['common', 'page'],
    defaultNS: 'page',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
