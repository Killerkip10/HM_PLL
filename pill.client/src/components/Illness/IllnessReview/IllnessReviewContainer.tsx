import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { flowRight } from 'lodash';

import { IllnessReview } from './IllnessReview';
import { changeMedicineIdFilterAction } from './actions';
import {
	getIllnessNameSelector,
	getIllnessGraphicReviewsSelector,
	getFilteredIllnessGraphicMedicinesSelector,
	getMedicinesSelector,
	getIllnessReviewsSelector,
} from './selectors';
import { getInitialDataAction } from './epicActions';

export const IllnessReviewContainerComponent = ({ illnessName, illnessGraphicReviews, illnessReviews, medicines, medicineIdFilter, illnessGraphicMedicines, getInitialData, changeMedicineIdFilter }) => {
	useEffect(() => {
		getInitialData();
	}, []);

	return <IllnessReview
		illnessName={illnessName}
		illnessGraphicReviews={illnessGraphicReviews}
		medicines={medicines}
		illnessReviews={illnessReviews}
		illnessGraphicMedicines={illnessGraphicMedicines}
		onMedicineChange={changeMedicineIdFilter}
	/>;
};

const mapStateToProps = state => ({
	illnessName: getIllnessNameSelector(state),
	illnessGraphicReviews: getIllnessGraphicReviewsSelector(state),
	illnessGraphicMedicines: getFilteredIllnessGraphicMedicinesSelector(state),
	illnessReviews: getIllnessReviewsSelector(state),
	medicines: getMedicinesSelector(state),
});

const mapDispatchToProps = (dispatch, { match: { params: { id } } }) => ({
	getInitialData: () => dispatch(getInitialDataAction(id)),
	changeMedicineIdFilter: ({ target: { value } }) => dispatch(changeMedicineIdFilterAction(value)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const IllnessReviewContainer = flowRight(
	connector,
)(IllnessReviewContainerComponent);
