import { ISymptom, IMedicine, IRecommendation } from 'models';

export const GET_SYMPTOMS_SUCCESS = '[ILLNESS_CREATE]: get symptoms success';
export const GET_MEDICINES_SUCCESS = '[ILLNESS_CREATE]: get medicines success';
export const GET_RECOMMENDATIONS_SUCCESS = '[ILLNESS_CREATE]: get recommendations success';
export const CHANGE_IS_FETCHING = '[ILLNESS_CREATE]: change isFetching';

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
	| typeof getSymptomsSuccessAction
	| typeof getMedicinesSuccessAction
	| typeof getRecommendationsSuccessAction
	| typeof changeIsFetchingAction
>;
