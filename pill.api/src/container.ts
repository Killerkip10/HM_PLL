import { createContainer, asFunction, asValue } from 'awilix';

import { app, methods } from './app';
import { config } from './config';
import { database } from './infra/database';
import { repository, IRepository } from './infra/repositories';
import { server } from './interfaces/http';

export interface IContainer {
  repository: IRepository;
  methods: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  server: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  database: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  config: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const container = createContainer();

container.register({
  app: asFunction(app).singleton(),
  methods: asFunction(methods).singleton(),
  server: asFunction(server).singleton(),
  database: asFunction(database).singleton(),
  repository: asFunction(repository).singleton(),
  config: asValue(config),
});
