import { IIllnessReviewGraphic, IIllnessReview } from 'models';

export const GET_ILLNESS_REVIEWS_GRAPHIC_SUCCESS = '[ILLNESS_REVIEW]: get illness reviews graphic success';
export const GET_ILLNESS_REVIEWS_SUCCESS = '[ILLNESS_REVIEW]: get illness reviews success';
export const CHANGE_IS_FETCHING = '[ILLNESS_REVIEW]: change isFetching';
export const CHANGE_MEDICINE_ID_FILTER = '[ILLNESS_REVIEW]: change medicineIdFilter';

export const getIllnessReviewsGraphicSuccessAction = (illnessReviewGraphic: IIllnessReviewGraphic) => ({
	type: GET_ILLNESS_REVIEWS_GRAPHIC_SUCCESS,
	payload: { illnessReviewGraphic }
});

export const getIllnessReviewsSuccessAction = (illnessReviewsList: IIllnessReview[]) => ({
	type: GET_ILLNESS_REVIEWS_SUCCESS,
	payload: { illnessReviewsList }
});

export const changeIsFetchingAction = (isFetching: boolean) => ({
	type: CHANGE_IS_FETCHING,
	payload: { isFetching },
});

export const changeMedicineIdFilterAction = (medicineIdFilter: number) => ({
	type: CHANGE_MEDICINE_ID_FILTER,
	payload: { medicineIdFilter },
});

export type Actions = ReturnType<
	typeof getIllnessReviewsGraphicSuccessAction
	| typeof getIllnessReviewsSuccessAction
	| typeof changeIsFetchingAction
	| typeof changeMedicineIdFilterAction
>;
