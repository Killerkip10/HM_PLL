import { createSelector } from 'reselect';

import { IStore } from 'store';

const getIllnessEdit = (state: IStore) => state.illness.illnessEdit;

export const getIllnessSelector = createSelector(
	getIllnessEdit,
	illnessEdit => illnessEdit.illnessInfo,
);

export const getNormalizedIllnessSelector = createSelector(
	getIllnessSelector,
	illnessInfo => ({
		...illnessInfo,
		symptomsIds: illnessInfo.symptoms && illnessInfo.symptoms.map(s => s.id),
		medicinesIds: illnessInfo.symptoms && illnessInfo.medicines.map(m => m.id),
		recommendationsIds: illnessInfo.symptoms && illnessInfo.recommendations.map(r => r.id),
	}),
);

export const getSymptomsListSelector = createSelector(
	getIllnessEdit,
	illnessCreate => illnessCreate.symptomsList,
);

export const getMedicinesSelector = createSelector(
	getIllnessEdit,
	illnessCreate => illnessCreate.medicinesList,
);

export const getRecommendationsSelector = createSelector(
	getIllnessEdit,
	illnessCreate => illnessCreate.recommendationsList,
);
