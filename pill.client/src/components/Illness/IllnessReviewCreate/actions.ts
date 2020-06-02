import { IMedicine } from 'models';

export const GET_MEDICINES_REQUEST = '[ILLNESS_REVIEW_CREATE]: get medicines request';
export const GET_MEDICINES_SUCCESS = '[ILLNESS_REVIEW_CREATE]: get medicines success';
export const GET_MEDICINES_FAILURE = '[ILLNESS_REVIEW_CREATE]: get medicines failure';

export const CREATE_REVIEW_REQUEST = '[ILLNESS_REVIEW_CREATE]: create review request';
export const CREATE_REVIEW_SUCCESS = '[ILLNESS_REVIEW_CREATE]: create review success';
export const CREATE_REVIEW_FAILURE = '[ILLNESS_REVIEW_CREATE]: create review failure';

export const createReviewRequestAction = () => ({
	type: CREATE_REVIEW_REQUEST,
	payload: { isFetching: true },
});

export const createReviewSuccessAction = () => ({
	type: CREATE_REVIEW_SUCCESS,
	payload: { isFetching: false },
});

export const createReviewFailureAction = () => ({
	type: CREATE_REVIEW_FAILURE,
	payload: { isFetching: false },
});



export const getMedicinesRequestAction = () => ({
	type: GET_MEDICINES_REQUEST,
	payload: { isFetching: true },
});

export const getMedicinesSuccessAction = (medicinesList: IMedicine[]) => ({
	type: GET_MEDICINES_SUCCESS,
	payload: { isFetching: false, medicinesList },
});

export const getMedicinesFailureAction = () => ({
	type: GET_MEDICINES_FAILURE,
	payload: { isFetching: false },
});

export type Actions = ReturnType<
	typeof createReviewRequestAction
	| typeof createReviewSuccessAction
	| typeof createReviewFailureAction
	| typeof getMedicinesRequestAction
	| typeof getMedicinesSuccessAction
	| typeof getMedicinesFailureAction
>;
