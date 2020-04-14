import * as t from 'io-ts';

const ExactSymptom = t.type({
  name: t.string,
});

const PartialSymptom = t.partial({
  id: t.number,
});

export const Symptom = t.intersection([ExactSymptom, PartialSymptom]);

export type ISymptom = t.TypeOf<typeof Symptom>;
