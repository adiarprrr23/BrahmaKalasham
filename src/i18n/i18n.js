import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import kn from './translations/kn';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      kn: { translation: kn }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;