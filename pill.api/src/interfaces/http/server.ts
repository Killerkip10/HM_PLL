import express from 'express';
import bodyParser from 'body-parser';

import { IServer } from './interfaces';
import { router } from './router';

export const server = ({ config: { PORT } }): IServer => {
  const app = express();

  app.use(bodyParser.json());

  app.use('/api', router());

  app.get('/', (_, res) => res.send('May the force be with you!!!'));

  return {
    start: () => app.listen(PORT, () => console.log(`Api was started on ${PORT}`)),
  };
};
