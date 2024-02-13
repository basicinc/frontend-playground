import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import en from '@/i18n/en.json';
import ja from '@/i18n/ja.json';
import { getUserLocale } from '@/libs/userLocale';
import { TopPage } from '@/pages';
import { NotFoundPage } from '@/pages/404';
import { IndexPage } from '@/pages/index/[id]';

import type { FC } from 'react';

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  resources: {
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
  lng: getUserLocale(),
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/index/:id' element={<IndexPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
