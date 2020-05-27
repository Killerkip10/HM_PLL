import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import {IIllnessShort, ISymptom} from 'models';
import { http } from 'utils';
import { PATH } from 'configs';

import {
	Actions,
	getSymptomsRequestAction,
	getSymptomsSuccessAction,
	getSymptomsFailureAction,
	getIllnessesRequestAction,
	getIllnessesSuccessAction,
	getIllnessesFailureAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getSymptomsAction = (): ThunkResult<void> => (dispatch) => {
	dispatch(getSymptomsRequestAction());

	return http.get<ISymptom[]>(PATH.SYMPTOM_SHORT)
		.then(data => dispatch(getSymptomsSuccessAction(data)))
		.catch(() => dispatch(getSymptomsFailureAction()));
};

export const getIllnessesBySymptomIdsAction = (ids: number[]): ThunkResult<void> => (dispatch) => {
	dispatch(getIllnessesRequestAction());

	const params = ids.map(id => `ids=${id}`).join('&');

	return http.get<IIllnessShort[]>(`${PATH.ILLNESS_SYMPTOMS}?${params}`)
		.then(data => dispatch(getIllnessesSuccessAction(data)))
		.catch(() => dispatch(getIllnessesFailureAction()));
};
