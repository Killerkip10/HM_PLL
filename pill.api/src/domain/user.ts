import * as t from 'io-ts';

const ExactUser = t.type({
  firstName: t.string,
  lastName: t.string,
  email: t.string,
  password: t.string,
});

const PartialUser = t.partial({
  id: t.number,
});

export const User = t.intersection([ExactUser, PartialUser]);

export type IUser = t.TypeOf<typeof User>;
