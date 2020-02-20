import express from 'express';

import { IServer } from './interfaces';
import { router } from './router';

const app = express();

app.use(router);

app.get('/', (_, res) => res.send('Doroy'));

export const server = ({ database: { models } }): IServer => ({
  start: () => app.listen(3000, () => console.log('Api was started on 3000', models)),
});
