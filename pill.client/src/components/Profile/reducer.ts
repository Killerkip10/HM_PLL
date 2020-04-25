import { IAction, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from './actions';

export interface IProfileState {
	isFetching: boolean;
	name: string;
}

const initialState: IProfileState = {
	isFetching: false,
	name: '',
};

export const profile = (state: IProfileState = initialState, { type, payload }: IAction): IProfileState => {
	switch(type) {
		case GET_PROFILE_REQUEST:
		case GET_PROFILE_SUCCESS:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};