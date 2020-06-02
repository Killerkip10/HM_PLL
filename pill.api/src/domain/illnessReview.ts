import * as t from 'io-ts';

import { IllnessReviewMedicine } from './illnessReviewMedicine';

const ExactIllnessReview = t.type({
	illnessId: t.number,
	review: t.string,
	descriptionRating: t.number,
	symptomsRating: t.number,
	recommendationsRating: t.number,
	medicines: t.array(IllnessReviewMedicine),
});

const PartialIllnessReview = t.partial({
	id: t.number,
});

export const IllnessReview = t.intersection([ExactIllnessReview, PartialIllnessReview]);

export type IIllnessReview = t.TypeOf<typeof IllnessReview>;
