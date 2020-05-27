import { combineReducers } from 'redux';

import { symptomManage, ISymptomManageState } from './SymptomManage';

export interface ISymptom {
	symptomManage: ISymptomManageState;
}

export const symptom = combineReducers({
	symptomManage,
});
