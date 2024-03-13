import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TopPage } from '@/pages';
import { NotFoundPage } from '@/pages/404';
import { IndexPage } from '@/pages/index/[id]';
import { SamplePage } from '@/pages/sample';

import type { FC } from 'react';

import '@/i18n/config';

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/index/:id' element={<IndexPage />} />
        <Route path='/sample' element={<SamplePage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
