export const GET_PROFILE_REQUEST = '[PROFILE] get profile request';
export const GET_PROFILE_SUCCESS = '[PROFILE] get profile success';

export const getProfileRequestAction = () => ({
	type: GET_PROFILE_REQUEST,
	payload: { isFetching: true },
});

export const getProfileSuccessAction = () => ({
	type: GET_PROFILE_SUCCESS,
	payload: { isFetching: false },
});

export type IAction = ReturnType<
	typeof getProfileRequestAction
	| typeof getProfileSuccessAction
>;