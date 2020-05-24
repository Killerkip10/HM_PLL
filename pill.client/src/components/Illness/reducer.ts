import { combineReducers } from 'redux';

import { illnessList, IIllnessListState } from './IllnessList';
import { illnessDetails, IIllnessDetailsState } from './IllnessDetails';
import { illnessCreate, IIllnessCreateState } from './IllnessCreate';

export interface IIllness {
	illnessList: IIllnessListState,
	illnessDetails: IIllnessDetailsState,
	illnessCreate: IIllnessCreateState,
}

export const illness = combineReducers({
	illnessList,
	illnessDetails,
	illnessCreate,
});
