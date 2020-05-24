import { createSelector } from 'reselect';

import { IStore } from 'store';

const getIllnessList = (state: IStore) => state.illness.illnessList;

export const getSymptomsListSelector = createSelector(
	getIllnessList,
	illnessList => illnessList.symptomsList,
);

export const getNormalizedSymptomsListSelector = createSelector(
	getSymptomsListSelector,
	symptomsList => [{ id: '' }, ...symptomsList],
);

export const getIllnessesListSelector = createSelector(
	getIllnessList,
	illnessList => illnessList.illnessesList,
);
