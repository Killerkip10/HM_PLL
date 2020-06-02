import { ThunkAction } from 'redux-thunk';
import { reset } from 'redux-form';
import { FORM_NAME } from 'components/common/forms/IllnessReviewCreateForm';

import { IStore } from 'store';
import { ICreateIllnessReview, IMedicine} from 'models';
import { http } from 'utils';
import { PATH, ROUTE } from 'configs';

import {
	Actions,
	getMedicinesRequestAction,
	getMedicinesSuccessAction,
	getMedicinesFailureAction,
	createReviewRequestAction,
	createReviewSuccessAction,
	createReviewFailureAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getMedicinesAction = (illnessId: number): ThunkResult<void> => (dispatch) => {
	dispatch(getMedicinesRequestAction());

	http.get<IMedicine[]>(`${PATH.MEDICINE_ILLNESS}/${illnessId}`)
		.then(data => dispatch(getMedicinesSuccessAction(data)))
		.catch(() => dispatch(getMedicinesFailureAction()));
};

export const createReviewAction = (illnessId: number, review: ICreateIllnessReview, history): ThunkResult<void> => (dispatch) => {
	dispatch(createReviewRequestAction());

	http.post<void>(PATH.ILLNESS_REVIEW, { ...review, illnessId })
		.then(() => {
			dispatch(createReviewSuccessAction());
			dispatch(reset(FORM_NAME));
			history.push(`${ROUTE.ILLNESS_DETAILS}/${illnessId}`);
		})
		.catch(() => dispatch(createReviewFailureAction()));
};
