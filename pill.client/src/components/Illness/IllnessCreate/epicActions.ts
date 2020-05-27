import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import { ISymptom, IMedicine, IRecommendation, ICreateIllness } from 'models';
import { http } from 'utils';
import { PATH } from 'configs';

import {
	Actions,
	getSymptomsSuccessAction,
	getMedicinesSuccessAction,
	getRecommendationsSuccessAction,
	changeIsFetchingAction,
	createIllnessRequestAction,
	createIllnessSuccessAction,
	createIllnessFailureAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getFilterDataAction = (): ThunkResult<void> => (dispatch) => {
	dispatch(changeIsFetchingAction(true));

	return Promise.all([
		http.get<ISymptom[]>(PATH.SYMPTOM_SHORT),
		http.get<IMedicine[]>(PATH.MEDICINE),
		http.get<IRecommendation[]>(PATH.RECOMMENDATION)
	])
		.then(([symptoms, medicines, recommendations]) => {
			dispatch(getSymptomsSuccessAction(symptoms));
			dispatch(getMedicinesSuccessAction(medicines));
			dispatch(getRecommendationsSuccessAction(recommendations));
			dispatch(changeIsFetchingAction(false));
		})
		.catch(() => dispatch(changeIsFetchingAction(false)));
};

export const createIllnessAction = (illness: ICreateIllness): ThunkResult<void> => (dispatch) => {
	dispatch(createIllnessRequestAction());

	return http.post(PATH.ILLNESS, illness)
		.then(() => dispatch(createIllnessSuccessAction()))
		.catch(() => dispatch(createIllnessFailureAction()));
};
