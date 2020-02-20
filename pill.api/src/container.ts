import { createContainer, asFunction } from 'awilix';

import { app } from './app';
import { database } from './infra/database';
import { server } from './interfaces/http';

export const container = createContainer();

container.register({
  app: asFunction(app).singleton(),
  server: asFunction(server).singleton(),
  database: asFunction(database).singleton(),
});
