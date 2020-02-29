import express from 'express';

import { IServer } from './interfaces';
import { router } from './router';

export const server = ({ database: { models }, config: { PORT } }): IServer => {
  const app = express();

  app.use('/api', router());

  app.get('/', (_, res) => res.send('Doroy'));

  return {
    start: () => app.listen(PORT, () => console.log(`Api was started on ${PORT}`, models)),
  };
};
