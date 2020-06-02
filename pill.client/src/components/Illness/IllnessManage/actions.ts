import { IIllnessShort } from 'models';

export const GET_ILLNESSES_REQUEST = '[ILLNESS_MANAGE]: get illnesses request';
export const GET_ILLNESSES_SUCCESS = '[ILLNESS_MANAGE]: get illnesses success';
export const GET_ILLNESSES_FAILURE = '[ILLNESS_MANAGE]: get illnesses failure';

export const DELETE_ILLNESS_REQUEST = '[ILLNESS_MANAGE]: delete illness request';
export const DELETE_ILLNESS_SUCCESS = '[ILLNESS_MANAGE]: delete illness success';
export const DELETE_ILLNESS_FAILURE = '[ILLNESS_MANAGE]: delete illness failure';

export const getIllnessesRequestAction = () => ({
	type: GET_ILLNESSES_REQUEST,
	payload: { isFetching: true },
});

export const getIllnessesSuccessAction = (illnessesList: IIllnessShort[]) => ({
	type: GET_ILLNESSES_SUCCESS,
	payload: { isFetching: false, illnessesList },
});

export const getIllnessesFailureAction = () => ({
	type: GET_ILLNESSES_FAILURE,
	payload: { isFetching: false },
});



export const deleteIllnessRequestAction = () => ({
	type: DELETE_ILLNESS_REQUEST,
	payload: { isFetching: true },
});

export const deleteIllnessSuccessAction = (id: number) => ({
	type: DELETE_ILLNESS_SUCCESS,
	payload: { isFetching: false, id },
});

export const deleteIllnessFailureAction = () => ({
	type: DELETE_ILLNESS_FAILURE,
	payload: { isFetching: false },
});

export type Actions = ReturnType<
	typeof getIllnessesRequestAction
	| typeof getIllnessesSuccessAction
	| typeof getIllnessesSuccessAction
	| typeof deleteIllnessRequestAction
	| typeof deleteIllnessSuccessAction
	| typeof deleteIllnessFailureAction
>;
