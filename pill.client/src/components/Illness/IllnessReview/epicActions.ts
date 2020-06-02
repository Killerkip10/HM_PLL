import { ThunkAction } from 'redux-thunk';
import { reset } from 'redux-form';

import { IStore } from 'store';
import { IIllnessReview, IIllnessReviewGraphic } from 'models';
import { http } from 'utils';
import { PATH, ROUTE } from 'configs';

import {
	Actions,
	changeIsFetchingAction,
	getIllnessReviewsSuccessAction,
	getIllnessReviewsGraphicSuccessAction,
} from './actions';

type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getInitialDataAction = (illnessId: number): ThunkResult<void> => (dispatch) => {
	dispatch(changeIsFetchingAction(true));

	Promise.all([
		http.get<IIllnessReview[]>(`${PATH.ILLNESS_REVIEW}/${illnessId}`),
		http.get<IIllnessReviewGraphic>(`${PATH.ILLNESS_REVIEW_GRAPHIC}/${illnessId}`),
	])
		.then(([illnessReviews, illnessReviewGraphic]) => {
			dispatch(getIllnessReviewsSuccessAction(illnessReviews));
			dispatch(getIllnessReviewsGraphicSuccessAction(illnessReviewGraphic));
		})
		.catch(() => dispatch(changeIsFetchingAction(false)));
};
