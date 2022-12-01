import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  'en-US': {
    translation: {
      "Hello": "Hello"
    }
  },
  'fr-FR': {
    translation: {
      "Hello": "Bonjour"
    }
  },
  'de-DE': {
    translation: {
      "Hello": "Hallo"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
