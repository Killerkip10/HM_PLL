import { IIllness, ISymptom, IMedicine, IRecommendation } from 'models';

export const GET_ILLNESS_SUCCESS = '[ILLNESS_EDIT]: get illness success';
export const GET_SYMPTOMS_SUCCESS = '[ILLNESS_EDIT]: get symptoms success';
export const GET_MEDICINES_SUCCESS = '[ILLNESS_EDIT]: get medicines success';
export const GET_RECOMMENDATIONS_SUCCESS = '[ILLNESS_EDIT]: get recommendations success';
export const CHANGE_IS_FETCHING = '[ILLNESS_EDIT]: change isFetching';

export const getIllnessSuccessAction = (illnessInfo: IIllness) => ({
	type: GET_ILLNESS_SUCCESS,
	payload: { illnessInfo },
});

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

export type Actions = ReturnType<
	typeof getIllnessSuccessAction
	| typeof getSymptomsSuccessAction
	| typeof getMedicinesSuccessAction
	| typeof getRecommendationsSuccessAction
	| typeof changeIsFetchingAction
>;
