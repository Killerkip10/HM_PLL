import { user, IUser } from './user';
import { illness, IIllness } from './illness';
import { medicine, IMedicine } from './medicine';

export interface IApp {
  start: () => void;
}

export interface IMethods {
  user: IUser;
  illness: IIllness;
  medicine: IMedicine;
}

export const app = ({ server, database }): IApp => ({
    start: () => Promise.resolve()
      .then(database.connect)
      .then(server.start),
});

export const methods = (): IMethods => ({
  user,
  illness,
  medicine,
});
