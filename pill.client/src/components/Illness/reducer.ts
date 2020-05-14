import { combineReducers } from 'redux';

import { illnessList, IIllnessListState } from './IllnessList';
import { illnessDetails, IIllnessDetailsState } from './IllnessDetails';

export interface IIllness {
	illnessList: IIllnessListState,
	illnessDetails: IIllnessDetailsState,
}

export const illness = combineReducers({
	illnessList,
	illnessDetails,
});
