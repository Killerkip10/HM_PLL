import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import { ISymptom, IMedicine, IRecommendation } from 'models';
import { http } from 'utils';
import { PATH } from 'configs';

import {
	Actions,
	getSymptomsSuccessAction,
	getMedicinesSuccessAction,
	getRecommendationsSuccessAction,
	changeIsFetchingAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getFilterDataAction = (): ThunkResult<void> => (dispatch) => {
	dispatch(changeIsFetchingAction(true));

	return Promise.all([
		http.get<ISymptom[]>(PATH.SYMPTOM),
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
