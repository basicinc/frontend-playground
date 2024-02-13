import { useParams } from 'react-router-dom';

import type { FC } from 'react';

export const IndexPage: FC = () => {
  const { id } = useParams();

  return <h1>Index {id}</h1>;
};
