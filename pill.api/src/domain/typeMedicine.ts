import * as t from 'io-ts';

const ExactTypeMedicine = t.type({
  name: t.string,
});

const PartialTypeMedicine = t.partial({
  id: t.number,
});

export const TypeMedicine = t.intersection([ExactTypeMedicine, PartialTypeMedicine]);

export type ITypeMedicine = t.TypeOf<typeof TypeMedicine>;
