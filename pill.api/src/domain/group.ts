import * as t from 'io-ts';

const ExactGroup = t.type({
  name: t.string,
});

const PartialGroup = t.partial({
  id: t.number,
});

export const Group = t.intersection([ExactGroup, PartialGroup]);

export type IGroup = t.TypeOf<typeof Group>;
