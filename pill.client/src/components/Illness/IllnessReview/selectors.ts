import { createSelector } from 'reselect';

import { IStore } from 'store';

const getIllnessReview = (state: IStore) => state.illness.illnessReview;

export const getMedicineIdFilterSelector = createSelector(
	getIllnessReview,
	illnessReview => illnessReview.medicineIdFilter,
);

export const getIllnessReviewGraphicSelector = createSelector(
	getIllnessReview,
	illnessReview => illnessReview.illnessReviewGraphic,
);

export const getIllnessNameSelector = createSelector(
	getIllnessReviewGraphicSelector,
	illnessReviewGraphic => illnessReviewGraphic.name,
);

export const getIllnessGraphicReviewsSelector = createSelector(
	getIllnessReviewGraphicSelector,
	illnessReviewGraphic => illnessReviewGraphic.reviews,
);

export const getIllnessGraphicMedicinesSelector = createSelector(
	getIllnessReviewGraphicSelector,
	illnessReviewGraphic => illnessReviewGraphic.medicines,
);

export const getFilteredIllnessGraphicMedicinesSelector = createSelector(
	getMedicineIdFilterSelector,
	getIllnessGraphicMedicinesSelector,
	(medicineIdFilter, medicines) => {
		const foundedMedicine = medicines.find(m => m.id === medicineIdFilter);

		return foundedMedicine ? foundedMedicine.ratings : [{}];
	},
);

export const getMedicinesSelector = createSelector(
	getIllnessGraphicMedicinesSelector,
	medicines => medicines.map(({ id, name }) => ({ id, name })),
);

export const getIllnessReviewsSelector = createSelector(
	getIllnessReview,
	illnessReview => illnessReview.illnessReviewsList,
);
