import { ISymptom } from 'models';

import {
	Actions,
	GET_SYMPTOMS_REQUEST,
	GET_SYMPTOMS_SUCCESS,
	GET_SYMPTOMS_FAILURE,
	CREATE_SYMPTOM_REQUEST,
	CREATE_SYMPTOM_SUCCESS,
	CREATE_SYMPTOM_FAILURE,
	UPDATE_SYMPTOM_REQUEST,
	UPDATE_SYMPTOM_SUCCESS,
	UPDATE_SYMPTOM_FAILURE,
	DELETE_SYMPTOM_REQUEST,
	DELETE_SYMPTOM_SUCCESS,
	DELETE_SYMPTOM_FAILURE,
} from './actions';

export interface ISymptomManageState {
	isFetching: boolean;
	symptomsList: ISymptom[];
}

const initialState: ISymptomManageState = {
	isFetching: false,
	symptomsList: [],
};

const createSymptom = (symptomsList: ISymptom[], symptom: ISymptom) => [...symptomsList, symptom];

const updateSymptom = (symptomsList: ISymptom[], symptom: ISymptom) => symptomsList
	.map(s => s.id === symptom.id ? { ...s, ...symptom } : s);

const deleteSymptom = (symptomsList: ISymptom[], id: number) => symptomsList.filter(s => s.id !== id);

export const symptomManage = (state: ISymptomManageState = initialState, { type, payload }: Actions) => {
	switch (type) {
		case CREATE_SYMPTOM_SUCCESS:
			return {
				...state,
				symptomsList: createSymptom(state.symptomsList, payload.symptom),
			};
		case UPDATE_SYMPTOM_SUCCESS:
			return {
				...state,
				symptomsList: updateSymptom(state.symptomsList, payload.symptom),
			};
		case DELETE_SYMPTOM_SUCCESS:
			return {
				...state,
				symptomsList: deleteSymptom(state.symptomsList, payload.id),
			};
		case GET_SYMPTOMS_REQUEST:
		case GET_SYMPTOMS_SUCCESS:
		case GET_SYMPTOMS_FAILURE:
		case CREATE_SYMPTOM_REQUEST:
		case CREATE_SYMPTOM_FAILURE:
		case UPDATE_SYMPTOM_REQUEST:
		case UPDATE_SYMPTOM_FAILURE:
		case DELETE_SYMPTOM_REQUEST:
		case DELETE_SYMPTOM_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
