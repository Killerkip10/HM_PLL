import { createSelector } from 'reselect';

import { IStore } from 'store';

export const getProfile = (state: IStore) => state.profile;

export const getIsFetchingSelector = createSelector(
	getProfile,
	profile => profile.isFetching,
);

export const getFirstNameSelector = createSelector(
	getProfile,
	profile => profile.firstName,
);

export const getLastNameSelector = createSelector(
	getProfile,
	profile => profile.lastName,
);

export const getRoleSelector = createSelector(
	getProfile,
	profile => profile.role,
);
