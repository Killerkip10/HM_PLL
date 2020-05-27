import { ISymptom } from 'models';

export const GET_SYMPTOMS_REQUEST = '[SYMPTOM_MANAGE]: get symptoms request';
export const GET_SYMPTOMS_SUCCESS = '[SYMPTOM_MANAGE]: get symptoms success';
export const GET_SYMPTOMS_FAILURE = '[SYMPTOM_MANAGE]: get symptoms failure';

export const CREATE_SYMPTOM_REQUEST = '[SYMPTOM_MANAGE]: create symptom request';
export const CREATE_SYMPTOM_SUCCESS = '[SYMPTOM_MANAGE]: create symptom success';
export const CREATE_SYMPTOM_FAILURE = '[SYMPTOM_MANAGE]: create symptom failure';

export const UPDATE_SYMPTOM_REQUEST = '[SYMPTOM_MANAGE]: update symptom request';
export const UPDATE_SYMPTOM_SUCCESS = '[SYMPTOM_MANAGE]: update symptom success';
export const UPDATE_SYMPTOM_FAILURE = '[SYMPTOM_MANAGE]: update symptom failure';

export const DELETE_SYMPTOM_REQUEST = '[SYMPTOM_MANAGE]: delete symptom request';
export const DELETE_SYMPTOM_SUCCESS = '[SYMPTOM_MANAGE]: delete symptom success';
export const DELETE_SYMPTOM_FAILURE = '[SYMPTOM_MANAGE]: delete symptom failure';

export const getSymptomsRequestAction = () => ({
	type: GET_SYMPTOMS_REQUEST,
	payload: { isFetching: true },
});

export const getSymptomsSuccessAction = (symptomsList: ISymptom[]) => ({
	type: GET_SYMPTOMS_SUCCESS,
	payload: { isFetching: false, symptomsList },
});

export const getSymptomsFailureAction = () => ({
	type: GET_SYMPTOMS_FAILURE,
	payload: { isFetching: false },
});



export const createSymptomRequestAction = () => ({
	type: CREATE_SYMPTOM_REQUEST,
	payload: { isFetching: true },
});

export const createSymptomSuccessAction = (symptom: ISymptom) => ({
	type: CREATE_SYMPTOM_SUCCESS,
	payload: { isFetching: false, symptom },
});

export const createSymptomFailureAction = () => ({
	type: CREATE_SYMPTOM_FAILURE,
	payload: { isFetching: false },
});



export const updateSymptomRequestAction = () => ({
	type: UPDATE_SYMPTOM_REQUEST,
	payload: { isFetching: true },
});

export const updateSymptomSuccessAction = (symptom: ISymptom) => ({
	type: UPDATE_SYMPTOM_SUCCESS,
	payload: { isFetching: false, symptom },
});

export const updateSymptomFailureAction = () => ({
	type: UPDATE_SYMPTOM_FAILURE,
	payload: { isFetching: false },
});



export const deleteSymptomRequestAction = () => ({
	type: DELETE_SYMPTOM_REQUEST,
	payload: { isFetching: true },
});

export const deleteSymptomSuccessAction = (id: number) => ({
	type: DELETE_SYMPTOM_SUCCESS,
	payload: { isFetching: false, id },
});

export const deleteSymptomFailureAction = () => ({
	type: DELETE_SYMPTOM_FAILURE,
	payload: { isFetching: false },
});

export type Actions = ReturnType<
	typeof getSymptomsRequestAction
	| typeof getSymptomsSuccessAction
	| typeof getSymptomsFailureAction
	| typeof createSymptomRequestAction
	| typeof createSymptomSuccessAction
	| typeof createSymptomFailureAction
	| typeof updateSymptomRequestAction
	| typeof updateSymptomSuccessAction
	| typeof updateSymptomFailureAction
	| typeof deleteSymptomRequestAction
	| typeof deleteSymptomSuccessAction
	| typeof deleteSymptomFailureAction
>;
