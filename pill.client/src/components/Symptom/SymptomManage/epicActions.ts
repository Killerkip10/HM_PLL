import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import { ISymptom } from 'models';
import { http } from 'utils';
import { PATH } from 'configs';

import {
	Actions,
	getSymptomsRequestAction,
	getSymptomsSuccessAction,
	getSymptomsFailureAction,
	createSymptomRequestAction,
	createSymptomSuccessAction,
	createSymptomFailureAction,
	updateSymptomRequestAction,
	updateSymptomSuccessAction,
	updateSymptomFailureAction,
	deleteSymptomRequestAction,
	deleteSymptomSuccessAction,
	deleteSymptomFailureAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getSymptomsAction = (): ThunkResult<void> => (dispatch) => {
	dispatch(getSymptomsRequestAction());

	http.get<ISymptom[]>(PATH.SYMPTOM)
		.then(data => dispatch(getSymptomsSuccessAction(data)))
		.catch(() => dispatch(getSymptomsFailureAction()));
};

export const createSymptomAction = (symptom: ISymptom): ThunkResult<void> => (dispatch) => {
	dispatch(createSymptomRequestAction());

	http.post<ISymptom>(PATH.SYMPTOM, symptom)
		.then(data => dispatch(createSymptomSuccessAction(data)))
		.catch(() => dispatch(createSymptomFailureAction()));
};

export const updateSymptomAction = (symptom: ISymptom): ThunkResult<void> => (dispatch) => {
	dispatch(updateSymptomRequestAction());

	http.put<ISymptom>(PATH.SYMPTOM, symptom)
		.then(data => dispatch(updateSymptomSuccessAction(data)))
		.catch(() => dispatch(updateSymptomFailureAction()));
};

export const deleteSymptomAction = (id: number): ThunkResult<void> => (dispatch) => {
	dispatch(deleteSymptomRequestAction());

	http.delete<ISymptom>(`${PATH.SYMPTOM}/${id}`)
		.then(() => dispatch(deleteSymptomSuccessAction(id)))
		.catch(() => dispatch(deleteSymptomFailureAction()));
};
