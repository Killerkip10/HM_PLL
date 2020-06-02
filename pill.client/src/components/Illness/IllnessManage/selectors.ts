import { createSelector } from 'reselect';

import { IStore } from 'store';

const getIllnessManage = (state: IStore) => state.illness.illnessManage;

export const getIllnessesSelector = createSelector(
	getIllnessManage,
	illnessManage => illnessManage.illnessesList,
);

export const getNormalizedIllnessesSelector = createSelector(
	getIllnessesSelector,
	illnessesList => illnessesList.map(({ createdAt, updatedAt, ...illness }) => ({
		...illness,
		createdAt: new Date(createdAt).toLocaleString(),
		updatedAt: new Date(updatedAt).toLocaleString(),
	})),
);
