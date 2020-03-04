import { user } from './user';

export interface IApp {
  start: () => void;
}

export const app = ({ server, database }): IApp => ({
    start: () => Promise.resolve()
      .then(database.connect)
      .then(server.start),
});

export const methods = () => ({
  user,
});
