import user from './user';
import { IApp } from './interfaces';

export const app = ({ server, database }): IApp => ({
    start: () => Promise.resolve()
      .then(database.connect())
      .then(server.start),
});

export const methods = () => ({
  user,
});
