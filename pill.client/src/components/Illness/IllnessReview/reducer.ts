import { IIllnessReviewGraphic, IIllnessReview } from 'models';

import {
	Actions,
	GET_ILLNESS_REVIEWS_SUCCESS,
	GET_ILLNESS_REVIEWS_GRAPHIC_SUCCESS,
	CHANGE_MEDICINE_ID_FILTER,
	CHANGE_IS_FETCHING,
} from './actions';

export interface IIllnessReviewState {
	isFetching: boolean;
	medicineIdFilter: number;
	illnessReviewGraphic: IIllnessReviewGraphic;
	illnessReviewsList: IIllnessReview[];
}

const initialState: IIllnessReviewState = {
	isFetching: false,
	medicineIdFilter: null,
	illnessReviewGraphic: {
		name: '',
		reviews: [],
		medicines: [],
	},
	illnessReviewsList: [],
};

export const illnessReview = (state: IIllnessReviewState = initialState, { type, payload }: Actions) => {
	switch (type) {
		case GET_ILLNESS_REVIEWS_SUCCESS:
		case GET_ILLNESS_REVIEWS_GRAPHIC_SUCCESS:
		case CHANGE_IS_FETCHING:
		case CHANGE_MEDICINE_ID_FILTER:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
