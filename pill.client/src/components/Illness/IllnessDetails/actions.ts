import { IIllness } from 'models';

export const GET_ILLNESS_DETAILS_REQUEST = '[ILLNESS_DETAILS]: get illness details request';
export const GET_ILLNESS_DETAILS_SUCCESS = '[ILLNESS_DETAILS]: get illness details success';
export const GET_ILLNESS_DETAILS_FAILURE = '[ILLNESS_DETAILS]: get illness details failure';

export const getIllnessDetailsRequestAction = () => ({
	type: GET_ILLNESS_DETAILS_REQUEST,
	payload: { isFetching: true },
});

export const getIllnessDetailsSuccessAction = (illnessInfo: IIllness) => ({
	type: GET_ILLNESS_DETAILS_SUCCESS,
	payload: { isFetching: false, illnessInfo },
});

export const getIllnessDetailsFailureAction = () => ({
	type: GET_ILLNESS_DETAILS_FAILURE,
	payload: { isFetching: false },
});

export type Actions = ReturnType<
	typeof getIllnessDetailsRequestAction
	| typeof getIllnessDetailsSuccessAction
	| typeof getIllnessDetailsFailureAction
>;
