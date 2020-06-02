import { IIllnessShort } from 'models';

import {
	Actions,
	GET_ILLNESSES_REQUEST,
	GET_ILLNESSES_SUCCESS,
	GET_ILLNESSES_FAILURE,
	DELETE_ILLNESS_REQUEST,
	DELETE_ILLNESS_SUCCESS,
	DELETE_ILLNESS_FAILURE,
} from './actions';

export interface IIllnessManageState {
	isFetching: boolean;
	illnessesList: IIllnessShort[];
}

export const initialState: IIllnessManageState = {
 	isFetching: false,
	illnessesList: [],
};

const deleteIllness = (illnessesList: IIllnessShort[], id: number) => illnessesList.filter(i => i.id !== id);

export const illnessManage = (state: IIllnessManageState = initialState, { type, payload }: Actions) => {
	switch (type) {
		case DELETE_ILLNESS_SUCCESS:
			return {
				...state,
				illnessesList: deleteIllness(state.illnessesList, payload.id),
			};
		case GET_ILLNESSES_REQUEST:
		case GET_ILLNESSES_SUCCESS:
		case GET_ILLNESSES_FAILURE:
		case DELETE_ILLNESS_REQUEST:
		case DELETE_ILLNESS_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
