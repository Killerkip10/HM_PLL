import * as t from 'io-ts';

const ExactRoute = t.type({
  name: t.string,
});

const PartialRoute = t.partial({
  id: t.number,
});

export const Route = t.intersection([ExactRoute, PartialRoute]);

export type IRoute = t.TypeOf<typeof Route>;
