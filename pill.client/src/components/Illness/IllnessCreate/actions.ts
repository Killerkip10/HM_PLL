import { ISymptom, IMedicine, IRecommendation } from 'models';

export const GET_SYMPTOMS_SUCCESS = '[ILLNESS_CREATE]: get symptoms success';
export const GET_MEDICINES_SUCCESS = '[ILLNESS_CREATE]: get medicines success';
export const GET_RECOMMENDATIONS_SUCCESS = '[ILLNESS_CREATE]: get recommendations success';
export const CHANGE_IS_FETCHING = '[ILLNESS_CREATE]: change isFetching';

export const CREATE_ILLNESS_REQUEST = '[ILLNESS_CREATE]: create illness request';
export const CREATE_ILLNESS_SUCCESS = '[ILLNESS_CREATE]: create illness success';
export const CREATE_ILLNESS_FAILURE = '[ILLNESS_CREATE]: create illness failure';

export const getSymptomsSuccessAction = (symptomsList: ISymptom[]) => ({
	type: GET_SYMPTOMS_SUCCESS,
	payload: { symptomsList },
});

export const getMedicinesSuccessAction = (medicinesList: IMedicine[]) => ({
	type: GET_MEDICINES_SUCCESS,
	payload: { medicinesList },
});

export const getRecommendationsSuccessAction = (recommendationsList: IRecommendation[]) => ({
	type: GET_RECOMMENDATIONS_SUCCESS,
	payload: { recommendationsList },
});

export const changeIsFetchingAction = (isFetching: boolean) => ({
	type: CHANGE_IS_FETCHING,
	payload: { isFetching },
});

export const createIllnessRequestAction = () => ({
	type: CREATE_ILLNESS_REQUEST,
	payload: { isFetching: true },
});

export const createIllnessSuccessAction = () => ({
	type: CREATE_ILLNESS_SUCCESS,
	payload: { isFetching: false },
});

export const createIllnessFailureAction = () => ({
	type: CREATE_ILLNESS_FAILURE,
	payload: { isFetching: false },
});

export type Actions = ReturnType<
	| typeof getSymptomsSuccessAction
	| typeof getMedicinesSuccessAction
	| typeof getRecommendationsSuccessAction
	| typeof changeIsFetchingAction
	| typeof createIllnessRequestAction
	| typeof createIllnessSuccessAction
	| typeof createIllnessFailureAction
>;
