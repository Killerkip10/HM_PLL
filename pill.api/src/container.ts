import { createContainer, asFunction, asValue } from 'awilix';

import { app, methods, IMethods } from './app';
import { config } from './config';
import { database } from './infra/database';
import { repository, IRepository } from './infra/repositories';
import { constants, IConstants } from './infra/constants';
import { server } from './interfaces/http';

export interface IContainer {
  repository: IRepository;
  methods: IMethods; // eslint-disable-line @typescript-eslint/no-explicit-any
  server: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  database: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  config: any; // eslint-disable-line @typescript-eslint/no-explicit-any
	constants: IConstants;
}

export const container = createContainer();

container.register({
  app: asFunction(app).singleton(),
  methods: asFunction(methods).singleton(),
  server: asFunction(server).singleton(),
  database: asFunction(database).singleton(),
  repository: asFunction(repository).singleton(),
  config: asValue(config),
	constants: asValue(constants),
});
