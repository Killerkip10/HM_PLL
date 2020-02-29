import { createContainer, asFunction, asValue } from 'awilix';

import { app, methods } from './app';
import { config } from './config';
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
  config: asValue(config),
});
