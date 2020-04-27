import { ThunkAction } from 'redux-thunk';
import { IStore } from 'store';

import { http } from 'utils';
import { PATH } from 'configs/api';

import { IProfile } from './models';
import { Actions, getProfileRequestAction, getProfileSuccessAction, getProfileFailureAction } from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getProfileAction = (): ThunkResult<void> => (dispatch) => {
	dispatch(getProfileRequestAction());

	return http.get<IProfile>(PATH.PROFILE)
		.then(data => dispatch(getProfileSuccessAction(data)))
		.catch(() => dispatch(getProfileFailureAction()));
};
