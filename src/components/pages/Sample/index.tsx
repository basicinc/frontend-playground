import { useTranslation } from 'react-i18next';

import type { FC } from 'react';

export const Sample: FC = () => {
  const { t } = useTranslation('sample');

  return (
    <main>
      <h1>{t('heading')}</h1>
    </main>
  );
};
