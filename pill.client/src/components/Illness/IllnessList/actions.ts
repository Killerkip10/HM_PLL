import { ISymptom, IIllnessShort } from 'models';

export const GET_SYMPTOMS_REQUEST = '[ILLNESS_LIST]: get symptoms request';
export const GET_SYMPTOMS_SUCCESS = '[ILLNESS_LIST]: get symptoms success';
export const GET_SYMPTOMS_FAILURE = '[ILLNESS_LIST]: get symptoms failure';

export const GET_ILLNESSES_REQUEST = '[ILLNESS_LIST]: get illnesses request';
export const GET_ILLNESSES_SUCCESS = '[ILLNESS_LIST]: get illnesses success';
export const GET_ILLNESSES_FAILURE = '[ILLNESS_LIST]: get illnesses failure';

export const getSymptomsRequestAction = () => ({
	type: GET_SYMPTOMS_REQUEST,
	payload: { isFetching: true },
});

export const getSymptomsSuccessAction = (symptomsList: ISymptom[]) => ({
	type: GET_SYMPTOMS_SUCCESS,
	payload: { symptomsList, isFetching: false },
});

export const getSymptomsFailureAction = () => ({
	type: GET_SYMPTOMS_FAILURE,
	payload: { isFetching: false },
});



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

export type Actions = ReturnType<
	typeof getSymptomsRequestAction
	| typeof getSymptomsSuccessAction
	| typeof getSymptomsFailureAction
	| typeof getIllnessesRequestAction
	| typeof getIllnessesSuccessAction
	| typeof getIllnessesFailureAction
>;
