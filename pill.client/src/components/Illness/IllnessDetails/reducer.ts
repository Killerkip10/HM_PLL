import { IIllness } from 'models';

import {
	Actions,
	GET_ILLNESS_DETAILS_REQUEST,
	GET_ILLNESS_DETAILS_SUCCESS,
	GET_ILLNESS_DETAILS_FAILURE,
} from './actions';

export interface IIllnessDetailsState {
	isFetching: boolean;
	illnessInfo: IIllness;
}

const initialState: IIllnessDetailsState = {
	isFetching: false,
	illnessInfo: {} as IIllness,
};

export const illnessDetails = (state: IIllnessDetailsState = initialState, { type, payload }: Actions): IIllnessDetailsState => {
	switch (type) {
		case GET_ILLNESS_DETAILS_REQUEST:
		case GET_ILLNESS_DETAILS_SUCCESS:
		case GET_ILLNESS_DETAILS_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
