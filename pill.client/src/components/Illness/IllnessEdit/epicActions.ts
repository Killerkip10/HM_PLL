import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import { http } from 'utils';
import { PATH } from 'configs';
import { IIllness, IMedicine, IRecommendation, ISymptom } from 'models';

import {
	Actions,
	getIllnessSuccessAction,
	getSymptomsSuccessAction,
	getMedicinesSuccessAction,
	getRecommendationsSuccessAction,
	changeIsFetchingAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getInitialDataAction = (id: number): ThunkResult<void> => (dispatch) => {
	dispatch(changeIsFetchingAction(true));

	Promise.all([
		http.get<IIllness>(`${PATH.ILLNESS}/${id}`),
		http.get<ISymptom[]>(PATH.SYMPTOM_SHORT),
		http.get<IMedicine[]>(PATH.MEDICINE),
		http.get<IRecommendation[]>(PATH.RECOMMENDATION),
	])
		.then(([illness, symptoms, medicines, recommendations]) => {
			dispatch(getIllnessSuccessAction(illness));
			dispatch(getSymptomsSuccessAction(symptoms));
			dispatch(getMedicinesSuccessAction(medicines));
			dispatch(getRecommendationsSuccessAction(recommendations));
			dispatch(changeIsFetchingAction(false));
		})
		.catch(() => dispatch(changeIsFetchingAction(false)));
};
