import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import sampleEn from '@/i18n/en/sample.json';
import sampleJa from '@/i18n/ja/sample.json';
import { getUserLocale } from '@/libs/userLocale';

export const resources = {
  en: {
    sample: sampleEn,
  },
  ja: {
    sample: sampleJa,
  },
} as const;

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  ns: ['sample'],
  resources: resources,
  lng: getUserLocale(),
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18n;
