import { combineReducers } from 'redux';

import { illnessList, IIllnessListState } from './IllnessList';

export interface IIllness {
	illnessList: IIllnessListState,
}

export const illness = combineReducers({
	illnessList,
});
