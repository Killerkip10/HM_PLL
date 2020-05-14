import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import { http } from 'utils';
import { PATH } from 'configs';
import { IIllness } from 'models';

import {
	Actions,
	getIllnessDetailsRequestAction,
	getIllnessDetailsSuccessAction,
	getIllnessDetailsFailureAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getIllnessDetailsAction = (id: number): ThunkResult<void> => (dispatch) => {
	dispatch(getIllnessDetailsRequestAction());

	return http.get<IIllness>(`${PATH.ILLNESS}/${id}`)
		.then(data => dispatch(getIllnessDetailsSuccessAction(data)))
		.catch(() => dispatch(getIllnessDetailsFailureAction()));
};
