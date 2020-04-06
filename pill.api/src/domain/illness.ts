import * as t from 'io-ts';

const ExactIllness = t.type({
  name: t.string,
  description: t.string,
});

const PartialIllness = t.partial({
  id: t.number,
});

export const Illness = t.intersection([ExactIllness, PartialIllness]);

export type IIllness = t.TypeOf<typeof Illness>;
