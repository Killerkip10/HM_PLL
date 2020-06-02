import { ThunkAction } from 'redux-thunk';

import { IStore } from 'store';
import { IIllnessShort }  from 'models';
import { http } from 'utils';
import { PATH } from 'configs';

import {
	Actions,
	getIllnessesRequestAction,
	getIllnessesSuccessAction,
	getIllnessesFailureAction,
	deleteIllnessRequestAction,
	deleteIllnessSuccessAction,
	deleteIllnessFailureAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getIllnessesAction = (): ThunkResult<void> => (dispatch) => {
	dispatch(getIllnessesRequestAction());

	http.get<IIllnessShort[]>(PATH.ILLNESS_SHORT)
		.then(data => dispatch(getIllnessesSuccessAction(data)))
		.catch(() => dispatch(getIllnessesFailureAction()));
};

export const deleteIllnessAction = (id: number): ThunkResult<void> => (dispatch) => {
	dispatch(deleteIllnessRequestAction());

	http.delete<void>(`${PATH.ILLNESS}/${id}`)
		.then(() => dispatch(deleteIllnessSuccessAction(id)))
		.catch(() => dispatch(deleteIllnessFailureAction()));
};
