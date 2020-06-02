import { IIllness, ISymptom, IMedicine, IRecommendation } from 'models';

import {
	Actions,
	GET_ILLNESS_SUCCESS,
	GET_SYMPTOMS_SUCCESS,
	GET_MEDICINES_SUCCESS,
	GET_RECOMMENDATIONS_SUCCESS,
} from './actions';

export interface IIllnessEditState {
	isFetching: boolean;
	illnessInfo: IIllness;
	symptomsList: ISymptom[];
	medicinesList: IMedicine[];
	recommendationsList: IRecommendation[];
}

export const initialState: IIllnessEditState = {
	isFetching: false,
	illnessInfo: {} as IIllness,
	symptomsList: [],
	medicinesList: [],
	recommendationsList: [],
};

export const illnessEdit = (state: IIllnessEditState = initialState, { type, payload }: Actions): IIllnessEditState => {
	switch (type) {
		case GET_ILLNESS_SUCCESS:
		case GET_SYMPTOMS_SUCCESS:
		case GET_MEDICINES_SUCCESS:
		case GET_RECOMMENDATIONS_SUCCESS:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
