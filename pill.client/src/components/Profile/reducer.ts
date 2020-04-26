import { Actions, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actions';

export interface IProfileState {
	isFetching: boolean;
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	role: number;
	createAt: string;
	updateAt: string;
}

const initialState: IProfileState = {
	isFetching: false,
	id: null,
	firstName: '',
	lastName: '',
	email: '',
	role: null,
	createAt: '',
	updateAt: '',
};

export const profile = (state: IProfileState = initialState, { type, payload }: Actions): IProfileState => {
	switch(type) {
		case GET_PROFILE_REQUEST:
		case GET_PROFILE_SUCCESS:
		case GET_PROFILE_FAILURE:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};