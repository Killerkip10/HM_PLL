import * as t from 'io-ts';

const ExactProductionMedicineMethod = t.type({
  name: t.string,
});

const PartialProductionMedicineMethod  = t.partial({
  id: t.number,
});

export const ProductionMedicineMethod = t.intersection([ExactProductionMedicineMethod, PartialProductionMedicineMethod]);

export type IProductionMedicineMethod = t.TypeOf<typeof ProductionMedicineMethod>;
