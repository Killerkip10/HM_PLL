import { ISymptom } from 'models';

import {
	Actions,
	CREATE_REVIEW_REQUEST,
	CREATE_REVIEW_SUCCESS,
	CREATE_REVIEW_FAILURE,
	GET_MEDICINES_REQUEST,
	GET_MEDICINES_SUCCESS,
	GET_MEDICINES_FAILURE,
} from './actions';

export interface IIllnessReviewCreateState {
	isFetching: boolean;
	medicinesList: ISymptom[];
}

const initialState: IIllnessReviewCreateState = {
	isFetching: false,
	medicinesList: [],
};

export const illnessReviewCreate = (state: IIllnessReviewCreateState = initialState, { type, payload }: Actions): IIllnessReviewCreateState	=> {
	switch (type) {
		case CREATE_REVIEW_REQUEST:
		case CREATE_REVIEW_SUCCESS:
		case CREATE_REVIEW_FAILURE:
		case GET_MEDICINES_REQUEST:
		case GET_MEDICINES_SUCCESS:
		case GET_MEDICINES_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
