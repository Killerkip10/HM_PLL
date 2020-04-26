import { IProfile } from './models';

export const GET_PROFILE_REQUEST = '[PROFILE] get profile request';
export const GET_PROFILE_SUCCESS = '[PROFILE] get profile success';
export const GET_PROFILE_FAILURE = '[PROFILE] get profile failure';

export const getProfileRequestAction = () => ({
	type: GET_PROFILE_REQUEST,
	payload: { isFetching: true },
});

export const getProfileSuccessAction = (profile: IProfile) => ({
	type: GET_PROFILE_SUCCESS,
	payload: { isFetching: false, ...profile },
});

export const getProfileFailureAction = () => ({
	type: GET_PROFILE_FAILURE,
	payload: { isFetching: false },
});

export type Actions = ReturnType<
	typeof getProfileRequestAction
	| typeof getProfileSuccessAction
	| typeof getProfileFailureAction
>;