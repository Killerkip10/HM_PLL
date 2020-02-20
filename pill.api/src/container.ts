import { createContainer, asFunction } from 'awilix';

import { app, methods } from './app';
import { database } from './infra/database';
import { repository } from './infra/repositories';
import { server } from './interfaces/http';

export const container = createContainer();

container.register({
  app: asFunction(app).singleton(),
  methods: asFunction(methods).singleton(),
  server: asFunction(server).singleton(),
  database: asFunction(database).singleton(),
  repository: asFunction(repository).singleton(),
});
