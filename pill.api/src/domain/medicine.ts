import * as t from 'io-ts';

const ExactMedicine = t.type({
  name: t.string,
  description: t.string,
  wayUse: t.string,
  typeMedicineId: t.number,
  routeId: t.number,
  productionMedicineMethodId: t.number,
});

const PartialMedicine = t.partial({
  id: t.number,
});

export const Medicine = t.intersection([ExactMedicine, PartialMedicine]);

export type IMedicine = t.TypeOf<typeof Medicine>;
