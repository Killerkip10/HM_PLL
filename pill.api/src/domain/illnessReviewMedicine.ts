import * as t from 'io-ts';

const ExactIllnessReviewMedicine = t.type({
	medicineId: t.number,
	rating: t.number,
});

const PartialIllnessReviewMedicine = t.partial({
	id: t.number,
	illnessReviewId: t.number,
});

export const IllnessReviewMedicine = t.intersection([ExactIllnessReviewMedicine, PartialIllnessReviewMedicine]);

export type IIllnessReviewMedicine = t.TypeOf<typeof IllnessReviewMedicine>;
