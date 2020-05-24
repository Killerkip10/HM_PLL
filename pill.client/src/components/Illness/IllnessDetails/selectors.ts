import { createSelector } from 'reselect';

import { IStore } from 'store';

export const getIllnessDetails = (state: IStore) => state.illness.illnessDetails;

export const getIsFetchingSelector = createSelector(
	getIllnessDetails,
	illnessDetails => illnessDetails.isFetching,
);

export const getIllnessInfoSelector = createSelector(
	getIllnessDetails,
	illnessDetails => illnessDetails.illnessInfo,
);
