import { combineReducers } from 'redux';

import { illnessList, IIllnessListState } from './IllnessList';
import { illnessDetails, IIllnessDetailsState } from './IllnessDetails';
import { illnessCreate, IIllnessCreateState } from './IllnessCreate';
import { illnessEdit, IIllnessEditState } from './IllnessEdit';
import { illnessManage, IIllnessManageState } from './IllnessManage';
import { illnessReviewCreate, IIllnessReviewCreateState } from './IllnessReviewCreate';
import { illnessReview, IIllnessReviewState } from './IllnessReview';

export interface IIllness {
	illnessList: IIllnessListState,
	illnessDetails: IIllnessDetailsState,
	illnessCreate: IIllnessCreateState,
	illnessEdit: IIllnessEditState,
	illnessManage: IIllnessManageState,
	illnessReviewCreate: IIllnessReviewCreateState,
	illnessReview: IIllnessReviewState,
}

export const illness = combineReducers({
	illnessList,
	illnessDetails,
	illnessCreate,
	illnessEdit,
	illnessManage,
	illnessReviewCreate,
	illnessReview,
});
