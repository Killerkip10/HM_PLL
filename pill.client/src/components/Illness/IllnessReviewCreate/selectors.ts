import { createSelector } from 'reselect';

import { IStore } from 'store';
import { FORM_FIELDS, initialValues } from 'components/common/forms/IllnessReviewCreateForm';

const getIllnessReviewCreate = (state: IStore) => state.illness.illnessReviewCreate;

export const getMedicinesSelector = createSelector(
	getIllnessReviewCreate,
	illnessReviewCreate => illnessReviewCreate.medicinesList,
);

export const getInitialIllnessReviewSelector = createSelector(
	getMedicinesSelector,
	medicinesList => ({
		...initialValues,
		[FORM_FIELDS.MEDICINES]: medicinesList.map(({ id }) => ({
			[FORM_FIELDS.MEDICINE_ID]: id,
			[FORM_FIELDS.MEDICINE_RATING]: 3,
		}))
	}),
);
