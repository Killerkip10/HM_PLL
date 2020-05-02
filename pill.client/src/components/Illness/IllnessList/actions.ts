import { ISymptom } from 'models';

export const GET_SYMPTOMS_REQUEST = '[ILLNESSES_LIST]: get symptoms request';
export const GET_SYMPTOMS_SUCCESS = '[ILLNESSES_LIST]: get symptoms success';
export const GET_SYMPTOMS_FAILURE = '[ILLNESSES_LIST]: get symptoms failure';

export const getSymptomsRequestAction = () => ({
	type: GET_SYMPTOMS_REQUEST,
	payload: ({ isFetching: true }),
});

export const getSymptomsSuccessAction = (symptomsList: ISymptom[]) => ({
	type: GET_SYMPTOMS_SUCCESS,
	payload: ({ symptomsList, isFetching: false }),
});

export const getSymptomsFailureAction = () => ({
	type: GET_SYMPTOMS_FAILURE,
	payload: ({ isFetching: false }),
});

export type Actions = ReturnType<
	typeof getSymptomsRequestAction
	| typeof getSymptomsSuccessAction
	| typeof getSymptomsFailureAction
>;