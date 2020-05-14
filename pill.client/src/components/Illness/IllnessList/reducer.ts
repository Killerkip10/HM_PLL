import { ISymptom, IIllnessShort } from 'models';

import {
	Actions,
	GET_SYMPTOMS_REQUEST,
	GET_SYMPTOMS_SUCCESS,
	GET_SYMPTOMS_FAILURE,
	GET_ILLNESSES_REQUEST,
	GET_ILLNESSES_SUCCESS,
	GET_ILLNESSES_FAILURE,
} from './actions';

export interface IIllnessListState {
	isFetching: boolean;
	symptomsList: ISymptom[];
	illnessesList: IIllnessShort[];
}

const initialState: IIllnessListState = {
	isFetching: false,
	symptomsList: [],
	illnessesList: [],
};

export const illnessList = (state: IIllnessListState = initialState, { type, payload }: Actions): IIllnessListState => {
	switch (type) {
		case GET_SYMPTOMS_REQUEST:
		case GET_SYMPTOMS_SUCCESS:
		case GET_SYMPTOMS_FAILURE:
		case GET_ILLNESSES_REQUEST:
		case GET_ILLNESSES_SUCCESS:
		case GET_ILLNESSES_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
