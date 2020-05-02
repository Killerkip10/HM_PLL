import { createSelector } from 'reselect';

import { IStore } from 'store';

const getIllnessList = (state: IStore) => state.illness.illnessList;

export const getSymptomsListSelector = createSelector(
	getIllnessList,
	illness => illness.symptomsList,
);
