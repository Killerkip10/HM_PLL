import { createSelector } from 'reselect';

import { IStore } from 'store';

const getSymptomManage = (state: IStore) => state.symptom.symptomManage;

export const getSymptomsListSelector = createSelector(
	getSymptomManage,
	symptomManage => symptomManage.symptomsList,
);
