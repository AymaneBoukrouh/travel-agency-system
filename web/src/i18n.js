import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslations from './locale/en';
import frenchTranslations from './locale/fr';
import germanTranslations from './locale/de';

const resources = {
  'en-US': {
    translation: englishTranslations
  },
  'fr-FR': {
    translation: frenchTranslations
  },
  'de-DE': {
    translation: germanTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('locale') || 'en-US',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
