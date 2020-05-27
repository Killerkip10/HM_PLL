import * as t from 'io-ts';

const ExactIllness = t.type({
  name: t.string,
  description: t.string,
});

const PartialIllness = t.partial({
  id: t.number,
});

const ExactCreateIllness = t.type({
	symptomsIds: t.array(t.string),
	medicinesIds: t.array(t.string),
	recommendationsIds: t.array(t.string),
});

export const Illness = t.intersection([ExactIllness, PartialIllness]);
export const CreateIllness = t.intersection([Illness, ExactCreateIllness]);

export type IIllness = t.TypeOf<typeof Illness>;
export type ICreateIllness = t.TypeOf<typeof CreateIllness>;
