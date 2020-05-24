import { createSelector } from 'reselect';

import { IStore } from 'store';

const getIllnessCreate = (state: IStore) => state.illness.illnessCreate;

export const getSymptomsListSelector = createSelector(
	getIllnessCreate,
	illnessCreate => illnessCreate.symptomsList,
);

export const getMedicinesSelector = createSelector(
	getIllnessCreate,
	illnessCreate => illnessCreate.medicinesList,
);

export const getRecommendationsSelector = createSelector(
	getIllnessCreate,
	illnessCreate => illnessCreate.recommendationsList,
);
