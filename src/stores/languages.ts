import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Language {
  lang: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface LanguageState {
  currentLang: string;
  currentLanguage: Language;
  languages: Language[];
  setCurrentLang: (lang: string) => void;
  fetchLanguages: () => Promise<void>;
}

const useLanguagesStore = create(
  persist<LanguageState>(
    (set) => ({
      currentLang: 'zh-CN',
      currentLanguage: {
        lang: 'zh-CN',
        name: 'Chinese (Simplified)',
        nativeName: '简体中文',
        flag: '🇨🇳',
      },
      languages: [
        {
          lang: 'zh-CN',
          name: 'Chinese (Simplified)',
          nativeName: '简体中文',
          flag: '🇨🇳',
        },
      ],
      setCurrentLang: (lng: string) => {
        set((state) => ({
          ...state,
          currentLang: lng,
          currentLanguage: state.languages.find((lang) => lang.lang === lng),
        }));
      },
      fetchLanguages: async () => {
        try {
          const response = await fetch('/locales/languages.json');
          const { languages } = await response.json();
          set((state) => ({ ...state, languages }));
        } catch (e) {
          console.error('Failed to fetch languages, falling back to default.', e);
          set((state) => ({
            ...state,
            languages: [
              {
                lang: 'zh-CN',
                name: 'Chinese (Simplified)',
                nativeName: '简体中文',
                flag: '🇨🇳',
              },
            ],
          }));
        }
      },
    }),
    {
      name: 'languages',
    }
  )
);

export default useLanguagesStore;
