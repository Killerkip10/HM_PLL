import { ISymptom } from 'models';

import { Actions, GET_SYMPTOMS_REQUEST, GET_SYMPTOMS_SUCCESS, GET_SYMPTOMS_FAILURE } from './actions';

export interface IIllnessListState {
	isFetching: boolean;
	symptomsList: ISymptom[];
}

const initialState: IIllnessListState = {
	isFetching: false,
	symptomsList: [],
};

export const illnessList = (state: IIllnessListState = initialState, { type, payload }: Actions): IIllnessListState => {
	switch (type) {
		case GET_SYMPTOMS_REQUEST:
		case GET_SYMPTOMS_SUCCESS:
		case GET_SYMPTOMS_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
