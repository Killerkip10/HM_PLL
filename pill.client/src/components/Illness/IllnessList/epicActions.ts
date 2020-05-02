import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import { ISymptom } from 'models';
import { http } from 'utils';
import { PATH } from 'configs';

import { Actions, getSymptomsRequestAction, getSymptomsSuccessAction, getSymptomsFailureAction } from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getSymptomsAction = (): ThunkResult<void> => (dispatch) => {
	dispatch(getSymptomsRequestAction());

	return http.get<ISymptom[]>(PATH.SYMPTOM)
		.then(data => dispatch(getSymptomsSuccessAction(data)))
		.catch(() => dispatch(getSymptomsFailureAction()));
};
