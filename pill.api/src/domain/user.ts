import * as t from 'io-ts';

export const User = t.type({
  id: t.number,
  firstName: t.string,
  lastName: t.string,
  email: t.string,
  password: t.string,
});

export type IUser = t.TypeOf<typeof User>;
