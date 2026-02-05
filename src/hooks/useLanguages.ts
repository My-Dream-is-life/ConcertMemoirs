import { useCallback, useEffect } from 'react';
import i18n from '@/i18n/config.ts';
import useLanguagesStore from '@/stores/languages';

let initialized = false;

export const useLanguages = () => {
  const { currentLanguage, languages, setCurrentLang, fetchLanguages } =
    useLanguagesStore();

  const changeLanguage = useCallback(
    async (lang: string) => {
      const language = languages.find((el) => el.lang === lang);
      if (!language) return;

      try {
        await i18n.loadLanguages(lang, async (error) => {
          if (error) {
            throw error;
          } else {
            await i18n.changeLanguage(lang, (err) => {
              if (err) {
                throw err;
              } else {
                setCurrentLang(lang);
              }
            });
          }
          document.querySelector('html')?.setAttribute('lang', lang);
        });
      } catch (error) {
        throw error;
      }
    },
    [languages, setCurrentLang]
  );

  useEffect(() => {
    if (!initialized) {
      fetchLanguages();
      initialized = true;
    }
  }, [fetchLanguages]);

  return {
    languages,
    currentLanguage,
    changeLanguage,
  };
};
