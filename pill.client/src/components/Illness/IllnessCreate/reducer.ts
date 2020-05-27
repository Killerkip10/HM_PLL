import { ISymptom, IMedicine, IRecommendation } from 'models';

import {
	Actions,
	GET_SYMPTOMS_SUCCESS,
	GET_MEDICINES_SUCCESS,
	GET_RECOMMENDATIONS_SUCCESS,
	CHANGE_IS_FETCHING,
	CREATE_ILLNESS_REQUEST,
	CREATE_ILLNESS_SUCCESS,
	CREATE_ILLNESS_FAILURE,
} from './actions';

export interface IIllnessCreateState {
	isFetching: boolean;
	symptomsList: ISymptom[];
	medicinesList: IMedicine[];
	recommendationsList: IRecommendation[];
}

const initialState: IIllnessCreateState = {
	isFetching: false,
	symptomsList: [],
	medicinesList: [],
	recommendationsList: [],
};

export const illnessCreate = (state: IIllnessCreateState = initialState, { type, payload }: Actions): IIllnessCreateState => {
	switch(type) {
		case GET_SYMPTOMS_SUCCESS:
		case GET_MEDICINES_SUCCESS:
		case GET_RECOMMENDATIONS_SUCCESS:
		case CHANGE_IS_FETCHING:
		case CREATE_ILLNESS_REQUEST:
		case CREATE_ILLNESS_SUCCESS:
		case CREATE_ILLNESS_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
