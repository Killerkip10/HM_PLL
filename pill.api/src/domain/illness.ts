import * as t from 'io-ts';

const ExactIllness = t.type({
  name: t.string,
  description: t.string,
});

const PartialIllness = t.partial({
  id: t.number,
});

const ExactCreateIllness = t.type({
	symptomsIds: t.array(t.number),
	medicinesIds: t.array(t.number),
	recommendationsIds: t.array(t.number),
});

export const Illness = t.intersection([ExactIllness, PartialIllness]);
export const CreateIllness = t.intersection([Illness, ExactCreateIllness]);

export type IIllness = t.TypeOf<typeof Illness>;
export type ICreateIllness = t.TypeOf<typeof CreateIllness>;
