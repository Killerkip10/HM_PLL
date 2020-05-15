import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';

import { IServer } from './interfaces';
import { router } from './router';

export const server = ({ config: { PORT, SESSION } }): IServer => {
  const app = express();

  app.use(bodyParser.json());
	app.use(session(SESSION));

  app.use('/api', router());
  app.use(express.static(path.join(__dirname, '../../../../pill.client/build')));

  app.get('/', (_, res) => res.send('May the force be with you!!!'));

  return {
    start: () => app.listen(PORT, () => console.log(`Api was started on ${PORT}`)),
  };
};
